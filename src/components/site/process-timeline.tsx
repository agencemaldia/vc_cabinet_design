"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslate } from "@/lib/i18n/context";

const STEPS: { title: string; text: string }[] = [
  {
    title: "Free Designer Consultation",
    text: "A designer visits your home, measures the space and talks through your needs, materials, scope and budget.",
  },
  {
    title: "Design submission & quote",
    text: "We turn your ideas into a preliminary design and a clear, written budget.",
  },
  {
    title: "Contract",
    text: "A detailed contract covers materials, scope and conditions. We handle permits if needed and set the schedule.",
  },
  {
    title: "2D/3D real-time edits",
    text: "We review the plan together and adjust it live. Once you approve, your final 3D design is produced.",
  },
  {
    title: "Renovation phase",
    text: "Our project management team coordinates brands, colors, permits and measurements — and keeps you updated.",
  },
  {
    title: "Delivery & installation",
    text: "We handle deliveries, install everything to the inch, remove debris and keep your home clean and safe.",
  },
  {
    title: "Final inspection",
    text: "We check every detail against our quality standards, document the result and ask for your feedback.",
  },
];

/** A step lights up once its marker has scrolled above this fraction of the viewport height. */
const TRIGGER = 0.6;

/**
 * "Seven steps, zero surprises" (Mission page): a zig-zag timeline whose steps activate one by one
 * as the visitor scrolls. Styles live in src/styles/overrides.css (`.vc-tl`).
 */
export function ProcessTimeline() {
  const tr = useTranslate();
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

  return tr(
    <section className="sec vc-process" aria-labelledby="process-title">
      <div className="wrap">
        <div className="vc-process__head">
          <h2
            id="process-title"
            style={{
              margin: 0,
              fontWeight: 400,
              fontSize: "clamp(40px, 5.4vw, 76px)",
              lineHeight: 1.04,
              letterSpacing: "-.01em",
              color: "#1D2B44",
            }}
          >
            Seven steps, <em style={{ color: "#125A50" }}>zero surprises.</em>
          </h2>
          <div className="vc-process__intro">
            <p style={{ margin: 0, maxWidth: 380, fontSize: 16, lineHeight: 1.6, color: "#5E636B" }}>
              A clear process from the first visit to the last detail — you always know what comes next.
            </p>
            <Link
              href="/contact"
              className="pill pill-d"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 52,
                padding: "0 28px",
                borderRadius: 6,
                background: "#125A50",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Book a Free Designer Consultation
            </Link>
          </div>
        </div>

        <ol className="vc-tl">
          {STEPS.map((step, i) => {
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
                  {i < STEPS.length - 1 && <span className="vc-tl__stem" aria-hidden="true" />}
                </div>
                {i < STEPS.length - 1 && (
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
    </section>,
  );
}
