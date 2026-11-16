import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import { AccessibilityContent } from "@/components/pages/accessibility-content";
import { ArticleContent } from "@/components/pages/article-content";
import { BathroomContent } from "@/components/pages/bathroom-content";
import { BlogContent } from "@/components/pages/blog-content";
import { ContactContent } from "@/components/pages/contact-content";
import { GalleryContent } from "@/components/pages/gallery-content";
import { HomeContent } from "@/components/pages/home-content";
import { KitchenContent } from "@/components/pages/kitchen-content";
import { MissionContent } from "@/components/pages/mission-content";
import { PrivacyContent } from "@/components/pages/privacy-content";
import { ServicesContent } from "@/components/pages/services-content";
import { ThankYouContent } from "@/components/pages/thank-you-content";
import { WalkinContent } from "@/components/pages/walkin-content";
import { BlogFilter } from "@/components/site/blog-filter";
import { PageShell } from "@/components/site/page-shell";
import { defaultLocale, isLocale, localeHtmlLang, locales, switchLocalePath, type Locale } from "./config";

type Meta = { title?: string; description: string };

type PageDef = {
  path: string;
  /** Key the design styles are scoped on (`<html data-page>`). */
  shell: string;
  logoTone?: "gold" | "sage";
  Content: ComponentType;
  Extra?: ComponentType;
  meta: Record<Locale, Meta>;
};

