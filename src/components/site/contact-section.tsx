"use client";

import Link from "next/link";
import { useConsultationForm } from "@/components/site/use-consultation-form";

type ContactSectionProps = {
  title?: string;
  lede?: string;
  /** Extra line shown under the lede on some pages (e.g. Gallery). */
  appointment?: string;
};

/** "Let's work together" band with contact details and the free-consultation form. */
export function ContactSection({
  title = "Let’s work together!",
  lede = "Tell us about your project. A designer will call you within 24 business hours to plan a free in-home visit and measurement.",
  appointment,
}: ContactSectionProps) {
  const submitForm = useConsultationForm();
  return (
    <section id="contact" className="ph" style={{ position: "relative", backgroundColor: "#2B4A3F" }}>
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: "0", background: "rgba(20,42,35,.78)" }}
        data-s="position: absolute; inset: 0; background: rgba(20,42,35,.78)"
      />
      <div
        className="wrap sec"
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(40px, 6vw, 96px)",
          alignItems: "center",
        }}
        data-s="position: relative; display: flex; flex-wrap: wrap; gap: clamp(40px, 6vw, 96px); align-items: center"
      >
        <div
          style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "22px" }}
          data-s="flex: 1 1 380px; display: flex; flex-direction: column; gap: 22px"
        >
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-urbanist), system-ui, sans-serif",
              fontWeight: "400",
              fontSize: "clamp(40px, 5.4vw, 76px)",
              lineHeight: "1.04",
              letterSpacing: "-.01em",
              color: "#FFFFFF",
            }}
            data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 400; font-size: clamp(40px, 5.4vw, 76px); line-height: 1.04; letter-spacing: -.01em; color: #FFFFFF"
          >
            {title}
          </h2>
          <p
            style={{
              margin: "0",
              maxWidth: "560px",
              fontSize: "clamp(16px, 1.3vw, 19px)",
              lineHeight: "1.5",
              color: "rgba(255,255,255,.82)",
            }}
            data-s="margin: 0; max-width: 560px; font-size: clamp(16px, 1.3vw, 19px); line-height: 1.5; color: rgba(255,255,255,.82)"
          >
            {lede}
          </p>
          {appointment && (
            <p
              style={{
                margin: "0",
                fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                fontSize: "26px",
                color: "#FFFFFF",
              }}
              data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: 26px; color: #FFFFFF"
            >
              {appointment}
            </p>
          )}
          <div style={{ marginTop: "12px" }}>
            <dl
              style={{ margin: "0", borderTop: "1px solid rgba(255,255,255,.18)" }}
              data-s="margin: 0; border-top: 1px solid rgba(255,255,255,.18)"
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "4px 24px",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,.18)",
                }}
                data-s="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 24px; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,.18)"
              >
                <dt
                  style={{ fontSize: "15px", color: "rgba(255,255,255,.66)" }}
                  data-s="font-size: 15px; color: rgba(255,255,255,.66)"
                >
                  Phone
                </dt>
                <dd
                  style={{ margin: "0", fontSize: "16px", fontWeight: "500", color: "#FFFFFF", textAlign: "right" }}
                  data-s="margin: 0; font-size: 16px; font-weight: 500; color: #FFFFFF; text-align: right"
                >
                  <a href="tel:+17272233490" style={{ color: "inherit", textDecoration: "none" }}>
                    727-223-3490
                  </a>
                </dd>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "4px 24px",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,.18)",
                }}
                data-s="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 24px; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,.18)"
              >
                <dt
                  style={{ fontSize: "15px", color: "rgba(255,255,255,.66)" }}
                  data-s="font-size: 15px; color: rgba(255,255,255,.66)"
                >
                  Email
                </dt>
                <dd
                  style={{ margin: "0", fontSize: "16px", fontWeight: "500", color: "#FFFFFF", textAlign: "right" }}
                  data-s="margin: 0; font-size: 16px; font-weight: 500; color: #FFFFFF; text-align: right"
                >
                  <a
                    href="mailto:cabinetdesignconcept@gmail.com"
                    style={{ color: "inherit", textDecoration: "none", overflowWrap: "anywhere" }}
                  >
                    cabinetdesignconcept@gmail.com
                  </a>
                </dd>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "4px 24px",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,.18)",
                }}
                data-s="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 24px; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,.18)"
              >
                <dt
                  style={{ fontSize: "15px", color: "rgba(255,255,255,.66)" }}
                  data-s="font-size: 15px; color: rgba(255,255,255,.66)"
                >
                  Showroom
                </dt>
                <dd
                  style={{ margin: "0", fontSize: "16px", fontWeight: "500", color: "#FFFFFF", textAlign: "right" }}
                  data-s="margin: 0; font-size: 16px; font-weight: 500; color: #FFFFFF; text-align: right"
                >
                  19046 Bruce B Downs Blvd, Ste B6, Tampa, FL 33647
                </dd>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "4px 24px",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,.18)",
                }}
                data-s="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 24px; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,.18)"
              >
                <dt
                  style={{ fontSize: "15px", color: "rgba(255,255,255,.66)" }}
                  data-s="font-size: 15px; color: rgba(255,255,255,.66)"
                >
                  Hours
                </dt>
                <dd
                  style={{ margin: "0", fontSize: "16px", fontWeight: "500", color: "#FFFFFF", textAlign: "right" }}
                  data-s="margin: 0; font-size: 16px; font-weight: 500; color: #FFFFFF; text-align: right"
                >
                  [To be provided by client]
                </dd>
              </div>
            </dl>
          </div>
          <p
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              color: "rgba(255,255,255,.8)",
            }}
            data-s="margin: 0; display: flex; align-items: center; gap: 8px; font-size: 14px; color: rgba(255,255,255,.8)"
          >
            {" "}
            Bradenton · Tampa · Clearwater · St. Petersburg
          </p>
        </div>
        <div
          style={{
            flex: "1.1 1 440px",
            minWidth: "0",
            padding: "clamp(24px, 3vw, 44px)",
            background: "#FFFFFF",
            borderRadius: "0",
            boxShadow: "0 40px 80px -30px rgba(0,0,0,.5)",
          }}
          data-s="flex: 1.1 1 440px; min-width: 0; padding: clamp(24px, 3vw, 44px); background: #FFFFFF; border-radius: 0; box-shadow: 0 40px 80px -30px rgba(0,0,0,.5)"
        >
          <form
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            data-s="display: flex; flex-direction: column; gap: 18px"
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <div
                style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "6px" }}
                data-s="flex: 1 1 200px; display: flex; flex-direction: column; gap: 6px"
              >
                <label style={{ paddingLeft: "22px", fontSize: "13px", fontWeight: "600", color: "#1D2B44" }}>
                  Full name
                </label>
                <input
                  className="fld"
                  type="text"
                  placeholder="Jane Smith"
                  autoComplete="name"
                  name="name"
                  required
                  minLength={2}
                  style={{
                    height: "56px",
                    padding: "0 22px",
                    border: "0",
                    borderRadius: "0",
                    background: "#F6F3EE",
                    fontFamily: "var(--font-urbanist), sans-serif",
                    fontSize: "16px",
                    color: "#22252A",
                    width: "100%",
                  }}
                  data-s="height: 56px; padding: 0 22px; border: 0; border-radius: 0; background: #F6F3EE; font-family: var(--font-urbanist), sans-serif; font-size: 16px; color: #22252A; width: 100%"
                />
                <span className="err" role="alert">
                  Please enter your full name.
                </span>
              </div>
              <div
                style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "6px" }}
                data-s="flex: 1 1 200px; display: flex; flex-direction: column; gap: 6px"
              >
                <label style={{ paddingLeft: "22px", fontSize: "13px", fontWeight: "600", color: "#1D2B44" }}>
                  Phone
                </label>
                <input
                  className="fld"
                  type="tel"
                  placeholder="(727) 555-0148"
                  autoComplete="tel"
                  name="phone"
                  required
                  pattern={"[0-9 \\(\\)\\+\\.\\-]{10,20}"}
                  style={{
                    height: "56px",
                    padding: "0 22px",
                    border: "0",
                    borderRadius: "0",
                    background: "#F6F3EE",
                    fontFamily: "var(--font-urbanist), sans-serif",
                    fontSize: "16px",
                    color: "#22252A",
                    width: "100%",
                  }}
                  data-s="height: 56px; padding: 0 22px; border: 0; border-radius: 0; background: #F6F3EE; font-family: var(--font-urbanist), sans-serif; font-size: 16px; color: #22252A; width: 100%"
                />
                <span className="err" role="alert">
                  Enter a valid phone number (10 digits).
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <div
                style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "6px" }}
                data-s="flex: 1 1 200px; display: flex; flex-direction: column; gap: 6px"
              >
                <label style={{ paddingLeft: "22px", fontSize: "13px", fontWeight: "600", color: "#1D2B44" }}>
                  Email
                </label>
                <input
                  className="fld"
                  type="email"
                  placeholder="jane@email.com"
                  autoComplete="email"
                  name="email"
                  required
                  pattern={"[^@\\s]+@[^@\\s]+\\.[^@\\s]{2,}"}
                  style={{
                    height: "56px",
                    padding: "0 22px",
                    border: "0",
                    borderRadius: "0",
                    background: "#F6F3EE",
                    fontFamily: "var(--font-urbanist), sans-serif",
                    fontSize: "16px",
                    color: "#22252A",
                    width: "100%",
                  }}
                  data-s="height: 56px; padding: 0 22px; border: 0; border-radius: 0; background: #F6F3EE; font-family: var(--font-urbanist), sans-serif; font-size: 16px; color: #22252A; width: 100%"
                />
                <span className="err" role="alert">
                  Enter a valid email address (name@domain.com).
                </span>
              </div>
              <div
                style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "6px" }}
                data-s="flex: 1 1 200px; display: flex; flex-direction: column; gap: 6px"
              >
                <label style={{ paddingLeft: "22px", fontSize: "13px", fontWeight: "600", color: "#1D2B44" }}>
                  ZIP code
                </label>
                <input
                  className="fld"
                  type="text"
                  placeholder="33647"
                  autoComplete="postal-code"
                  name="zip"
                  required
                  inputMode="numeric"
                  maxLength={5}
                  pattern="[0-9]{5}"
                  style={{
                    height: "56px",
                    padding: "0 22px",
                    border: "0",
                    borderRadius: "0",
                    background: "#F6F3EE",
                    fontFamily: "var(--font-urbanist), sans-serif",
                    fontSize: "16px",
                    color: "#22252A",
                    width: "100%",
                  }}
                  data-s="height: 56px; padding: 0 22px; border: 0; border-radius: 0; background: #F6F3EE; font-family: var(--font-urbanist), sans-serif; font-size: 16px; color: #22252A; width: 100%"
                />
                <span className="err" role="alert">
                  Enter a 5-digit ZIP code.
                </span>
              </div>
            </div>
            <fieldset style={{ margin: "0", padding: "0", border: "0" }}>
              <legend
                style={{
                  paddingLeft: "22px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#1D2B44",
                  marginBottom: "8px",
                }}
              >
                Project type
              </legend>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <label
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    minHeight: "44px",
                    padding: "0 18px",
                    borderRadius: "0",
                    background: "#1F3D33",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                  data-s="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 0; background: #1F3D33; color: #FFFFFF; font-size: 14px; font-weight: 500; cursor: pointer"
                >
                  <input
                    type="radio"
                    name="ptype"
                    defaultChecked
                    style={{ accentColor: "#8FA89A", width: "16px", height: "16px", margin: "0" }}
                    data-s="accent-color: #8FA89A; width: 16px; height: 16px; margin: 0"
                  />
                  Kitchen
                </label>
                <label
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    minHeight: "44px",
                    padding: "0 18px",
                    borderRadius: "0",
                    background: "#F6F3EE",
                    color: "#22252A",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                  data-s="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 0; background: #F6F3EE; color: #22252A; font-size: 14px; font-weight: 500; cursor: pointer"
                >
                  <input
                    type="radio"
                    name="ptype"
                    style={{ accentColor: "#8FA89A", width: "16px", height: "16px", margin: "0" }}
                    data-s="accent-color: #8FA89A; width: 16px; height: 16px; margin: 0"
                  />
                  Bathroom
                </label>
                <label
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    minHeight: "44px",
                    padding: "0 18px",
                    borderRadius: "0",
                    background: "#F6F3EE",
                    color: "#22252A",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                  data-s="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 0; background: #F6F3EE; color: #22252A; font-size: 14px; font-weight: 500; cursor: pointer"
                >
                  <input
                    type="radio"
                    name="ptype"
                    style={{ accentColor: "#8FA89A", width: "16px", height: "16px", margin: "0" }}
                    data-s="accent-color: #8FA89A; width: 16px; height: 16px; margin: 0"
                  />
                  Walk-in
                </label>
                <label
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    minHeight: "44px",
                    padding: "0 18px",
                    borderRadius: "0",
                    background: "#F6F3EE",
                    color: "#22252A",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                  data-s="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 0; background: #F6F3EE; color: #22252A; font-size: 14px; font-weight: 500; cursor: pointer"
                >
                  <input
                    type="radio"
                    name="ptype"
                    style={{ accentColor: "#8FA89A", width: "16px", height: "16px", margin: "0" }}
                    data-s="accent-color: #8FA89A; width: 16px; height: 16px; margin: 0"
                  />
                  Other
                </label>
              </div>
            </fieldset>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              data-s="display: flex; flex-direction: column; gap: 6px"
            >
              <label style={{ paddingLeft: "22px", fontSize: "13px", fontWeight: "600", color: "#1D2B44" }}>
                Message <span style={{ fontWeight: "400", color: "#5E636B" }}>(optional)</span>
              </label>
              <textarea
                className="fld"
                placeholder="Size of the room, style you like, timeline…"
                style={{
                  minHeight: "104px",
                  padding: "16px 22px",
                  border: "0",
                  borderRadius: "0",
                  background: "#F6F3EE",
                  fontFamily: "var(--font-urbanist), sans-serif",
                  fontSize: "16px",
                  resize: "vertical",
                }}
                data-s="min-height: 104px; padding: 16px 22px; border: 0; border-radius: 0; background: #F6F3EE; font-family: var(--font-urbanist), sans-serif; font-size: 16px; resize: vertical"
              />
            </div>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                minHeight: "52px",
                borderRadius: "0",
                border: "1.5px dashed #A89C8B",
                fontSize: "14px",
                fontWeight: "600",
                color: "#1D2B44",
                cursor: "pointer",
              }}
              data-s="display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; border-radius: 0; border: 1.5px dashed #A89C8B; font-size: 14px; font-weight: 600; color: #1D2B44; cursor: pointer"
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
                <path d="M12 16V4M7 9l5-5 5 5M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
              </svg>{" "}
              Add photos or plans <span style={{ fontWeight: "400", color: "#5E636B" }}>(optional)</span>
            </label>
            <label
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                fontSize: "13px",
                lineHeight: "1.5",
                color: "#40444B",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                name="consent"
                required
                style={{ width: "20px", height: "20px", margin: "0", flexShrink: "0", accentColor: "#1F3D33" }}
              />
              I agree to be contacted by V&C about my project. See our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </label>
            <span className="err" role="alert">
              Please accept to be contacted so we can reply.
            </span>
            <Link
              href="/thank-you"
              onClick={submitForm}
              className="pill pill-d"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                minHeight: "56px",
                borderRadius: "0",
                background: "#1F3D33",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              data-s="display: flex; align-items: center; justify-content: center; gap: 8px; min-height: 56px; border-radius: 0; background: #1F3D33; color: #FFFFFF; font-size: 16px; font-weight: 600; text-decoration: none"
            >
              Request My Free Consultation{" "}
            </Link>
            <span style={{ fontSize: "12px", color: "#5E636B", textAlign: "center" }}>
              No commitment · Reply within 24 business hours · Protected by reCAPTCHA
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}
