"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useTranslate } from "@/lib/i18n/context";

type Slide = { tab: string; title: string; text: string; points: string[]; image: string };

const SLIDES: Slide[] = [
  {
    tab: "Custom made",
    title: "100% custom made",
    text: "We’re custom kitchen and bathroom specialists. Every cabinet is designed for your space and your habits — never pulled from a catalog.",
    points: [
      "Built to your exact measurements",
      "Your choice of styles, finishes and hardware",
      "Attention to every joint and detail",
    ],
    image: "/images/kitchen-27.webp",
  },
  {
    tab: "Every room",
    title: "Versatile renovation experts",
    text: "Our expertise goes further: living rooms, bedrooms, home offices and every room that deserves smart, beautiful storage.",
    points: ["Built-ins and media walls", "Home offices and libraries", "Mudrooms and laundry rooms"],
    image: "/images/bathroom-15.webp",
  },
  {
    tab: "Whole home",
    title: "Whole-home transformation",
    text: "Planning several rooms? We renovate your entire home at once, with one streamlined process from design to final inspection.",
    points: [
      "One designer and one schedule",
      "Consistent style from room to room",
      "Fewer disruptions to your daily life",
    ],
    image: "/images/walk-in-05.webp",
  },
];

/** Share of one viewport height scrolled while the opening card grows to full size. */
const GROW = 0.8;

/**
 * Services page: the three service blocks as one pinned, full-screen showcase. While the section is
 * pinned, scrolling first grows a card from under the title to the full frame, then moves through the
 * services one by one (photo, text, progress bar, tabs). On phones and with reduced motion it falls back
 * to stacked panels (see `.vc-show` in src/styles/overrides.css).
 */
export function ServicesShowcase() {
  const tr = useTranslate();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 760px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      setStacked(still.matches);
      if (still.matches) {
        el.style.setProperty("--g", "1");
        return;
      }
      const vh = window.innerHeight;
      const scrolled = -el.getBoundingClientRect().top;
      const growPx = vh * GROW;
      const g = Math.min(1, Math.max(0, scrolled / growPx));
      const span = el.offsetHeight - vh - growPx;
      const t = Math.min(0.9999, Math.max(0, (scrolled - growPx) / span)) * SLIDES.length;
      el.style.setProperty("--g", g.toFixed(3));
      el.style.setProperty("--sp", (t % 1).toFixed(3));
      setActive(Math.floor(t));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    still.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      still.removeEventListener("change", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  /** Tabs jump to the scroll position where that service is shown. */
  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const vh = window.innerHeight;
    const growPx = vh * GROW;
    const span = el.offsetHeight - vh - growPx;
    const top = el.getBoundingClientRect().top + window.scrollY + growPx + span * ((i + 0.15) / SLIDES.length);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return tr(
    <section
      ref={ref}
      className="vc-show"
      aria-labelledby="vc-show-title"
      style={{ "--n": SLIDES.length } as CSSProperties}
    >
      <div className="vc-show__stage">
        <div className="vc-show__intro">
          <p className="vc-show__eyebrow">What we do</p>
          <h2 id="vc-show-title">
            Three ways we <em>transform your home.</em>
          </h2>
          <p>Custom cabinetry for one room, every room, or the whole house — designed, built and installed by V&C.</p>
        </div>

        <div className="vc-show__frame">
          {SLIDES.map((s, i) => (
            <article
              key={s.title}
              className={`vc-show__slide${i === active ? " is-active" : ""}`}
              aria-hidden={stacked || i === active ? undefined : true}
            >
              <div className="vc-show__img" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="vc-show__content wrap">
                <span className="vc-show__count">
                  {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="vc-show__actions">
                  <Link href="/contact" className="pill pill-w" tabIndex={stacked || i === active ? undefined : -1}>
                    Book a Free Designer Consultation
                  </Link>
                  <Link href="/gallery" className="pill" tabIndex={stacked || i === active ? undefined : -1}>
                    See our work
                  </Link>
                </div>
              </div>
            </article>
          ))}

          <div className="vc-show__bar wrap">
            <span className="vc-show__num">{String(active + 1).padStart(2, "0")}</span>
            <span className="vc-show__track" aria-hidden="true">
              <span />
            </span>
            <div className="vc-show__tabs" role="tablist" aria-label="Services">
              {SLIDES.map((s, i) => (
                <button key={s.tab} type="button" role="tab" aria-selected={i === active} onClick={() => goTo(i)}>
                  {s.tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>,
  );
}
