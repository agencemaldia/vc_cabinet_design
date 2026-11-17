import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

import { BlogBrowser } from "@/components/sections/blog-browser";
import { BUSINESS_ID, JsonLd, breadcrumbLd } from "@/components/sections/json-ld";
import { SiteHeader } from "@/components/site/site-header";
import { ds } from "@/components/site/sx";
import { CATEGORIES, getPosts, type Block, type CategoryKey, type Post } from "@/content/blog";
import { COMMON } from "@/content/common";
import { DESIGN } from "@/content/design";
import { localeHtmlLang, localizePath, type Locale } from "@/lib/i18n/config";
import { pagePath } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

const ARTICLE: Record<
  Locale,
  {
    toc: string;
    share: string;
    shareOn: [string, string, string];
    by: string;
    similar: string;
    ctaKicker: string;
    ctaText: string;
    empty: string;
  }
> = {
  fr: {
    toc: "DANS CET ARTICLE",
    share: "PARTAGER",
    shareOn: ["Partager sur Facebook", "Partager sur LinkedIn", "Partager par courriel"],
    by: "Par",
    similar: "Articles similaires",
    ctaKicker: "SOUMISSION GRATUITE",
    ctaText: "Un projet de cuisine ou de salle de bain ? Parlez-en à un designer.",
    empty: "Aucun article dans cette catégorie pour l’instant.",
  },
  en: {
    toc: "IN THIS ARTICLE",
    share: "SHARE",
    shareOn: ["Share on Facebook", "Share on LinkedIn", "Share by email"],
    by: "By",
    similar: "Similar Posts",
    ctaKicker: "FREE QUOTE",
    ctaText: "Planning a kitchen or bathroom project? Talk to a designer.",
    empty: "No articles in this category yet.",
  },
  es: {
    toc: "EN ESTE ARTÍCULO",
    share: "COMPARTIR",
    shareOn: ["Compartir en Facebook", "Compartir en LinkedIn", "Compartir por correo"],
    by: "Por",
    similar: "Artículos similares",
    ctaKicker: "COTIZACIÓN GRATIS",
    ctaText: "¿Planeas un proyecto de cocina o baño? Habla con un diseñador.",
    empty: "Aún no hay artículos en esta categoría.",
  },
};

const CHIP: CSSProperties = {
  padding: "4px 10px",
  borderRadius: "0",
  background: "#EEF3F0",
  color: "#125A50",
  fontWeight: "700",
  fontSize: "12px",
};
const H2: CSSProperties = {
  margin: "0",
  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
  fontWeight: "400",
  fontSize: "clamp(40px, 5.4vw, 76px)",
  lineHeight: "1.04",
  letterSpacing: "-.01em",
  color: "#1D2B44",
};
const WHITE_BTN: CSSProperties = {
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
};

/** Section titles are numbered by the page (heading and contents list): drop a number already in the text. */
const unnumbered = (text: string) => text.replace(/^\d+[.)]\s*/, "");

function dateLabel(lang: Locale, date: string, style: "medium" | "long" = "medium") {
  return new Intl.DateTimeFormat(localeHtmlLang[lang], { dateStyle: style, timeZone: "UTC" }).format(new Date(date));
}

