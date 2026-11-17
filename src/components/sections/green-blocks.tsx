"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type RefObject } from "react";

import { useT } from "@/lib/i18n/context";

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

/* ------------------------------------------------------------------ 1b. Card rail */

const RAIL_ICONS = [
  "M4 7h16M4 12h16M4 17h10", // lines
  "M5 5h6v6H5zM13 13h6v6h-6zM13 5h6v6h-6zM5 13h6v6H5z", // grid
  "M12 3v18M3 12h18", // plus
  "M4 18l6-6 4 4 6-8", // chart
  "M6 4h12v16H6zM9 8h6M9 12h6M9 16h3", // sheet
  "M12 4l8 4-8 4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4", // layers
];

/**
 * Light cards in a row that slides from left to right (drag, swipe, trackpad or the arrows): a photo on top,
 * then the title, a short line, the text and a small icon. The row starts at
 * the content edge and runs to the edge of the screen; a three-part bar shows where you are.
 */
export function CardRail({ id, title, lead, items, images }: BlockProps) {
  const rail = useRef<HTMLUListElement>(null);
  const [pos, setPos] = useState(0); // 0 → 1 along the row
  const [ref, seen] = useInView<HTMLDivElement>();
  const { t } = useT();

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setPos(max > 0 ? el.scrollLeft / max : 0);
    };
    // the first card lines up with the section title (the content column edge)
    const align = () => {
      const h2 = el.closest("section")?.querySelector("h2");
      if (h2) el.style.setProperty("--rail-edge", `${h2.getBoundingClientRect().left}px`);
      update();
    };
    align();
    el.scrollLeft = 0; // start on the first card
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", align);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", align);
    };
  }, []);

  // drag with the mouse (touch and trackpads scroll natively)
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);
  const onDown = (e: PointerEvent) => {
    if (e.pointerType !== "mouse" || !rail.current) return;
    drag.current = { x: e.clientX, left: rail.current.scrollLeft, moved: false };
    rail.current.classList.add("is-drag");
  };
  const onMove = (e: PointerEvent) => {
    const d = drag.current;
    if (!d || !rail.current) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 4) d.moved = true;
    rail.current.scrollLeft = d.left - dx;
  };
  const onUp = () => {
    drag.current = null;
    rail.current?.classList.remove("is-drag");
  };

  const go = (dir: 1 | -1) => {
    const el = rail.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };

  const segments = 3;
  const active = Math.min(segments - 1, Math.round(pos * (segments - 1)));
  return (
    <section className="sec vc-gb vc-railsec" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Head id={id} title={title} lead={lead} />
      </div>
      <div ref={ref} className={`vc-rail${seen ? " is-in" : ""}`}>
        <ul
          ref={rail}
          className="vc-rail__track"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
        >
          {items.map((it, i) => (
            <li key={it.title} className="vc-rail__card" style={{ "--i": i } as CSSProperties}>
              <img src={images[i % images.length]} alt="" loading="lazy" decoding="async" draggable={false} />
              <div className="vc-rail__body">
                <h3>{it.title}</h3>
                <span className="vc-rail__dash" aria-hidden="true" />
                <p>{it.text}</p>
                <span className="vc-rail__icon" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={RAIL_ICONS[i % RAIL_ICONS.length]} />
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="vc-rail__nav wrap">
          <div className="vc-rail__arrows">
            <button type="button" onClick={() => go(-1)} disabled={pos <= 0.001} aria-label={t("Previous")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </button>
            <button type="button" onClick={() => go(1)} disabled={pos >= 0.999} aria-label={t("Next")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
          <div className="vc-rail__bar" aria-hidden="true">
            {Array.from({ length: segments }, (_, s) => (
              <span key={s} className={s === active ? "is-on" : undefined} />
            ))}
          </div>
        </div>
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
 * lower than the previous). As the next card covers it, a card shrinks and fades away, so the steps follow one
 * another 01 → 02 → 03. Big number, title and text. No movement for those who ask for reduced motion.
 */
export function GreenStack({ id, title, lead, items }: BlockProps) {
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const ol = list.current;
    if (!ol || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = Array.from(ol.children) as HTMLElement[];
    let frame = 0;
    const update = () => {
      frame = 0;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        let p = 0;
        if (next) {
          const a = card.getBoundingClientRect();
          const b = next.getBoundingClientRect();
          // 0 when the next card starts to overlap this one, 1 when it has reached its own pinned place
          // (the next card stops a little lower, so it never covers the very top: count 90 % as fully covered)
          p = Math.min(1, Math.max(0, (a.bottom - b.top) / (a.height * 0.9)));
        }
        card.style.setProperty("--cover", p.toFixed(3));
      });
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

  return (
    <section className="sec vc-gb" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Head id={id} title={title} lead={lead} />
        <ol ref={list} className="vc-stack">
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
