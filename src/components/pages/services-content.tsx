"use client";

import Link from "next/link";
import { Fragment } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { PinnedStatements } from "@/components/site/pinned-statements";
import { Collapse } from "@/components/site/collapse";
import { ContactSection } from "@/components/site/contact-section";
import { ServicesShowcase } from "@/components/site/services-showcase";
import { StyleCards } from "@/components/site/style-cards";
import { useDesignState, type DesignData } from "@/components/pages/use-design-state";
import { useTranslate } from "@/lib/i18n/context";

const DATA: DesignData = {
  faqs: [
    [
      "Is the designer consultation really free?",
      "Yes. A designer visits your home, listens to your needs and measures the space — at no cost and with no commitment.",
    ],
    [
      "Which areas do you serve?",
      "Tampa, Bradenton, Clearwater, St. Petersburg and the surrounding Tampa Bay communities.",
    ],
    [
      "Do you only do kitchens, bathrooms and closets?",
      "No. We also renovate living rooms, bedrooms, home offices — or your whole home at once.",
    ],
    [
      "Can I see my design before anything is built?",
      "Yes. You review a 2D/3D design and can request real-time edits with your designer before production starts.",
    ],
    [
      "How long does a project take?",
      "Walk-ins are usually the quickest, kitchens the most involved. Your designer confirms a written schedule for your project before work begins.",
    ],
  ],
};

