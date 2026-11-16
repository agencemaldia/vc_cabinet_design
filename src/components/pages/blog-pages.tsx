import Link from "next/link";

import { Breadcrumbs, FinalCta, PostCards } from "@/components/sections/blocks";
import { BlogBrowser } from "@/components/sections/blog-browser";
import { BUSINESS_ID, JsonLd, breadcrumbLd } from "@/components/sections/json-ld";
import { SiteHeader } from "@/components/site/site-header";
import { CATEGORIES, getPosts, type Block, type CategoryKey, type Post } from "@/content/blog";
import { COMMON } from "@/content/common";
import { HOME } from "@/content/home";
import { localeHtmlLang, localizePath, type Locale } from "@/lib/i18n/config";
import { pagePath } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

const BLOG: Record<
  Locale,
  {
    kicker: string;
    title: string;
    titleEm: string;
    lead: string;
    featured: string;
    filter: string;
    empty: string;
    related: string;
    services: string;
  }
> = {
  fr: {
    kicker: "Blogue",
    title: "Idées et conseils",
    titleEm: "de rénovation.",
    lead: "Cuisines, salles de bain, matériaux et aménagement : nos articles pour préparer votre projet à Tampa Bay.",
    featured: "À la une",
    filter: "Filtrer par catégorie",
    empty: "Aucun article dans cette catégorie pour l’instant.",
    related: "À lire aussi",
    services: "Nos services",
  },
  en: {
    kicker: "Blog",
    title: "Renovation ideas",
    titleEm: "and advice.",
    lead: "Kitchens, bathrooms, materials and layouts: our articles to help you prepare your project in Tampa Bay.",
    featured: "Featured",
    filter: "Filter by category",
    empty: "No articles in this category yet.",
    related: "Read next",
    services: "Our services",
  },
  es: {
    kicker: "Blog",
    title: "Ideas y consejos",
    titleEm: "de remodelación.",
    lead: "Cocinas, baños, materiales y distribución: nuestros artículos para preparar tu proyecto en Tampa Bay.",
    featured: "Destacado",
    filter: "Filtrar por categoría",
    empty: "Aún no hay artículos en esta categoría.",
    related: "Sigue leyendo",
    services: "Nuestros servicios",
  },
};

const blogMeta = BLOG;
export { blogMeta };

/** Blog index (specification §5): header, featured article, category filters, article cards, call to action. */
export function BlogIndexPage({ lang }: { lang: Locale }) {
  const t = BLOG[lang];
  const c = COMMON[lang];
  const posts = getPosts(lang);
  const featured = posts[0];
  const base = pagePath(lang, "blog");
  const crumbs: [string, string][] = [
    [c.home, pagePath(lang, "home")],
    [c.blog, base],
  ];
  const card = (p: Post) => ({
    slug: p.slug,
    href: `${base}/${p.slug}`,
    category: p.category,
    categoryLabel: p.categoryLabel,
    title: p.title,
    excerpt: p.excerpt,
    cover: p.cover,
    coverAlt: p.coverAlt,
    readMinutes: p.readMinutes,
  });

  return (
    <main>
      <SiteHeader variant="solid" current="blog" />
      <section className="sec vc-page-head" aria-labelledby="blog-title">
        <div className="wrap">
          <Breadcrumbs lang={lang} items={crumbs} />
          <div className="vc-page-head__grid">
            <h1 id="blog-title">
              {t.title} <em>{t.titleEm}</em>
            </h1>
            <p>{t.lead}</p>
          </div>
        </div>
      </section>

      {featured && (
        <section className="vc-featured" aria-label={t.featured}>
          <div className="wrap">
            <Link href={`${base}/${featured.slug}`} className="vc-featured__card">
              <span className="vc-featured__media">
                <img src={featured.cover} alt={featured.coverAlt} fetchPriority="high" />
              </span>
              <span className="vc-featured__body">
                <span className="vc-post__meta">
                  <span className="vc-chip">{t.featured}</span>
                  <span className="vc-chip is-soft">{featured.categoryLabel}</span>
                  <span>
                    {featured.readMinutes} {c.minRead}
                  </span>
                </span>
                <span className="vc-featured__title">{featured.title}</span>
                <span className="vc-featured__text">{featured.excerpt}</span>
                <span className="vc-more">{c.readArticle}</span>
              </span>
            </Link>
          </div>
        </section>
      )}

      <section className="sec vc-blog-list" aria-label={c.allArticles}>
        <div className="wrap">
          <BlogBrowser
            posts={posts.map(card)}
            featured={featured?.slug}
            categories={(Object.keys(CATEGORIES[lang]) as CategoryKey[]).map((key) => ({
              key,
              label: CATEGORIES[lang][key],
            }))}
            labels={{
              all: c.allArticles,
              filter: t.filter,
              readArticle: c.readArticle,
              minRead: c.minRead,
              empty: t.empty,
            }}
          />
        </div>
      </section>

      <FinalCta lang={lang} title={HOME[lang].final.title} text={HOME[lang].final.text} cta={HOME[lang].final.cta} />

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
  );
}

