import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ds } from "@/components/site/sx";

import { SampleBadge } from "@/components/sections/blocks";
import { DesignContact } from "@/components/sections/design-contact";
import { DesignFaq } from "@/components/sections/design-faq";
import { HomeHero } from "@/components/sections/home-hero";
import { JsonLd, faqLd } from "@/components/sections/json-ld";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { getPosts } from "@/content/blog";
import { COMMON } from "@/content/common";
import { DESIGN } from "@/content/design";
import { HOME } from "@/content/home";
import { REVIEWS } from "@/content/reviews";
import { localeHtmlLang, type Locale } from "@/lib/i18n/config";
import { pagePath } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

/** Hero video files, in order of preference; only those present in /public are offered to the browser. */
const VIDEO_FILES = [
  { src: "/videos/hero.webm", type: "video/webm" },
  { src: "/videos/hero.mp4", type: "video/mp4" },
];
/** First frame of the video: shown while it loads, so playback starts without a jump. */
const POSTER = "/images/hero-poster-modern-kitchen-island.webp";
const SERVICE_IMAGES = {
  kitchen: "/images/kitchen-renovation-island-pendants.webp?v=2",
  bathroom: "/images/bathroom-renovation-wood-vanity-glass-shower.webp?v=2",
};
/** Photos running in a service row on hover (the design's "reel"). */
const REEL = {
  kitchen: [
    "/images/kitchen-renovation-island-pendants.webp?v=2",
    "/images/custom-kitchen-renovation-tampa.webp?v=2",
    "/images/kitchen-countertop-quartz.webp?v=2",
  ],
  bathroom: [
    "/images/bathroom-renovation-wood-vanity-glass-shower.webp?v=2",
    "/images/bathroom-renovation-floating-vanity.webp?v=2",
    "/images/bathroom-freestanding-tub.webp?v=2",
  ],
};

function heroSources() {
  return VIDEO_FILES.filter((v) => existsSync(join(process.cwd(), "public", v.src.split("?")[0]!)));
}

const H2: CSSProperties = {
  margin: "0",
  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(40px, 5.4vw, 76px)",
  lineHeight: "1.04",
  letterSpacing: "-.01em",
  color: "#1D2B44",
};
const OUTLINE_BTN: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  minHeight: "52px",
  padding: "0 28px",
  borderRadius: "0",
  fontSize: "15px",
  fontWeight: 600,
  textDecoration: "none",
  textAlign: "center",
};
const CHIP: CSSProperties = {
  padding: "8px 14px",
  borderRadius: "0",
  border: "1px solid rgba(255,255,255,.28)",
  fontSize: "13px",
  color: "rgba(255,255,255,.88)",
};

