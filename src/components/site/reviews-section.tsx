"use client";

import { useTranslate } from "@/lib/i18n/context";

/**
 * Client reviews, shown right under the Home hero.
 *
 * SAMPLE CONTENT (to be verified by the client): these reviews and the rating are stand-ins written for the
 * layout. Replace them with real reviews (e.g. copied from the Google Business profile, with the clients'
 * permission) and the real rating before publishing — invented reviews must never go live.
 */

type Review = { quote: string; name: string; place: string; project: string };

const RATING = { score: "5.0", count: "47", source: "Google reviews", href: "#" };

const REVIEWS: Review[] = [
  {
    quote:
      "V&C redesigned our whole kitchen. The 3D plans showed us exactly what we were getting, and the crew was clean, careful and on schedule.",
    name: "Jennifer R.",
    place: "Tampa",
    project: "Kitchen remodel",
  },
  {
    quote:
      "Our new vanity is gorgeous and the storage is so well planned. Nathalie and her team made the whole process easy from start to finish.",
    name: "Mark & Susan B.",
    place: "Clearwater",
    project: "Bathroom vanity",
  },
  {
    quote:
      "The walk-in closet is beyond what we imagined. Every inch is used, the finish quality is excellent, and they installed it in two days.",
    name: "Angela W.",
    place: "St. Petersburg",
    project: "Walk-in closet",
  },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-brick ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

export function ReviewsSection() {
  const tr = useTranslate();
  return tr(
    // Home's design keeps every section white; cards use the design's cream, set inline because the
    // design's stylesheet outranks Tailwind's layer.
    <section className="sec" aria-labelledby="reviews-title">
      <div className="wrap">
        <div className="mb-[clamp(28px,3vw,48px)] flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-semibold tracking-[0.08em] text-slate uppercase">Reviews</span>
            <h2 id="reviews-title" className="m-0 text-[clamp(26px,2.6vw,40px)] leading-[1.06] font-normal text-navy">
              What homeowners say.
            </h2>
          </div>
          <a
            href={RATING.href}
            className="flex items-center gap-3 rounded-[6px] px-5 py-3 text-[15px] text-navy no-underline"
            style={{ background: "#EFF0F2" }}
          >
            <Stars />
            <span>
              <strong className="font-semibold">{RATING.score}</strong> · {RATING.count} {RATING.source}
            </span>
          </a>
        </div>

        <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <li
              key={i}
              className="flex flex-col justify-between gap-8 rounded-[6px] p-[clamp(24px,2.6vw,36px)]"
              style={{ background: "#EFF0F2" }}
            >
              <figure className="m-0 flex flex-col gap-5">
                <Stars />
                <blockquote className="m-0 text-[17px] leading-[1.55] text-ink">“{r.quote}”</blockquote>
              </figure>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-[14px] font-semibold text-white"
                  aria-hidden="true"
                >
                  {r.name.replace(/[^A-Za-z]/g, "").charAt(0) || "·"}
                </span>
                <span className="flex flex-col text-[14px] leading-[1.35]">
                  <span className="font-semibold text-navy">{r.name}</span>
                  <span className="text-slate">
                    {r.place} · {r.project}
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>,
  );
}
