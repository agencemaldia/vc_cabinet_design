"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { PinnedStatements } from "@/components/site/pinned-statements";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { ContactSection } from "@/components/site/contact-section";
import { useTranslate } from "@/lib/i18n/context";

/** Generated from the "Mission" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function MissionContent() {
  const tr = useTranslate();
  return tr(
    <>
      <main>
        <div style={{ padding: "clamp(8px, 1.2vw, 16px) clamp(8px, 1.2vw, 16px) 0", background: "#FFFFFF" }}>
          <div
            style={{ position: "relative", borderRadius: "0", overflow: "hidden" }}
            data-s="position: relative; border-radius: 0; overflow: hidden"
          >
            <SiteHeader variant="overlay" current="mission" />
            <section
              data-hero="dark"
              className="ph"
              style={{
                position: "relative",
                backgroundColor: "#2B4A3F",
                minHeight: "clamp(560px, 52vw, 760px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
              data-s="position: relative; background-color: #2B4A3F; min-height: clamp(560px, 52vw, 760px); display: flex; align-items: center; justify-content: center; text-align: center"
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "0",
                  background: "linear-gradient(180deg, rgba(20,42,35,.55) 0%, rgba(20,42,35,.72) 100%)",
                }}
              />
              <div
                className="wrap"
                style={{
                  position: "relative",
                  paddingTop: "168px",
                  paddingBottom: "clamp(56px, 6vw, 96px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "22px",
                }}
                data-s="position: relative; padding-top: 168px; padding-bottom: clamp(56px, 6vw, 96px); display: flex; flex-direction: column; align-items: center; gap: 22px"
              >
                <h1
                  style={{
                    margin: "0",
                    maxWidth: "1040px",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "400",
                    fontSize: "clamp(46px, 7vw, 104px)",
                    lineHeight: "1",
                    color: "#FFFFFF",
                  }}
                  data-s="margin: 0; max-width: 1040px; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 400; font-size: clamp(46px, 7vw, 104px); line-height: 1; color: #FFFFFF"
                >
                  Ideate. Design.
                  <br />
                  <em style={{ color: "#BCCDC3" }} data-s="color: #BCCDC3">
                    Build.
                  </em>
                </h1>
                <p
                  style={{
                    margin: "0",
                    maxWidth: "620px",
                    fontSize: "clamp(16px, 1.3vw, 19px)",
                    lineHeight: "1.5",
                    color: "rgba(255,255,255,.88)",
                  }}
                  data-s="margin: 0; max-width: 620px; font-size: clamp(16px, 1.3vw, 19px); line-height: 1.5; color: rgba(255,255,255,.88)"
                >
                  We help homeowners create the interior projects they have long dreamed of — across Bradenton, Tampa,
                  Clearwater and St. Petersburg.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
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
                      color: "#125A50",
                      border: "0",
                      fontSize: "15px",
                      fontWeight: "600",
                      textDecoration: "none",
                      textAlign: "center",
                    }}
                    data-s="display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 0 28px; border-radius: 0; background: #FFFFFF; color: #125A50; border: 0; font-size: 15px; font-weight: 600; text-decoration: none; text-align: center"
                  >
                    Book a Free Designer Consultation
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="sec">
          <div
            className="wrap"
            style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}
            data-s="display: flex; flex-wrap: wrap; gap: clamp(40px, 6vw, 96px); align-items: center"
          >
            <div
              className="ph"
              role="img"
              aria-label="Designer reviewing cabinet samples with a homeowner"
              style={{
                height: "clamp(360px, 40vw, 600px)",
                backgroundColor: "#D5D8DE",
                flex: "1 1 420px",
                borderRadius: "0",
              }}
              data-s="height: clamp(360px, 40vw, 600px); background-color: #D5D8DE; flex: 1 1 420px; border-radius: 0;"
            />
            <div
              style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: "22px" }}
              data-s="flex: 1 1 420px; display: flex; flex-direction: column; gap: 22px"
            >
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "400",
                  fontSize: "clamp(40px, 5.4vw, 76px)",
                  lineHeight: "1.04",
                  letterSpacing: "-.01em",
                  color: "#1D2B44",
                }}
              >
                We want you to enjoy your home <em style={{ color: "#125A50" }}>to its fullest.</em>
              </h2>
              <p
                style={{ margin: "0", maxWidth: "560px", fontSize: "16px", lineHeight: "1.6", color: "#22252A" }}
                data-s="margin: 0; max-width: 560px; font-size: 16px; line-height: 1.6; color: #22252A"
              >
                We design kitchens, bathrooms and walk-in closets in European, Canadian and American styles, with
                medium-to-high-end manufacturing quality.
              </p>
              <p
                style={{ margin: "0", maxWidth: "560px", fontSize: "16px", lineHeight: "1.6", color: "#5E636B" }}
                data-s="margin: 0; max-width: 560px; font-size: 16px; line-height: 1.6; color: #5E636B"
              >
                We manage every project from start to finish, so you deal with one team, one plan and one point of
                contact. Your satisfaction is the measure of our work.
              </p>
            </div>
          </div>
        </section>
        <PinnedStatements
          title={
            <>
              What guides <em>every project.</em>
            </>
          }
          items={[
            {
              label: "From start to finish",
              title: "One team, start to finish.",
              text: "One team handles design, manufacturing, installation and the final inspection — no juggling contractors.",
            },
            {
              label: "There’s no place like home",
              title: "Designed around your life.",
              text: "We design around your daily life, so every drawer, shelf and light is where you need it.",
            },
            {
              label: "You are unique",
              title: "No templates. Ever.",
              text: "Each project starts from your space, your taste and your budget.",
            },
          ]}
        />
        <ProcessTimeline />
        <section className="sec" style={{ background: "#FFFFFF" }}>
          <div
            className="wrap"
            style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}
            data-s="display: flex; flex-wrap: wrap; gap: clamp(40px, 6vw, 96px); align-items: center"
          >
            <div
              style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: "20px" }}
              data-s="flex: 1 1 420px; display: flex; flex-direction: column; gap: 20px"
            >
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "400",
                  fontSize: "clamp(40px, 5.4vw, 76px)",
                  lineHeight: "1.04",
                  letterSpacing: "-.01em",
                  color: "#1D2B44",
                }}
              >
                Hello, I’m Nathalie.
              </h2>
              <p
                style={{ margin: "0", maxWidth: "560px", fontSize: "16px", lineHeight: "1.6", color: "#22252A" }}
                data-s="margin: 0; max-width: 560px; font-size: 16px; line-height: 1.6; color: #22252A"
              >
                I design kitchens, bathrooms and closets across Tampa Bay. My favorite projects turn a cluttered, dated
                room into a calm space that works — and I walk every client through each detail in 3D before anything is
                built.
              </p>
              <p style={{ margin: "0" }}>
                <span style={{ color: "#5E636B" }}>Lead designer · V&C Cabinet Design Concept</span>
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link
                  href="/contact"
                  className="pill pill-d"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "52px",
                    padding: "0 28px",
                    borderRadius: "6px",
                    background: "#125A50",
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  Book a visit with Nathalie
                </Link>
                <a
                  href="tel:+17272233490"
                  className="pill"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "52px",
                    padding: "0 28px",
                    borderRadius: "6px",
                    background: "#FFFFFF",
                    color: "#125A50",
                    border: "1.5px solid #125A50",
                    fontSize: "15px",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  Call 727-223-3490
                </a>
              </div>
            </div>
            <div
              className="ph"
              role="img"
              aria-label="Portrait of Nathalie, lead designer — "
              style={{
                height: "clamp(360px, 36vw, 540px)",
                backgroundColor: "#C9CDD4",
                flex: "1 1 360px",
                borderRadius: "0",
                maxWidth: "520px",
              }}
              data-s="height: clamp(360px, 36vw, 540px); background-color: #C9CDD4; flex: 1 1 360px; border-radius: 0; max-width: 520px;"
            />
          </div>
        </section>
        <ContactSection />
      </main>
    </>,
  );
}
