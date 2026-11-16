import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import type { ReactNode } from "react";

import { AccessibilityContent } from "@/components/pages/accessibility-content";
import { ArticlePage, BlogIndexPage } from "@/components/pages/blog-pages";
import { HomePage } from "@/components/pages/home-page";
import { PrivacyContent } from "@/components/pages/privacy-content";
import { QuotePage } from "@/components/pages/quote-page";
import { ServicePage } from "@/components/pages/service-page";
import { PageShell } from "@/components/site/page-shell";
import { BATHROOM } from "@/content/bathroom";
import { POSTS, findPost } from "@/content/blog";
import { KITCHEN } from "@/content/kitchen";
import { site } from "@/lib/site";
import { defaultLocale, isLocale, localeHtmlLang, locales, type Locale } from "./config";
import { pagePath, type PageKey } from "./routes";

type Meta = { title?: string; description: string };

type PageDef = {
  /** Key the styles are scoped on (`<html data-page>`). */
  shell: string;
  logoTone?: "gold" | "sage";
  render: (lang: Locale) => ReactNode;
  meta: Record<Locale, Meta>;
  /** Social sharing image. */
  image?: string;
};

const DEFAULT_IMAGE = "/images/kitchen-bathroom-renovation-tampa-bay.webp?v=2";

/** Every page of the site, with its title and description in each language. */
export const PAGES: Record<PageKey, PageDef> = {
  home: {
    shell: "home",
    logoTone: "sage",
    render: (lang) => <HomePage lang={lang} />,
    meta: {
      fr: {
        title: "Rénovation de cuisine et de salle de bain à Tampa Bay | V&C Cabinet Design",
        description:
          "Rénovation de cuisine et de salle de bain sur mesure à Tampa, Bradenton, Clearwater et St. Petersburg : conception, armoires, installation. Soumission gratuite.",
      },
      en: {
        title: "Kitchen & Bathroom Renovation in Tampa Bay | V&C Cabinet Design",
        description:
          "Custom kitchen and bathroom renovation in Tampa, Bradenton, Clearwater and St. Petersburg: design, cabinetry and installation. Free quote.",
      },
      es: {
        title: "Remodelación de cocinas y baños en Tampa Bay | V&C Cabinet Design",
        description:
          "Remodelación de cocinas y baños a medida en Tampa, Bradenton, Clearwater y St. Petersburg: diseño, gabinetes e instalación. Cotización gratis.",
      },
    },
  },
  kitchen: {
    shell: "renovation-kitchen",
    render: (lang) => <ServicePage lang={lang} service="kitchen" />,
    meta: { fr: KITCHEN.fr.meta, en: KITCHEN.en.meta, es: KITCHEN.es.meta },
    image: "/images/custom-kitchen-renovation-tampa.webp?v=2",
  },
  bathroom: {
    shell: "renovation-bathroom",
    render: (lang) => <ServicePage lang={lang} service="bathroom" />,
    meta: { fr: BATHROOM.fr.meta, en: BATHROOM.en.meta, es: BATHROOM.es.meta },
    image: "/images/bathroom-renovation-floating-vanity.webp?v=2",
  },
  blog: {
    shell: "blog-index",
    render: (lang) => <BlogIndexPage lang={lang} />,
    meta: {
      fr: {
        title: "Blogue rénovation : cuisines, salles de bain, matériaux",
        description:
          "Conseils de rénovation, idées d’aménagement, matériaux et tendances pour votre cuisine ou votre salle de bain à Tampa Bay.",
      },
      en: {
        title: "Renovation blog: kitchens, bathrooms, materials",
        description: "Renovation advice, layout ideas, materials and trends for your kitchen or bathroom in Tampa Bay.",
      },
      es: {
        title: "Blog de remodelación: cocinas, baños, materiales",
        description:
          "Consejos de remodelación, ideas de distribución, materiales y tendencias para tu cocina o baño en Tampa Bay.",
      },
    },
  },
  quote: {
    shell: "quote",
    render: (lang) => <QuotePage lang={lang} />,
    meta: {
      fr: {
        title: "Demande de soumission gratuite",
        description:
          "Décrivez votre projet de cuisine ou de salle de bain en 6 questions : un designer vous rappelle sous 24 heures ouvrables. Gratuit et sans engagement.",
      },
      en: {
        title: "Request a free quote",
        description:
          "Describe your kitchen or bathroom project in 6 questions: a designer calls you back within 24 business hours. Free, no commitment.",
      },
      es: {
        title: "Solicita una cotización gratis",
        description:
          "Describe tu proyecto de cocina o baño en 6 preguntas: un diseñador te llama en 24 horas hábiles. Gratis y sin compromiso.",
      },
    },
  },
  privacy: {
    shell: "privacy",
    render: () => <PrivacyContent />,
    meta: {
      fr: {
        title: "Politique de confidentialité",
        description: "Comment V&C Cabinet Design Concept LLC collecte, utilise et protège vos informations.",
      },
      en: {
        title: "Privacy policy",
        description: "How V&C Cabinet Design Concept LLC collects, uses and protects your information.",
      },
      es: {
        title: "Política de privacidad",
        description: "Cómo V&C Cabinet Design Concept LLC recopila, usa y protege tu información.",
      },
    },
  },
  accessibility: {
    shell: "privacy",
    render: () => <AccessibilityContent />,
    meta: {
      fr: {
        title: "Accessibilité",
        description:
          "Notre engagement pour un site accessible, la norme que nous suivons et comment obtenir de l’aide.",
      },
      en: {
        title: "Accessibility",
        description: "Our commitment to an accessible website, the standard we follow and how to get help.",
      },
      es: {
        title: "Accesibilidad",
        description: "Nuestro compromiso con un sitio accesible, el estándar que seguimos y cómo obtener ayuda.",
      },
    },
  },
};