/** Generated from the "Services" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function ServicesContent() {
  const tr = useTranslate();
  const { faqs } = useDesignState(DATA);
  return tr(
    <>
      <main>
        <div style={{ padding: "clamp(8px, 1.2vw, 16px) clamp(8px, 1.2vw, 16px) 0", background: "#FFFFFF" }}>
          <div
            style={{ position: "relative", borderRadius: "0", overflow: "hidden" }}
            data-s="position: relative; border-radius: 0; overflow: hidden"
          >
            <SiteHeader variant="overlay" current="services" />
            <section
              data-hero="dark"
              className="ph"
              style={{
                position: "relative",
                backgroundColor: "#3A5672",
                minHeight: "clamp(560px, 52vw, 760px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
              data-s="position: relative; background-color: #3A5672; min-height: clamp(560px, 52vw, 760px); display: flex; align-items: center; justify-content: center; text-align: center"
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
                <nav aria-label="Breadcrumb">
                  <ol
                    style={{
                      margin: "0",
                      padding: "0",
                      listStyle: "none",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.6)",
                    }}
                    data-s="margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; font-size: 13px; color: rgba(255,255,255,.6)"
                  >
                    <li>
                      <Link href="/" style={{ color: "rgba(255,255,255,.85)" }} data-s="color: rgba(255,255,255,.85)">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" style={{ color: "#FFFFFF" }} data-s="color: #FFFFFF">
                      Services
                    </li>
                  </ol>
                </nav>
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
                  Your home.
                  <br />
                  <em style={{ color: "#BCCDC3" }} data-s="color: #BCCDC3">
                    Your desires.
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
                  Custom kitchens, bathrooms, walk-in closets and whole-home renovations in Bradenton, Tampa, Clearwater
                  and St. Petersburg.
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
        <PinnedStatements
          title={
            <>
              One designer, <em>from first visit to final detail.</em>
            </>
          }
          lead="Your designer is there from the moment we take your needs until the project is complete — through 3D design, manufacturing and installation."
          items={[
            {
              label: "3D design",
              title: "See it before it’s built.",
              text: "Your designer models your room in 3D and adjusts it with you in real time — layout, materials, lighting.",
            },
            {
              label: "Manufacturing",
              title: "Cabinetry built to last.",
              text: "European, Canadian and American cabinetry, medium-to-high-end, made to your exact measurements.",
            },
            {
              label: "Installation",
              title: "Fitted by our own team.",
              text: "Delivered, fitted and inspected by V&C — no subcontractors, no surprises.",
            },
          ]}
        />
        <ServicesShowcase />
        <section className="sec" style={{ background: "#EFF0F2" }} data-s="background: #EFF0F2">
          <div className="wrap">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "clamp(32px, 4vw, 56px)" }}
              data-s="display: flex; flex-direction: column; gap: 18px;  margin-bottom: clamp(32px, 4vw, 56px)"
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
                Let us take care of your home.
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
              <Link
                href="/services/kitchen"
                className="tile"
                style={{
                  position: "relative",
                  flex: "1 1 300px",
                  display: "flex",
                  minHeight: "clamp(420px, 40vw, 600px)",
                  borderRadius: "0",
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
                data-s="position: relative; flex: 1 1 300px; display: flex; min-height: clamp(420px, 40vw, 600px); border-radius: 0; text-decoration: none; color: #FFFFFF"
              >
                <div
                  className="ph tile-img"
                  role="img"
                  aria-label="Kitchens project by V&C"
                  style={{ position: "absolute", inset: "0", backgroundColor: "#D5D8DE" }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(180deg, rgba(20,42,35,0) 35%, rgba(20,42,35,.78) 100%)",
                  }}
                  data-s="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(20,42,35,0) 35%, rgba(20,42,35,.78) 100%)"
                />
                <div
                  style={{
                    position: "relative",
                    marginTop: "auto",
                    width: "100%",
                    padding: "clamp(22px, 2.4vw, 32px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                  data-s="position: relative; margin-top: auto; width: 100%; padding: clamp(22px, 2.4vw, 32px); display: flex; flex-direction: column; gap: 12px"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "clamp(52px, 5.6vw, 88px)",
                      lineHeight: ".95",
                    }}
                    data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(52px, 5.6vw, 88px); line-height: .95"
                  >
                    Kitchens
                  </span>
                  <span
                    style={{ fontSize: "15px", lineHeight: "1.5", color: "rgba(255,255,255,.85)", maxWidth: "340px" }}
                    data-s="font-size: 15px; line-height: 1.5; color: rgba(255,255,255,.85); max-width: 340px"
                  >
                    Cabinets, islands and pantries built to the inch — the room everyone gathers in.
                  </span>
                  <span
                    className="tile-a"
                    style={{
                      alignSelf: "flex-start",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      minHeight: "44px",
                      padding: "0 18px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.6)",
                      fontSize: "14px",
                      fontWeight: "600",
                      transition: "background-color 250ms",
                    }}
                    data-s="align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 0; border: 1px solid rgba(255,255,255,.6); font-size: 14px; font-weight: 600; transition: background-color 250ms"
                  >
                    Our work{" "}
                  </span>
                </div>
              </Link>
              <Link
                href="/services/bathroom"
                className="tile"
                style={{
                  position: "relative",
                  flex: "1 1 300px",
                  display: "flex",
                  minHeight: "clamp(420px, 40vw, 600px)",
                  borderRadius: "0",
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
                data-s="position: relative; flex: 1 1 300px; display: flex; min-height: clamp(420px, 40vw, 600px); border-radius: 0; text-decoration: none; color: #FFFFFF"
              >
                <div
                  className="ph tile-img"
                  role="img"
                  aria-label="Bathrooms project by V&C"
                  style={{ position: "absolute", inset: "0", backgroundColor: "#8DA4BC" }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(180deg, rgba(20,42,35,0) 35%, rgba(20,42,35,.78) 100%)",
                  }}
                  data-s="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(20,42,35,0) 35%, rgba(20,42,35,.78) 100%)"
                />
                <div
                  style={{
                    position: "relative",
                    marginTop: "auto",
                    width: "100%",
                    padding: "clamp(22px, 2.4vw, 32px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                  data-s="position: relative; margin-top: auto; width: 100%; padding: clamp(22px, 2.4vw, 32px); display: flex; flex-direction: column; gap: 12px"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "clamp(52px, 5.6vw, 88px)",
                      lineHeight: ".95",
                    }}
                    data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(52px, 5.6vw, 88px); line-height: .95"
                  >
                    Bathrooms
                  </span>
                  <span
                    style={{ fontSize: "15px", lineHeight: "1.5", color: "rgba(255,255,255,.85)", maxWidth: "340px" }}
                    data-s="font-size: 15px; line-height: 1.5; color: rgba(255,255,255,.85); max-width: 340px"
                  >
                    Vanities and storage that turn a daily routine into a calm ritual.
                  </span>
                  <span
                    className="tile-a"
                    style={{
                      alignSelf: "flex-start",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      minHeight: "44px",
                      padding: "0 18px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.6)",
                      fontSize: "14px",
                      fontWeight: "600",
                      transition: "background-color 250ms",
                    }}
                    data-s="align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 0; border: 1px solid rgba(255,255,255,.6); font-size: 14px; font-weight: 600; transition: background-color 250ms"
                  >
                    Our work{" "}
                  </span>
                </div>
              </Link>
              <Link
                href="/services/walk-in"
                className="tile"
                style={{
                  position: "relative",
                  flex: "1 1 300px",
                  display: "flex",
                  minHeight: "clamp(420px, 40vw, 600px)",
                  borderRadius: "0",
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
                data-s="position: relative; flex: 1 1 300px; display: flex; min-height: clamp(420px, 40vw, 600px); border-radius: 0; text-decoration: none; color: #FFFFFF"
              >
                <div
                  className="ph tile-img"
                  role="img"
                  aria-label="Walk-ins project by V&C"
                  style={{ position: "absolute", inset: "0", backgroundColor: "#BCCDC3" }}
                  data-s="position: absolute; inset: 0; background-color: #BCCDC3"
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(180deg, rgba(20,42,35,0) 35%, rgba(20,42,35,.78) 100%)",
                  }}
                  data-s="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(20,42,35,0) 35%, rgba(20,42,35,.78) 100%)"
                />
                <div
                  style={{
                    position: "relative",
                    marginTop: "auto",
                    width: "100%",
                    padding: "clamp(22px, 2.4vw, 32px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                  data-s="position: relative; margin-top: auto; width: 100%; padding: clamp(22px, 2.4vw, 32px); display: flex; flex-direction: column; gap: 12px"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "clamp(52px, 5.6vw, 88px)",
                      lineHeight: ".95",
                    }}
                    data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(52px, 5.6vw, 88px); line-height: .95"
                  >
                    Walk-ins
                  </span>
                  <span
                    style={{ fontSize: "15px", lineHeight: "1.5", color: "rgba(255,255,255,.85)", maxWidth: "340px" }}
                    data-s="font-size: 15px; line-height: 1.5; color: rgba(255,255,255,.85); max-width: 340px"
                  >
                    Closets and dressing rooms where everything has its place.
                  </span>
                  <span
                    className="tile-a"
                    style={{
                      alignSelf: "flex-start",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      minHeight: "44px",
                      padding: "0 18px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.6)",
                      fontSize: "14px",
                      fontWeight: "600",
                      transition: "background-color 250ms",
                    }}
                    data-s="align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 0; border: 1px solid rgba(255,255,255,.6); font-size: 14px; font-weight: 600; transition: background-color 250ms"
                  >
                    Our work{" "}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <StyleCards />
        <section className="sec" style={{ background: "#FFFFFF" }}>
          <div
            className="wrap"
            style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 96px)" }}
            data-s="display: flex; flex-wrap: wrap; gap: clamp(32px, 6vw, 96px)"
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
                  fontSize: "clamp(40px, 4.6vw, 64px)",
                  lineHeight: "1.04",
                  letterSpacing: "-.01em",
                  color: "#1D2B44",
                }}
                data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 400; font-size: clamp(40px, 4.6vw, 64px); line-height: 1.04; letter-spacing: -.01em; color: #1D2B44"
              >
                Questions, answered.
              </h2>
              <p
                style={{ margin: "0", maxWidth: "360px", fontSize: "16px", lineHeight: "1.6", color: "#5E636B" }}
                data-s="margin: 0; max-width: 360px; font-size: 16px; line-height: 1.6; color: #5E636B"
              >
                Can’t find your answer? Call us at <a href="tel:+17272233490">727-223-3490</a>.
              </p>
            </div>
            <div
              style={{ flex: "1.4 1 480px", display: "flex", flexDirection: "column", gap: "10px" }}
              data-s="flex: 1.4 1 480px; display: flex; flex-direction: column; gap: 10px"
            >
              {faqs.map((f, fIndex) => (
                <Fragment key={fIndex}>
                  <div
                    style={{ borderRadius: "0", background: "#EFF0F2" }}
                    data-s="border-radius: 0; background: #EFF0F2"
                  >
                    <h3 style={{ margin: "0" }}>
                      <button
                        type="button"
                        aria-expanded={f.open}
                        onClick={f.toggle}
                        style={{
                          width: "100%",
                          minHeight: "68px",
                          padding: "18px 18px 18px 28px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "24px",
                          border: "0",
                          background: "transparent",
                          textAlign: "left",
                          fontFamily: "var(--font-urbanist), sans-serif",
                          fontSize: "17px",
                          fontWeight: "600",
                          color: "#1D2B44",
                          cursor: "pointer",
                        }}
                        data-s="width: 100%; min-height: 68px; padding: 18px 18px 18px 28px; display: flex; justify-content: space-between; align-items: center; gap: 24px; border: 0; background: transparent; text-align: left; font-family: var(--font-urbanist), sans-serif; font-size: 17px; font-weight: 600; color: #1D2B44; cursor: pointer"
                      >
                        <span>{f.q}</span>
                        <span
                          aria-hidden="true"
                          style={{
                            width: "40px",
                            height: "40px",
                            flexShrink: "0",
                            borderRadius: "0",
                            background: "#FFFFFF",
                            color: f.ring,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "20px",
                          }}
                          data-s="width: 40px; height: 40px; flex-shrink: 0; border-radius: 0; background: #FFFFFF; color: {{f.ring}}; display: flex; align-items: center; justify-content: center; font-size: 20px"
                        >
                          {f.sign}
                        </span>
                      </button>
                    </h3>
                    <Collapse open={f.open}>
                      <p
                        style={{
                          margin: "0",
                          padding: "0 64px 24px 28px",
                          fontSize: "15px",
                          lineHeight: "1.65",
                          color: "#40444B",
                        }}
                      >
                        {f.a}
                      </p>
                    </Collapse>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
    </>,
  );
}
