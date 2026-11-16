/**
 * The company's details — the single source for the header, footer, form, structured data and legal pages.
 * Values marked "to confirm" come from the current site and must be validated by the client
 * (see docs/client-info-to-verify.md).
 */
export const site = {
  name: "V&C Cabinet Design Concept",
  legalName: "V&C Cabinet Design Concept LLC",
  /** Production address of the site (canonical URLs, sitemap, structured data). */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vccabinetdesign.com").replace(/\/$/, ""),
  phone: "727-223-3490",
  phoneHref: "tel:+17272233490",
  email: "cabinetdesignconcept@gmail.com",
  address: {
    street: "19046 Bruce B Downs Blvd, Ste B6",
    city: "Tampa",
    region: "FL",
    postalCode: "33647",
    country: "US",
  },
  /** Cities actually served (local SEO). To confirm with the client. */
  cities: ["Tampa", "Bradenton", "Clearwater", "St. Petersburg"],
  /** Social profiles (to confirm — guessed from the company name). */
  social: {
    facebook: "https://www.facebook.com/vccabinetdesign",
    youtube: "https://www.youtube.com/@vccabinetdesign",
    linkedin: "https://www.linkedin.com/company/vc-cabinet-design-concept",
  },
  logo: "/images/logo-green.png",
} as const;
