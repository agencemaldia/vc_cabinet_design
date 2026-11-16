import type { Locale } from "@/lib/i18n/config";

/** Labels shared by several pages, per language. */
export const COMMON: Record<
  Locale,
  {
    cta: string;
    ctaShort: string;
    call: string;
    readMore: string;
    readArticle: string;
    allArticles: string;
    sample: string;
    sampleNote: string;
    breadcrumb: string;
    home: string;
    kitchen: string;
    bathroom: string;
    blog: string;
    quote: string;
    comparator: { before: string; after: string; handle: string };
    faqTitle: string;
    areasTitle: string;
    minRead: string;
    updated: string;
    onThisPage: string;
  }
> = {
  fr: {
    cta: "Demander une soumission",
    ctaShort: "Soumission gratuite",
    call: "Appeler",
    readMore: "Lire la suite",
    readArticle: "Lire l’article",
    allArticles: "Tous les articles",
    sample: "Contenu exemple",
    sampleNote: "Exemple à remplacer par les vraies informations du client.",
    breadcrumb: "Fil d’Ariane",
    home: "Accueil",
    kitchen: "Rénovation de cuisines",
    bathroom: "Rénovation de salles de bain",
    blog: "Blogue",
    quote: "Soumission",
    comparator: { before: "Avant", after: "Après", handle: "Faire glisser pour comparer avant et après" },
    faqTitle: "Questions fréquentes",
    areasTitle: "Secteurs desservis",
    minRead: "min de lecture",
    updated: "Mis à jour le",
    onThisPage: "Sur cette page",
  },
  en: {
    cta: "Request a quote",
    ctaShort: "Free quote",
    call: "Call",
    readMore: "Read more",
    readArticle: "Read the article",
    allArticles: "All articles",
    sample: "Sample content",
    sampleNote: "Example to be replaced with the client’s real information.",
    breadcrumb: "Breadcrumb",
    home: "Home",
    kitchen: "Kitchen renovation",
    bathroom: "Bathroom renovation",
    blog: "Blog",
    quote: "Quote",
    comparator: { before: "Before", after: "After", handle: "Drag to compare before and after" },
    faqTitle: "Frequently asked questions",
    areasTitle: "Areas we serve",
    minRead: "min read",
    updated: "Updated",
    onThisPage: "On this page",
  },
  es: {
    cta: "Solicitar una cotización",
    ctaShort: "Cotización gratis",
    call: "Llamar",
    readMore: "Leer más",
    readArticle: "Leer el artículo",
    allArticles: "Todos los artículos",
    sample: "Contenido de ejemplo",
    sampleNote: "Ejemplo que se reemplazará con la información real del cliente.",
    breadcrumb: "Ruta de navegación",
    home: "Inicio",
    kitchen: "Remodelación de cocinas",
    bathroom: "Remodelación de baños",
    blog: "Blog",
    quote: "Cotización",
    comparator: { before: "Antes", after: "Después", handle: "Arrastra para comparar antes y después" },
    faqTitle: "Preguntas frecuentes",
    areasTitle: "Zonas que atendemos",
    minRead: "min de lectura",
    updated: "Actualizado el",
    onThisPage: "En esta página",
  },
};