type Params = { params: Promise<{ lang: string }> };
type ArticleParams = { params: Promise<{ lang: string; slug: string }> };

async function localeOf(params: Params["params"]): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

/** Canonical, hreflang and Open Graph for a page whose address in each language is given. */
function seo(
  lang: Locale,
  paths: Record<Locale, string>,
  meta: Meta,
  image: string,
  type: "website" | "article" = "website",
): Metadata {
  const languages = Object.fromEntries(locales.map((l) => [localeHtmlLang[l], paths[l]]));
  return {
    ...(meta.title ? { title: meta.title } : {}),
    description: meta.description,
    alternates: { canonical: paths[lang], languages: { ...languages, "x-default": paths[defaultLocale] } },
    openGraph: {
      type,
      siteName: site.name,
      locale: localeHtmlLang[lang].replace("-", "_"),
      title: meta.title ?? site.name,
      description: meta.description,
      url: paths[lang],
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title ?? site.name,
      description: meta.description,
      images: [image],
    },
  };
}

/** `generateMetadata` for a page: translated title/description, canonical URL and hreflang links. */
export function metadataFor(key: PageKey) {
  return async ({ params }: Params): Promise<Metadata> => {
    const lang = await localeOf(params);
    const page = PAGES[key];
    const paths = Object.fromEntries(locales.map((l) => [l, pagePath(l, key)])) as Record<Locale, string>;
    const meta = page.meta[lang];
    // The home title is complete; the others get the site name through the layout's title template.
    const md = seo(lang, paths, meta, page.image ?? DEFAULT_IMAGE);
    return key === "home" ? { ...md, title: { absolute: meta.title! } } : md;
  };
}

/** The page component for a route file. */
export function pageFor(key: PageKey) {
  return async function Page({ params }: Params) {
    const lang = await localeOf(params);
    const page = PAGES[key];
    return (
      <PageShell page={page.shell} logoTone={page.logoTone} locale={lang}>
        {page.render(lang)}
      </PageShell>
    );
  };
}

/** Every (language, slug) pair of the blog, for `generateStaticParams`. */
export function articleParams() {
  return locales.flatMap((lang) => POSTS.map((p) => ({ lang, slug: p.slugs[lang] })));
}

async function articleOf(params: ArticleParams["params"]) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const found = findPost(lang, decodeURIComponent(slug));
  if (!found) notFound();
  return { lang, ...found };
}

export async function articleMetadata({ params }: ArticleParams): Promise<Metadata> {
  const { lang, post } = await articleOf(params);
  const raw = POSTS.find((p) => p.slugs[lang] === post.slug)!;
  const paths = Object.fromEntries(locales.map((l) => [l, `${pagePath(l, "blog")}/${raw.slugs[l]}`])) as Record<
    Locale,
    string
  >;
  const md = seo(lang, paths, { title: post.title, description: post.excerpt }, post.cover, "article");
  return { ...md, openGraph: { ...md.openGraph, type: "article", publishedTime: post.date } };
}

export async function ArticleRoute({ params }: ArticleParams) {
  const { lang, post, redirectTo } = await articleOf(params);
  // An article opened with the slug of another language goes to its address in this language.
  if (redirectTo) permanentRedirect(`${pagePath(lang, "blog")}/${redirectTo}`);
  return (
    <PageShell page="blog-post" locale={lang}>
      <ArticlePage lang={lang} post={post} />
    </PageShell>
  );
}
