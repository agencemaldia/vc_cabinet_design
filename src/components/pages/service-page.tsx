import Link from "next/link";
import type { CSSProperties } from "react";

import { SampleBadge } from "@/components/sections/blocks";
import { DesignFaq } from "@/components/sections/design-faq";
import { GreenBento, GreenPanels } from "@/components/sections/green-blocks";
import { DesignContact } from "@/components/sections/design-contact";
import { BUSINESS_ID, JsonLd, breadcrumbLd, faqLd } from "@/components/sections/json-ld";
import { Comparator } from "@/components/site/comparator";
import { PinnedStatements } from "@/components/site/pinned-statements";
import { SiteHeader } from "@/components/site/site-header";
import { ds } from "@/components/site/sx";
import { BATHROOM } from "@/content/bathroom";
import { COMMON } from "@/content/common";
import { DESIGN } from "@/content/design";
import { KITCHEN } from "@/content/kitchen";
import { PROJECTS, PROJECT_LABELS, type Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n/config";
import { pagePath } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

const COPY = { kitchen: KITCHEN, bathroom: BATHROOM };
const HERO_IMAGE = {
  kitchen: "/images/custom-kitchen-renovation-tampa.webp?v=2",
  bathroom: "/images/bathroom-renovation-floating-vanity.webp?v=2",
};
const INTRO_IMAGE = {
  kitchen: "/images/kitchen-renovation-white-island.webp?v=2",
  bathroom: "/images/bathroom-renovation-wood-vanity-glass-shower.webp?v=2",
};
/** Design of each content section, in order (repeats). */
const DESIGNS = ["bento", "pinned", "panels"] as const;
/** Photos used by the bento grid and the panels. */
const GALLERY = {
  kitchen: [
    "/images/kitchen-renovation-island-pendants.webp?v=2",
    "/images/custom-kitchen-renovation-tampa.webp?v=2",
    "/images/kitchen-countertop-quartz.webp?v=2",
    "/images/kitchen-renovation-white-island.webp?v=2",
    "/images/kitchen-bathroom-renovation-tampa-bay.webp?v=2",
    "/images/small-kitchen-smart-storage.webp?v=2",
  ],
  bathroom: [
    "/images/bathroom-renovation-floating-vanity.webp?v=2",
    "/images/bathroom-renovation-wood-vanity-glass-shower.webp?v=2",
    "/images/bathroom-freestanding-tub.webp?v=2",
    "/images/bathroom-freestanding-bathtub-white-wall.webp",
  ],
};
const TILE_IMAGE = {
  kitchen: "/images/kitchen-renovation-island-pendants.webp?v=2",
  bathroom: "/images/bathroom-renovation-wood-vanity-glass-shower.webp?v=2",
  blog: "/images/kitchen-countertop-quartz.webp?v=2",
};

/* Styles of the original design (same text as its `data-s`, see src/components/site/sx.ts). */
const H2: CSSProperties = {
  margin: "0",
  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
  fontWeight: "400",
  fontSize: "clamp(40px, 5.4vw, 76px)",
  lineHeight: "1.04",
  letterSpacing: "-.01em",
  color: "#1D2B44",
};
const LEAD: CSSProperties = {
  margin: "0",
  maxWidth: "560px",
  fontSize: "clamp(16px, 1.3vw, 19px)",
  lineHeight: "1.5",
  color: "#5E636B",
};
const HEAD: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  marginBottom: "clamp(32px, 4vw, 56px)",
};
const BTN: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  minHeight: "52px",
  padding: "0 28px",
  borderRadius: "0",
};
const BTN_TEXT: CSSProperties = { fontSize: "15px", fontWeight: "600", textDecoration: "none", textAlign: "center" };
const TILE: CSSProperties = {
  position: "relative",
  flex: "1 1 300px",
  display: "flex",
  minHeight: "clamp(420px, 40vw, 600px)",
  borderRadius: "0",
  textDecoration: "none",
  color: "#FFFFFF",
};

