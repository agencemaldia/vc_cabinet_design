"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore, useTransition } from "react";

import { QUOTE } from "@/content/quote";
import type { Locale } from "@/lib/i18n/config";
import { pagePath } from "@/lib/i18n/routes";
import { PLANS, PROJECTS, TIMINGS, type ProjectKey, type QuoteInput } from "./schema";
import { submitQuote } from "./submit-quote";

type ChoiceKey = "project" | "plans" | "timing";
type FieldKey = "city" | "details" | "name" | "email" | "phone";
type Step = { kind: "choice"; key: ChoiceKey } | { kind: "city" } | { kind: "details" } | { kind: "contact" };

const STEPS: Step[] = [
  { kind: "choice", key: "project" },
  { kind: "choice", key: "plans" },
  { kind: "choice", key: "timing" },
  { kind: "city" },
  { kind: "details" },
  { kind: "contact" },
];
const EMPTY: Record<FieldKey, string> = { city: "", details: "", name: "", email: "", phone: "" };
const VALID: Record<ChoiceKey, readonly string[]> = { project: PROJECTS, plans: PLANS, timing: TIMINGS };
/** A choice moves on by itself after this delay, so the visitor sees what they picked. */
const ADVANCE_MS = 280;
const SCROLL_OFFSET = 110;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d\s().-]{7,40}$/;

const fill = (tpl: string, vars: Record<string, string>) => tpl.replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? "");
const subscribeNothing = () => () => {};
const readSearch = () => window.location.search;

