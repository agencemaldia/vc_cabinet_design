"use client";

import { SiteHeader } from "@/components/site/site-header";
import { useTranslate } from "@/lib/i18n/context";

type Section = { title: string; text?: string; points?: string[] };

/**
 * Accessibility statement (footer link "Accessibility"). Hand-written — the design had the link but no page —
 * in the same layout as the Privacy policy. States an aim (WCAG 2.1 AA), what is in place, the known limits
 * and how to get help; it does not claim full conformance. Review it with the client before launch.
 */
const SECTIONS: Section[] = [
  {
    title: "Our commitment",
    text: "V&C Cabinet Design Concept LLC wants everyone to be able to use this website and plan their project with us, including people with disabilities. We are working to make the site easy to use with a keyboard, a screen reader or a magnifier, and on any device.",
  },
  {
    title: "The standard we follow",
    text: "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, level AA, published by the World Wide Web Consortium (W3C). These guidelines explain how to make web content more accessible to people with a wide range of disabilities.",
  },
  {
    title: "What we have done",
    points: [
      "Text alternatives for photos and labels for buttons, links and form fields.",
      "Every page can be used with a keyboard, with visible focus on links and buttons.",
      "Clear headings and landmarks, so screen readers can move through each page.",
      "Readable text and color contrast, and pages that work when zoomed in to 200%.",
      "Animations are turned off for visitors who ask their device for reduced motion.",
      "The site is available in English, French and Spanish.",
    ],
  },
  {
    title: "Known limitations",
    text: "Some content may not yet be fully accessible — for example, embedded maps and videos provided by third parties, or older photos whose descriptions are still being completed. We review the site regularly and fix issues as we find them.",
  },
  {
    title: "Need help or another format?",
    text: "If something on this website is difficult to use, or if you would like information in another format, call us at 727-223-3490 or email cabinetdesignconcept@gmail.com. We will help you directly — for example, by booking your free designer consultation by phone — and reply within two business days.",
  },
  {
    title: "Feedback",
    text: "Your feedback helps us improve. Tell us which page you were on, what you were trying to do and the problem you met, and which browser or assistive technology you use, if you wish.",
  },
];

const h2Style = {
  margin: "0 0 14px",
  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
  fontWeight: "450",
  fontSize: "28px",
  color: "#1D2B44",
} as const;
const pStyle = { margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#22252A" } as const;

export function AccessibilityContent() {
  const tr = useTranslate();
  return tr(
    <>
      <SiteHeader variant="solid" />
      <main>
        <section className="sec" style={{ paddingBottom: "40px" }}>
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h1
              style={{
                margin: "0",
                fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                fontWeight: "350",
                fontSize: "clamp(44px, 6vw, 84px)",
                lineHeight: "1",
                color: "#1D2B44",
              }}
            >
              Accessibility
            </h1>
            <p style={{ margin: "0", fontSize: "15px", color: "#5E636B" }}>
              Last reviewed: November 15, 2026 ·{" "}
              <span style={{ color: "#5E636B" }}>V&C Cabinet Design Concept LLC</span>
            </p>
          </div>
        </section>
        <section style={{ paddingBottom: "clamp(64px, 8vw, 128px)" }}>
          <div
            className="wrap"
            style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 96px)", alignItems: "flex-start" }}
          >
            <nav
              aria-label="On this page"
              style={{
                flex: "1 1 240px",
                maxWidth: "320px",
                padding: "24px",
                borderRadius: "6px",
                background: "#FFFFFF",
                border: "1px solid #E3E5E9",
              }}
            >
              <p
                style={{
                  margin: "0 0 12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: ".16em",
                  color: "#5E636B",
                }}
              >
                ON THIS PAGE
              </p>
              <ol
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                {SECTIONS.map((s, i) => (
                  <li key={s.title}>
                    <a
                      href={`#a11y${i}`}
                      className="lnk"
                      style={{
                        display: "flex",
                        gap: "10px",
                        minHeight: "36px",
                        alignItems: "center",
                        fontSize: "15px",
                        color: "#40444B",
                        textDecoration: "none",
                      }}
                    >
                      <span style={{ color: "#125A50", fontWeight: "700" }}>{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div style={{ flex: "3 1 480px", maxWidth: "760px", minWidth: "0" }}>
              {SECTIONS.map((s, i) => (
                <section
                  key={s.title}
                  id={`a11y${i}`}
                  style={{ padding: "32px 0", borderTop: i === 0 ? "0" : "1px solid #E3E5E9" }}
                >
                  <h2 style={h2Style}>
                    <span style={{ color: "#125A50" }}>{i + 1}.</span> {s.title}
                  </h2>
                  {s.text && <p style={pStyle}>{s.text}</p>}
                  {s.points && (
                    <ul
                      style={{ ...pStyle, paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "6px" }}
                    >
                      {s.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>,
  );
}
