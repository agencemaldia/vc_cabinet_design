"use client";

import Link from "next/link";
import { useState } from "react";

type Card = {
  slug: string;
  href: string;
  category: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  readMinutes: number;
};

type BlogBrowserProps = {
  posts: Card[];
  /** Shown above in large: left out of "All", included when its category is picked. */
  featured?: string;
  categories: { key: string; label: string }[];
  labels: { all: string; filter: string; readArticle: string; minRead: string; empty: string };
};

/**
 * Article cards with category filters (specification §5: organized by relevant categories, intuitive
 * navigation). The filter is a set of toggle buttons; every article stays in the HTML for search engines.
 */
export function BlogBrowser({ posts, featured, categories, labels }: BlogBrowserProps) {
  const [cat, setCat] = useState<string | null>(null);
  const shown = cat ? posts.filter((p) => p.category === cat) : posts.filter((p) => p.slug !== featured);
  const used = categories.filter((c) => posts.some((p) => p.category === c.key));

  return (
    <>
      <div className="vc-filter" role="group" aria-label={labels.filter}>
        <button type="button" aria-pressed={cat === null} onClick={() => setCat(null)}>
          {labels.all}
        </button>
        {used.map((c) => (
          <button key={c.key} type="button" aria-pressed={cat === c.key} onClick={() => setCat(c.key)}>
            {c.label}
          </button>
        ))}
      </div>
      {shown.length === 0 ? (
        <p className="vc-empty">{labels.empty}</p>
      ) : (
        <ul className="vc-posts">
          {shown.map((p) => (
            <li key={p.slug} className="vc-post">
              <div className="vc-post__media">
                <img src={p.cover} alt={p.coverAlt} loading="lazy" decoding="async" />
              </div>
              <div className="vc-post__body">
                <p className="vc-post__meta">
                  <span className="vc-chip">{p.categoryLabel}</span>
                  <span>
                    {p.readMinutes} {labels.minRead}
                  </span>
                </p>
                <h3>
                  <Link href={p.href}>{p.title}</Link>
                </h3>
                <p>{p.excerpt}</p>
                <Link href={p.href} className="vc-more" aria-label={`${labels.readArticle} : ${p.title}`}>
                  {labels.readArticle}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