/** A realized project in the design's "From dated to dream." style: wide before/after, then the facts. */
function ProjectBlock({ project, lang }: { project: Project; lang: Locale }) {
  const t = project.text[lang];
  const labels = PROJECT_LABELS[lang];
  const c = COMMON[lang];
  const facts: [string, string][] = [
    [labels.context, t.context],
    [labels.needs, t.needs],
    [labels.initial, t.initial],
    [labels.work, t.work],
    [labels.materials, t.materials],
    [labels.methods, t.methods],
    [labels.result, t.result],
  ];
  return (
    <article {...ds({ display: "flex", flexDirection: "column", gap: "24px" })}>
      <div
        {...ds({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "8px 24px",
        })}
      >
        <h3
          {...ds({
            margin: "0",
            fontFamily: "var(--font-urbanist), system-ui, sans-serif",
            fontWeight: "400",
            fontSize: "clamp(24px, 2.4vw, 36px)",
            lineHeight: "1.15",
            color: "#1D2B44",
          })}
        >
          {t.title}
        </h3>
        <span
          {...ds({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px",
            fontSize: "14px",
            color: "#5E636B",
          })}
        >
          {project.draft && <SampleBadge lang={lang} />}
          {t.location}
        </span>
      </div>
      <Comparator
        before={project.before}
        after={project.after}
        beforeAlt={`${t.title} — ${c.comparator.before}`}
        afterAlt={`${t.title} — ${c.comparator.after}`}
        labels={c.comparator}
        demo={project.demo}
        ratio="16 / 9"
        variant="design"
      />
      <ol
        {...ds({
          margin: "0",
          padding: "0",
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          gap: "0",
          borderTop: "1px solid #C9CDD4",
        })}
      >
        {facts.map(([k, v]) => (
          <li
            key={k}
            {...ds({
              flex: "1 1 260px",
              padding: "20px 24px 20px 0",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            })}
          >
            <h4 {...ds({ margin: "0", fontSize: "15px", fontWeight: "700", color: "#1D2B44" })}>{k}</h4>
            <p {...ds({ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#5E636B" })}>{v}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}

/**
 * Service page — kitchen (specification §3) or bathroom (§4) renovation, in the original V&C design: photo hero
 * with breadcrumbs, split introduction, content sections, realized projects with the before/after comparator,
 * FAQ, areas served and related pages, then "Let's work together" with the quote form.
 * Structured data: Service, FAQPage and BreadcrumbList.
 */
export function ServicePage({ lang, service }: { lang: Locale; service: "kitchen" | "bathroom" }) {
  const t = COPY[service][lang];
  const c = COMMON[lang];
  const d = DESIGN[lang];
  const self = pagePath(lang, service);
  const quote = `${pagePath(lang, "quote")}?project=${service}`;
  const other = service === "kitchen" ? "bathroom" : "kitchen";
  const projects = PROJECTS.filter((p) => p.service === service);
  const crumbs: [string, string][] = [
    [c.home, pagePath(lang, "home")],
    [service === "kitchen" ? c.kitchen : c.bathroom, self],
  ];
  const nav: [string, string][] = [
    ...t.sections.map((s): [string, string] => [s.id, s.nav]),
    ["projects", t.projects.nav],
    ["faq", t.faq.nav],
    ["areas", t.areas.nav],
  ];

  return (
    <main>
      <div {...ds({ padding: "clamp(8px, 1.2vw, 16px) clamp(8px, 1.2vw, 16px) 0", background: "#FFFFFF" })}>
        <div {...ds({ position: "relative", borderRadius: "0", overflow: "hidden" })}>
          <SiteHeader variant="overlay" current={service} />
          <section
            data-hero="dark"
            className="ph"
            aria-labelledby="hero-title"
            {...ds({
              position: "relative",
              backgroundColor: "#2B4A3F",
              minHeight: "clamp(560px, 52vw, 760px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            })}
          >
            <img
              src={HERO_IMAGE[service]}
              alt={t.hero.alt}
              fetchPriority="high"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              aria-hidden="true"
              {...ds({
                position: "absolute",
                inset: "0",
                background: "linear-gradient(180deg, rgba(20,42,35,.55) 0%, rgba(20,42,35,.72) 100%)",
              })}
            />
            <div
              className="wrap"
              {...ds({
                position: "relative",
                paddingTop: "168px",
                paddingBottom: "clamp(56px, 6vw, 96px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "22px",
              })}
            >
              <nav aria-label={c.breadcrumb}>
                <ol
                  {...ds({
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "rgba(255,255,255,.6)",
                  })}
                >
                  <li>
                    <Link href={crumbs[0]![1]} {...ds({ color: "rgba(255,255,255,.85)" })}>
                      {crumbs[0]![0]}
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" {...ds({ color: "#FFFFFF" })}>
                    {crumbs[1]![0]}
                  </li>
                </ol>
              </nav>
              <h1
                id="hero-title"
                {...ds({
                  margin: "0",
                  maxWidth: "1040px",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "400",
                  fontSize: "clamp(46px, 7vw, 104px)",
                  lineHeight: "1",
                  color: "#FFFFFF",
                })}
              >
                {t.hero.title}
                <br />
                <em {...ds({ color: "#BCCDC3" })}>{t.hero.titleEm}</em>
              </h1>
              <p
                {...ds({
                  margin: "0",
                  maxWidth: "620px",
                  fontSize: "clamp(16px, 1.3vw, 19px)",
                  lineHeight: "1.5",
                  color: "rgba(255,255,255,.88)",
                })}
              >
                {t.hero.text}
              </p>
              <div {...ds({ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" })}>
                <Link
                  href={quote}
                  className="pill pill-w"
                  {...ds({ ...BTN, background: "#FFFFFF", color: "#125A50", border: "0", ...BTN_TEXT })}
                >
                  {t.hero.cta}
                </Link>
                <a
                  href="#projects"
                  className="pill "
                  {...ds({
                    ...BTN,
                    background: "rgba(255,255,255,.08)",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,.55)",
                    ...BTN_TEXT,
                  })}
                >
                  {t.hero.secondary}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Introduction */}
      <section className="sec" aria-labelledby="intro-title">
        <div
          className="wrap"
          {...ds({ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" })}
        >
          <div {...ds({ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: "20px" })}>
            <h2 id="intro-title" {...ds(H2)}>
              {t.intro.title}
            </h2>
            {t.intro.paragraphs.map((p) => (
              <p
                key={p}
                {...ds({ margin: "0", maxWidth: "560px", fontSize: "16px", lineHeight: "1.6", color: "#22252A" })}
              >
                {p}
              </p>
            ))}
            <ul
              {...ds({
                margin: "0",
                padding: "0",
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              })}
            >
              {t.intro.highlights.map((h) => (
                <li
                  key={h}
                  {...ds({
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#1D2B44",
                  })}
                >
                  <span
                    aria-hidden="true"
                    {...ds({
                      flexShrink: "0",
                      width: "22px",
                      height: "22px",
                      marginTop: "1px",
                      borderRadius: "6px",
                      background: "#125A50",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    })}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <div {...ds({ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" })}>
              <Link
                href={quote}
                className="pill pill-d"
                {...ds({ ...BTN, background: "#125A50", color: "#FFFFFF", border: "0", ...BTN_TEXT })}
              >
                {c.cta}
              </Link>
              <a
                href={site.phoneHref}
                className="lnk"
                {...ds({
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "44px",
                  fontWeight: "700",
                  color: "#1D2B44",
                  textDecoration: "none",
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
                  <path d="M5 3h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 7.3 7.3l1.4-2.2L21 15.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
                </svg>
                {site.phone}
              </a>
            </div>
          </div>
          <img
            className="ph"
            src={INTRO_IMAGE[service]}
            alt={t.hero.alt}
            loading="lazy"
            decoding="async"
            {...ds({
              height: "clamp(360px, 40vw, 600px)",
              backgroundColor: "#2B4A3F",
              flex: "1 1 420px",
              borderRadius: "0",
              minWidth: "0",
              objectFit: "cover",
            })}
          />
        </div>
        {/* On this page — in the style of the design's filter chips */}
        <nav className="wrap" aria-label={c.onThisPage} {...ds({ marginTop: "clamp(40px, 5vw, 72px)" })}>
          <ul {...ds({ margin: "0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "10px" })}>
            {nav.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="vc-chiplink"
                  {...ds({
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: "44px",
                    padding: "0 20px",
                    borderRadius: "0",
                    border: "1.5px solid #C9CDD4",
                    background: "#FFFFFF",
                    color: "#1D2B44",
                    fontFamily: "var(--font-urbanist), sans-serif",
                    fontSize: "15px",
                    fontWeight: "600",
                    textDecoration: "none",
                  })}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Content sections in three alternating designs: green bento grid, green pinned statements, and
          expanding photo panels — flat greens only. */}
      {t.sections.map((sec, i) => {
        const items = sec.items.map((it) => ({ title: it.title, text: it.text }));
        const design = DESIGNS[i % DESIGNS.length];
        if (design === "pinned")
          return <PinnedStatements key={sec.id} id={sec.id} title={sec.title} lead={sec.intro} items={items} />;
        const Block = design === "bento" ? GreenBento : GreenPanels;
        return (
          <Block key={sec.id} id={sec.id} title={sec.title} lead={sec.intro} items={items} images={GALLERY[service]} />
        );
      })}

      {/* Realized projects */}
      <section className="sec" id="projects" aria-labelledby="projects-title" style={{ scrollMarginTop: "90px" }}>
        <div className="wrap">
          <div {...ds(HEAD)}>
            <h2 id="projects-title" {...ds(H2)}>
              {t.projects.title}
            </h2>
            <p {...ds(LEAD)}>{t.projects.intro}</p>
          </div>
          <div {...ds({ display: "flex", flexDirection: "column", gap: "clamp(56px, 7vw, 112px)" })}>
            {projects.map((p) => (
              <ProjectBlock key={p.id} project={p} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq" aria-labelledby="faq-title" {...ds({ background: "#FFFFFF" })}>
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
      </section>

      {/* Areas served and related pages */}
      <section className="sec grain" id="areas" aria-labelledby="areas-title" {...ds({ backgroundColor: "#1D2B44" })}>
        <div className="wrap">
          <div {...ds(HEAD)}>
            <h2 id="areas-title" {...ds({ ...H2, color: "#FFFFFF" })}>
              {t.areas.title}
            </h2>
            <p {...ds({ ...LEAD, color: "rgba(255,255,255,.78)" })}>{t.areas.text}</p>
            <p {...ds({ margin: "0", fontSize: "14px", color: "rgba(255,255,255,.8)" })}>{site.cities.join(" · ")}</p>
          </div>
          <div {...ds({ display: "flex", flexWrap: "wrap", gap: "24px" })}>
            {(
              [
                [
                  pagePath(lang, other),
                  TILE_IMAGE[other],
                  t.related.otherService,
                  t.related.otherServiceText,
                  d.ourWork,
                ],
                [pagePath(lang, "blog"), TILE_IMAGE.blog, t.related.blog, t.related.blogText, d.readMore],
              ] as const
            ).map(([href, img, title, text, label]) => (
              <Link key={href} href={href} className="tile" {...ds(TILE)}>
                <img
                  className="ph tile-img"
                  src={img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  {...ds({
                    position: "absolute",
                    inset: "0",
                    backgroundColor: "#8DA4BC",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
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
                    {title}
                  </span>
                  <span
                    {...ds({ fontSize: "15px", lineHeight: "1.5", color: "rgba(255,255,255,.85)", maxWidth: "340px" })}
                  >
                    {text}
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
                      fontWeight: "600",
                      transition: "background-color 250ms",
                    })}
                  >
                    {label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DesignContact lang={lang} title={t.cta.title} lede={t.cta.text} project={service} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: t.schema.serviceType,
          name: t.meta.title,
          description: t.schema.description,
          provider: { "@id": BUSINESS_ID, name: site.name },
          areaServed: site.cities.map((name) => ({ "@type": "City", name: `${name}, FL` })),
          url: `${site.url}${self}`,
        }}
      />
      <JsonLd data={faqLd(t.faq.items)} />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </main>
  );
}
