import { localeHtmlLang, type Locale } from "@/lib/i18n/config";
import { pagePath } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

/**
 * JSON-LD tag (structured data for search engines and AI assistants). `<` is escaped so a string containing
 * `</script>` cannot close the tag.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const BUSINESS_ID = `${site.url}/#business`;

/** The company, declared once (layout) and referenced elsewhere by `@id`. Only facts the site states. */
export function businessLd(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    url: `${site.url}${pagePath(lang, "home")}`,
    logo: `${site.url}${site.logo}`,
    image: `${site.url}/images/kitchen-bathroom-renovation-tampa-bay.webp`,
    telephone: `+1-${site.phone}`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: site.cities.map((name) => ({ "@type": "City", name: `${name}, FL` })),
    knowsLanguage: ["fr", "en", "es"],
    // `sameAs` (social profiles) is added once the client confirms the addresses (docs/client-info-to-verify.md).
  };
}

/** `WebSite` of the language (name and URL for search results). */
export function websiteLd(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: `${site.url}${pagePath(lang, "home")}`,
    inLanguage: localeHtmlLang[lang],
    publisher: { "@id": BUSINESS_ID },
  };
}

/** `FAQPage`: the questions and answers shown on the page, word for word. */
export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** `BreadcrumbList` of a page: `items` are [name, full path] pairs, home first. */
export function breadcrumbLd(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${site.url}${path}`,
    })),
  };
}
