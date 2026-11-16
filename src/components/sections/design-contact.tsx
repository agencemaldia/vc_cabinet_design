import type { CSSProperties } from "react";

import { ds } from "@/components/site/sx";
import { DESIGN } from "@/content/design";
import { QuoteWizard } from "@/features/quote/quote-wizard";
import type { ProjectKey } from "@/features/quote/schema";
import type { Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

const H2: CSSProperties = {
  margin: "0",
  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(40px, 5.4vw, 76px)",
  lineHeight: "1.04",
  letterSpacing: "-.01em",
  color: "#1D2B44",
};

/**
 * "Let's work together!" band of the original design — contact details on the left, and in the white card the
 * step-by-step quote form (specification §6) where the design had its consultation form. Closes every page.
 */
export function DesignContact({
  lang,
  title,
  lede,
  project,
}: {
  lang: Locale;
  title?: string;
  lede?: string;
  /** Project preselected in the form (service pages). */
  project?: ProjectKey;
}) {
  const d = DESIGN[lang];
  return (
    <section
      id="contact"
      className="ph"
      {...ds({ position: "relative", backgroundColor: "#2B4A3F" })}
      aria-labelledby="contact-title"
    >
      <div aria-hidden="true" {...ds({ position: "absolute", inset: "0", background: "rgba(20,42,35,.78)" })} />
      <div
        className="wrap sec"
        {...ds({
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(40px, 6vw, 96px)",
          alignItems: "flex-start",
        })}
      >
        <div {...ds({ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "22px" })}>
          <h2 id="contact-title" {...ds({ ...H2, color: "#FFFFFF" })}>
            {title ?? d.contactTitle}
          </h2>
          <p
            {...ds({
              margin: "0",
              maxWidth: "560px",
              fontSize: "clamp(16px, 1.3vw, 19px)",
              lineHeight: "1.5",
              color: "rgba(255,255,255,.82)",
            })}
          >
            {lede ?? d.contactLede}
          </p>
          <div {...ds({ marginTop: "12px" })}>
            <dl {...ds({ margin: "0", borderTop: "1px solid rgba(255,255,255,.18)" })}>
              {(
                [
                  [
                    d.phone,
                    <a key="p" href={site.phoneHref} {...ds({ color: "inherit", textDecoration: "none" })}>
                      {site.phone}
                    </a>,
                  ],
                  [
                    d.email,
                    <a
                      key="e"
                      href={`mailto:${site.email}`}
                      {...ds({ color: "inherit", textDecoration: "none", overflowWrap: "anywhere" })}
                    >
                      {site.email}
                    </a>,
                  ],
                  [
                    d.showroom,
                    `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
                  ],
                ] as const
              ).map(([label, value]) => (
                <div
                  key={label}
                  {...ds({
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: "4px 24px",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(255,255,255,.18)",
                  })}
                >
                  <dt {...ds({ fontSize: "15px", color: "rgba(255,255,255,.66)" })}>{label}</dt>
                  <dd {...ds({ margin: "0", fontSize: "16px", fontWeight: 500, color: "#FFFFFF", textAlign: "right" })}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p {...ds({ margin: "0", fontSize: "14px", color: "rgba(255,255,255,.8)" })}>{site.cities.join(" · ")}</p>
        </div>
        <div
          {...ds({
            flex: "1.1 1 440px",
            minWidth: "0",
            padding: "clamp(24px, 3vw, 44px)",
            background: "#FFFFFF",
            borderRadius: "0",
            boxShadow: "0 40px 80px -30px rgba(0,0,0,.5)",
          })}
        >
          <QuoteWizard lang={lang} compact preset={project} />
        </div>
      </div>
    </section>
  );
}
