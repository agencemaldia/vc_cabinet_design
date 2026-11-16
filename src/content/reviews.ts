import type { Locale } from "@/lib/i18n/config";

export type Review = { quote: string; name: string; place: string; project: string; rating: number };

/**
 * Client reviews (home page, right under the hero — specification §2). The specification forbids invented
 * testimonials: until the client sends REAL reviews (e.g. copied from the Google Business profile, with the
 * clients' permission), the slots below are marked placeholders and the section shows a "sample content"
 * badge. To publish: put the real reviews here, set `rating` (average) and `count`, the Google profile link
 * in `profile`, and `draft: false`.
 */
export const REVIEWS: {
  draft: boolean;
  rating: number | null;
  count: number | null;
  profile: string | null;
  items: Record<Locale, Review[]>;
} = {
  draft: true,
  rating: null,
  count: null,
  profile: null,
  items: {
    fr: [
      {
        quote: "[Avis client à fournir — texte copié d’un avis Google réel, avec l’accord du client.]",
        name: "[Prénom N.]",
        place: "[Ville]",
        project: "Rénovation de cuisine",
        rating: 5,
      },
      {
        quote: "[Avis client à fournir — texte copié d’un avis Google réel, avec l’accord du client.]",
        name: "[Prénom N.]",
        place: "[Ville]",
        project: "Rénovation de salle de bain",
        rating: 5,
      },
      {
        quote: "[Avis client à fournir — texte copié d’un avis Google réel, avec l’accord du client.]",
        name: "[Prénom N.]",
        place: "[Ville]",
        project: "Rénovation de cuisine",
        rating: 5,
      },
    ],
    en: [
      {
        quote: "[Client review to be provided — copied from a real Google review, with the client’s permission.]",
        name: "[First name L.]",
        place: "[City]",
        project: "Kitchen renovation",
        rating: 5,
      },
      {
        quote: "[Client review to be provided — copied from a real Google review, with the client’s permission.]",
        name: "[First name L.]",
        place: "[City]",
        project: "Bathroom renovation",
        rating: 5,
      },
      {
        quote: "[Client review to be provided — copied from a real Google review, with the client’s permission.]",
        name: "[First name L.]",
        place: "[City]",
        project: "Kitchen renovation",
        rating: 5,
      },
    ],
    es: [
      {
        quote:
          "[Reseña de cliente por proporcionar — copiada de una reseña real de Google, con el permiso del cliente.]",
        name: "[Nombre I.]",
        place: "[Ciudad]",
        project: "Remodelación de cocina",
        rating: 5,
      },
      {
        quote:
          "[Reseña de cliente por proporcionar — copiada de una reseña real de Google, con el permiso del cliente.]",
        name: "[Nombre I.]",
        place: "[Ciudad]",
        project: "Remodelación de baño",
        rating: 5,
      },
      {
        quote:
          "[Reseña de cliente por proporcionar — copiada de una reseña real de Google, con el permiso del cliente.]",
        name: "[Nombre I.]",
        place: "[Ciudad]",
        project: "Remodelación de cocina",
        rating: 5,
      },
    ],
  },
};
