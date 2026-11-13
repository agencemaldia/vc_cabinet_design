import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";

/** Generated from the "NotFound" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function NotFoundContent() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main>
        <section className="sec">
          <div
            className="wrap"
            style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}
            data-s="display: flex; flex-wrap: wrap; gap: clamp(40px, 6vw, 96px); align-items: center"
          >
            <div
              style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: "22px" }}
              data-s="flex: 1 1 420px; display: flex; flex-direction: column; gap: 22px"
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
                This drawer
                <br />
                <em style={{ color: "#1F3D33" }}>is empty.</em>
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
                The page you’re looking for has moved or no longer exists. Let’s get you back to something beautiful.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link
                  href="/"
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
                  Back to Home
                </Link>
                <Link
                  href="/contact"
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
                  Book a Free Designer Consultation
                </Link>
              </div>
              <ul
                style={{
                  margin: "8px 0 0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <li>
                  <Link
                    href="/services/kitchen"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      minHeight: "44px",
                      padding: "0 16px",
                      borderRadius: "0",
                      border: "1.5px solid #C9BFB1",
                      background: "#FFFFFF",
                      color: "#1D2B44",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                    data-s="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 0; border: 1.5px solid #C9BFB1; background: #FFFFFF; color: #1D2B44; font-weight: 600; text-decoration: none"
                  >
                    Kitchens
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bathroom"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      minHeight: "44px",
                      padding: "0 16px",
                      borderRadius: "0",
                      border: "1.5px solid #C9BFB1",
                      background: "#FFFFFF",
                      color: "#1D2B44",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                    data-s="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 0; border: 1.5px solid #C9BFB1; background: #FFFFFF; color: #1D2B44; font-weight: 600; text-decoration: none"
                  >
                    Bathrooms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/walk-in"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      minHeight: "44px",
                      padding: "0 16px",
                      borderRadius: "0",
                      border: "1.5px solid #C9BFB1",
                      background: "#FFFFFF",
                      color: "#1D2B44",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                    data-s="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 0; border: 1.5px solid #C9BFB1; background: #FFFFFF; color: #1D2B44; font-weight: 600; text-decoration: none"
                  >
                    Walk-ins
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      minHeight: "44px",
                      padding: "0 16px",
                      borderRadius: "0",
                      border: "1.5px solid #C9BFB1",
                      background: "#FFFFFF",
                      color: "#1D2B44",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                    data-s="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 0; border: 1.5px solid #C9BFB1; background: #FFFFFF; color: #1D2B44; font-weight: 600; text-decoration: none"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div aria-hidden="true" style={{ flex: "1 1 360px", display: "flex", justifyContent: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "300",
                  fontSize: "clamp(160px, 22vw, 320px)",
                  lineHeight: ".8",
                  letterSpacing: "-.05em",
                  color: "#BCCDC3",
                }}
                data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 300; font-size: clamp(160px, 22vw, 320px); line-height: .8; letter-spacing: -.05em; color: #BCCDC3"
              >
                404
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
