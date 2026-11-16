import Link from "next/link";

import { Breadcrumbs, FinalCta, SampleBadge, SectionHead } from "@/components/sections/blocks";
import { FaqList } from "@/components/sections/faq";
import { BUSINESS_ID, JsonLd, breadcrumbLd, faqLd } from "@/components/sections/json-ld";
import { Comparator } from "@/components/site/comparator";
import { SiteHeader } from "@/components/site/site-header";
import { BATHROOM } from "@/content/bathroom";
import { COMMON } from "@/content/common";
import { KITCHEN } from "@/content/kitchen";
import { PROJECTS, PROJECT_LABELS, type Project } from "@/content/projects";
import type { ServiceSection } from "@/content/service-types";
import type { Locale } from "@/lib/i18n/config";
import { pagePath } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

const COPY = { kitchen: KITCHEN, bathroom: BATHROOM };
const HERO_IMAGE = {
  kitchen: "/images/custom-kitchen-renovation-tampa.webp?v=2",
  bathroom: "/images/bathroom-renovation-floating-vanity.webp?v=2",
};

function Section({ s }: { s: ServiceSection }) {
  return (
    <section className={`sec vc-ssec is-${s.layout ?? "grid"}`} id={s.id} aria-labelledby={`${s.id}-title`}>
      <div className="wrap">
        <SectionHead title={s.title} id={`${s.id}-title`} text={s.intro} />
        {s.layout === "steps" ? (
          <ol className="vc-steps">
            {s.items.map((it, i) => (
              <li key={it.title}>
                <span className="vc-steps__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </li>
            ))}
          </ol>
        ) : (
          <ul className={s.layout === "list" ? "vc-list" : "vc-cards-grid"}>
            {s.items.map((it, i) => (
              <li key={it.title}>
                {s.layout === "list" && <span className="vc-list__n">{String(i + 1).padStart(2, "0")}</span>}
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, lang }: { project: Project; lang: Locale }) {
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
    <article className="vc-project">
      <div className="vc-project__media">
        <Comparator
          before={project.before}
          after={project.after}
          beforeAlt={`${t.title} — ${c.comparator.before}`}
          afterAlt={`${t.title} — ${c.comparator.after}`}
          labels={c.comparator}
          demo={project.demo}
        />
      </div>
      <div className="vc-project__body">
        <header>
          {project.draft && <SampleBadge lang={lang} />}
          <h3>{t.title}</h3>
          <p className="vc-project__where">{t.location}</p>
        </header>
        <dl>
          {facts.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

/**
 * Service page — kitchen (specification §3) or bathroom (§4) renovation, same architecture, distinct content:
 * hero, detailed introduction, "On this page" index, content sections (types of work, method, materials,
 * layouts, tips…), realized projects with interactive before/after comparators, FAQ, areas served, internal
 * links and a closing call to action. Structured data: Service, FAQPage and BreadcrumbList.
 */
export function ServicePage({ lang, service }: { lang: Locale; service: "kitchen" | "bathroom" }) {
  const t = COPY[service][lang];
  const c = COMMON[lang];
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
      <div className="vc-hero-frame">
        <div className="vc-hero-wrap">
          <SiteHeader variant="overlay" current={service} />
          <section data-hero="dark" className="vc-shero" aria-labelledby="hero-title">
            <img className="vc-shero__media" src={HERO_IMAGE[service]} alt={t.hero.alt} fetchPriority="high" />
            <div className="vc-vhero__shade" aria-hidden="true" />
            <div className="wrap vc-shero__content">
              <Breadcrumbs lang={lang} items={crumbs} light />
              <h1 id="hero-title">
                {t.hero.title} <em>{t.hero.titleEm}</em>
              </h1>
              <p className="vc-vhero__text">{t.hero.text}</p>
              <div className="vc-vhero__actions">
                <Link href={quote} className="pill pill-w vc-btn">
                  {t.hero.cta}
                </Link>
                <a href="#projects" className="pill vc-btn vc-btn--ghost">
                  {t.hero.secondary}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="sec vc-intro" aria-labelledby="intro-title">
        <div className="wrap vc-intro__grid">
          <div>
            <h2 id="intro-title">{t.intro.title}</h2>
            {t.intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <aside className="vc-intro__aside">
            <ul className="vc-checks">
              {t.intro.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <Link href={quote} className="pill pill-d vc-btn">
              {c.cta}
            </Link>
          </aside>
        </div>
        <nav className="wrap vc-toc" aria-label={c.onThisPage}>
          <span>{c.onThisPage}</span>
          <ul>
            {nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {t.sections.map((s) => (
        <Section key={s.id} s={s} />
      ))}

      <section className="sec vc-projects" id="projects" aria-labelledby="projects-title">
        <div className="wrap">
          <SectionHead title={t.projects.title} id="projects-title" text={t.projects.intro} />
          <div className="vc-projects__list">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec vc-faq-sec" id="faq" aria-labelledby="faq-title">
        <div className="wrap vc-faq-layout">
          <SectionHead title={t.faq.title} id="faq-title" />
          <FaqList items={t.faq.items} />
        </div>
      </section>

      <section className="sec vc-areas" id="areas" aria-labelledby="areas-title">
        <div className="wrap vc-areas__grid">
          <div>
            <h2 id="areas-title">{t.areas.title}</h2>
            <p>{t.areas.text}</p>
            <ul className="vc-cities">
              {site.cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
          <div className="vc-related">
            <h2 className="vc-related__title">{t.related.title}</h2>
            <Link href={pagePath(lang, other)} className="vc-related__card">
              <strong>{t.related.otherService}</strong>
              <span>{t.related.otherServiceText}</span>
            </Link>
            <Link href={pagePath(lang, "blog")} className="vc-related__card">
              <strong>{t.related.blog}</strong>
              <span>{t.related.blogText}</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCta lang={lang} title={t.cta.title} text={t.cta.text} cta={t.cta.button} project={service} />

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
