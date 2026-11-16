import type { Locale } from "@/lib/i18n/config";
import type { ProjectLabels } from "./service-types";

type ProjectText = {
  title: string;
  location: string;
  context: string;
  needs: string;
  initial: string;
  work: string;
  materials: string;
  methods: string;
  result: string;
};

export type Project = {
  id: string;
  service: "kitchen" | "bathroom";
  /** Placeholder project: shown with a "sample content" badge until the client's real project replaces it. */
  draft: boolean;
  before: string;
  after: string;
  /** Demo pair: the "before" is the "after" photo, desaturated, until real before/after photos arrive. */
  demo: boolean;
  text: Record<Locale, ProjectText>;
};

/**
 * Realized projects (specification §3 and §4). The specification forbids inventing projects: each entry below
 * is a STRUCTURE to fill with a real project of the client — its photos (a before/after pair of the same
 * space, taken from the same angle), and the facts of the job. Replace the bracketed text, the photos, then set
 * `draft: false` and `demo: false`.
 */
const tpl = (n: number): Record<Locale, ProjectText> => ({
  fr: {
    title: `[Nom du projet ${n}]`,
    location: "[Ville]",
    context: "[Présentation du projet : type de maison, pièce concernée, ampleur des travaux.]",
    needs: "[Besoins et objectifs du client : ce qu’il voulait changer, ses priorités.]",
    initial: "[État initial : disposition, matériaux et problèmes de la pièce avant les travaux.]",
    work: "[Travaux effectués : démolition, armoires, comptoirs, plomberie, céramique, éclairage…]",
    materials: "[Matériaux utilisés : style et finition des armoires, comptoirs, quincaillerie, revêtements.]",
    methods: "[Méthodes et solutions mises en place : rangement, disposition, contraintes résolues.]",
    result: "[Résultat final : ce que le client a gagné au quotidien.]",
  },
  en: {
    title: `[Project name ${n}]`,
    location: "[City]",
    context: "[Project overview: type of home, room, scope of the work.]",
    needs: "[Client’s needs and goals: what they wanted to change, their priorities.]",
    initial: "[Original state: layout, materials and problems of the room before the work.]",
    work: "[Work carried out: demolition, cabinets, countertops, plumbing, tile, lighting…]",
    materials: "[Materials used: cabinet style and finish, countertops, hardware, surfaces.]",
    methods: "[Methods and solutions: storage, layout, constraints solved.]",
    result: "[Final result: what the client gained in everyday life.]",
  },
  es: {
    title: `[Nombre del proyecto ${n}]`,
    location: "[Ciudad]",
    context: "[Presentación del proyecto: tipo de casa, espacio, alcance de los trabajos.]",
    needs: "[Necesidades y objetivos del cliente: qué quería cambiar, sus prioridades.]",
    initial: "[Estado inicial: distribución, materiales y problemas del espacio antes de los trabajos.]",
    work: "[Trabajos realizados: demolición, gabinetes, encimeras, plomería, azulejos, iluminación…]",
    materials: "[Materiales usados: estilo y acabado de los gabinetes, encimeras, herrajes, revestimientos.]",
    methods: "[Métodos y soluciones: almacenamiento, distribución, limitaciones resueltas.]",
    result: "[Resultado final: lo que el cliente ganó en su día a día.]",
  },
});

export const PROJECTS: Project[] = [
  {
    id: "kitchen-1",
    service: "kitchen",
    draft: true,
    demo: true,
    before: "/images/project-kitchen-1.webp",
    after: "/images/project-kitchen-1.webp",
    text: tpl(1),
  },
  {
    id: "kitchen-2",
    service: "kitchen",
    draft: true,
    demo: true,
    before: "/images/project-kitchen-2.webp",
    after: "/images/project-kitchen-2.webp",
    text: tpl(2),
  },
  {
    id: "bathroom-1",
    service: "bathroom",
    draft: true,
    demo: true,
    before: "/images/project-bathroom-1.webp",
    after: "/images/project-bathroom-1.webp",
    text: tpl(1),
  },
  {
    id: "bathroom-2",
    service: "bathroom",
    draft: true,
    demo: true,
    before: "/images/project-bathroom-2.webp",
    after: "/images/project-bathroom-2.webp",
    text: tpl(2),
  },
];

export const PROJECT_LABELS: Record<Locale, ProjectLabels> = {
  fr: {
    context: "Présentation",
    needs: "Besoins du client",
    initial: "État initial",
    work: "Travaux effectués",
    materials: "Matériaux",
    methods: "Méthodes et solutions",
    result: "Résultat",
  },
  en: {
    context: "Overview",
    needs: "Client’s needs",
    initial: "Original state",
    work: "Work carried out",
    materials: "Materials",
    methods: "Methods and solutions",
    result: "Result",
  },
  es: {
    context: "Presentación",
    needs: "Necesidades del cliente",
    initial: "Estado inicial",
    work: "Trabajos realizados",
    materials: "Materiales",
    methods: "Métodos y soluciones",
    result: "Resultado",
  },
};
