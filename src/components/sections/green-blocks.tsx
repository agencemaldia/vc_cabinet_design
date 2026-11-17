"use client";

import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";

type Item = { title: string; text: string };
export type BlockProps = { id: string; title: string; lead: string; items: Item[]; images: string[] };

const num = (i: number) => String(i + 1).padStart(2, "0");

/** True once the element has entered the screen (then stays true): starts the entrance animations. */
function useInView<T extends Element>(): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

/** Section title on the left, its lead on the right. */
function Head({ id, title, lead, light }: { id: string; title: string; lead: string; light?: boolean }) {
  return (
    <div className={`vc-gb__head${light ? " is-light" : ""}`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <p>{lead}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ 1. Bento */

/**
 * Green cards of varied widths on a 4-column grid, three per row — one wide card that switches sides from row to
 * row — so every row is a clean line. Cards rise in one after the other when the grid enters the screen.
 */
export function GreenBento({ id, title, lead, items }: BlockProps) {
  const [ref, seen] = useInView<HTMLUListElement>();
  const spans: number[] = [];
  for (let start = 0; start < items.length; start += 3) {
    const left = items.length - start;
    const row = start / 3;
    if (left === 1) spans.push(4);
    else if (left === 2) spans.push(2, 2);
    else spans.push(...(row % 2 === 0 ? [2, 1, 1] : [1, 1, 2]));
  }
  return (
    <section className="sec vc-gb" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Head id={id} title={title} lead={lead} />
        <ul ref={ref} className={`vc-bento${seen ? " is-in" : ""}`}>
          {items.map((it, i) => (
            <li
              key={it.title}
              className={`vc-bento__card${spans[i]! >= 2 ? " is-wide" : ""}${i % 3 === 1 ? " is-deep" : ""}`}
              style={{ gridColumn: `span ${spans[i]}`, "--i": i } as CSSProperties}
            >
              <span className="vc-bento__n">{num(i)}</span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 2. Scroll-driven list + preview */

/**
 * The list stays on screen while the page scrolls: each step of scrolling moves to the next point (01 → 06),
 * the photo, counter and text following; after the last point the page goes on. Clicking a point scrolls to
 * it. On phones and with reduced motion, every point is simply listed with its text.
 */
export function ScrollTabs({ id, title, lead, items, images }: BlockProps) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const run = el.offsetHeight - window.innerHeight;
      const p = run > 0 ? Math.min(0.9999, Math.max(0, -r.top / run)) : 0;
      setActive(Math.floor(p * items.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items.length]);

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const run = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY + ((i + 0.5) / items.length) * run;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const it = items[active]!;
  return (
    <section className="sec vc-gb" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Head id={id} title={title} lead={lead} />
      </div>
      <div ref={track} className="vc-stabs" style={{ "--n": items.length } as CSSProperties}>
        <div className="vc-stabs__stage wrap">
          <ol className="vc-stabs__list">
            {items.map((x, i) => (
              <li key={x.title} className={`${i === active ? "is-active" : ""}${i < active ? " is-done" : ""}`}>
                <button type="button" onClick={() => goTo(i)} aria-current={i === active ? "true" : undefined}>
                  <span className="vc-stabs__n">{num(i)}</span>
                  <span className="vc-stabs__t">{x.title}</span>
                </button>
                <p className="vc-stabs__mobile">{x.text}</p>
              </li>
            ))}
          </ol>
          <div className="vc-stabs__view" aria-live="polite">
            <div className="vc-stabs__media">
              {items.map((x, i) => (
                <img
                  key={x.title}
                  src={images[i % images.length]}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={i === active ? "is-active" : undefined}
                />
              ))}
              <span className="vc-stabs__count">
                {num(active)} / {num(items.length - 1)}
              </span>
            </div>
            <div key={active} className="vc-stabs__text">
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 3. Rows */

/**
 * Large numbered rows (number, title, text, arrow) that slide in one after the other; hovering a row fills it
 * with green from the left.
 */
export function GreenRows({ id, title, lead, items }: BlockProps) {
  const [ref, seen] = useInView<HTMLOListElement>();
  return (
    <section className="sec vc-gb" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Head id={id} title={title} lead={lead} />
        <ol ref={ref} className={`vc-rows${seen ? " is-in" : ""}`}>
          {items.map((it, i) => (
            <li key={it.title} style={{ "--i": i } as CSSProperties}>
              <span className="vc-rows__n">{num(i)}</span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
              <span className="vc-rows__arrow" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 4. Sticky head + stacked tips */

/**
 * The title and lead stay pinned on the left while the tips scroll past on the right, each a card with a large
 * outlined number that appears as it reaches the screen.
 */
export function GreenTips({ id, title, lead, items }: BlockProps) {
  return (
    <section className="sec vc-gb" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap vc-tips">
        <div className="vc-tips__head">
          <h2 id={`${id}-title`}>{title}</h2>
          <p>{lead}</p>
        </div>
        <ol className="vc-tips__list">
          {items.map((it, i) => (
            <Tip key={it.title} item={it} i={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Tip({ item, i }: { item: Item; i: number }) {
  const [ref, seen] = useInView<HTMLLIElement>();
  return (
    <li ref={ref} className={`vc-tip${seen ? " is-in" : ""}`}>
      <span className="vc-tip__n" aria-hidden="true">
        {num(i)}
      </span>
      <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ 5. Stacking cards */

/**
 * The steps as large cards that stay pinned at the top while the next one slides up over them (each a little
 * lower than the previous), so the process piles up as the visitor scrolls. Big number, title and text.
 */
export function GreenStack({ id, title, lead, items }: BlockProps) {
  return (
    <section className="sec vc-gb" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Head id={id} title={title} lead={lead} />
        <ol className="vc-stack">
          {items.map((it, i) => (
            <li key={it.title} className={i % 2 === 1 ? "is-deep" : undefined} style={{ "--i": i } as CSSProperties}>
              <span className="vc-stack__n" aria-hidden="true">
                {num(i)}
              </span>
              <div>
                <span className="vc-stack__step">
                  {num(i)} / {num(items.length - 1)}
                </span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