/** Every page of the site, with its title and description in each language. */
export const PAGES = {
  home: {
    path: "/",
    shell: "home",
    logoTone: "sage",
    Content: HomeContent,
    meta: {
      en: {
        description:
          "Custom kitchens, bathrooms, walk-in closets and whole-home renovations in Bradenton, Tampa, Clearwater and St. Petersburg, Florida.",
      },
      fr: {
        title: "V&C Cabinet Design Concept — Ébénisterie sur mesure à Tampa Bay",
        description:
          "Cuisines, salles de bain, dressings et rénovations complètes sur mesure à Bradenton, Tampa, Clearwater et St. Petersburg, en Floride.",
      },
      es: {
        title: "V&C Cabinet Design Concept — Gabinetes a medida en Tampa Bay",
        description:
          "Cocinas, baños, vestidores y remodelaciones completas a medida en Bradenton, Tampa, Clearwater y St. Petersburg, Florida.",
      },
    },
  },
  mission: {
    path: "/mission",
    shell: "mission",
    Content: MissionContent,
    meta: {
      en: {
        title: "Our mission",
        description:
          "We help homeowners create the interior projects they have long dreamed of — across Bradenton, Tampa, Clearwater and St. Petersburg.",
      },
      fr: {
        title: "Notre mission",
        description:
          "Nous aidons les propriétaires à réaliser les projets intérieurs dont ils rêvent depuis longtemps — à Bradenton, Tampa, Clearwater et St. Petersburg.",
      },
      es: {
        title: "Nuestra misión",
        description:
          "Ayudamos a los propietarios a crear los proyectos de interior que siempre han soñado — en Bradenton, Tampa, Clearwater y St. Petersburg.",
      },
    },
  },
  services: {
    path: "/services",
    shell: "services",
    Content: ServicesContent,
    meta: {
      en: {
        title: "Our services",
        description:
          "Custom kitchens, bathrooms, walk-in closets and whole-home renovations in Bradenton, Tampa, Clearwater and St. Petersburg.",
      },
      fr: {
        title: "Nos services",
        description:
          "Cuisines, salles de bain, dressings et rénovations complètes sur mesure à Bradenton, Tampa, Clearwater et St. Petersburg.",
      },
      es: {
        title: "Nuestros servicios",
        description:
          "Cocinas, baños, vestidores y remodelaciones completas a medida en Bradenton, Tampa, Clearwater y St. Petersburg.",
      },
    },
  },
  kitchen: {
    path: "/services/kitchen",
    shell: "kitchen",
    Content: KitchenContent,
    meta: {
      en: {
        title: "Custom kitchens",
        description:
          "Cabinets, islands, pantries and storage designed around the way you cook, gather and live — in Tampa Bay.",
      },
      fr: {
        title: "Cuisines sur mesure",
        description:
          "Armoires, îlots, garde-manger et rangements conçus selon votre façon de cuisiner, recevoir et vivre — à Tampa Bay.",
      },
      es: {
        title: "Cocinas a medida",
        description:
          "Gabinetes, islas, despensas y almacenamiento diseñados según tu forma de cocinar, reunirte y vivir — en Tampa Bay.",
      },
    },
  },
  bathroom: {
    path: "/services/bathroom",
    shell: "bathroom",
    Content: BathroomContent,
    meta: {
      en: {
        title: "Custom bathrooms",
        description:
          "Vanities, storage and full bathroom remodels designed for comfort, durability and Florida humidity.",
      },
      fr: {
        title: "Salles de bain sur mesure",
        description:
          "Meubles-lavabos, rangements et rénovations complètes de salle de bain pensés pour le confort, la durabilité et l’humidité de la Floride.",
      },
      es: {
        title: "Baños a medida",
        description:
          "Tocadores, almacenamiento y remodelaciones completas de baño pensados para la comodidad, la durabilidad y la humedad de Florida.",
      },
    },
  },
  walkin: {
    path: "/services/walk-in",
    shell: "walkin",
    Content: WalkinContent,
    meta: {
      en: {
        title: "Walk-in closets",
        description: "Custom walk-in closets and wardrobes designed and installed in Tampa Bay.",
      },
      fr: {
        title: "Dressings",
        description: "Dressings et garde-robes sur mesure, conçus et installés à Tampa Bay.",
      },
      es: {
        title: "Vestidores",
        description: "Vestidores y armarios a medida, diseñados e instalados en Tampa Bay.",
      },
    },
  },
  gallery: {
    path: "/gallery",
    shell: "gallery",
    Content: GalleryContent,
    meta: {
      en: {
        title: "Gallery",
        description: "Kitchens, bathrooms and walk-ins designed and built by V&C across Tampa Bay.",
      },
      fr: {
        title: "Galerie",
        description: "Cuisines, salles de bain et dressings conçus et réalisés par V&C à Tampa Bay.",
      },
      es: {
        title: "Galería",
        description: "Cocinas, baños y vestidores diseñados y construidos por V&C en Tampa Bay.",
      },
    },
  },
  blog: {
    path: "/blog",
    shell: "blog",
    Content: BlogContent,
    Extra: BlogFilter,
    meta: {
      en: { title: "Blog", description: "Design tips, trends and real projects from Tampa Bay." },
      fr: { title: "Blog", description: "Conseils de design, tendances et vrais projets à Tampa Bay." },
      es: { title: "Blog", description: "Consejos de diseño, tendencias y proyectos reales en Tampa Bay." },
    },
  },
  article: {
    path: "/blog/space-optimization-in-small-kitchens",
    shell: "article",
    Content: ArticleContent,
    meta: {
      en: {
        title: "Space optimization in small kitchens",
        description: "Smart storage, compact appliances and lighting tricks that make a small kitchen work harder.",
      },
      fr: {
        title: "Optimiser l’espace dans une petite cuisine",
        description:
          "Rangements malins, électroménagers compacts et astuces d’éclairage pour tirer le meilleur d’une petite cuisine.",
      },
      es: {
        title: "Optimizar el espacio en cocinas pequeñas",
        description:
          "Almacenamiento inteligente, electrodomésticos compactos y trucos de iluminación para aprovechar una cocina pequeña.",
      },
    },
  },
  contact: {
    path: "/contact",
    shell: "contact",
    Content: ContactContent,
    meta: {
      en: {
        title: "Contact us",
        description: "Book a free designer consultation with V&C Cabinet Design Concept in Tampa, FL.",
      },
      fr: {
        title: "Contact",
        description:
          "Réservez une consultation gratuite avec un designer de V&C Cabinet Design Concept à Tampa, en Floride.",
      },
      es: {
        title: "Contacto",
        description: "Reserva una consulta gratuita con un diseñador de V&C Cabinet Design Concept en Tampa, FL.",
      },
    },
  },
  thankYou: {
    path: "/thank-you",
    shell: "thank-you",
    Content: ThankYouContent,
    meta: {
      en: { title: "Thank you", description: "We’ll contact you within 24 business hours." },
      fr: { title: "Merci", description: "Nous vous contacterons sous 24 heures ouvrables." },
      es: { title: "Gracias", description: "Te contactaremos en un plazo de 24 horas hábiles." },
    },
  },
  privacy: {
    path: "/privacy-policy",
    shell: "privacy",
    Content: PrivacyContent,
    meta: {
      en: {
        title: "Privacy policy",
        description: "How V&C Cabinet Design Concept LLC collects, uses and protects your information.",
      },
      fr: {
        title: "Politique de confidentialité",
        description: "Comment V&C Cabinet Design Concept LLC collecte, utilise et protège vos informations.",
      },
      es: {
        title: "Política de privacidad",
        description: "Cómo V&C Cabinet Design Concept LLC recopila, usa y protege tu información.",
      },
    },
  },
  accessibility: {
    path: "/accessibility",
    shell: "privacy",
    Content: AccessibilityContent,
    meta: {
      en: {
        title: "Accessibility",
        description: "Our commitment to an accessible website, the standard we follow and how to get help.",
      },
      fr: {
        title: "Accessibilité",
        description:
          "Notre engagement pour un site accessible, la norme que nous suivons et comment obtenir de l’aide.",
      },
      es: {
        title: "Accesibilidad",
        description: "Nuestro compromiso con un sitio accesible, el estándar que seguimos y cómo obtener ayuda.",
      },
    },
  },
} satisfies Record<string, PageDef>;

export type PageKey = keyof typeof PAGES;
type Params = { params: Promise<{ lang: string }> };

async function localeOf(params: Params["params"]): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

/** `generateMetadata` for a page: translated title/description, canonical URL and hreflang links. */
export function metadataFor(key: PageKey) {
  return async ({ params }: Params): Promise<Metadata> => {
    const locale = await localeOf(params);
    const page: PageDef = PAGES[key];
    const { title, description } = page.meta[locale];
    const languages = Object.fromEntries(locales.map((l) => [localeHtmlLang[l], switchLocalePath(page.path, l)]));
    return {
      ...(title ? { title } : {}),
      description,
      alternates: {
        canonical: switchLocalePath(page.path, locale),
        languages: { ...languages, "x-default": switchLocalePath(page.path, defaultLocale) },
      },
      openGraph: { locale: localeHtmlLang[locale].replace("-", "_"), title, description },
    };
  };
}

/** The page component for a route file. */
export function pageFor(key: PageKey) {
  return async function Page({ params }: Params) {
    const locale = await localeOf(params);
    const page: PageDef = PAGES[key];
    const { Content, Extra } = page;
    return (
      <PageShell page={page.shell} logoTone={page.logoTone} locale={locale}>
        <Content />
        {Extra && <Extra />}
      </PageShell>
    );
  };
}
