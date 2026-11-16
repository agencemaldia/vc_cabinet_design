import type { Faq } from "./home";

export type Item = { title: string; text: string };

/** A content section of a service page (h2 + intro + items). `id` is the anchor of the "On this page" list. */
export type ServiceSection = {
  id: string;
  nav: string;
  title: string;
  intro: string;
  items: Item[];
  layout?: "grid" | "list" | "steps";
};

/** Copy of a service page (kitchen or bathroom renovation), in one language. */
export type ServiceCopy = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; titleEm: string; text: string; cta: string; secondary: string; alt: string };
  intro: { title: string; paragraphs: string[]; highlights: string[] };
  sections: ServiceSection[];
  projects: { nav: string; title: string; intro: string };
  faq: { nav: string; title: string; items: Faq[] };
  areas: { nav: string; title: string; text: string };
  related: { title: string; otherService: string; otherServiceText: string; blog: string; blogText: string };
  cta: { title: string; text: string; button: string };
  /** `Service` structured data. */
  schema: { serviceType: string; description: string };
};

/** Labels of the fields shown for each project. */
export type ProjectLabels = {
  context: string;
  needs: string;
  initial: string;
  work: string;
  materials: string;
  methods: string;
  result: string;
};
