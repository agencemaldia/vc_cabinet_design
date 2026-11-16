"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";

import { ds } from "@/components/site/sx";

type Card = {
  slug: string;
  href: string;
  category: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  date: string;
  dateLabel: string;
};

type BlogBrowserProps = {
  posts: Card[];
  /** Shown above in large: left out of "All", included when its category is picked. */
  featured?: string;
  categories: { key: string; label: string }[];
  labels: { all: string; filter: string; readMore: string; empty: string };
  cta: { title: string; text: string; href: string; label: string };
};

const CHIP: CSSProperties = {
  minHeight: "44px",
  padding: "0 18px",
  borderRadius: "0",
  border: "1.5px solid #C9CDD4",
  background: "#FFFFFF",
  color: "#22252A",
  fontFamily: "var(--font-urbanist), sans-serif",
  fontSize: "15px",
  fontWeight: "600",
  cursor: "pointer",
  whiteSpace: "nowrap",
};
const CHIP_ON: CSSProperties = { ...CHIP, border: "1.5px solid #125A50", background: "#125A50", color: "#FFFFFF" };

/**
 * Article list of the original blog design: category chips, cards (cover, category, date, title, excerpt,
 * "Read more") and the dark "Talk to a designer" card. Every article stays in the HTML for search engines.
 */
export function BlogBrowser({ posts, featured, categories, labels, cta }: BlogBrowserProps) {
  const [cat, setCat] = useState<string | null>(null);
  const shown = cat ? posts.filter((p) => p.category === cat) : posts.filter((p) => p.slug !== featured);

  return (
    <>
      <div
        role="group"
        aria-label={labels.filter}
        {...ds({ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "8px", marginBottom: "32px" })}
      >
        <button
          type="button"
          aria-pressed={cat === null}
          onClick={() => setCat(null)}
          {...ds(cat === null ? CHIP_ON : CHIP)}
        >
          {labels.all}
        </button>
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            aria-pressed={cat === c.key}
            onClick={() => setCat(c.key)}
            {...ds(cat === c.key ? CHIP_ON : CHIP)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div {...ds({ display: "flex", flexWrap: "wrap", gap: "24px" })}>
        {shown.length === 0 && <p {...ds({ margin: "0", fontSize: "16px", color: "#5E636B" })}>{labels.empty}</p>}
        {shown.map((p) => (
          <Link
            key={p.slug}
            href={p.href}
            className="card"
            {...ds({
              flex: "1 1 320px",
              display: "flex",
              flexDirection: "column",
              background: "#FFFFFF",
              borderRadius: "0",
              overflow: "hidden",
              border: "1px solid #E3E5E9",
              textDecoration: "none",
              color: "#22252A",
            })}
          >
            <img
              className="ph"
              src={p.cover}
              alt={p.coverAlt}
              loading="lazy"
              decoding="async"
              {...ds({ height: "220px", backgroundColor: "#2B4A3F", width: "100%", objectFit: "cover" })}
            />
            <div
              {...ds({ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" })}
            >
              <div
                {...ds({
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  alignItems: "center",
                  fontSize: "13px",
                  color: "#5E636B",
                })}
              >
                <span
                  {...ds({
                    padding: "4px 10px",
                    borderRadius: "0",
                    background: "#EEF3F0",
                    color: "#125A50",
                    fontWeight: "700",
                    fontSize: "12px",
                  })}
                >
                  {p.categoryLabel}
                </span>
                <time dateTime={p.date}>{p.dateLabel}</time>
              </div>
              <h3
                {...ds({
                  margin: "0",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "450",
                  fontSize: "23px",
                  lineHeight: "1.25",
                  color: "#1D2B44",
                })}
              >
                {p.title}
              </h3>
              <p {...ds({ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5E636B" })}>{p.excerpt}</p>
              <span
                {...ds({
                  marginTop: "auto",
                  paddingTop: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#125A50",
                })}
              >
                {labels.readMore}
              </span>
            </div>
          </Link>
        ))}
        <div
          {...ds({
            flex: "1 1 320px",
            padding: "32px",
            borderRadius: "0",
            background: "#1D2B44",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "center",
          })}
        >
          <h3
            {...ds({
              margin: "0",
              fontFamily: "var(--font-urbanist), system-ui, sans-serif",
              fontWeight: "400",
              fontSize: "28px",
              lineHeight: "1.2",
              color: "#EFF0F2",
            })}
          >
            {cta.title}
          </h3>
          <p {...ds({ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "rgba(246,243,238,.82)" })}>
            {cta.text}
          </p>
          <Link
            href={cta.href}
            className="pill pill-w"
            {...ds({
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              minHeight: "52px",
              padding: "0 28px",
              borderRadius: "0",
              background: "#FFFFFF",
              color: "#125A50",
              border: "0",
              fontSize: "15px",
              fontWeight: "600",
              textDecoration: "none",
              textAlign: "center",
            })}
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </>
  );
}
