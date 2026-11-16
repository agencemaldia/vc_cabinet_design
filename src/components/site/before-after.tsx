"use client";

import { useState, type CSSProperties } from "react";
import { useTranslate } from "@/lib/i18n/context";

type Pair = {
  key: string;
  label: string;
  after: string;
  /** Photo of the same room before the work. `null` = not provided yet (demo: desaturated "after"). */
  before: string | null;
  alt: string;
};

/**
 * Before/after projects shown in the comparison slider.
 *
 * DEMO DATA: no real before/after pairs have been provided yet, so each "before" is the "after" photo
 * desaturated. Replace `before` (and `after`) with real photos of the same room before publishing.
 */
const PAIRS: Pair[] = [
  { key: "kitchen", label: "Kitchen", after: "/images/kitchen-01.webp", before: null, alt: "Kitchen" },
  { key: "bathroom", label: "Bathroom", after: "/images/bathroom-02.webp", before: null, alt: "Bathroom" },
  { key: "walk-in", label: "Walk-in", after: "/images/walk-in-04.webp", before: null, alt: "Walk-in closet" },
];

const DEMO_BEFORE: CSSProperties = { filter: "grayscale(1) contrast(0.85) brightness(0.8) sepia(0.15)" };

/** "See the difference": tabbed before/after slider (drag, click or use the arrow keys). */
export function BeforeAfter() {
  const tr = useTranslate();
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const pair = PAIRS[active];

  return tr(
    <section className="sec" data-no-motion aria-labelledby="before-after-title">
      <div className="wrap">
        <div className="mb-[clamp(24px,3vw,40px)] flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[560px] flex-col gap-3">
            <span className="text-[13px] font-semibold tracking-[0.08em] text-slate uppercase">Before / After</span>
            <h2
              id="before-after-title"
              className="m-0 text-[clamp(26px,2.6vw,40px)] leading-[1.06] font-normal text-navy"
            >
              See the difference.
            </h2>
            <p className="m-0 text-[16px] leading-[1.5] text-slate">
              Drag the handle to compare the same room before and after V&amp;C.
            </p>
          </div>

          <div role="tablist" aria-label="Project" className="flex flex-wrap gap-2">
            {PAIRS.map((p, i) => {
              const on = i === active;
              return (
                <button
                  key={p.key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="before-after-panel"
                  onClick={() => {
                    setActive(i);
                    setPos(50);
                  }}
                  className={`min-h-11 cursor-pointer rounded-[6px] border-[1.5px] px-5 text-[14px] font-semibold transition-colors ${
                    on ? "border-forest bg-forest text-white" : "border-stone bg-white text-ink hover:border-forest"
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="before-after-panel"
          role="tabpanel"
          className="relative aspect-[16/9] max-h-[720px] w-full overflow-hidden rounded-[6px] bg-sand select-none"
        >
          {/* After (full) */}
          <img
            src={pair.after}
            alt={`${pair.alt} — after`}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
          {/* Before (clipped to the left of the handle) */}
          <img
            src={pair.before ?? pair.after}
            alt={`${pair.alt} — before`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ ...(pair.before ? null : DEMO_BEFORE), clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            draggable={false}
          />

          <span className="pointer-events-none absolute top-4 left-4 rounded-[4px] bg-ink/80 px-3 py-1.5 text-[12px] font-semibold tracking-[0.08em] text-white uppercase">
            Before
          </span>
          <span className="pointer-events-none absolute top-4 right-4 rounded-[4px] bg-white px-3 py-1.5 text-[12px] font-semibold tracking-[0.08em] text-forest uppercase">
            After
          </span>

          {/* Divider + handle */}
          <span
            className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white"
            style={{ left: `${pos}%` }}
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-forest shadow-[0_8px_24px_-8px_rgba(0,0,0,.45)]"
            style={{ left: `${pos}%` }}
            aria-hidden="true"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>

          {/* The whole frame is a range input: drag anywhere, click to jump, arrow keys to nudge. */}
          <input
            type="range"
            min={0}
            max={100}
            step={0.5}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label={`${pair.label}: before and after comparison`}
            aria-valuetext={`${Math.round(pos)}% before`}
            className="absolute inset-0 m-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>,
  );
}
