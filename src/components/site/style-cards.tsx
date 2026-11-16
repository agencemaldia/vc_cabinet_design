"use client";

import { useEffect, useRef } from "react";
import { useTranslate } from "@/lib/i18n/context";

type Card = {
  big: string;
  label: string;
  text: string;
  tone: "dark" | "photo" | "light" | "plain";
  image?: string;
};

/** Cards in reading order; rendered in three aligned columns (1-2, 3-4, 5-6). */
const CARDS: Card[] = [
  { big: "European", label: "Style", text: "Sleek, handle-less, matte lacquers.", tone: "dark" },
  { big: "Canadian", label: "Style", text: "Solid wood, durable, warm finishes.", tone: "plain" },
  {
    big: "American",
    label: "Style",
    text: "Shaker and classic profiles.",
    tone: "photo",
    image: "/images/kitchen-18.webp",
  },
  { big: "Countertops", label: "Surfaces", text: "Quartz, granite and marble, cut to fit.", tone: "plain" },
  { big: "Finishes", label: "Materials", text: "Lacquer, veneer, painted, melamine.", tone: "light" },
  {
    big: "Hardware",
    label: "Details",
    text: "Soft-close, pull-outs, brass & black pulls.",
    tone: "photo",
    image: "/images/walk-in-02.webp",
  },
];

/**
 * Services "Choose your style. We'll build it.": six cards in three aligned columns; each card tilts
 * upright in 3D as it scrolls into view. Styles: `.vc-styles` in src/styles/motion.css.
 */
export function StyleCards() {
  const tr = useTranslate();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = [...el.querySelectorAll<HTMLElement>(".vc-styles__card")];
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      cards.forEach((c) => {
        const r = c.getBoundingClientRect();
        if (r.top > vh + 80 || r.bottom < -80) return;
        const e = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.6)));
        c.style.setProperty("--e", e.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    el.classList.add("is-live");
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      el.classList.remove("is-live");
    };
  }, []);

  const columns = [CARDS.slice(0, 2), CARDS.slice(2, 4), CARDS.slice(4, 6)];

  return tr(
    <section ref={ref} className="sec vc-styles" aria-labelledby="vc-styles-title">
      <div className="wrap">
        <div className="vc-styles__head">
          <h2 id="vc-styles-title">
            Choose your style. <em>We’ll build it.</em>
          </h2>
          <p>
            Three cabinetry traditions and every finish, surface and hardware option — mixed and matched to your home.
          </p>
        </div>
        <div className="vc-styles__grid">
          {columns.map((col, i) => (
            <div key={i} className="vc-styles__col">
              {col.map((c) => (
                <article
                  key={c.big}
                  className={`vc-styles__card is-${c.tone}`}
                  style={c.image ? { backgroundImage: `url(${c.image})` } : undefined}
                >
                  <span className="vc-styles__big">{c.big}</span>
                  <span className="vc-styles__label">{c.label}</span>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>,
  );
}
