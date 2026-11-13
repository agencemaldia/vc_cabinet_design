import Link from "next/link";
type SiteFooterProps = {
  /** The Home page uses the sage version of the logo, the other pages the gold one. */
  logoTone?: "gold" | "sage";
};

export function SiteFooter({ logoTone = "gold" }: SiteFooterProps) {
  return (
    <footer
      className="foot grain"
      style={{
        backgroundColor: "#1D2B44",
        color: "#FFFFFF",
        paddingTop: "clamp(64px, 8vw, 112px)",
        paddingBottom: "32px",
      }}
      data-s="background-color: #1D2B44; color: #FFFFFF; padding-top: clamp(64px, 8vw, 112px); padding-bottom: 32px"
    >
      <div className="wrap">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "32px",
            paddingBottom: "clamp(48px, 6vw, 80px)",
            borderBottom: "1px solid rgba(255,255,255,.16)",
          }}
          data-s="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 32px; padding-bottom: clamp(48px, 6vw, 80px); border-bottom: 1px solid rgba(255,255,255,.16)"
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
            data-s="display: flex; flex-direction: column; gap: 28px"
          >
            <img
              src={logoTone === "sage" ? "/images/logo-sage-on-dark.png" : "/images/logo-gold-on-dark.png"}
              alt="V&C Cabinet Design"
              style={{ display: "block", height: "48px", width: "auto" }}
            />
            <p
              style={{
                margin: "0",
                fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                fontSize: "clamp(54px, 9vw, 150px)",
                lineHeight: ".9",
                letterSpacing: "-.02em",
                color: "#FFFFFF",
              }}
              data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(54px, 9vw, 150px); line-height: .9; letter-spacing: -.02em; color: #FFFFFF"
            >
              V&C CABINET
              <br />
              <span style={{ color: "#8FA89A" }} data-s="color: #8FA89A">
                DESIGN
              </span>
            </p>
          </div>
          <div
            style={{ flex: "0 1 380px", display: "flex", flexDirection: "column", gap: "18px" }}
            data-s="flex: 0 1 380px; display: flex; flex-direction: column; gap: 18px"
          >
            <p
              style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "rgba(255,255,255,.82)" }}
              data-s="margin: 0; font-size: 16px; line-height: 1.6; color: rgba(255,255,255,.82)"
            >
              We ideate, design and build the interior projects homeowners have long dreamed of — across Tampa Bay.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/contact"
                className="pill pill-w"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  minHeight: "52px",
                  padding: "0 28px",
                  borderRadius: "0",
                  background: "#FFFFFF",
                  color: "#1F3D33",
                  border: "0",
                  fontSize: "15px",
                  fontWeight: "600",
                  textDecoration: "none",
                  textAlign: "center",
                }}
                data-s="display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 0 28px; border-radius: 0; background: #FFFFFF; color: #1F3D33; border: 0; font-size: 15px; font-weight: 600; text-decoration: none; text-align: center"
              >
                Book a Free Designer Consultation
              </Link>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="#"
                aria-label="Facebook"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "0",
                  border: "1px solid rgba(255,255,255,.3)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                data-s="width: 48px; height: 48px; border-radius: 0; border: 1px solid rgba(255,255,255,.3); color: #FFFFFF; display: flex; align-items: center; justify-content: center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "0",
                  border: "1px solid rgba(255,255,255,.3)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                data-s="width: 48px; height: 48px; border-radius: 0; border: 1px solid rgba(255,255,255,.3); color: #FFFFFF; display: flex; align-items: center; justify-content: center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
                  <path d="M10 9.2v5.6l4.8-2.8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "0",
                  border: "1px solid rgba(255,255,255,.3)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                data-s="width: 48px; height: 48px; border-radius: 0; border: 1px solid rgba(255,255,255,.3); color: #FFFFFF; display: flex; align-items: center; justify-content: center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7.5 10.5V17M7.5 7.3v.01M11.5 17v-6.5M11.5 13.5c0-2 1.2-3 2.6-3s2.4 1 2.4 3V17" />
                </svg>
              </a>
              <a
                href="mailto:cabinetdesignconcept@gmail.com"
                aria-label="Email us"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "0",
                  border: "1px solid rgba(255,255,255,.3)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                data-s="width: 48px; height: 48px; border-radius: 0; border: 1px solid rgba(255,255,255,.3); color: #FFFFFF; display: flex; align-items: center; justify-content: center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="1.5" />
                  <path d="M3.5 6l8.5 7 8.5-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 32px", padding: "56px 0" }}>
          <div
            style={{ flex: "1 1 150px", display: "flex", flexDirection: "column", gap: "10px" }}
            data-s="flex: 1 1 150px; display: flex; flex-direction: column; gap: 10px"
          >
            <h3
              style={{ margin: "0 0 6px", fontSize: "12px", fontWeight: "700", letterSpacing: "0", color: "#8FA89A" }}
              data-s="margin: 0 0 6px; font-size: 12px; font-weight: 700; letter-spacing: 0; color: #8FA89A"
            >
              Explore
            </h3>
            <Link
              href="/"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              Home
            </Link>
            <Link
              href="/mission"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              Mission
            </Link>
            <Link
              href="/gallery"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              Contact Us
            </Link>
          </div>
          <div
            style={{ flex: "1 1 150px", display: "flex", flexDirection: "column", gap: "10px" }}
            data-s="flex: 1 1 150px; display: flex; flex-direction: column; gap: 10px"
          >
            <h3
              style={{ margin: "0 0 6px", fontSize: "12px", fontWeight: "700", letterSpacing: "0", color: "#8FA89A" }}
              data-s="margin: 0 0 6px; font-size: 12px; font-weight: 700; letter-spacing: 0; color: #8FA89A"
            >
              Services
            </h3>
            <Link
              href="/services"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              All our Services
            </Link>
            <Link
              href="/services/kitchen"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              Kitchen
            </Link>
            <Link
              href="/services/bathroom"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              Bathroom
            </Link>
            <Link
              href="/services/walk-in"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              Walk-in
            </Link>
          </div>
          <div
            style={{ flex: "1 1 150px", display: "flex", flexDirection: "column", gap: "10px" }}
            data-s="flex: 1 1 150px; display: flex; flex-direction: column; gap: 10px"
          >
            <h3
              style={{ margin: "0 0 6px", fontSize: "12px", fontWeight: "700", letterSpacing: "0", color: "#8FA89A" }}
              data-s="margin: 0 0 6px; font-size: 12px; font-weight: 700; letter-spacing: 0; color: #8FA89A"
            >
              Service area
            </h3>
            <a
              href="#"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              Tampa
            </a>
            <a
              href="#"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              Bradenton
            </a>
            <a
              href="#"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              Clearwater
            </a>
            <a
              href="#"
              style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "none", opacity: ".88", minHeight: "26px" }}
              data-s="color: #FFFFFF; font-size: 15px; text-decoration: none; opacity: .88; min-height: 26px"
            >
              St. Petersburg
            </a>
          </div>
          <div
            style={{
              flex: "1 1 240px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "15px",
              lineHeight: "1.55",
            }}
            data-s="flex: 1 1 240px; display: flex; flex-direction: column; gap: 10px; font-size: 15px; line-height: 1.55"
          >
            <h3
              style={{ margin: "0 0 6px", fontSize: "12px", fontWeight: "700", letterSpacing: "0", color: "#8FA89A" }}
              data-s="margin: 0 0 6px; font-size: 12px; font-weight: 700; letter-spacing: 0; color: #8FA89A"
            >
              Contact
            </h3>
            <a
              href="tel:+17272233490"
              style={{ color: "#FFFFFF", textDecoration: "none" }}
              data-s="color: #FFFFFF; text-decoration: none"
            >
              727-223-3490
            </a>
            <a
              href="mailto:cabinetdesignconcept@gmail.com"
              style={{ color: "#FFFFFF", textDecoration: "none", overflowWrap: "anywhere" }}
              data-s="color: #FFFFFF; text-decoration: none; overflow-wrap: anywhere"
            >
              cabinetdesignconcept@gmail.com
            </a>
            <span style={{ color: "rgba(255,255,255,.8)" }} data-s="color: rgba(255,255,255,.8)">
              19046 Bruce B Downs Blvd, Ste B6
              <br />
              Tampa, FL 33647
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,.16)",
            fontSize: "13px",
            color: "rgba(255,255,255,.72)",
          }}
          data-s="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.16); font-size: 13px; color: rgba(255,255,255,.72)"
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
            <button
              type="button"
              aria-label="Language: English"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                minHeight: "44px",
                padding: "0 16px",
                borderRadius: "0",
                border: "1px solid rgba(255,255,255,.3)",
                background: "transparent",
                color: "#FFFFFF",
                fontFamily: "var(--font-urbanist), sans-serif",
                fontSize: "13px",
                cursor: "pointer",
              }}
              data-s="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 0; border: 1px solid rgba(255,255,255,.3); background: transparent; color: #FFFFFF; font-family: var(--font-urbanist), sans-serif; font-size: 13px; cursor: pointer"
            >
              {" "}
              English{" "}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                minHeight: "44px",
                padding: "0 16px",
                borderRadius: "0",
                background: "rgba(255,255,255,.08)",
                fontSize: "12px",
              }}
              data-s="display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 16px; border-radius: 0; background: rgba(255,255,255,.08); font-size: 12px"
            >
              {" "}
              TrustedSite badge
            </span>
          </div>
          <span>© 2026 V&C Cabinet Design Concept LLC · Licensed & insured</span>
          <span style={{ display: "flex", gap: "18px" }}>
            <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,.9)" }} data-s="color: rgba(255,255,255,.9)">
              Privacy Policy
            </Link>
            <a href="#" style={{ color: "rgba(255,255,255,.9)" }} data-s="color: rgba(255,255,255,.9)">
              Accessibility
            </a>
          </span>
        </div>
      </div>
      <div aria-hidden="true" className="mq" style={{ marginTop: "40px", lineHeight: ".78" }}>
        <div
          className="mq-in"
          style={{
            fontFamily: "var(--font-urbanist), system-ui, sans-serif",
            fontWeight: "600",
            fontSize: "clamp(96px, 17vw, 260px)",
            letterSpacing: "-.05em",
            color: "rgba(255,255,255,.12)",
          }}
          data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 600; font-size: clamp(96px, 17vw, 260px); letter-spacing: -.05em; color: rgba(255,255,255,.12)"
        >
          <span>V&C Cabinet</span>
          <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
            /
          </span>
          <span>V&C Cabinet</span>
          <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
            /
          </span>
          <span>V&C Cabinet</span>
          <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
            /
          </span>
          <span>V&C Cabinet</span>
          <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
            /
          </span>
        </div>
      </div>
    </footer>
  );
}
