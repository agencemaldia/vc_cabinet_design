"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useTranslate } from "@/lib/i18n/context";

/** `label` is the short name shown above the title and under the progress bar (the number alone without it). */
type Statement = { label?: string; title: string; text: string };

type PinnedStatementsProps = {
  /** Section title, shown first (large, centred) before the statements take over. */
  title: ReactNode;
  lead?: string;
  items: Statement[];
  /** Anchor of the section (the service pages' "On this page" links). */
  id?: string;
};

/**
 * A pinned, dark section that turns a short list (values, steps) into full-screen statements: while it is
 * pinned, scrolling shows the section title, then each statement in turn (big title, text, a soft glow
 * that moves), with a segmented progress bar. On phones and with reduced motion the statements simply
 * stack. Styles: `.vc-pin` in src/styles/motion.css.
 */
export function PinnedStatements({ title, lead, items, id }: PinnedStatementsProps) {
  const tr = useTranslate();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(-1);
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 760px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      setStacked(still.matches);
      if (still.matches) return;
      const vh = window.innerHeight;
      const scrolled = -el.getBoundingClientRect().top;
      const t = Math.min(0.9999, Math.max(0, scrolled / (el.offsetHeight - vh))) * (items.length + 1);
      // slot 0 is the title, then one slot per statement
      setActive(Math.floor(t) - 1);
      el.style.setProperty("--pt", (t % 1).toFixed(3));
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
  }, [items.length]);

  return tr(
    <section
      ref={ref}
      id={id}
      className={`vc-pin${active >= 0 ? " is-past-title" : ""}`}
      style={{ "--n": items.length, "--a": Math.max(0, active) } as CSSProperties}
    >
      <div className="vc-pin__stage">
        <span className="vc-pin__glow" aria-hidden="true" />
        <div className="vc-pin__title wrap">
          <h2>{title}</h2>
          {lead && <p>{lead}</p>}
        </div>
        {items.map((it, i) => (
          <div
            key={it.title}
            className={`vc-pin__item wrap${i === active ? " is-active" : ""}${i < active ? " is-done" : ""}`}
            aria-hidden={stacked || i === active ? undefined : true}
          >
            <span className="vc-pin__label">
              {String(i + 1).padStart(2, "0")}
              {it.label && ` · ${it.label}`}
            </span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </div>
        ))}
        <div className="vc-pin__bar wrap" aria-hidden="true">
          {items.map((it, i) => (
            <span key={it.title} className={i < active ? "is-done" : i === active ? "is-active" : undefined}>
              <i />
              <b>{it.label ?? String(i + 1).padStart(2, "0")}</b>
            </span>
          ))}
        </div>
      </div>
    </section>,
  );
}