function Stars() {
  return (
    <span {...ds({ display: "inline-flex", gap: "2px", color: "#A23B2C" })} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Home page (specification §2) in the original V&C design. Sections in the required order — 1 video hero,
 * 2 reviews, 3 the two services, 4 the 5-step method, 5 FAQ, 6 latest articles, 7 final call to action with the
 * quote form — and the footer (8) added by the page frame. No other section.
 */
export function HomePage({ lang }: { lang: Locale }) {
  const t = HOME[lang];
  const d = DESIGN[lang];
  const c = COMMON[lang];
  const quote = pagePath(lang, "quote");
  const blog = pagePath(lang, "blog");
  const posts = getPosts(lang).slice(0, 3);
  const date = new Intl.DateTimeFormat(localeHtmlLang[lang], { dateStyle: "medium", timeZone: "UTC" });
  const services = (["kitchen", "bathroom"] as const).map((key, i) => ({
    key,
    n: String(i + 1).padStart(2, "0"),
    href: pagePath(lang, key),
    tile: d.servicesTile[key],
    copy: t.services[key],
  }));

  return (
    <main>
      {/* 1 — Video hero */}
      <HomeHero
        sources={heroSources()}
        poster={POSTER}
        copy={{
          aria: d.heroAria,
          list: d.heroList,
          line1: d.heroLine1,
          line2: d.heroLine2,
          tagline: d.heroTagline,
          text: t.hero.text,
          cta: { href: quote, label: t.hero.cta },
          secondary: { href: `${pagePath(lang, "kitchen")}#projects`, label: d.heroSecondary },
          scroll: d.scroll,
          pause: d.pause,
          play: d.play,
        }}
      />

      {/* 2 — Reviews */}
      <section className="sec" id="reviews" aria-labelledby="reviews-title">
        <div className="wrap">
          <div
            {...ds({
              marginBottom: "clamp(28px,3vw,48px)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
            })}
          >
            <div {...ds({ display: "flex", flexDirection: "column", gap: "12px" })}>
              <span
                {...ds({
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#5E636B",
                  textTransform: "uppercase",
                })}
              >
                {d.reviewsLabel}
              </span>
              <h2
                id="reviews-title"
                {...ds({
                  margin: 0,
                  fontSize: "clamp(26px,2.6vw,40px)",
                  lineHeight: 1.06,
                  fontWeight: 400,
                  color: "#1D2B44",
                })}
              >
                {t.reviews.title}
              </h2>
            </div>
            {REVIEWS.rating !== null ? (
              <a
                href={REVIEWS.profile ?? "#"}
                {...ds({
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  borderRadius: "6px",
                  padding: "12px 20px",
                  fontSize: "15px",
                  color: "#1D2B44",
                  textDecoration: "none",
                  background: "#EFF0F2",
                })}
              >
                <Stars />
                <span>
                  <strong {...ds({ fontWeight: 600 })}>{REVIEWS.rating.toFixed(1)}</strong>
                  {REVIEWS.count !== null && ` · ${REVIEWS.count}`} {t.reviews.ratingLabel}
                </span>
              </a>
            ) : (
              REVIEWS.draft && <SampleBadge lang={lang} />
            )}
          </div>
          <ul
            className="vc-dreviews"
            {...ds({ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "20px" })}
          >
            {REVIEWS.items[lang].map((r, i) => (
              <li
                key={i}
                {...ds({
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "32px",
                  borderRadius: "6px",
                  padding: "clamp(24px,2.6vw,36px)",
                  background: "#EFF0F2",
                })}
              >
                <figure {...ds({ margin: 0, display: "flex", flexDirection: "column", gap: "20px" })}>
                  <Stars />
                  <blockquote {...ds({ margin: 0, fontSize: "17px", lineHeight: 1.55, color: "#22252A" })}>
                    “{r.quote}”
                  </blockquote>
                </figure>
                <div {...ds({ display: "flex", alignItems: "center", gap: "12px" })}>
                  <span
                    aria-hidden="true"
                    {...ds({
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "999px",
                      background: "#125A50",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    })}
                  >
                    {r.name.replace(/[^A-Za-zÀ-ÿ]/g, "").charAt(0) || "·"}
                  </span>
                  <span {...ds({ display: "flex", flexDirection: "column", fontSize: "14px", lineHeight: 1.35 })}>
                    <span {...ds({ fontWeight: 600, color: "#1D2B44" })}>{r.name}</span>
                    <span {...ds({ color: "#5E636B" })}>
                      {r.place} · {r.project}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 — The two services */}
      <section
        className="sec grain"
        id="services"
        {...ds({ backgroundColor: "#125A50" })}
        aria-labelledby="services-title"
      >
        <div className="wrap">
          <div
            {...ds({
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
            })}
          >
            <div
              {...ds({ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "clamp(32px, 4vw, 56px)" })}
            >
              <h2 id="services-title" {...ds({ ...H2, color: "#FFFFFF" })}>
                {d.servicesTitle[0]}
                <br />
                {d.servicesTitle[1]}
              </h2>
            </div>
            <div {...ds({ marginBottom: "clamp(32px, 4vw, 56px)" })}>
              <Link
                href={quote}
                className="pill "
                {...ds({
                  ...OUTLINE_BTN,
                  background: "rgba(255,255,255,.08)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,.55)",
                })}
              >
                {c.ctaShort}
              </Link>
            </div>
          </div>
          <div {...ds({ display: "flex", flexWrap: "wrap", gap: "16px" })}>
            {services.map((s) => (
              <Link
                key={s.key}
                href={s.href}
                className="tile"
                {...ds({
                  position: "relative",
                  flex: "1 1 300px",
                  display: "flex",
                  minHeight: "clamp(420px, 40vw, 600px)",
                  borderRadius: "0",
                  textDecoration: "none",
                  color: "#FFFFFF",
                })}
              >
                <img
                  className="ph tile-img"
                  src={SERVICE_IMAGES[s.key]}
                  alt={s.copy.alt}
                  loading="lazy"
                  decoding="async"
                  {...ds({
                    position: "absolute",
                    inset: "0",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    backgroundColor: "#D5D8DE",
                  })}
                />
                <div
                  aria-hidden="true"
                  {...ds({
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(180deg, rgba(20,42,35,0) 35%, rgba(20,42,35,.78) 100%)",
                  })}
                />
                <div
                  {...ds({
                    position: "relative",
                    marginTop: "auto",
                    width: "100%",
                    padding: "clamp(22px, 2.4vw, 32px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  })}
                >
                  <span
                    {...ds({
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "clamp(52px, 5.6vw, 88px)",
                      lineHeight: ".95",
                    })}
                  >
                    {s.tile}
                  </span>
                  <span
                    {...ds({ fontSize: "15px", lineHeight: "1.5", color: "rgba(255,255,255,.85)", maxWidth: "420px" })}
                  >
                    {s.copy.text}
                  </span>
                  <span
                    className="tile-a"
                    {...ds({
                      alignSelf: "flex-start",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      minHeight: "44px",
                      padding: "0 18px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.6)",
                      fontSize: "14px",
                      fontWeight: 600,
                      transition: "background-color 250ms",
                    })}
                  >
                    {s.copy.link}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div {...ds({ marginTop: "clamp(40px, 5vw, 72px)", borderTop: "1px solid rgba(255,255,255,.16)" })}>
            {services.map((s) => (
              <Link
                key={s.key}
                href={s.href}
                className="row-l"
                {...ds({
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px 32px",
                  padding: "26px 0",
                  borderBottom: "1px solid rgba(255,255,255,.16)",
                  textDecoration: "none",
                })}
              >
                <span className="ri" aria-hidden="true">
                  <span className="ri-t">
                    {[...REEL[s.key], REEL[s.key][0]!].map((src, i) => (
                      <span key={i} className="ri-s" {...ds({ backgroundImage: `url(${src})` })} />
                    ))}
                  </span>
                </span>
                <span {...ds({ display: "flex", alignItems: "baseline", gap: "20px" })}>
                  <span {...ds({ fontSize: "13px", fontWeight: 600, color: "#BCCDC3" })}>{s.n}</span>
                  <span
                    {...ds({
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "clamp(36px, 4.4vw, 64px)",
                      lineHeight: "1",
                      color: "#FFFFFF",
                    })}
                  >
                    {s.tile}
                  </span>
                </span>
                <span {...ds({ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" })}>
                  {s.copy.points.map((p) => (
                    <span key={p} {...ds(CHIP)}>
                      {p}
                    </span>
                  ))}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Work method, 5 steps */}
      <ProcessTimeline
        eyebrow={t.method.eyebrow}
        title={t.method.title}
        text={t.method.text}
        steps={t.method.steps}
        cta={{ href: quote, label: c.cta }}
      />

      {/* 5 — FAQ */}
      <section className="sec" id="faq" {...ds({ background: "#FFFFFF" })} aria-labelledby="faq-title">
        <div className="wrap" {...ds({ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 96px)" })}>
          <div {...ds({ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "18px" })}>
            <h2 id="faq-title" {...ds({ ...H2, fontSize: "clamp(40px, 4.6vw, 64px)" })}>
              {t.faq.title}
            </h2>
            <p {...ds({ margin: "0", maxWidth: "360px", fontSize: "16px", lineHeight: "1.6", color: "#5E636B" })}>
              {d.faqHelp} <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </div>
          <DesignFaq items={t.faq.items} />
        </div>
        <JsonLd data={faqLd(t.faq.items)} />
      </section>

      {/* 6 — Latest articles */}
      <section className="sec" aria-labelledby="blog-title">
        <div className="wrap">
          <div
            {...ds({
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
            })}
          >
            <div
              {...ds({ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "clamp(32px, 4vw, 56px)" })}
            >
              <h2 id="blog-title" {...ds(H2)}>
                {d.blogTitle}
              </h2>
            </div>
            <div {...ds({ marginBottom: "clamp(32px, 4vw, 56px)" })}>
              <Link
                href={blog}
                className="pill "
                {...ds({ ...OUTLINE_BTN, background: "transparent", color: "#1D2B44", border: "1px solid #1D2B44" })}
              >
                {d.allArticles}
              </Link>
            </div>
          </div>
          <div {...ds({ display: "flex", flexWrap: "wrap", gap: "clamp(16px, 2vw, 28px)" })}>
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`${blog}/${p.slug}`}
                className="tile"
                {...ds({
                  flex: "1 1 300px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  textDecoration: "none",
                  color: "#22252A",
                })}
              >
                <div {...ds({ height: "240px", borderRadius: "0", overflow: "hidden", position: "relative" })}>
                  <img
                    className="ph tile-img"
                    src={p.cover}
                    alt={p.coverAlt}
                    // the design styles the article cards through this attribute (src/styles/overrides.css)
                    data-al={`Article cover: ${p.title}`}
                    loading="lazy"
                    decoding="async"
                    {...ds({
                      position: "absolute",
                      inset: "0",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      backgroundColor: "#2B4A3F",
                    })}
                  />
                  <span
                    {...ds({
                      position: "absolute",
                      left: "14px",
                      top: "14px",
                      padding: "6px 14px",
                      borderRadius: "0",
                      background: "#FFFFFF",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1D2B44",
                    })}
                  >
                    {p.categoryLabel}
                  </span>
                </div>
                <time dateTime={p.date} {...ds({ fontSize: "13px", color: "#5E636B" })}>
                  {date.format(new Date(p.date))}
                </time>
                <h3
                  {...ds({
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: "24px",
                    lineHeight: "1.2",
                    color: "#1D2B44",
                  })}
                >
                  {p.title}
                </h3>
                <span
                  {...ds({
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#125A50",
                  })}
                >
                  {d.readMore}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Final call to action, with the quote form */}
      <DesignContact lang={lang} />
    </main>
  );
}
