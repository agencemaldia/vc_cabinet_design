import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";

/** Generated from the "ThankYou" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function ThankYouContent() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main>
        <section className="sec">
          <div
            className="wrap"
            style={{ maxWidth: "1040px", display: "flex", flexDirection: "column", gap: "28px" }}
            data-s="max-width: 1040px; display: flex; flex-direction: column; gap: 28px"
          >
            <h1
              style={{
                margin: "0",
                fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                fontWeight: "350",
                fontSize: "clamp(46px, 7vw, 96px)",
                lineHeight: "1",
                letterSpacing: "-.025em",
                color: "#1D2B44",
              }}
            >
              Thank you.
              <br />
              <em style={{ color: "#1F3D33" }}>We’ll be in touch.</em>
            </h1>
            <p
              style={{
                margin: "0",
                maxWidth: "560px",
                fontSize: "clamp(16px, 1.3vw, 19px)",
                lineHeight: "1.5",
                color: "#5E636B",
              }}
              data-s="margin: 0; max-width: 560px; font-size: clamp(16px, 1.3vw, 19px); line-height: 1.5; color: #5E636B"
            >
              We’ll contact you within 24 business hours to schedule your free designer consultation.
            </p>
            <ol
              style={{
                margin: "16px 0 0",
                padding: "0",
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <li
                style={{
                  flex: "1 1 260px",
                  padding: "28px",
                  borderRadius: "0",
                  background: "#FFFFFF",
                  border: "1px solid #E6DFD5",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                data-s="flex: 1 1 260px; padding: 28px; border-radius: 0; background: #FFFFFF; border: 1px solid #E6DFD5; display: flex; flex-direction: column; gap: 12px"
              >
                <span style={{ display: "flex", alignItems: "center", gap: "12px", color: "#4A6A8A" }}>
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 3h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 7.3 7.3l1.4-2.2L21 15.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "22px",
                      color: "#B7C6D6",
                    }}
                  >
                    01
                  </span>
                </span>
                <h2 style={{ margin: "0", fontSize: "19px", fontWeight: "700", color: "#1D2B44" }}>We call you</h2>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5E636B" }}>
                  Within 24 business hours, to confirm your project details.
                </p>
              </li>
              <li
                style={{
                  flex: "1 1 260px",
                  padding: "28px",
                  borderRadius: "0",
                  background: "#FFFFFF",
                  border: "1px solid #E6DFD5",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                data-s="flex: 1 1 260px; padding: 28px; border-radius: 0; background: #FFFFFF; border: 1px solid #E6DFD5; display: flex; flex-direction: column; gap: 12px"
              >
                <span style={{ display: "flex", alignItems: "center", gap: "12px", color: "#4A6A8A" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "22px",
                      color: "#B7C6D6",
                    }}
                  >
                    02
                  </span>
                </span>
                <h2 style={{ margin: "0", fontSize: "19px", fontWeight: "700", color: "#1D2B44" }}>
                  We visit & measure
                </h2>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5E636B" }}>
                  A designer comes to your home — free, no commitment.
                </p>
              </li>
              <li
                style={{
                  flex: "1 1 260px",
                  padding: "28px",
                  borderRadius: "0",
                  background: "#FFFFFF",
                  border: "1px solid #E6DFD5",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                data-s="flex: 1 1 260px; padding: 28px; border-radius: 0; background: #FFFFFF; border: 1px solid #E6DFD5; display: flex; flex-direction: column; gap: 12px"
              >
                <span style={{ display: "flex", alignItems: "center", gap: "12px", color: "#4A6A8A" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "22px",
                      color: "#B7C6D6",
                    }}
                  >
                    03
                  </span>
                </span>
                <h2 style={{ margin: "0", fontSize: "19px", fontWeight: "700", color: "#1D2B44" }}>
                  You see your design
                </h2>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5E636B" }}>
                  A 2D/3D design and a clear, written quote.
                </p>
              </li>
            </ol>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px" }}>
              <Link
                href="/gallery"
                className="pill pill-d"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  minHeight: "52px",
                  padding: "0 28px",
                  borderRadius: "0",
                  background: "#1F3D33",
                  color: "#FFFFFF",
                  border: "0",
                  fontSize: "15px",
                  fontWeight: "600",
                  textDecoration: "none",
                  textAlign: "center",
                }}
                data-s="display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 0 28px; border-radius: 0; background: #1F3D33; color: #FFFFFF; border: 0; font-size: 15px; font-weight: 600; text-decoration: none; text-align: center"
              >
                Browse our projects
              </Link>
              <Link
                href="/blog"
                className="pill "
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  minHeight: "52px",
                  padding: "0 28px",
                  borderRadius: "0",
                  background: "transparent",
                  color: "#1D2B44",
                  border: "1px solid #1D2B44",
                  fontSize: "15px",
                  fontWeight: "600",
                  textDecoration: "none",
                  textAlign: "center",
                }}
                data-s="display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 0 28px; border-radius: 0; background: transparent; color: #1D2B44; border: 1px solid #1D2B44; font-size: 15px; font-weight: 600; text-decoration: none; text-align: center"
              >
                Read design tips
              </Link>
            </div>
            <p style={{ margin: "0", fontSize: "15px", color: "#5E636B" }}>
              Can’t wait? Call us at{" "}
              <a href="tel:+17272233490" style={{ fontWeight: "700" }}>
                727-223-3490
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
