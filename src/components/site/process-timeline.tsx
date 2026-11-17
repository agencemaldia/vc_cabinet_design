"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/** A step lights up once its marker has scrolled above this fraction of the viewport height. */
const TRIGGER = 0.6;

type ProcessTimelineProps = {
  eyebrow?: string;
  title: string;
  text: string;
  steps: { title: string; text: string }[];
  cta: { href: string; label: string };
};

/**
 * The work method (home, section 4): a zig-zag timeline whose steps activate one by one as the visitor
 * scrolls. Reused from the earlier Mission page; texts come from the page (src/content/home.ts).
 * Styles live in src/styles/overrides.css (`.vc-tl`).
 */
export function ProcessTimeline({ title, text, steps, cta }: ProcessTimelineProps) {
  const markers = useRef<(HTMLSpanElement | null)[]>([]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const limit = window.innerHeight * TRIGGER;
      let last = -1;
      markers.current.forEach((m, i) => {
        if (m && m.getBoundingClientRect().top < limit) last = i;
      });
      setActive(last);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="sec vc-process" id="method" aria-labelledby="process-title">
      <div className="wrap">
        {/* Title and text on the left, the call to action on the right. */}
        <div className="vc-process__head">
          <div className="vc-process__intro">
            <h2 id="process-title">{title}</h2>
            <p>{text}</p>
          </div>
          <Link href={cta.href} className="pill pill-d vc-btn">
            {cta.label}
          </Link>
        </div>

        <ol className="vc-tl">
          {steps.map((step, i) => {
            const side = i % 2 === 0 ? "is-left" : "is-right";
            const on = i <= active;
            const linkOn = i + 1 <= active;
            return (
              <li
                key={step.title}
                className={`vc-tl__step ${side}${on ? " is-active" : ""}${linkOn ? " is-linked" : ""}`}
                aria-current={i === active ? "step" : undefined}
              >
                <div className="vc-tl__text">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <div className="vc-tl__marker">
                  <span
                    className="vc-tl__num"
                    ref={(el) => {
                      markers.current[i] = el;
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < steps.length - 1 && <span className="vc-tl__stem" aria-hidden="true" />}
                </div>
                {i < steps.length - 1 && (
                  <div className="vc-tl__link" aria-hidden="true">
                    <span />
                    <span />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
