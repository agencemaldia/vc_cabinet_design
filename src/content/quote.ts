import type { Locale } from "@/lib/i18n/config";
import type { PlanKey, ProjectKey, TimingKey } from "@/features/quote/schema";

type Option<K extends string> = { key: K; t: string; s?: string };

export type QuoteCopy = {
  kicker: string;
  title: string;
  lead: string;
  reassurance: string[];
  asideLabel: string;
  steps: string[];
  stepOf: string;
  project: { title: string; sub: string; opts: Option<ProjectKey>[] };
  plans: { title: string; sub: string; opts: Option<PlanKey>[] };
  timing: { title: string; sub: string; opts: Option<TimingKey>[] };
  city: { title: string; sub: string; label: string; placeholder: string };
  details: { title: string; sub: string; label: string; placeholder: string; optional: string };
  contact: {
    title: string;
    sub: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    privacy: string;
    privacyLink: string;
    submit: string;
    sending: string;
    honeypot: string;
  };
  next: string;
  prev: string;
  continue: string;
  errors: Record<string, string>;
  done: { title: string; body: string; home: string; restart: string };
};

/** Texts of the quote form, per language. The questions follow the specification word for word. */
export const QUOTE: Record<Locale, QuoteCopy> = {
  fr: {
    kicker: "Demande de soumission",
    title: "Parlez-nous de votre projet.",
    lead: "Six questions rapides, une à la fois. Un designer vous rappelle pour planifier une visite et des mesures gratuites à domicile.",
    reassurance: ["Gratuit et sans engagement", "Environ 2 minutes", "Réponse sous 24 heures ouvrables"],
    asideLabel: "Votre demande",
    steps: ["Projet", "Plans", "Échéancier", "Lieu", "Description", "Coordonnées"],
    stepOf: "Étape {n} sur {total}",
    project: {
      title: "Quel est votre projet ?",
      sub: "Choisissez le type de rénovation qui vous intéresse.",
      opts: [
        { key: "kitchen", t: "Rénovation de cuisine", s: "Armoires, îlot, comptoirs, rangement" },
        { key: "bathroom", t: "Rénovation de salle de bain", s: "Meuble-lavabo, douche, baignoire, rangement" },
        { key: "both", t: "Les deux", s: "Cuisine et salle de bain" },
      ],
    },
    plans: {
      title: "Avez-vous déjà des plans ?",
      sub: "Des plans, des croquis ou des photos d’inspiration — sinon, nous les concevons avec vous.",
      opts: [
        { key: "yes", t: "Oui", s: "J’ai des plans ou des croquis" },
        { key: "no", t: "Non", s: "J’aimerais qu’on les conçoive" },
      ],
    },
    timing: {
      title: "Quand souhaitez-vous commencer ?",
      sub: "Une estimation suffit : elle nous aide à planifier votre visite.",
      opts: [
        { key: "asap", t: "Dès que possible" },
        { key: "1-3", t: "Dans 1 à 3 mois" },
        { key: "3-6", t: "Dans 3 à 6 mois" },
        { key: "planning", t: "Je suis en phase de planification" },
      ],
    },
    city: {
      title: "Où se situe votre projet ?",
      sub: "Indiquez la ville ou la municipalité.",
      label: "Ville ou municipalité",
      placeholder: "Ex. : Tampa",
    },
    details: {
      title: "Décrivez brièvement votre projet.",
      sub: "Taille de la pièce, style souhaité, ce que vous aimeriez changer…",
      label: "Description du projet",
      placeholder: "Ex. : cuisine en L, on aimerait un îlot et plus de rangement.",
      optional: "facultatif",
    },
    contact: {
      title: "Vos coordonnées",
      sub: "Pour que votre designer puisse vous joindre.",
      name: "Nom complet",
      namePlaceholder: "Marie Tremblay",
      email: "Adresse courriel",
      emailPlaceholder: "marie@courriel.com",
      phone: "Numéro de téléphone",
      phonePlaceholder: "(727) 555-0148",
      privacy: "Vos informations servent uniquement à répondre à votre demande. Consultez notre ",
      privacyLink: "politique de confidentialité",
      submit: "Envoyer ma demande",
      sending: "Envoi…",
      honeypot: "Laissez ce champ vide",
    },
    next: "Question suivante",
    prev: "Question précédente",
    continue: "Continuer",
    errors: {
      project: "Choisissez votre projet.",
      plans: "Indiquez si vous avez des plans.",
      timing: "Indiquez quand vous souhaitez commencer.",
      city: "Indiquez la ville de votre projet.",
      name: "Indiquez votre nom complet.",
      email: "Entrez une adresse courriel valide (nom@domaine.com).",
      phone: "Entrez un numéro de téléphone valide.",
      tooLong: "Ce champ est trop long.",
      generic: "L’envoi n’a pas fonctionné. Réessayez, ou appelez-nous au 727-223-3490.",
    },
    done: {
      title: "Merci{name}, votre demande est envoyée.",
      body: "Un designer vous contactera sous 24 heures ouvrables pour planifier votre visite et vos mesures gratuites à domicile.",
      home: "Retour à l’accueil",
      restart: "Nouvelle demande",
    },
  },
  en: {
    kicker: "Quote request",
    title: "Tell us about your project.",
    lead: "Six quick questions, one at a time. A designer calls you back to plan a free in-home visit and measurement.",
    reassurance: ["Free, no commitment", "About 2 minutes", "Reply within 24 business hours"],
    asideLabel: "Your request",
    steps: ["Project", "Plans", "Timeline", "Location", "Description", "Contact"],
    stepOf: "Step {n} of {total}",
    project: {
      title: "What is your project?",
      sub: "Choose the type of renovation you are interested in.",
      opts: [
        { key: "kitchen", t: "Kitchen renovation", s: "Cabinets, island, countertops, storage" },
        { key: "bathroom", t: "Bathroom renovation", s: "Vanity, shower, bathtub, storage" },
        { key: "both", t: "Both", s: "Kitchen and bathroom" },
      ],
    },
    plans: {
      title: "Do you already have plans?",
      sub: "Plans, sketches or inspiration photos — if not, we design them with you.",
      opts: [
        { key: "yes", t: "Yes", s: "I have plans or sketches" },
        { key: "no", t: "No", s: "I’d like you to design them" },
      ],
    },
    timing: {
      title: "When would you like to start?",
      sub: "An estimate is enough: it helps us plan your visit.",
      opts: [
        { key: "asap", t: "As soon as possible" },
        { key: "1-3", t: "In 1 to 3 months" },
        { key: "3-6", t: "In 3 to 6 months" },
        { key: "planning", t: "I’m still planning" },
      ],
    },
    city: {
      title: "Where is your project?",
      sub: "Enter the city or municipality.",
      label: "City or municipality",
      placeholder: "e.g. Tampa",
    },
    details: {
      title: "Briefly describe your project.",
      sub: "Size of the room, the style you like, what you would like to change…",
      label: "Project description",
      placeholder: "e.g. L-shaped kitchen, we’d like an island and more storage.",
      optional: "optional",
    },
    contact: {
      title: "Your contact details",
      sub: "So your designer can reach you.",
      name: "Full name",
      namePlaceholder: "Jane Smith",
      email: "Email address",
      emailPlaceholder: "jane@email.com",
      phone: "Phone number",
      phonePlaceholder: "(727) 555-0148",
      privacy: "Your information is only used to answer your request. See our ",
      privacyLink: "privacy policy",
      submit: "Send my request",
      sending: "Sending…",
      honeypot: "Leave this field empty",
    },
    next: "Next question",
    prev: "Previous question",
    continue: "Continue",
    errors: {
      project: "Choose your project.",
      plans: "Tell us whether you have plans.",
      timing: "Tell us when you would like to start.",
      city: "Enter the city of your project.",
      name: "Enter your full name.",
      email: "Enter a valid email address (name@domain.com).",
      phone: "Enter a valid phone number.",
      tooLong: "This field is too long.",
      generic: "Your request could not be sent. Please try again, or call us at 727-223-3490.",
    },
    done: {
      title: "Thank you{name}, your request has been sent.",
      body: "A designer will contact you within 24 business hours to plan your free in-home visit and measurement.",
      home: "Back to home",
      restart: "New request",
    },
  },
  es: {
    kicker: "Solicitud de cotización",
    title: "Cuéntanos sobre tu proyecto.",
    lead: "Seis preguntas rápidas, una a la vez. Un diseñador te llama para planear una visita y medición gratuitas a domicilio.",
    reassurance: ["Gratis y sin compromiso", "Unos 2 minutos", "Respuesta en 24 horas hábiles"],
    asideLabel: "Tu solicitud",
    steps: ["Proyecto", "Planos", "Plazo", "Ubicación", "Descripción", "Contacto"],
    stepOf: "Paso {n} de {total}",
    project: {
      title: "¿Cuál es tu proyecto?",
      sub: "Elige el tipo de remodelación que te interesa.",
      opts: [
        { key: "kitchen", t: "Remodelación de cocina", s: "Gabinetes, isla, encimeras, almacenamiento" },
        { key: "bathroom", t: "Remodelación de baño", s: "Mueble de baño, ducha, bañera, almacenamiento" },
        { key: "both", t: "Ambos", s: "Cocina y baño" },
      ],
    },
    plans: {
      title: "¿Ya tienes planos?",
      sub: "Planos, bocetos o fotos de inspiración — si no, los diseñamos contigo.",
      opts: [
        { key: "yes", t: "Sí", s: "Tengo planos o bocetos" },
        { key: "no", t: "No", s: "Me gustaría que los diseñen" },
      ],
    },
    timing: {
      title: "¿Cuándo te gustaría empezar?",
      sub: "Basta con una estimación: nos ayuda a planear tu visita.",
      opts: [
        { key: "asap", t: "Lo antes posible" },
        { key: "1-3", t: "En 1 a 3 meses" },
        { key: "3-6", t: "En 3 a 6 meses" },
        { key: "planning", t: "Estoy en fase de planificación" },
      ],
    },
    city: {
      title: "¿Dónde está tu proyecto?",
      sub: "Indica la ciudad o el municipio.",
      label: "Ciudad o municipio",
      placeholder: "Ej.: Tampa",
    },
    details: {
      title: "Describe brevemente tu proyecto.",
      sub: "Tamaño del espacio, estilo que te gusta, lo que te gustaría cambiar…",
      label: "Descripción del proyecto",
      placeholder: "Ej.: cocina en L, nos gustaría una isla y más almacenamiento.",
      optional: "opcional",
    },
    contact: {
      title: "Tus datos de contacto",
      sub: "Para que tu diseñador pueda comunicarse contigo.",
      name: "Nombre completo",
      namePlaceholder: "María García",
      email: "Correo electrónico",
      emailPlaceholder: "maria@correo.com",
      phone: "Número de teléfono",
      phonePlaceholder: "(727) 555-0148",
      privacy: "Tu información solo se usa para responder a tu solicitud. Consulta nuestra ",
      privacyLink: "política de privacidad",
      submit: "Enviar mi solicitud",
      sending: "Enviando…",
      honeypot: "Deja este campo vacío",
    },
    next: "Pregunta siguiente",
    prev: "Pregunta anterior",
    continue: "Continuar",
    errors: {
      project: "Elige tu proyecto.",
      plans: "Indica si tienes planos.",
      timing: "Indica cuándo te gustaría empezar.",
      city: "Indica la ciudad de tu proyecto.",
      name: "Indica tu nombre completo.",
      email: "Ingresa un correo válido (nombre@dominio.com).",
      phone: "Ingresa un número de teléfono válido.",
      tooLong: "Este campo es demasiado largo.",
      generic: "No se pudo enviar tu solicitud. Inténtalo de nuevo o llámanos al 727-223-3490.",
    },
    done: {
      title: "Gracias{name}, tu solicitud fue enviada.",
      body: "Un diseñador te contactará en 24 horas hábiles para planear tu visita y medición gratuitas a domicilio.",
      home: "Volver al inicio",
      restart: "Nueva solicitud",
    },
  },
};
