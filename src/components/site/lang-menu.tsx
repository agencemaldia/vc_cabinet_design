"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localeLabels, localeNames, locales, switchLocalePath } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/context";

const GlobeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M2.6 12h18.8M12 2.5c2.6 2.6 3.9 6 3.9 9.5s-1.3 6.9-3.9 9.5c-2.6-2.6-3.9-6-3.9-9.5S9.4 5.1 12 2.5" />
  </svg>
);

/**
 * Language switcher (footer), modelled on the `leads` project: globe, current language code and chevron;
 * the panel lists the three languages, the current one ticked. Each language keeps its own URL
 * (`/en/...` ↔ `/fr/...` ↔ `/es/...`, needed for SEO), so the entries are real links. Opens on hover or
 * click, closes on Escape, an outside click or leaving the area. Styles: `.vc-lang` in overrides.css.
 */
export function LangMenu() {
  const current = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <div ref={root} className="vc-lang" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="vc-lang__btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`Language: ${localeNames[current]}`}
      >
        <GlobeIcon />
        <span>{localeNames[current]}</span>
        <svg
          className={`vc-lang__chev${open ? " is-open" : ""}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="vc-lang__panel">
          <ul>
            {locales.map((locale) => (
              <li key={locale}>
                <Link
                  href={switchLocalePath(pathname, locale)}
                  hrefLang={locale}
                  lang={locale}
                  aria-current={locale === current ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  data-no-transition
                >
                  <span>
                    <b>{localeLabels[locale]}</b>
                    {localeNames[locale]}
                  </span>
                  {locale === current && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
