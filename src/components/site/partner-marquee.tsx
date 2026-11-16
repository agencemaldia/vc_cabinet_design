"use client";

import { useTranslate } from "@/lib/i18n/context";

/**
 * Scrolling band of business partners, right under the Home hero.
 *
 * TEMPORARY CONTENT: these are common cabinetry suppliers (hardware, countertops, fixtures, finishes) used
 * as stand-ins, NOT confirmed V&C partners. Replace PARTNERS with the client's real partners before launch.
 * Put each logo in public/images/partners/ and set `logo`; without one, the name is shown as text.
 */

type Partner = { name: string; logo?: string; href?: string };

const PARTNERS: Partner[] = [
  { name: "Blum" },
  { name: "Häfele" },
  { name: "Hettich" },
  { name: "Caesarstone" },
  { name: "Silestone" },
  { name: "Kohler" },
  { name: "Sherwin-Williams" },
  { name: "Wilsonart" },
];

function Item({ partner }: { partner: Partner }) {
  const content = partner.logo ? (
    <img src={partner.logo} alt={partner.name} className="vc-partners__logo" />
  ) : (
    <span className="vc-partners__name">{partner.name}</span>
  );
  return (
    <li className="vc-partners__item">
      {partner.href ? (
        <a href={partner.href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

export function PartnerMarquee() {
  const tr = useTranslate();
  return tr(
    <div className="vc-partners wrap" aria-label="Our business partners">
      <span className="vc-partners__label">Trusted partners</span>
      <div className="vc-partners__viewport">
        {/* The list is rendered twice so the loop is seamless; the copy is hidden from assistive tech. */}
        <div className="vc-partners__track">
          <ul>
            {PARTNERS.map((p) => (
              <Item key={p.name} partner={p} />
            ))}
          </ul>
          <ul aria-hidden="true">
            {PARTNERS.map((p) => (
              <Item key={p.name} partner={p} />
            ))}
          </ul>
        </div>
      </div>
    </div>,
  );
}