function Body({ blocks, lang }: { blocks: Block[]; lang: Locale }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
        if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
        if (b.type === "ul")
          return (
            <ul key={i}>
              {b.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          );
        if (b.type === "link")
          return (
            <p key={i} className="vc-article__link">
              <Link href={localizePath(b.href, lang)}>{b.text} →</Link>
            </p>
          );
        return <p key={i}>{b.text}</p>;
      })}
    </>
  );
}

/** One article (specification §5): its own URL, title, cover, sub-headed body, internal links, structured data. */
export function ArticlePage({ lang, post }: { lang: Locale; post: Post }) {
  const t = BLOG[lang];
  const c = COMMON[lang];
  const base = pagePath(lang, "blog");
  const url = `${site.url}${base}/${post.slug}`;
  const crumbs: [string, string][] = [
    [c.home, pagePath(lang, "home")],
    [c.blog, base],
    [post.title, `${base}/${post.slug}`],
  ];
  const date = new Intl.DateTimeFormat(localeHtmlLang[lang], { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(post.date),
  );

  return (
    <main>
      <SiteHeader variant="solid" current="blog" />
      <article className="vc-article">
        <header className="sec vc-article__head">
          <div className="wrap vc-article__narrow">
            <Breadcrumbs lang={lang} items={crumbs} />
            <p className="vc-post__meta">
              <span className="vc-chip">{post.categoryLabel}</span>
              <time dateTime={post.date}>{date}</time>
              <span>
                {post.readMinutes} {c.minRead}
              </span>
            </p>
            <h1>{post.title}</h1>
            <p className="vc-article__lead">{post.excerpt}</p>
          </div>
          <div className="wrap">
            <img className="vc-article__cover" src={post.cover} alt={post.coverAlt} fetchPriority="high" />
          </div>
        </header>
        <div className="wrap vc-article__layout">
          <div className="vc-article__body">
            <Body blocks={post.body} lang={lang} />
          </div>
          <aside className="vc-article__aside">
            <p className="vc-eyebrow">{t.services}</p>
            <Link href={pagePath(lang, "kitchen")} className="vc-related__card">
              <strong>{c.kitchen}</strong>
            </Link>
            <Link href={pagePath(lang, "bathroom")} className="vc-related__card">
              <strong>{c.bathroom}</strong>
            </Link>
            <Link href={pagePath(lang, "quote")} className="pill pill-d vc-btn">
              {c.cta}
            </Link>
          </aside>
        </div>
      </article>

      <section className="sec vc-latest" aria-labelledby="related-title">
        <div className="wrap">
          <h2 id="related-title" className="vc-related__heading">
            {t.related}
          </h2>
          <PostCards lang={lang} limit={3} exclude={post.slug} />
        </div>
      </section>

      <FinalCta lang={lang} title={HOME[lang].final.title} text={HOME[lang].final.text} cta={HOME[lang].final.cta} />

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
          publisher: { "@type": "Organization", "@id": BUSINESS_ID, name: site.name, logo: `${site.url}${site.logo}` },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          url,
        }}
      />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </main>
  );
}
