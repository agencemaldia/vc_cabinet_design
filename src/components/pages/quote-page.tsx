import type { CSSProperties } from "react";

import { JsonLd, breadcrumbLd } from "@/components/sections/json-ld";
import { SiteHeader } from "@/components/site/site-header";
import { ds } from "@/components/site/sx";
import { COMMON } from "@/content/common";
import { DESIGN } from "@/content/design";
import { QUOTE } from "@/content/quote";
import { QuoteWizard } from "@/features/quote/quote-wizard";
import type { Locale } from "@/lib/i18n/config";
import { pagePath } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

/** Wording of the original contact page design, per language. */
const CONTACT: Record<Locale, { h1: [string, string]; send: string; talk: string; call: string; area: string }> = {
  fr: {
    h1: ["Parlons de votre", "projet de rénovation."],
    send: "Votre demande de soumission",
    talk: "Vous préférez parler ?",
    call: `Appelez le ${site.phone}`,
    area: "SECTEUR DESSERVI",
  },
  en: {
    h1: ["Let’s talk about your", "renovation project."],
    send: "Your quote request",
    talk: "Prefer to talk?",
    call: `Call ${site.phone}`,
    area: "SERVICE AREA",
  },
  es: {
    h1: ["Hablemos de tu", "proyecto de remodelación."],
    send: "Tu solicitud de cotización",
    talk: "¿Prefieres hablar?",
    call: `Llama al ${site.phone}`,
    area: "ÁREA DE SERVICIO",
  },
};

const ROW: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "4px 24px",
  padding: "16px 0",
  borderBottom: "1px solid #E3E5E9",
};
const DT: CSSProperties = { fontSize: "15px", color: "#5E636B" };
const DD: CSSProperties = { margin: "0", fontSize: "16px", fontWeight: "500", color: "#1D2B44", textAlign: "right" };
const CHIP: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 16px",
  borderRadius: "0",
  background: "#FFFFFF",
  border: "1px solid #E3E5E9",
  fontSize: "14px",
  fontWeight: "600",
  color: "#1D2B44",
};

/**
 * Quote request page (specification §6) in the original contact page design: light hero with reassurance chips,
 * the step-by-step form on the left (one question at a time, progress bar, back navigation, validation, anti-spam,
 * confirmation), and the "Prefer to talk?" card on the right.
 */
export function QuotePage({ lang }: { lang: Locale }) {
  const t = QUOTE[lang];
  const k = CONTACT[lang];
  const d = DESIGN[lang];
  const c = COMMON[lang];
  const crumbs: [string, string][] = [
    [c.home, pagePath(lang, "home")],
    [c.quote, pagePath(lang, "quote")],
  ];
  return (
    <>
      <SiteHeader key="header" variant="solid" current="quote" />
      <main key="main">
        <section
          data-hero="light"
          className="sec"
          aria-labelledby="quote-title"
          {...ds({ background: "#EFF0F2", paddingBottom: "clamp(40px, 5vw, 72px)" })}
        >
          <div
            className="wrap"
            {...ds({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "22px",
            })}
          >
            <h1
              id="quote-title"
              {...ds({
                margin: "0",
                maxWidth: "1000px",
                fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                fontWeight: "400",
                fontSize: "clamp(46px, 7vw, 104px)",
                lineHeight: "1",
                color: "#1D2B44",
              })}
            >
              {k.h1[0]}
              <br />
              <em {...ds({ color: "#125A50" })}>{k.h1[1]}</em>
            </h1>
            <p
              {...ds({
                margin: "0",
                maxWidth: "620px",
                fontSize: "clamp(16px, 1.3vw, 19px)",
                lineHeight: "1.5",
                color: "#5E636B",
              })}
            >
              {t.lead}
            </p>
            <div {...ds({ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" })}>
              <div {...ds({ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px" })}>
                {t.reassurance.map((r) => (
                  <span key={r} {...ds(CHIP)}>
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section {...ds({ paddingBottom: "clamp(64px, 8vw, 128px)" })}>
          <div
            className="wrap"
            {...ds({ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 72px)", alignItems: "flex-start" })}
          >
            <div {...ds({ flex: "1.3 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" })}>
              <h2
                {...ds({
                  margin: "0",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "400",
                  fontSize: "34px",
                  color: "#1D2B44",
                })}
              >
                {k.send}
              </h2>
              <QuoteWizard lang={lang} compact />
            </div>
            <div {...ds({ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: "32px" })}>
              <div
                {...ds({
                  padding: "clamp(28px, 3vw, 40px)",
                  borderRadius: "0",
                  background: "#FFFFFF",
                  border: "1px solid #E3E5E9",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                })}
              >
                <h2
                  {...ds({
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "400",
                    fontSize: "30px",
                    color: "#1D2B44",
                  })}
                >
                  {k.talk}
                </h2>
                <dl {...ds({ margin: "0", borderTop: "1px solid #E3E5E9" })}>
                  <div {...ds(ROW)}>
                    <dt {...ds(DT)}>{d.phone}</dt>
                    <dd {...ds(DD)}>
                      <a href={site.phoneHref} {...ds({ color: "inherit", textDecoration: "none" })}>
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                  <div {...ds(ROW)}>
                    <dt {...ds(DT)}>{d.email}</dt>
                    <dd {...ds(DD)}>
                      <a
                        href={`mailto:${site.email}`}
                        {...ds({ color: "inherit", textDecoration: "none", overflowWrap: "anywhere" })}
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div {...ds(ROW)}>
                    <dt {...ds(DT)}>{d.showroom}</dt>
                    <dd {...ds(DD)}>
                      {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
                    </dd>
                  </div>
                </dl>
                <a
                  href={site.phoneHref}
                  className="btn-p"
                  {...ds({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    minHeight: "56px",
                    borderRadius: "0",
                    background: "#125A50",
                    color: "#FFFFFF",
                    fontWeight: "700",
                    textDecoration: "none",
                  })}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 3h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 7.3 7.3l1.4-2.2L21 15.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
                  </svg>{" "}
                  {k.call}
                </a>
              </div>
              <div {...ds({ display: "flex", flexDirection: "column", gap: "12px" })}>
                <h2
                  {...ds({
                    margin: "0",
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: ".16em",
                    color: "#125A50",
                  })}
                >
                  {k.area}
                </h2>
                <ul
                  {...ds({
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  })}
                >
                  {site.cities.map((city) => (
                    <li key={city} {...ds(CHIP)}>
                      {city}, FL
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <JsonLd data={breadcrumbLd(crumbs)} />
      </main>
    </>
  );
}
