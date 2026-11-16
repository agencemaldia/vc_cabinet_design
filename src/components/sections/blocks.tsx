import Link from "next/link";
import type { ReactNode } from "react";

import { COMMON } from "@/content/common";
import { getPosts } from "@/content/blog";
import { REVIEWS } from "@/content/reviews";
import type { Locale } from "@/lib/i18n/config";
import { pagePath } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

/** Eyebrow + h2 + intro of a section. */
export function SectionHead({
  eyebrow,
  title,
  text,
  id,
  children,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  id?: string;
  children?: ReactNode;
}) {
  return (
    <div className="vc-head">
      <div>
        {eyebrow && <p className="vc-eyebrow">{eyebrow}</p>}
        <h2 id={id}>{title}</h2>
      </div>
      {(text || children) && (
        <div className="vc-head__side">
          {text && <p>{text}</p>}
          {children}
        </div>
      )}
    </div>
  );
}

/** Badge shown on placeholder content (reviews, projects) until the client's real content replaces it. */
export function SampleBadge({ lang }: { lang: Locale }) {
  return (
    <span className="vc-sample" title={COMMON[lang].sampleNote}>
      {COMMON[lang].sample}
    </span>
  );
}

function Stars({ value = 5 }: { value?: number }) {
  return (
    <span className="vc-stars" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < value ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

/** Client reviews (home, right under the hero). Real reviews only — see src/content/reviews.ts. */
export function ReviewsBlock({
  lang,
  copy,
}: {
  lang: Locale;
  copy: { eyebrow: string; title: string; text: string; ratingLabel: string };
}) {
  const items = REVIEWS.items[lang];
  return (
    <section className="sec vc-reviews" aria-labelledby="reviews-title">
      <div className="wrap">
        <SectionHead eyebrow={copy.eyebrow} title={copy.title} id="reviews-title" text={copy.text}>
          {REVIEWS.draft && <SampleBadge lang={lang} />}
          {REVIEWS.rating !== null && (
            <p className="vc-rating">
              <Stars value={Math.round(REVIEWS.rating)} />
              <strong>{REVIEWS.rating.toFixed(1)}</strong>
              <span>
                {copy.ratingLabel}
                {REVIEWS.count !== null && ` · ${REVIEWS.count}`}
              </span>
            </p>
          )}
        </SectionHead>
        <ul className="vc-reviews__grid">
          {items.map((r, i) => (
            <li key={i} className="vc-review">
              <Stars value={r.rating} />
              <blockquote>
                <p>{r.quote}</p>
              </blockquote>
              <p className="vc-review__who">
                <strong>{r.name}</strong>
                <span>
                  {r.place} · {r.project}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type ServiceCard = { title: string; text: string; points: string[]; link: string; alt: string };

/** The two services, side by side with the same weight (home, section 3). */
export function ServicesDuo({
  lang,
  copy,
}: {
  lang: Locale;
  copy: { eyebrow: string; title: string; text: string; kitchen: ServiceCard; bathroom: ServiceCard };
}) {
  const cards: [ServiceCard, string, string][] = [
    [copy.kitchen, pagePath(lang, "kitchen"), "/images/kitchen-renovation-island-pendants.webp"],
    [copy.bathroom, pagePath(lang, "bathroom"), "/images/bathroom-renovation-wood-vanity-glass-shower.webp"],
  ];
  return (
    <section className="sec vc-services" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <SectionHead eyebrow={copy.eyebrow} title={copy.title} id="services-title" text={copy.text} />
        <div className="vc-services__grid">
          {cards.map(([c, href, img]) => (
            <article key={href} className="vc-service">
              <div className="vc-service__media">
                <img src={img} alt={c.alt} loading="lazy" decoding="async" />
              </div>
              <div className="vc-service__body">
                <h3>
                  <Link href={href}>{c.title}</Link>
                </h3>
                <p>{c.text}</p>
                <ul>
                  {c.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <Link href={href} className="pill pill-d vc-btn">
                  {c.link}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Article cards (image, category, title, excerpt), linking to the articles. */
export function PostCards({ lang, limit, exclude }: { lang: Locale; limit?: number; exclude?: string }) {
  const posts = getPosts(lang)
    .filter((p) => p.slug !== exclude)
    .slice(0, limit);
  const t = COMMON[lang];
  return (
    <ul className="vc-posts">
      {posts.map((p) => {
        const href = `${pagePath(lang, "blog")}/${p.slug}`;
        return (
          <li key={p.slug} className="vc-post" data-category={p.category}>
            <div className="vc-post__media">
              <img src={p.cover} alt={p.coverAlt} loading="lazy" decoding="async" />
            </div>
            <div className="vc-post__body">
              <p className="vc-post__meta">
                <span className="vc-chip">{p.categoryLabel}</span>
                <span>
                  {p.readMinutes} {t.minRead}
                </span>
              </p>
              <h3>
                <Link href={href}>{p.title}</Link>
              </h3>
              <p>{p.excerpt}</p>
              <Link href={href} className="vc-more" aria-label={`${t.readArticle} : ${p.title}`}>
                {t.readArticle}
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/** Latest articles (home, section 6), with a link to the blog. */
export function LatestPosts({ lang, copy }: { lang: Locale; copy: { eyebrow: string; title: string; text: string } }) {
  return (
    <section className="sec vc-latest" aria-labelledby="latest-title">
      <div className="wrap">
        <SectionHead eyebrow={copy.eyebrow} title={copy.title} id="latest-title" text={copy.text}>
          <Link href={pagePath(lang, "blog")} className="pill vc-btn">
            {COMMON[lang].allArticles}
          </Link>
        </SectionHead>
        <PostCards lang={lang} limit={3} />
      </div>
    </section>
  );
}

/** Visually distinct closing call to action, with a button straight to the quote form. */
export function FinalCta({
  lang,
  title,
  text,
  cta,
  project,
}: {
  lang: Locale;
  title: string;
  text: string;
  cta: string;
  project?: string;
}) {
  const href = pagePath(lang, "quote") + (project ? `?project=${project}` : "");
  return (
    <section className="vc-final" aria-labelledby="final-title">
      <div className="vc-final__box">
        <span className="vc-final__glow" aria-hidden="true" />
        <div className="wrap vc-final__inner">
          <h2 id="final-title">{title}</h2>
          <p>{text}</p>
          <div className="vc-final__actions">
            <Link href={href} className="pill pill-w vc-btn">
              {cta}
            </Link>
            <a href={site.phoneHref} className="pill vc-btn vc-btn--ghost">
              {COMMON[lang].call} {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Visible breadcrumb trail (its JSON-LD is emitted by the page). */
export function Breadcrumbs({ lang, items, light }: { lang: Locale; items: [string, string][]; light?: boolean }) {
  return (
    <nav aria-label={COMMON[lang].breadcrumb} className={`vc-crumbs${light ? " is-light" : ""}`}>
      <ol>
        {items.map(([name, path], i) => (
          <li key={path}>
            {i < items.length - 1 ? <Link href={path}>{name}</Link> : <span aria-current="page">{name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