function Check({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

/**
 * Quote request, one question at a time (specification §6), built on the step-by-step form of the Talgasy
 * Web site (`leads` project): six steps — project, plans, timeline, location, description, contact — with the
 * step list on the left from 900px and a progress bar, a choice that moves on by itself, back/next buttons
 * and the ← → keys, validation at each step, and a confirmation screen. The request is checked again and
 * delivered by the Server Action (honeypot, minimum fill time, rate limit); a failure is shown, never a
 * false success.
 */
export function QuoteWizard({
  lang,
  compact = false,
  preset: given,
}: {
  lang: Locale;
  /** One column, no step list (inside the design's contact card). */
  compact?: boolean;
  /** Project preselected by the page (a `?project=` in the address wins). */
  preset?: ProjectKey;
}) {
  const t = QUOTE[lang];
  const [step, setStep] = useState(0);
  const [chosen, setChosen] = useState<Partial<Record<ChoiceKey, string>>>({});
  const [fields, setFields] = useState(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  // When the form appeared (anti-spam: a request sent faster than a person can type is dropped). Set after
  // mounting, never during the prerender.
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const [isPending, startTransition] = useTransition();
  const root = useRef<HTMLElement>(null);
  const honeypot = useRef<HTMLInputElement>(null);
  const advance = useRef(0);

  // Project preselected from a service page (`?project=kitchen`), until the visitor picks one.
  const search = useSyncExternalStore(subscribeNothing, readSearch, () => "");
  const preset = useMemo(() => {
    const wanted = new URLSearchParams(search).get("project");
    return wanted && (PROJECTS as readonly string[]).includes(wanted) ? wanted : (given ?? null);
  }, [search, given]);
  const answers = chosen.project || !preset ? chosen : { ...chosen, project: preset };

  const current = STEPS[step]!;
  const total = STEPS.length;

  const stepError = (s: Step): string | null => {
    if (s.kind === "choice") return answers[s.key] ? null : s.key;
    if (s.kind === "city") return fields.city.trim().length >= 2 ? null : "city";
    if (s.kind === "contact") {
      if (fields.name.trim().length < 2) return "name";
      if (!EMAIL_RE.test(fields.email.trim())) return "email";
      if (!PHONE_RE.test(fields.phone.trim())) return "phone";
    }
    return null;
  };

  const go = (to: number) => {
    setError(null);
    setStep(Math.max(0, Math.min(total - 1, to)));
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    if (window.scrollY > top) window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
  };
  const back = () => {
    if (step > 0 && !done) go(step - 1);
  };
  const forward = () => {
    if (done || step >= total - 1) return;
    const e = stepError(current);
    if (e) return setError(e);
    go(step + 1);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (event.key === "ArrowLeft") back();
      else if (event.key === "ArrowRight") forward();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
  useEffect(() => () => window.clearTimeout(advance.current), []);

  const pick = (key: ChoiceKey, value: string) => {
    if (!VALID[key].includes(value)) return;
    setChosen((a) => ({ ...a, [key]: value }));
    setError(null);
    window.clearTimeout(advance.current);
    advance.current = window.setTimeout(() => go(step + 1), ADVANCE_MS);
  };
  const setField = (key: FieldKey) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setFields((f) => ({ ...f, [key]: value }));
    setError(null);
  };
  const restart = () => {
    setStep(0);
    setChosen({});
    setFields(EMPTY);
    setError(null);
    setDone(false);
  };

  const submit = () => {
    const e = stepError(current);
    if (e) return setError(e);
    const input: QuoteInput = {
      project: answers.project as QuoteInput["project"],
      plans: answers.plans as QuoteInput["plans"],
      timing: answers.timing as QuoteInput["timing"],
      city: fields.city,
      details: fields.details,
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      website: honeypot.current?.value ?? "",
      startedAt: startedAt.current,
    };
    startTransition(async () => {
      const result = await submitQuote(input, lang);
      if (result.status === "success") {
        setDone(true);
        go(0);
      } else {
        setError(result.error);
      }
    });
  };

  const copy = current.kind === "choice" ? t[current.key] : t[current.kind];
  const firstName = fields.name.trim().split(/\s+/)[0] ?? "";
  const errorText = error ? (t.errors[error] ?? t.errors.generic) : null;

  return (
    <section ref={root} className={`vc-quote${compact ? " is-compact" : ""}`} aria-label={t.kicker}>
      {!compact && (
        <aside className="vc-quote__aside" aria-hidden={done || undefined}>
          <span className="vc-quote__aside-label">{t.asideLabel}</span>
          <ol>
            {t.steps.map((label, k) => {
              const isDone = done || k < step;
              const active = !done && k === step;
              return (
                <li key={label}>
                  <button
                    type="button"
                    disabled={!isDone || done}
                    onClick={() => go(k)}
                    className={active ? "is-active" : isDone ? "is-done" : undefined}
                    aria-current={active ? "step" : undefined}
                  >
                    <span className="vc-quote__dot">{isDone ? <Check /> : k + 1}</span>
                    {label}
                  </button>
                </li>
              );
            })}
          </ol>
        </aside>
      )}

      <div className="vc-quote__main">
        {!done ? (
          <>
            <div className="vc-quote__progress" aria-hidden="true">
              <span style={{ width: `${((step + 1) / total) * 100}%` }} />
            </div>
            <div key={step} className="vc-quote__step">
              <div className="vc-quote__head">
                <div>
                  <h2>{copy.title}</h2>
                  <p>{copy.sub}</p>
                </div>
                <span className="vc-quote__count">{fill(t.stepOf, { n: String(step + 1), total: String(total) })}</span>
              </div>

              {current.kind === "choice" && (
                <div
                  className={`vc-quote__options n${t[current.key].opts.length}`}
                  role="radiogroup"
                  aria-label={copy.title}
                >
                  {t[current.key].opts.map((o) => {
                    const on = answers[current.key] === o.key;
                    return (
                      <button
                        key={o.key}
                        type="button"
                        role="radio"
                        aria-checked={on}
                        className={on ? "is-on" : undefined}
                        onClick={() => pick(current.key, o.key)}
                      >
                        <span className="vc-quote__opt">
                          <span>{o.t}</span>
                          <span className="vc-quote__radio" aria-hidden="true">
                            {on && <Check />}
                          </span>
                        </span>
                        {o.s && <span className="vc-quote__opt-sub">{o.s}</span>}
                      </button>
                    );
                  })}
                </div>
              )}

              {current.kind === "city" && (
                <form
                  className="vc-quote__form"
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    forward();
                  }}
                >
                  <label>
                    <span>{t.city.label}</span>
                    <input
                      type="text"
                      value={fields.city}
                      onChange={setField("city")}
                      placeholder={t.city.placeholder}
                      autoComplete="address-level2"
                      required
                      aria-invalid={error === "city" || undefined}
                      autoFocus
                    />
                  </label>
                  <div className="vc-quote__actions">
                    <button type="submit" className="pill pill-d vc-quote__primary">
                      {t.continue}
                    </button>
                  </div>
                </form>
              )}

              {current.kind === "details" && (
                <form
                  className="vc-quote__form"
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    forward();
                  }}
                >
                  <label>
                    <span>
                      {t.details.label} <em>({t.details.optional})</em>
                    </span>
                    <textarea
                      value={fields.details}
                      onChange={setField("details")}
                      rows={5}
                      placeholder={t.details.placeholder}
                      autoFocus
                    />
                  </label>
                  <div className="vc-quote__actions">
                    <button type="submit" className="pill pill-d vc-quote__primary">
                      {t.continue}
                    </button>
                  </div>
                </form>
              )}

              {current.kind === "contact" && (
                <form
                  className="vc-quote__form"
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                  }}
                >
                  {/* Honeypot: off-screen and hidden from people and screen readers; only a bot fills it. */}
                  <div className="vc-quote__hp" aria-hidden="true">
                    <label htmlFor="quote-website">{t.contact.honeypot}</label>
                    <input
                      ref={honeypot}
                      id="quote-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      defaultValue=""
                    />
                  </div>
                  <div className="vc-quote__grid">
                    <label className="is-wide">
                      <span>{t.contact.name}</span>
                      <input
                        type="text"
                        value={fields.name}
                        onChange={setField("name")}
                        placeholder={t.contact.namePlaceholder}
                        autoComplete="name"
                        required
                        aria-invalid={error === "name" || undefined}
                        autoFocus
                      />
                    </label>
                    <label>
                      <span>{t.contact.email}</span>
                      <input
                        type="email"
                        value={fields.email}
                        onChange={setField("email")}
                        placeholder={t.contact.emailPlaceholder}
                        autoComplete="email"
                        inputMode="email"
                        required
                        aria-invalid={error === "email" || undefined}
                      />
                    </label>
                    <label>
                      <span>{t.contact.phone}</span>
                      <input
                        type="tel"
                        value={fields.phone}
                        onChange={setField("phone")}
                        placeholder={t.contact.phonePlaceholder}
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        aria-invalid={error === "phone" || undefined}
                      />
                    </label>
                  </div>
                  <p className="vc-quote__privacy">
                    {t.contact.privacy}
                    <Link href={pagePath(lang, "privacy")}>{t.contact.privacyLink}</Link>.
                  </p>
                  <div className="vc-quote__actions">
                    <button type="submit" className="pill pill-d vc-quote__primary" disabled={isPending}>
                      {isPending ? t.contact.sending : t.contact.submit}
                    </button>
                  </div>
                </form>
              )}

              {errorText && (
                <p className="vc-quote__error" role="alert">
                  {errorText}
                </p>
              )}
            </div>

            <div className="vc-quote__nav">
              <button type="button" aria-label={t.prev} onClick={back} disabled={step === 0}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button type="button" aria-label={t.next} onClick={forward} disabled={step >= total - 1}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="vc-quote__done" role="status">
            <span className="vc-quote__done-icon">
              <Check size={26} />
            </span>
            <h2>{fill(t.done.title, { name: firstName ? ` ${firstName}` : "" })}</h2>
            <p>{t.done.body}</p>
            <div className="vc-quote__actions is-center">
              <Link href={pagePath(lang, "home")} className="pill pill-d vc-quote__primary">
                {t.done.home}
              </Link>
              <button type="button" className="pill vc-quote__secondary" onClick={restart}>
                {t.done.restart}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
