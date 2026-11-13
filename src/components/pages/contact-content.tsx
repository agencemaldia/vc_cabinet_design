"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { useDesignState, type DesignData } from "@/components/pages/use-design-state";

const DATA: DesignData = {};

/** Generated from the "Contact" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function ContactContent() {
  const { submitForm } = useDesignState(DATA);
  return (
    <>
      <SiteHeader variant="solid" current="contact" />
      <main>
        <section
          data-hero="light"
          className="sec"
          style={{ background: "#F6F3EE", paddingBottom: "clamp(40px, 5vw, 72px)" }}
          data-s="background: #F6F3EE; padding-bottom: clamp(40px, 5vw, 72px)"
        >
          <div
            className="wrap"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "22px" }}
            data-s="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 22px"
          >
            <h1
              style={{
                margin: "0",
                maxWidth: "1000px",
                fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                fontWeight: "400",
                fontSize: "clamp(46px, 7vw, 104px)",
                lineHeight: "1",
                color: "#1D2B44",
              }}
            >
              Let’s talk about your
              <br />
              <em style={{ color: "#1F3D33" }}>interior projects.</em>
            </h1>
            <p
              style={{
                margin: "0",
                maxWidth: "620px",
                fontSize: "clamp(16px, 1.3vw, 19px)",
                lineHeight: "1.5",
                color: "#5E636B",
              }}
              data-s="margin: 0; max-width: 620px; font-size: clamp(16px, 1.3vw, 19px); line-height: 1.5; color: #5E636B"
            >
              Book your free designer consultation: a designer visits your home, measures your space and talks through
              your ideas — no cost, no commitment.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    borderRadius: "0",
                    background: "#FFFFFF",
                    border: "1px solid #E6DFD5",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1D2B44",
                  }}
                  data-s="display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 0; background: #FFFFFF; border: 1px solid #E6DFD5; font-size: 14px; font-weight: 600; color: #1D2B44"
                >
                  Free in-home measurement
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    borderRadius: "0",
                    background: "#FFFFFF",
                    border: "1px solid #E6DFD5",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1D2B44",
                  }}
                  data-s="display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 0; background: #FFFFFF; border: 1px solid #E6DFD5; font-size: 14px; font-weight: 600; color: #1D2B44"
                >
                  3D design included
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    borderRadius: "0",
                    background: "#FFFFFF",
                    border: "1px solid #E6DFD5",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1D2B44",
                  }}
                  data-s="display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 0; background: #FFFFFF; border: 1px solid #E6DFD5; font-size: 14px; font-weight: 600; color: #1D2B44"
                >
                  Reply within 24 business hours
                </span>
              </div>
            </div>
          </div>
        </section>
        <section style={{ paddingBottom: "clamp(64px, 8vw, 128px)" }}>
          <div
            className="wrap"
            style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 72px)", alignItems: "flex-start" }}
          >
            <div
              style={{ flex: "1.3 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}
              data-s="flex: 1.3 1 460px; min-width: 0; display: flex; flex-direction: column; gap: 16px"
            >
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "400",
                  fontSize: "34px",
                  color: "#1D2B44",
                }}
              >
                Send us a message
              </h2>
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
            <div
              style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: "32px" }}
              data-s="flex: 1 1 360px; display: flex; flex-direction: column; gap: 32px"
            >
              <div
                style={{
                  padding: "clamp(28px, 3vw, 40px)",
                  borderRadius: "0",
                  background: "#FFFFFF",
                  border: "1px solid #E6DFD5",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
                data-s="padding: clamp(28px, 3vw, 40px); border-radius: 0; background: #FFFFFF; border: 1px solid #E6DFD5; display: flex; flex-direction: column; gap: 24px"
              >
                <h2
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "400",
                    fontSize: "30px",
                    color: "#1D2B44",
                  }}
                >
                  Prefer to talk?
                </h2>
                <dl style={{ margin: "0", borderTop: "1px solid #E6DFD5" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      gap: "4px 24px",
                      padding: "16px 0",
                      borderBottom: "1px solid #E6DFD5",
                    }}
                  >
                    <dt style={{ fontSize: "15px", color: "#5E636B" }}>Phone</dt>
                    <dd
                      style={{ margin: "0", fontSize: "16px", fontWeight: "500", color: "#1D2B44", textAlign: "right" }}
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
                      borderBottom: "1px solid #E6DFD5",
                    }}
                  >
                    <dt style={{ fontSize: "15px", color: "#5E636B" }}>Email</dt>
                    <dd
                      style={{ margin: "0", fontSize: "16px", fontWeight: "500", color: "#1D2B44", textAlign: "right" }}
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
                      borderBottom: "1px solid #E6DFD5",
                    }}
                  >
                    <dt style={{ fontSize: "15px", color: "#5E636B" }}>Showroom</dt>
                    <dd
                      style={{ margin: "0", fontSize: "16px", fontWeight: "500", color: "#1D2B44", textAlign: "right" }}
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
                      borderBottom: "1px solid #E6DFD5",
                    }}
                  >
                    <dt style={{ fontSize: "15px", color: "#5E636B" }}>Hours</dt>
                    <dd
                      style={{ margin: "0", fontSize: "16px", fontWeight: "500", color: "#1D2B44", textAlign: "right" }}
                    >
                      [To be provided by client]
                    </dd>
                  </div>
                </dl>
                <a
                  href="tel:+17272233490"
                  className="btn-p"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    minHeight: "56px",
                    borderRadius: "0",
                    background: "#1F3D33",
                    color: "#FFFFFF",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                  data-s="display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 56px; border-radius: 0; background: #1F3D33; color: #FFFFFF; font-weight: 700; text-decoration: none"
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
                  Call 727-223-3490
                </a>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                data-s="display: flex; flex-direction: column; gap: 12px"
              >
                <h2
                  style={{ margin: "0", fontSize: "13px", fontWeight: "700", letterSpacing: ".16em", color: "#A23B2C" }}
                >
                  SERVICE AREA
                </h2>
                <div
                  role="img"
                  aria-label="Service area map: Tampa, Clearwater, St. Petersburg and Bradenton"
                  className="grain"
                  style={{
                    position: "relative",
                    height: "340px",
                    borderRadius: "0",
                    overflow: "hidden",
                    backgroundColor: "#2B4058",
                  }}
                  data-s="position: relative; height: 340px; border-radius: 0; overflow: hidden; background-color: #2B4058"
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-10%",
                      top: "38%",
                      width: "70%",
                      height: "30%",
                      borderRadius: "0",
                      background: "#1D2B44",
                      transform: "rotate(-20deg)",
                    }}
                    data-s="position: absolute; left: -10%; top: 38%; width: 70%; height: 30%; border-radius: 0; background: #1D2B44; transform: rotate(-20deg)"
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "58%",
                      top: "10%",
                      width: "22px",
                      height: "22px",
                      borderRadius: "0",
                      background: "#A23B2C",
                      boxShadow: "0 0 0 8px rgba(162,59,44,.25)",
                    }}
                    data-s="position: absolute; left: 58%; top: 10%; width: 22px; height: 22px; border-radius: 0; background: #A23B2C; box-shadow: 0 0 0 8px rgba(162,59,44,.25)"
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "18%",
                      top: "30%",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#F6F3EE",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    <span style={{ color: "#E3B5A9" }} />
                    Clearwater
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "62%",
                      top: "26%",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#F6F3EE",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    <span style={{ color: "#E3B5A9" }} />
                    Tampa
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "24%",
                      top: "58%",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#F6F3EE",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    <span style={{ color: "#E3B5A9" }} />
                    St. Petersburg
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "48%",
                      top: "82%",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#F6F3EE",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    <span style={{ color: "#E3B5A9" }} />
                    Bradenton
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      right: "12px",
                      bottom: "12px",
                      padding: "4px 10px",
                      borderRadius: "0",
                      background: "rgba(0,0,0,.35)",
                      color: "#F6F3EE",
                      fontSize: "12px",
                    }}
                    data-s="position: absolute; right: 12px; bottom: 12px; padding: 4px 10px; border-radius: 0; background: rgba(0,0,0,.35); color: #F6F3EE; font-size: 12px"
                  >
                    Map embed (Google Maps) · showroom = red dot
                  </span>
                </div>
                <p style={{ margin: "0", fontSize: "14px", color: "#5E636B" }}>
                  Tampa, Bradenton, Clearwater, St. Petersburg and surrounding communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
