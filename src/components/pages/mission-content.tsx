import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { ContactSection } from "@/components/site/contact-section";

/** Generated from the "Mission" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function MissionContent() {
  return (
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
                backgroundColor: "#B8A88F",
                flex: "1 1 420px",
                borderRadius: "0",
              }}
              data-s="height: clamp(360px, 40vw, 600px); background-color: #B8A88F; flex: 1 1 420px; border-radius: 0;"
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
                We want you to enjoy your home <em style={{ color: "#1F3D33" }}>to its fullest.</em>
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
        <section className="sec" style={{ background: "#F6F3EE" }} data-s="background: #F6F3EE">
          <div className="wrap">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "clamp(32px, 4vw, 56px)",
              }}
              data-s="display: flex; flex-direction: column; gap: 18px; align-items: center; text-align: center; margin-bottom: clamp(32px, 4vw, 56px)"
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
                What guides every project.
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
              <div
                style={{
                  flex: "1 1 300px",
                  padding: "clamp(28px, 3vw, 40px)",
                  background: "#FFFFFF",
                  borderRadius: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
                data-s="flex: 1 1 300px; padding: clamp(28px, 3vw, 40px); background: #FFFFFF; border-radius: 0; display: flex; flex-direction: column; gap: 16px"
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "450",
                    fontSize: "28px",
                    color: "#1D2B44",
                  }}
                >
                  From start to finish
                </h3>
                <p
                  style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#5E636B" }}
                  data-s="margin: 0; font-size: 16px; line-height: 1.65; color: #5E636B"
                >
                  One team handles design, manufacturing, installation and the final inspection — no juggling
                  contractors.
                </p>
              </div>
              <div
                style={{
                  flex: "1 1 300px",
                  padding: "clamp(28px, 3vw, 40px)",
                  background: "#FFFFFF",
                  borderRadius: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
                data-s="flex: 1 1 300px; padding: clamp(28px, 3vw, 40px); background: #FFFFFF; border-radius: 0; display: flex; flex-direction: column; gap: 16px"
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "450",
                    fontSize: "28px",
                    color: "#1D2B44",
                  }}
                >
                  There’s no place like home
                </h3>
                <p
                  style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#5E636B" }}
                  data-s="margin: 0; font-size: 16px; line-height: 1.65; color: #5E636B"
                >
                  We design around your daily life, so every drawer, shelf and light is where you need it.
                </p>
              </div>
              <div
                style={{
                  flex: "1 1 300px",
                  padding: "clamp(28px, 3vw, 40px)",
                  background: "#FFFFFF",
                  borderRadius: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
                data-s="flex: 1 1 300px; padding: clamp(28px, 3vw, 40px); background: #FFFFFF; border-radius: 0; display: flex; flex-direction: column; gap: 16px"
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "450",
                    fontSize: "28px",
                    color: "#1D2B44",
                  }}
                >
                  You are unique
                </h3>
                <p
                  style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#5E636B" }}
                  data-s="margin: 0; font-size: 16px; line-height: 1.65; color: #5E636B"
                >
                  No templates. Each project starts from your space, your taste and your budget.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec">
          <div
            className="wrap"
            style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 96px)", alignItems: "flex-start" }}
            data-s="display: flex; flex-wrap: wrap; gap: clamp(32px, 6vw, 96px); align-items: flex-start"
          >
            <div
              style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "18px" }}
              data-s="flex: 1 1 320px; display: flex; flex-direction: column; gap: 18px"
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
                Seven steps, <em style={{ color: "#1F3D33" }}>zero surprises.</em>
              </h2>
              <p
                style={{ margin: "0", maxWidth: "380px", fontSize: "16px", lineHeight: "1.6", color: "#5E636B" }}
                data-s="margin: 0; max-width: 380px; font-size: 16px; line-height: 1.6; color: #5E636B"
              >
                A clear process from the first visit to the last detail — you always know what comes next.
              </p>
              <div>
                <Link
                  href="/contact"
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
                  Book a Free Designer Consultation
                </Link>
              </div>
            </div>
            <ol style={{ flex: "2 1 520px", margin: "0", padding: "0", listStyle: "none" }}>
              <li
                style={{
                  display: "flex",
                  gap: "clamp(20px, 3vw, 40px)",
                  padding: "32px 0",
                  borderTop: "1px solid #C9BFB1",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(44px, 5vw, 72px)",
                    lineHeight: ".9",
                    color: "#1F3D33",
                    minWidth: "clamp(64px, 7vw, 110px)",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(44px, 5vw, 72px); line-height: .9; color: #1F3D33; min-width: clamp(64px, 7vw, 110px)"
                >
                  01
                </span>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "6px" }}
                  data-s="display: flex; flex-direction: column; gap: 10px; padding-top: 6px"
                >
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "clamp(24px, 2.4vw, 32px)",
                      color: "#1D2B44",
                    }}
                    data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 450; font-size: clamp(24px, 2.4vw, 32px); color: #1D2B44"
                  >
                    Free Designer Consultation
                  </h3>
                  <p style={{ margin: "0", maxWidth: "620px", fontSize: "17px", lineHeight: "1.65", color: "#22252A" }}>
                    A designer visits your home, measures the space and talks through your needs, materials, scope and
                    budget.
                  </p>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "clamp(20px, 3vw, 40px)",
                  padding: "32px 0",
                  borderTop: "1px solid #C9BFB1",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(44px, 5vw, 72px)",
                    lineHeight: ".9",
                    color: "#B7C6D6",
                    minWidth: "clamp(64px, 7vw, 110px)",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(44px, 5vw, 72px); line-height: .9; color: #B7C6D6; min-width: clamp(64px, 7vw, 110px)"
                >
                  02
                </span>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "6px" }}
                  data-s="display: flex; flex-direction: column; gap: 10px; padding-top: 6px"
                >
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "clamp(24px, 2.4vw, 32px)",
                      color: "#1D2B44",
                    }}
                    data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 450; font-size: clamp(24px, 2.4vw, 32px); color: #1D2B44"
                  >
                    Design submission & quote
                  </h3>
                  <p style={{ margin: "0", maxWidth: "620px", fontSize: "17px", lineHeight: "1.65", color: "#22252A" }}>
                    We turn your ideas into a preliminary design and a clear, written budget.
                  </p>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "clamp(20px, 3vw, 40px)",
                  padding: "32px 0",
                  borderTop: "1px solid #C9BFB1",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(44px, 5vw, 72px)",
                    lineHeight: ".9",
                    color: "#B7C6D6",
                    minWidth: "clamp(64px, 7vw, 110px)",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(44px, 5vw, 72px); line-height: .9; color: #B7C6D6; min-width: clamp(64px, 7vw, 110px)"
                >
                  03
                </span>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "6px" }}
                  data-s="display: flex; flex-direction: column; gap: 10px; padding-top: 6px"
                >
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "clamp(24px, 2.4vw, 32px)",
                      color: "#1D2B44",
                    }}
                    data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 450; font-size: clamp(24px, 2.4vw, 32px); color: #1D2B44"
                  >
                    Contract
                  </h3>
                  <p style={{ margin: "0", maxWidth: "620px", fontSize: "17px", lineHeight: "1.65", color: "#22252A" }}>
                    A detailed contract covers materials, scope and conditions. We handle permits if needed and set the
                    schedule.
                  </p>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "clamp(20px, 3vw, 40px)",
                  padding: "32px 0",
                  borderTop: "1px solid #C9BFB1",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(44px, 5vw, 72px)",
                    lineHeight: ".9",
                    color: "#B7C6D6",
                    minWidth: "clamp(64px, 7vw, 110px)",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(44px, 5vw, 72px); line-height: .9; color: #B7C6D6; min-width: clamp(64px, 7vw, 110px)"
                >
                  04
                </span>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "6px" }}
                  data-s="display: flex; flex-direction: column; gap: 10px; padding-top: 6px"
                >
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "clamp(24px, 2.4vw, 32px)",
                      color: "#1D2B44",
                    }}
                    data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 450; font-size: clamp(24px, 2.4vw, 32px); color: #1D2B44"
                  >
                    2D/3D real-time edits
                  </h3>
                  <p style={{ margin: "0", maxWidth: "620px", fontSize: "17px", lineHeight: "1.65", color: "#22252A" }}>
                    We review the plan together and adjust it live. Once you approve, your final 3D design is produced.
                  </p>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "clamp(20px, 3vw, 40px)",
                  padding: "32px 0",
                  borderTop: "1px solid #C9BFB1",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(44px, 5vw, 72px)",
                    lineHeight: ".9",
                    color: "#B7C6D6",
                    minWidth: "clamp(64px, 7vw, 110px)",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(44px, 5vw, 72px); line-height: .9; color: #B7C6D6; min-width: clamp(64px, 7vw, 110px)"
                >
                  05
                </span>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "6px" }}
                  data-s="display: flex; flex-direction: column; gap: 10px; padding-top: 6px"
                >
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "clamp(24px, 2.4vw, 32px)",
                      color: "#1D2B44",
                    }}
                    data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 450; font-size: clamp(24px, 2.4vw, 32px); color: #1D2B44"
                  >
                    Renovation phase
                  </h3>
                  <p style={{ margin: "0", maxWidth: "620px", fontSize: "17px", lineHeight: "1.65", color: "#22252A" }}>
                    Our project management team coordinates brands, colors, permits and measurements — and keeps you
                    updated.
                  </p>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "clamp(20px, 3vw, 40px)",
                  padding: "32px 0",
                  borderTop: "1px solid #C9BFB1",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(44px, 5vw, 72px)",
                    lineHeight: ".9",
                    color: "#B7C6D6",
                    minWidth: "clamp(64px, 7vw, 110px)",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(44px, 5vw, 72px); line-height: .9; color: #B7C6D6; min-width: clamp(64px, 7vw, 110px)"
                >
                  06
                </span>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "6px" }}
                  data-s="display: flex; flex-direction: column; gap: 10px; padding-top: 6px"
                >
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "clamp(24px, 2.4vw, 32px)",
                      color: "#1D2B44",
                    }}
                    data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 450; font-size: clamp(24px, 2.4vw, 32px); color: #1D2B44"
                  >
                    Delivery & installation
                  </h3>
                  <p style={{ margin: "0", maxWidth: "620px", fontSize: "17px", lineHeight: "1.65", color: "#22252A" }}>
                    We handle deliveries, install everything to the inch, remove debris and keep your home clean and
                    safe.
                  </p>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "clamp(20px, 3vw, 40px)",
                  padding: "32px 0",
                  borderTop: "1px solid #C9BFB1",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(44px, 5vw, 72px)",
                    lineHeight: ".9",
                    color: "#B7C6D6",
                    minWidth: "clamp(64px, 7vw, 110px)",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(44px, 5vw, 72px); line-height: .9; color: #B7C6D6; min-width: clamp(64px, 7vw, 110px)"
                >
                  07
                </span>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "6px" }}
                  data-s="display: flex; flex-direction: column; gap: 10px; padding-top: 6px"
                >
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "clamp(24px, 2.4vw, 32px)",
                      color: "#1D2B44",
                    }}
                    data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 450; font-size: clamp(24px, 2.4vw, 32px); color: #1D2B44"
                  >
                    Final inspection
                  </h3>
                  <p style={{ margin: "0", maxWidth: "620px", fontSize: "17px", lineHeight: "1.65", color: "#22252A" }}>
                    We check every detail against our quality standards, document the result and ask for your feedback.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
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
              <Link
                href="/contact"
                className="lnk"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: "44px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1F3D33",
                  textDecoration: "underline",
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "1px",
                }}
                data-s="display: inline-flex; align-items: center; min-height: 44px; font-size: 16px; font-weight: 600; color: #1F3D33; text-decoration: underline; text-underline-offset: 6px; text-decoration-thickness: 1px"
              >
                Book a visit with Nathalie
              </Link>
            </div>
            <div
              className="ph"
              role="img"
              aria-label="Portrait of Nathalie, lead designer — "
              style={{
                height: "clamp(360px, 36vw, 540px)",
                backgroundColor: "#C9BFB1",
                flex: "1 1 360px",
                borderRadius: "0",
                maxWidth: "520px",
              }}
              data-s="height: clamp(360px, 36vw, 540px); background-color: #C9BFB1; flex: 1 1 360px; border-radius: 0; max-width: 520px;"
            />
          </div>
        </section>
        <ContactSection />
      </main>
    </>
  );
}