/** Blog index (specification §5) in the original design: title, featured article, category chips, cards. */
export function BlogIndexPage({ lang }: { lang: Locale }) {
  const d = DESIGN[lang];
  const c = COMMON[lang];
  const posts = getPosts(lang);
  const featured = posts[0];
  const base = pagePath(lang, "blog");
  const crumbs: [string, string][] = [
    [c.home, pagePath(lang, "home")],
    [c.blog, base],
  ];

  return (
    <>
      <SiteHeader key="header" variant="solid" current="blog" />
      <main key="main">
        <section className="sec" aria-labelledby="blog-title" {...ds({ paddingBottom: "48px" })}>
          <div className="wrap" {...ds({ display: "flex", flexDirection: "column", gap: "40px" })}>
            <div
              {...ds({
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "24px",
              })}
            >
              <div {...ds({ display: "flex", flexDirection: "column", gap: "16px" })}>
                <h1
                  id="blog-title"
                  {...ds({
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "350",
                    fontSize: "clamp(56px, 9vw, 128px)",
                    lineHeight: ".95",
                    letterSpacing: "-.03em",
                    color: "#1D2B44",
                  })}
                >
                  {d.blogH1}
                </h1>
              </div>
              <p
                {...ds({
                  margin: "0",
                  maxWidth: "420px",
                  fontSize: "clamp(16px, 1.3vw, 19px)",
                  lineHeight: "1.5",
                  color: "#5E636B",
                })}
              >
                {d.blogLead}
              </p>
            </div>
            {featured && (
              <Link
                href={`${base}/${featured.slug}`}
                className="card"
                {...ds({
                  display: "flex",
                  flexWrap: "wrap",
                  background: "#FFFFFF",
                  borderRadius: "0",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "#22252A",
                })}
              >
                <img
                  className="ph"
                  src={featured.cover}
                  alt={featured.coverAlt}
                  fetchPriority="high"
                  {...ds({
                    flex: "1.3 1 420px",
                    minHeight: "clamp(260px, 32vw, 460px)",
                    backgroundColor: "#D5D8DE",
                    minWidth: "0",
                    objectFit: "cover",
                  })}
                />
                <div
                  {...ds({
                    flex: "1 1 360px",
                    padding: "clamp(28px, 4vw, 56px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    justifyContent: "center",
                  })}
                >
                  <div
                    {...ds({ display: "flex", gap: "10px", alignItems: "center", fontSize: "13px", color: "#5E636B" })}
                  >
                    <span {...ds(CHIP)}>{featured.categoryLabel}</span>
                    <time dateTime={featured.date}>{dateLabel(lang, featured.date)}</time>
                    <span>
                      · {featured.readMinutes} {d.minRead}
                    </span>
                  </div>
                  <h2
                    {...ds({
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "400",
                      fontSize: "clamp(32px, 3.6vw, 48px)",
                      lineHeight: "1.08",
                      color: "#1D2B44",
                    })}
                  >
                    {featured.title}
                  </h2>
                  <p {...ds({ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#5E636B" })}>
                    {featured.excerpt}
                  </p>
                  <span
                    {...ds({
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#125A50",
                    })}
                  >
                    {d.readArticle}
                  </span>
                </div>
              </Link>
            )}
          </div>
        </section>
        <section aria-label={c.allArticles} {...ds({ paddingBottom: "clamp(64px, 8vw, 128px)" })}>
          <div className="wrap">
            <BlogBrowser
              posts={posts.map((p) => ({
                slug: p.slug,
                href: `${base}/${p.slug}`,
                category: p.category,
                categoryLabel: p.categoryLabel,
                title: p.title,
                excerpt: p.excerpt,
                cover: p.cover,
                coverAlt: p.coverAlt,
                date: p.date,
                dateLabel: dateLabel(lang, p.date),
              }))}
              featured={featured?.slug}
              categories={(Object.keys(CATEGORIES[lang]) as CategoryKey[]).map((key) => ({
                key,
                label: CATEGORIES[lang][key],
              }))}
              labels={{ all: d.all, filter: d.filter, readMore: d.readMore, empty: ARTICLE[lang].empty }}
              cta={{ title: d.ctaCardTitle, text: d.ctaCardText, href: pagePath(lang, "quote"), label: c.cta }}
            />
          </div>
        </section>

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${site.url}${base}#blog`,
            name: `${site.name} — ${c.blog}`,
            url: `${site.url}${base}`,
            inLanguage: localeHtmlLang[lang],
            publisher: { "@id": BUSINESS_ID },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `${site.url}${base}/${p.slug}`,
              datePublished: p.date,
            })),
          }}
        />
        <JsonLd data={breadcrumbLd(crumbs)} />
      </main>
    </>
  );
}

