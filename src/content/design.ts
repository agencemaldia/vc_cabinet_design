import type { Locale } from "@/lib/i18n/config";

/**
 * Wording of the original V&C design (home hero, section titles, contact band), kept word for word in each
 * language so the rebuilt pages look and read like the validated design.
 */
export const DESIGN: Record<
  Locale,
  {
    heroAria: string;
    heroList: string[];
    heroLine1: [string, string];
    heroLine2: [string, string, string];
    heroTagline: string;
    heroSecondary: string;
    scroll: string;
    pause: string;
    play: string;
    reviewsLabel: string;
    servicesTitle: [string, string];
    servicesTile: { kitchen: string; bathroom: string };
    ourWork: string;
    faqHelp: string;
    blogTitle: string;
    allArticles: string;
    readMore: string;
    readLess: string;
    projectMore: string;
    contactTitle: string;
    contactLede: string;
    phone: string;
    email: string;
    showroom: string;
    blogH1: string;
    blogLead: string;
    readArticle: string;
    all: string;
    filter: string;
    ctaCardTitle: string;
    ctaCardText: string;
    minRead: string;
  }
> = {
  fr: {
    heroAria: "Introduction",
    heroList: ["Rénovation de cuisines", "Rénovation de salles de bain"],
    heroLine1: ["Notre", "Passion"],
    heroLine2: ["Est", "Votre", "Projet."],
    heroTagline: "Rénovation de cuisines et de salles de bain — Tampa Bay, Floride",
    heroSecondary: "Nos réalisations",
    scroll: "Défiler",
    pause: "Pause",
    play: "Lecture",
    reviewsLabel: "Avis",
    servicesTitle: ["Chaque pièce,", "sur mesure."],
    servicesTile: { kitchen: "Cuisines", bathroom: "Salles de bain" },
    ourWork: "Nos réalisations",
    faqHelp: "Vous ne trouvez pas votre réponse ? Appelez-nous au",
    blogTitle: "Des idées pour votre maison.",
    allArticles: "Tous les articles",
    readMore: "Lire la suite",
    readLess: "Réduire",
    projectMore: "Voir le détail",
    contactTitle: "Travaillons ensemble !",
    contactLede:
      "Parlez-nous de votre projet. Un designer vous appellera sous 24 heures ouvrables pour planifier une visite et des mesures gratuites à domicile.",
    phone: "Téléphone",
    email: "Courriel",
    showroom: "Salle d’exposition",
    blogH1: "Blogue",
    blogLead:
      "Conseils de rénovation, matériaux, aménagement et tendances pour votre cuisine ou votre salle de bain à Tampa Bay.",
    readArticle: "Lire l’article",
    all: "Tous",
    filter: "Filtrer par catégorie",
    ctaCardTitle: "Un projet en tête ? Parlez à un designer.",
    ctaCardText: "Consultation, mesures et design 3D gratuits à domicile.",
    minRead: "min de lecture",
  },
  en: {
    heroAria: "Introduction",
    heroList: ["Kitchen renovation", "Bathroom renovation"],
    heroLine1: ["Our", "Passion"],
    heroLine2: ["Is", "Your", "Project."],
    heroTagline: "Kitchen and bathroom renovation — Tampa Bay, Florida",
    heroSecondary: "View Our Work",
    scroll: "Scroll",
    pause: "Pause",
    play: "Play",
    reviewsLabel: "Reviews",
    servicesTitle: ["Every room,", "made to measure."],
    servicesTile: { kitchen: "Kitchens", bathroom: "Bathrooms" },
    ourWork: "Our work",
    faqHelp: "Can’t find your answer? Call us at",
    blogTitle: "Ideas for your home.",
    allArticles: "All articles",
    readMore: "Read more",
    readLess: "Show less",
    projectMore: "See the details",
    contactTitle: "Let’s work together!",
    contactLede:
      "Tell us about your project. A designer will call you within 24 business hours to plan a free in-home visit and measurement.",
    phone: "Phone",
    email: "Email",
    showroom: "Showroom",
    blogH1: "Blog",
    blogLead: "Renovation advice, materials, layouts and trends for your kitchen or bathroom in Tampa Bay.",
    readArticle: "Read the article",
    all: "All",
    filter: "Filter by category",
    ctaCardTitle: "Planning a project? Talk to a designer.",
    ctaCardText: "Free in-home consultation, measurement and 3D design.",
    minRead: "min read",
  },
  es: {
    heroAria: "Introducción",
    heroList: ["Remodelación de cocinas", "Remodelación de baños"],
    heroLine1: ["Nuestra", "Pasión"],
    heroLine2: ["Es", "Tu", "Proyecto."],
    heroTagline: "Remodelación de cocinas y baños — Tampa Bay, Florida",
    heroSecondary: "Nuestros proyectos",
    scroll: "Desplazar",
    pause: "Pausa",
    play: "Reproducir",
    reviewsLabel: "Reseñas",
    servicesTitle: ["Cada espacio,", "a medida."],
    servicesTile: { kitchen: "Cocinas", bathroom: "Baños" },
    ourWork: "Nuestros proyectos",
    faqHelp: "¿No encuentras tu respuesta? Llámanos al",
    blogTitle: "Ideas para tu hogar.",
    allArticles: "Todos los artículos",
    readMore: "Leer más",
    readLess: "Ver menos",
    projectMore: "Ver el detalle",
    contactTitle: "¡Trabajemos juntos!",
    contactLede:
      "Cuéntanos sobre tu proyecto. Un diseñador te llamará en 24 horas hábiles para planear una visita y medición gratuitas a domicilio.",
    phone: "Teléfono",
    email: "Correo",
    showroom: "Sala de exhibición",
    blogH1: "Blog",
    blogLead: "Consejos de remodelación, materiales, distribución y tendencias para tu cocina o baño en Tampa Bay.",
    readArticle: "Leer el artículo",
    all: "Todos",
    filter: "Filtrar por categoría",
    ctaCardTitle: "¿Planeas un proyecto? Habla con un diseñador.",
    ctaCardText: "Consulta, medición y diseño 3D gratuitos a domicilio.",
    minRead: "min de lectura",
  },
};