/** Article body in the original design: lead paragraph, numbered h2s, lists, and the green call-to-action box. */
function Body({
  blocks,
  lang,
  cta,
  photo,
}: {
  blocks: Block[];
  lang: Locale;
  cta: ReactNode;
  photo?: { src: string; alt: string };
}) {
  const firstP = blocks.findIndex((b) => b.type === "p");
  const h2Indexes = blocks.flatMap((b, i) => (b.type === "h2" ? [i] : []));
  // The design places its call to action between the second and third sections, and the photo before the second.
  const ctaAt = h2Indexes[2] ?? blocks.length;
  const photoAt = photo ? (h2Indexes[1] ?? -1) : -1;
  const figure = photo && (
    <figure key="photo" className="vc-article-photo">
      <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" width={1920} height={1280} />
    </figure>
  );
  return (
    <>
      {blocks.map((b, i) => {
        const node = (() => {
          if (b.type === "h2") {
            const h2 = h2Indexes.indexOf(i) + 1;
            return (
              <h2
                key={i}
                id={`s${h2}`}
                {...ds({
                  margin: "56px 0 20px",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "450",
                  fontSize: "clamp(28px, 3vw, 38px)",
                  lineHeight: "1.15",
                  color: "#1D2B44",
                })}
              >
                <span {...ds({ color: "#125A50" })}>{h2}.</span> {unnumbered(b.text)}
              </h2>
            );
          }
          if (b.type === "h3")
            return (
              <h3 key={i} {...ds({ margin: "32px 0 12px", fontSize: "22px", fontWeight: "600", color: "#1D2B44" })}>
                {b.text}
              </h3>
            );
          if (b.type === "ul")
            return (
              <ul
                key={i}
                {...ds({
                  margin: "0 0 24px",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                })}
              >
                {b.items.map((it) => (
                  <li key={it} {...ds({ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" })}>
                    <span aria-hidden="true" {...ds({ color: "#125A50", flexShrink: "0", paddingTop: "4px" })}>
                      —
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          if (b.type === "link")
            return (
              <p key={i} {...ds({ margin: "0 0 24px", fontSize: "18px", lineHeight: "1.7" })}>
                <Link href={localizePath(b.href, lang)} {...ds({ color: "#125A50", fontWeight: "700" })}>
                  {b.text} →
                </Link>
              </p>
            );
          if (i === firstP)
            return (
              <p
                key={i}
                {...ds({ margin: "0", fontSize: "clamp(19px, 1.7vw, 22px)", lineHeight: "1.65", color: "#22252A" })}
              >
                {b.text}
              </p>
            );
          return (
            <p key={i} {...ds({ margin: "0 0 20px", fontSize: "18px", lineHeight: "1.7", color: "#22252A" })}>
              {b.text}
            </p>
          );
        })();
        if (i === photoAt) return [figure, node];
        return i === ctaAt ? [<div key={`cta-${i}`}>{cta}</div>, node] : node;
      })}
      {ctaAt >= blocks.length && cta}
    </>
  );
}

/** One article (specification §5) in the original design: its own URL, title, cover, contents, related posts. */
export function ArticlePage({ lang, post }: { lang: Locale; post: Post }) {
  const a = ARTICLE[lang];
  const d = DESIGN[lang];
  const c = COMMON[lang];
  const base = pagePath(lang, "blog");
  const url = `${site.url}${base}/${post.slug}`;
  const crumbs: [string, string][] = [
    [c.home, pagePath(lang, "home")],
    [c.blog, base],
    [post.title, `${base}/${post.slug}`],
  ];
  const sections = post.body.flatMap((b) => (b.type === "h2" ? [unnumbered(b.text)] : []));
  const related = getPosts(lang)
    .filter((p) => p.slug !== post.slug)
    .sort((x, y) => Number(y.category === post.category) - Number(x.category === post.category))
    .slice(0, 3);
  const share = [
    [
      a.shareOn[0],
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z",
    ],
    [
      a.shareOn[1],
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "M7.5 10.5V17M7.5 7.3v.01M11.5 17v-6.5M11.5 13.5c0-2 1.2-3 2.6-3s2.4 1 2.4 3V17",
    ],
    [
      a.shareOn[2],
      `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}`,
      "M3.5 6l8.5 7 8.5-7",
    ],
  ] as const;

  const cta = (
    <aside
      aria-label={a.ctaKicker}
      {...ds({
        margin: "56px 0 0",
        padding: "32px",
        borderRadius: "0",
        background: "#125A50",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      <div {...ds({ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "8px" })}>
        <span {...ds({ fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#BCCDC3" })}>
          {a.ctaKicker}
        </span>
        <p
          {...ds({
            margin: "0",
            fontFamily: "var(--font-urbanist), system-ui, sans-serif",
            fontSize: "26px",
            lineHeight: "1.25",
            color: "#EFF0F2",
          })}
        >
          {a.ctaText}
        </p>
      </div>
      <Link href={pagePath(lang, "quote")} className="pill pill-w" {...ds(WHITE_BTN)}>
        {c.cta}
      </Link>
    </aside>
  );

  return (
    <>
      <SiteHeader key="header" variant="solid" current="blog" />
      <main key="main">
        <article>
          <header className="sec" {...ds({ paddingBottom: "40px" })}>
            <div
              className="wrap"
              {...ds({ maxWidth: "1040px", display: "flex", flexDirection: "column", gap: "20px" })}
            >
              <nav aria-label={c.breadcrumb}>
                <ol
                  {...ds({
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    fontSize: "14px",
                  })}
                >
                  <li>
                    <Link href={crumbs[0]![1]}>{crumbs[0]![0]}</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href={crumbs[1]![1]}>{crumbs[1]![0]}</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" {...ds({ color: "#22252A", fontWeight: "600" })}>
                    {post.title}
                  </li>
                </ol>
              </nav>
              <div {...ds({ display: "flex", flexWrap: "wrap", gap: "8px" })}>
                <Link
                  href={base}
                  {...ds({
                    padding: "6px 12px",
                    borderRadius: "0",
                    background: "#EEF3F0",
                    color: "#125A50",
                    fontWeight: "700",
                    fontSize: "13px",
                    textDecoration: "none",
                  })}
                >
                  {post.categoryLabel}
                </Link>
              </div>
              <h1
                {...ds({
                  margin: "0",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "350",
                  fontSize: "clamp(42px, 6.4vw, 88px)",
                  lineHeight: "1",
                  letterSpacing: "-.025em",
                  color: "#1D2B44",
                })}
              >
                {post.title}
              </h1>
              <div
                {...ds({
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 20px",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#5E636B",
                })}
              >
                <span {...ds({ display: "flex", alignItems: "center", gap: "10px" })}>
                  <span
                    aria-hidden="true"
                    {...ds({
                      width: "40px",
                      height: "40px",
                      borderRadius: "0",
                      background: "#EEF3F0",
                      color: "#125A50",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "600",
                    })}
                  >
                    V
                  </span>
                  <span>
                    {a.by} <strong {...ds({ color: "#22252A" })}>{site.name}</strong>
                  </span>
                </span>
                <time dateTime={post.date}>{dateLabel(lang, post.date, "long")}</time>
                <span {...ds({ display: "flex", alignItems: "center", gap: "6px" })}>
                  {post.readMinutes} {d.minRead}
                </span>
              </div>
              <p
                {...ds({
                  margin: "0",
                  maxWidth: "720px",
                  fontSize: "clamp(16px, 1.3vw, 19px)",
                  lineHeight: "1.5",
                  color: "#5E636B",
                })}
              >
                {post.excerpt}
              </p>
            </div>
          </header>
          <div className="wrap" {...ds({ maxWidth: "1280px" })}>
            <img
              className="ph"
              src={post.cover}
              alt={post.coverAlt}
              fetchPriority="high"
              {...ds({
                height: "clamp(260px, 42vw, 600px)",
                backgroundColor: "#D5D8DE",
                borderRadius: "0",
                width: "100%",
                objectFit: "cover",
                display: "block",
              })}
            />
          </div>
          <div
            className="wrap vc-article-layout"
            {...ds({
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(32px, 6vw, 96px)",
              paddingTop: "64px",
              paddingBottom: "clamp(64px, 8vw, 112px)",
              alignItems: "flex-start",
            })}
          >
            <aside
              {...ds({ flex: "1 1 240px", maxWidth: "320px", display: "flex", flexDirection: "column", gap: "24px" })}
            >
              {sections.length > 0 && (
                <nav aria-label={a.toc} {...ds({ padding: "24px", borderRadius: "0", background: "#EFF0F2" })}>
                  <p
                    {...ds({
                      margin: "0 0 12px",
                      fontSize: "12px",
                      fontWeight: "700",
                      letterSpacing: ".16em",
                      color: "#5E636B",
                    })}
                  >
                    {a.toc}
                  </p>
                  <ol
                    {...ds({
                      margin: "0",
                      padding: "0",
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    })}
                  >
                    {sections.map((title, i) => (
                      <li key={title}>
                        <a
                          href={`#s${i + 1}`}
                          className="lnk"
                          {...ds({
                            display: "flex",
                            gap: "10px",
                            minHeight: "36px",
                            alignItems: "center",
                            fontSize: "15px",
                            color: "#40444B",
                            fontWeight: "500",
                            textDecoration: "none",
                          })}
                        >
                          <span {...ds({ color: "#125A50", fontWeight: "700" })}>{String(i + 1).padStart(2, "0")}</span>
                          {title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              <div {...ds({ display: "flex", flexDirection: "column", gap: "12px" })}>
                <span {...ds({ fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#5E636B" })}>
                  {a.share}
                </span>
                <div {...ds({ display: "flex", gap: "10px" })}>
                  {share.map(([label, href, path]) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      {...ds({
                        width: "44px",
                        height: "44px",
                        borderRadius: "0",
                        background: "#EFF0F2",
                        color: "#1D2B44",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      })}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {path.startsWith("M3.5") ? <rect x="3" y="5" width="18" height="14" rx="1.5" /> : null}
                        {path.startsWith("M7.5") ? <rect x="3" y="3" width="18" height="18" rx="2" /> : null}
                        <path d={path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
            <div {...ds({ flex: "3 1 480px", maxWidth: "700px", minWidth: "0" })}>
              <Body
                blocks={post.body}
                lang={lang}
                cta={cta}
                photo={post.photo && { src: post.photo.src, alt: post.photo.alt[lang] }}
              />
            </div>
          </div>
        </article>

        <section className="sec" aria-labelledby="related-title" {...ds({ background: "#EFF0F2" })}>
          <div className="wrap">
            <div
              {...ds({ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "clamp(32px, 4vw, 56px)" })}
            >
              <h2 id="related-title" {...ds(H2)}>
                {a.similar}
              </h2>
            </div>
            <div {...ds({ display: "flex", flexWrap: "wrap", gap: "24px" })}>
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`${base}/${p.slug}`}
                  className="card"
                  {...ds({
                    flex: "1 1 320px",
                    display: "flex",
                    flexDirection: "column",
                    background: "#FFFFFF",
                    borderRadius: "0",
                    overflow: "hidden",
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
                    {...ds({
                      padding: "24px 28px 28px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      flex: "1",
                    })}
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
                      <span {...ds(CHIP)}>{p.categoryLabel}</span>
                      <time dateTime={p.date}>{dateLabel(lang, p.date)}</time>
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
                      {d.readMore}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: `${site.url}${post.cover}`,
            datePublished: post.date,
            dateModified: post.date,
            articleSection: post.categoryLabel,
            inLanguage: localeHtmlLang[lang],
            isPartOf: { "@id": `${site.url}${base}#blog` },
            author: { "@type": "Organization", "@id": BUSINESS_ID, name: site.name, url: site.url },
            publisher: {
              "@type": "Organization",
              "@id": BUSINESS_ID,
              name: site.name,
              logo: `${site.url}${site.logo}`,
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            url,
          }}
        />
        <JsonLd data={breadcrumbLd(crumbs)} />
      </main>
    </>
  );
}
