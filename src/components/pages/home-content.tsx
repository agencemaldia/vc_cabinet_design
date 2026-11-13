"use client";

import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { ContactSection } from "@/components/site/contact-section";
import { useDesignState, type DesignData } from "@/components/pages/use-design-state";

const DATA: DesignData = {
  faqs: [
    [
      "Is the designer consultation really free?",
      "Yes. A designer visits your home, listens to your needs and measures the space — at no cost and with no commitment.",
    ],
    [
      "How much does a custom kitchen or bathroom cost?",
      "Pricing depends on the size of the room, the materials and the finishes you choose. After your free consultation, you receive a clear, written and itemized quote — with no hidden costs.",
    ],
    [
      "How long does a project take?",
      "It depends on the scope of your project and on material lead times. Before work begins, your designer gives you a clear, written schedule — and keeps you updated at every step.",
    ],
    [
      "Which materials and styles do you offer?",
      "European, Canadian and American cabinetry in medium-to-high-end finishes, with countertops and hardware chosen with your designer.",
    ],
    [
      "Do you handle permits?",
      "Yes — when your project requires permits, we obtain them as part of the contract phase.",
    ],
    [
      "Is my project under warranty?",
      "Your contract details the warranty coverage for your project, including the manufacturer’s warranty on your cabinetry. Ask your designer for the specifics during your consultation.",
    ],
  ],
};

/** Generated from the "Home" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function HomeContent() {
  const {
    faqs,
    go0,
    go1,
    go2,
    go3,
    go4,
    go5,
    go6,
    pauseLabel,
    pauseText,
    st0,
    st1,
    st2,
    st3,
    st4,
    st5,
    st6,
    togglePause,
    vidCls,
  } = useDesignState(DATA);
  return (
    <>
      <main>
        <div style={{ padding: "clamp(8px, 1.2vw, 16px) clamp(8px, 1.2vw, 16px) 0", background: "#FFFFFF" }}>
          <div
            style={{ position: "relative", borderRadius: "0", overflow: "hidden" }}
            data-s="position: relative; border-radius: 0; overflow: hidden"
          >
            <SiteHeader variant="overlay" current="home" logoTone="sage" />
            <section
              data-hero="dark"
              aria-label="Introduction"
              style={{
                position: "relative",
                minHeight: "clamp(720px, 64vw, 940px)",
                display: "flex",
                alignItems: "flex-end",
                overflow: "hidden",
                background: "#142A23",
              }}
              data-s="position: relative; min-height: clamp(720px, 64vw, 940px); display: flex; align-items: flex-end; overflow: hidden; background: #142A23"
            >
              <div className={vidCls} aria-hidden="true" style={{ position: "absolute", inset: "0" }}>
                <div className="ph vs" style={{ backgroundColor: "#2B4A3F" }} />
                <div className="ph vs" style={{ backgroundColor: "#5B4A3A" }} />
                <div className="ph vs" style={{ backgroundColor: "#3A5672" }} />
              </div>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    "linear-gradient(180deg, rgba(14,23,20,.35) 0%, rgba(14,23,20,.35) 45%, rgba(14,23,20,.85) 100%)",
                }}
              />
              <div
                className="wrap"
                style={{
                  position: "relative",
                  paddingTop: "clamp(96px, 10vw, 160px)",
                  paddingBottom: "clamp(80px, 8vw, 120px)",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: "32px",
                }}
              >
                <div
                  style={{ flex: "1 1 560px", display: "flex", flexDirection: "column", gap: "22px" }}
                  data-s="flex: 1 1 560px; display: flex; flex-direction: column; gap: 22px"
                >
                  <ul
                    style={{
                      margin: "0",
                      padding: "0",
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0",
                      lineHeight: "1.3",
                      fontSize: "14px",
                      color: "rgba(255,255,255,.75)",
                    }}
                    data-s="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 0; line-height: 1.3; font-size: 14px; color: rgba(255,255,255,.75)"
                  >
                    <li>Custom kitchens</li>
                    <li>Bathrooms & vanities</li>
                    <li>Walk-in closets</li>
                    <li>Whole-home renovation</li>
                  </ul>
                  <h1
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "500",
                      fontSize: "clamp(54px, 8vw, 124px)",
                      lineHeight: ".92",
                      color: "#FFFFFF",
                    }}
                    data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 500; font-size: clamp(54px, 8vw, 124px); line-height: .92; color: #FFFFFF"
                  >
                    <span className="hero-lines">
                      <span className="hw" style={{ "--w": "0" } as CSSProperties}>
                        Our
                      </span>{" "}
                      <span className="hw" style={{ "--w": "1" } as CSSProperties}>
                        Passion
                      </span>
                    </span>
                    <span className="hero-lines">
                      <span className="hw" style={{ "--w": "2" } as CSSProperties}>
                        Is
                      </span>{" "}
                      <span className="hw" style={{ "--w": "3" } as CSSProperties}>
                        Your
                      </span>{" "}
                      <span className="hw" style={{ "--w": "4" } as CSSProperties}>
                        Project.
                      </span>
                    </span>
                  </h1>
                  <p
                    style={{
                      margin: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "15px",
                      color: "#FFFFFF",
                    }}
                    data-s="margin: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-size: 15px; color: #FFFFFF"
                  >
                    Custom kitchens, bathrooms & walk-ins — Tampa Bay, Florida
                  </p>
                </div>
                <div
                  style={{ flex: "0 1 380px", display: "flex", flexDirection: "column", gap: "20px" }}
                  data-s="flex: 0 1 380px; display: flex; flex-direction: column; gap: 20px"
                >
                  <p
                    style={{
                      margin: "0",
                      maxWidth: "380px",
                      fontSize: "clamp(16px, 1.3vw, 19px)",
                      lineHeight: "1.5",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="margin: 0; max-width: 380px; font-size: clamp(16px, 1.3vw, 19px); line-height: 1.5; color: rgba(255,255,255,.88)"
                  >
                    We ideate, design and build custom cabinetry and interiors — from the first sketch to the final
                    inspection.
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
                    <Link
                      href="/gallery"
                      className="pill "
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        minHeight: "52px",
                        padding: "0 28px",
                        borderRadius: "0",
                        background: "rgba(255,255,255,.08)",
                        color: "#FFFFFF",
                        border: "1px solid rgba(255,255,255,.55)",
                        fontSize: "15px",
                        fontWeight: "600",
                        textDecoration: "none",
                        textAlign: "center",
                      }}
                      data-s="display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 0 28px; border-radius: 0; background: rgba(255,255,255,.08); color: #FFFFFF; border: 1px solid rgba(255,255,255,.55); font-size: 15px; font-weight: 600; text-decoration: none; text-align: center"
                    >
                      View Our Work
                    </Link>
                  </div>
                </div>
              </div>
              <button
                type="button"
                aria-label={pauseLabel}
                onClick={togglePause}
                style={{
                  position: "absolute",
                  right: "clamp(16px, 2vw, 28px)",
                  bottom: "60px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "44px",
                  padding: "0 16px",
                  borderRadius: "0",
                  border: "1px solid rgba(255,255,255,.4)",
                  background: "rgba(0,0,0,.25)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-urbanist), sans-serif",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
                data-s="position: absolute; right: clamp(16px, 2vw, 28px); bottom: 60px; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 0; border: 1px solid rgba(255,255,255,.4); background: rgba(0,0,0,.25); color: #FFFFFF; font-family: var(--font-urbanist), sans-serif; font-size: 13px; cursor: pointer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 5v14M15 5v14" />
                </svg>{" "}
                {pauseText}
              </button>
              <a href="#bento" className="scroll-ind">
                Scroll <i />
              </a>
            </section>
          </div>
        </div>
        <div
          className="wrap"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            paddingTop: "22px",
            paddingBottom: "22px",
            borderBottom: "1px solid #E6DFD5",
            fontSize: "13px",
            fontWeight: "600",
            textTransform: "uppercase",
            color: "#1D2B44",
          }}
        >
          <span>
            Est. <span style={{ color: "#A89C8B" }}>[year]</span>
          </span>
          <a href="#bento" style={{ color: "#1D2B44", textDecoration: "none" }}>
            Scroll down ↓
          </a>
          <span className="hide-m">
            Tampa Bay <span style={{ color: "#A89C8B" }}>Florida</span>
          </span>
        </div>
        <section id="bento" className="sec">
          <div className="wrap">
            <div className="cg-head">
              <h2 className="cg-big">
                Every. Single.
                <br />
                Day.
              </h2>
              <div className="cg-intro">
                <img src="/images/symbol-gold.png" alt="" className="cg-mark" />
                <p className="cg-lead">
                  Enjoy your home to its fullest. We design, build and install custom cabinetry that fits the way you
                  live.
                </p>
              </div>
            </div>
            <div className="cg">
              <div className="cgc cg-a">
                <div>
                  <p className="cg-t">Thoughtful design for the way you live</p>
                  <p className="cg-s">
                    Every morning coffee, every Sunday dinner. European, Canadian and American cabinetry,
                    medium-to-high-end.
                  </p>
                </div>
                <div className="cg-who">
                  <span className="cg-av">[A]</span>
                  <span>
                    <b>[First name L.]</b>
                    <br />
                    Tampa · Kitchen remodel
                  </span>
                </div>
                <span className="cg-q" aria-hidden="true">
                  ”
                </span>
              </div>
              <div className="cgc cg-f">
                <div className="cg-top">
                  <span className="cg-lab">Fact 01</span>
                  <span className="cg-chip" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div>
                  <span className="cg-num">[X]</span>
                  <span className="cg-s">Years of experience — serving Tampa Bay homeowners</span>
                </div>
              </div>
              <Link href="/services" className="cgc cg-img">
                <span className="cg-imgov" />
                <span className="cg-cap">
                  <b>See your room before it’s built.</b>
                  <span>2D / 3D design included</span>
                </span>
              </Link>
              <div className="cgc cg-d">
                <div className="cg-dl">
                  <div>
                    <p className="cg-t">Seven steps. One team.</p>
                    <p className="cg-s">
                      You always know what comes next — and who to call. One team from the first visit to the final
                      inspection.
                    </p>
                  </div>
                  <Link href="/mission" className="cg-link">
                    <span aria-hidden="true">↗</span> Our full process
                  </Link>
                </div>
                <div className="t2">
                  <div className="cg-top">
                    <span className="cg-lab">
                      Timeline
                      <br />
                      <small>From first visit to final inspection</small>
                    </span>
                  </div>
                  <div className="t2-g">
                    <div className="t2-l" aria-hidden="true">
                      <i style={{ gridColumn: "1" }} />
                      <i style={{ gridColumn: "2" }} />
                      <i style={{ gridColumn: "3" }} />
                      <i style={{ gridColumn: "4" }} />
                      <i style={{ gridColumn: "5" }} />
                      <i style={{ gridColumn: "6" }} />
                      <i style={{ gridColumn: "7" }} />
                      <i style={{ gridColumn: "8" }} />
                    </div>
                    <button
                      type="button"
                      className={st0}
                      onClick={go0}
                      style={{ gridColumn: "1 / span 2", gridRow: "1" }}
                    >
                      <span className="t2-p">Consultation</span>
                      <span className="t2-d">
                        <b>01 — Free Designer Consultation</b> A designer visits your home, measures the space and talks
                        through your needs, materials, scope and budget.
                      </span>
                    </button>
                    <button
                      type="button"
                      className={st1}
                      onClick={go1}
                      style={{ gridColumn: "2 / span 2", gridRow: "2" }}
                    >
                      <span className="t2-p">Design & quote</span>
                      <span className="t2-d">
                        <b>02 — Design & quote</b> We turn your ideas into a preliminary design and a clear, written
                        budget.
                      </span>
                    </button>
                    <button
                      type="button"
                      className={st2}
                      onClick={go2}
                      style={{ gridColumn: "3 / span 2", gridRow: "3" }}
                    >
                      <span className="t2-p">Contract</span>
                      <span className="t2-d">
                        <b>03 — Contract</b> A detailed contract covers materials, scope and conditions. We handle
                        permits if needed and set the schedule.
                      </span>
                    </button>
                    <button
                      type="button"
                      className={st3}
                      onClick={go3}
                      style={{ gridColumn: "4 / span 2", gridRow: "4" }}
                    >
                      <span className="t2-p">2D/3D edits</span>
                      <span className="t2-d">
                        <b>04 — 2D/3D real-time edits</b> We review the plan together and adjust it live. Once you
                        approve, your final 3D design is produced.
                      </span>
                    </button>
                    <button
                      type="button"
                      className={st4}
                      onClick={go4}
                      style={{ gridColumn: "5 / span 2", gridRow: "5" }}
                    >
                      <span className="t2-p">Renovation</span>
                      <span className="t2-d">
                        <b>05 — Renovation phase</b> Our project management team coordinates brands, colors, permits and
                        measurements — and keeps you updated.
                      </span>
                    </button>
                    <button
                      type="button"
                      className={st5}
                      onClick={go5}
                      style={{ gridColumn: "6 / span 2", gridRow: "6" }}
                    >
                      <span className="t2-p">Installation</span>
                      <span className="t2-d">
                        <b>06 — Delivery & installation</b> We handle deliveries, install everything to the inch, remove
                        debris and keep your home clean and safe.
                      </span>
                    </button>
                    <button
                      type="button"
                      className={st6}
                      onClick={go6}
                      style={{ gridColumn: "7 / span 2", gridRow: "7" }}
                    >
                      <span className="t2-p">Inspection</span>
                      <span className="t2-d">
                        <b>07 — Final inspection</b> We check every detail against our quality standards, document the
                        result and ask for your feedback.
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="cgc cg-f">
                <div className="cg-top">
                  <span className="cg-lab">Fact 02</span>
                  <span className="cg-chip" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div>
                  <span className="cg-num">[X]</span>
                  <span className="cg-s">Projects completed — kitchens, baths and closets</span>
                </div>
              </div>
            </div>
            <div className="bento">
              <div
                className="b-22"
                style={{
                  borderRadius: "0",
                  padding: "clamp(24px, 2.6vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  background: "#F6F3EE",
                }}
                data-s="border-radius: 0; padding: clamp(24px, 2.6vw, 36px); display: flex; flex-direction: column; justify-content: space-between; gap: 20px; background: #F6F3EE"
              >
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "18px" }}
                  data-s="display: flex; flex-direction: column; gap: 18px"
                >
                  <h2
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "clamp(32px, 4.6vw, 68px)",
                      lineHeight: "1",
                      whiteSpace: "nowrap",
                      color: "#1D2B44",
                    }}
                  >
                    Every. Single.
                    <br />
                    Day.
                  </h2>
                  <p style={{ margin: "0", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "500", color: "#1D2B44" }}>
                    Enjoy your home to its fullest.
                  </p>
                  <p
                    style={{ margin: "0", maxWidth: "460px", fontSize: "16px", lineHeight: "1.65", color: "#40444B" }}
                    data-s="margin: 0; max-width: 460px; font-size: 16px; line-height: 1.65; color: #40444B"
                  >
                    Your home should fit the way you live — every morning coffee, every Sunday dinner. European,
                    Canadian and American cabinetry, medium-to-high-end, and one team that follows your project from the
                    first visit to the final inspection.
                  </p>
                </div>
                <Link
                  href="/mission"
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
                  Discover our mission
                </Link>
              </div>
              <div
                style={{
                  borderRadius: "0",
                  padding: "clamp(24px, 2.6vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  background: "#1D2B44",
                  color: "#FFFFFF",
                }}
                data-s="border-radius: 0; padding: clamp(24px, 2.6vw, 36px); display: flex; flex-direction: column; justify-content: space-between; gap: 20px; background: #1D2B44; color: #FFFFFF"
              >
                <span
                  style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0", color: "#BCCDC3" }}
                  data-s="font-size: 12px; font-weight: 700; letter-spacing: 0; color: #BCCDC3"
                >
                  Years of experience
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(64px, 6vw, 96px)",
                    lineHeight: "1",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(64px, 6vw, 96px); line-height: 1"
                >
                  [X]
                </span>
                <span
                  style={{ fontSize: "12px", color: "rgba(255,255,255,.7)" }}
                  data-s="font-size: 12px; color: rgba(255,255,255,.7)"
                >
                  Tampa Bay
                </span>
              </div>
              <div
                style={{
                  borderRadius: "0",
                  padding: "clamp(24px, 2.6vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  background: "#EEF3F0",
                }}
                data-s="border-radius: 0; padding: clamp(24px, 2.6vw, 36px); display: flex; flex-direction: column; justify-content: space-between; gap: 20px; background: #EEF3F0"
              >
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0", color: "#36584A" }}>
                  Cities served
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(64px, 6vw, 96px)",
                    lineHeight: "1",
                    color: "#1F3D33",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(64px, 6vw, 96px); line-height: 1; color: #1F3D33"
                >
                  4
                </span>
                <span style={{ fontSize: "13px", color: "#36584A" }}>Tampa · Bradenton · Clearwater · St. Pete</span>
              </div>
              <figure
                className="b-2"
                style={{
                  margin: "0",
                  borderRadius: "0",
                  padding: "clamp(24px, 2.6vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  background: "#F6F3EE",
                }}
                data-s="margin: 0; border-radius: 0; padding: clamp(24px, 2.6vw, 36px); display: flex; flex-direction: column; justify-content: space-between; gap: 20px; background: #F6F3EE"
              >
                <blockquote
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(22px, 2vw, 28px)",
                    lineHeight: "1.3",
                    color: "#1D2B44",
                  }}
                >
                  “[Short client quote — from a verified review.]”
                </blockquote>
                <figcaption style={{ fontSize: "13px", color: "#5E636B" }}>
                  [First name L.] · Tampa · <span style={{ color: "#5E636B" }}>Kitchen remodel</span>
                </figcaption>
              </figure>
              <div
                className="b-2"
                style={{
                  borderRadius: "0",
                  padding: "clamp(24px, 2.6vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "300px",
                  color: "#FFFFFF",
                }}
                data-s="border-radius: 0; padding: clamp(24px, 2.6vw, 36px); display: flex; flex-direction: column; justify-content: space-between; gap: 20px; position: relative; overflow: hidden; min-height: 300px; color: #FFFFFF"
              >
                <div
                  className="ph"
                  role="img"
                  aria-label="3D rendering of a kitchen design"
                  style={{ position: "absolute", inset: "0", backgroundColor: "#3A5672" }}
                />
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", inset: "0", background: "rgba(20,32,48,.35)" }}
                />
                <span style={{ position: "relative", fontSize: "15px" }}>2D / 3D design included</span>
                <p
                  style={{
                    position: "relative",
                    margin: "0",
                    maxWidth: "320px",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(28px, 2.6vw, 38px)",
                    fontWeight: "500",
                    lineHeight: "1.1",
                    letterSpacing: "-.02em",
                  }}
                  data-s="position: relative; margin: 0; max-width: 320px; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(28px, 2.6vw, 38px); font-weight: 500; line-height: 1.1; letter-spacing: -.02em"
                >
                  See your room before it’s built.
                </p>
              </div>
              <Link
                href="/contact"
                className="b-2 pill-d"
                style={{
                  borderRadius: "0",
                  padding: "clamp(24px, 2.6vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  background: "#1F3D33",
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
                data-s="border-radius: 0; padding: clamp(24px, 2.6vw, 36px); display: flex; flex-direction: column; justify-content: space-between; gap: 20px; background: #1F3D33; color: #FFFFFF; text-decoration: none"
              >
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                  data-s="display: flex; flex-direction: column; gap: 10px"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "clamp(28px, 2.6vw, 38px)",
                      lineHeight: "1.1",
                    }}
                    data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(28px, 2.6vw, 38px); line-height: 1.1"
                  >
                    Free in-home consultation & measurement
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#BCCDC3",
                    }}
                    data-s="display: inline-flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 600; color: #BCCDC3"
                  >
                    Book your visit
                  </span>
                </div>
              </Link>
              <div
                className="b-2"
                style={{
                  borderRadius: "0",
                  padding: "clamp(24px, 2.6vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  background: "#F6F3EE",
                }}
                data-s="border-radius: 0; padding: clamp(24px, 2.6vw, 36px); display: flex; flex-direction: column; justify-content: space-between; gap: 20px; background: #F6F3EE"
              >
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0", color: "#5E636B" }}>
                  Projects completed
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(64px, 6vw, 96px)",
                    lineHeight: "1",
                    color: "#1D2B44",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(64px, 6vw, 96px); line-height: 1; color: #1D2B44"
                >
                  [X]
                </span>
                <span style={{ fontSize: "12px", color: "#5E636B" }}>Tampa Bay</span>
              </div>
            </div>
          </div>
        </section>
        <section className="sec grain" style={{ backgroundColor: "#142A23" }}>
          <div className="wrap">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  marginBottom: "clamp(32px, 4vw, 56px)",
                }}
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
                    color: "#FFFFFF",
                  }}
                  data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 400; font-size: clamp(40px, 5.4vw, 76px); line-height: 1.04; letter-spacing: -.01em; color: #FFFFFF"
                >
                  Every room,
                  <br />
                  made to measure.
                </h2>
              </div>
              <div style={{ marginBottom: "clamp(32px, 4vw, 56px)" }} data-s="margin-bottom: clamp(32px, 4vw, 56px)">
                <Link
                  href="/services"
                  className="pill "
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    minHeight: "52px",
                    padding: "0 28px",
                    borderRadius: "0",
                    background: "rgba(255,255,255,.08)",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,.55)",
                    fontSize: "15px",
                    fontWeight: "600",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                  data-s="display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 0 28px; border-radius: 0; background: rgba(255,255,255,.08); color: #FFFFFF; border: 1px solid rgba(255,255,255,.55); font-size: 15px; font-weight: 600; text-decoration: none; text-align: center"
                >
                  All our services
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
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
                  style={{ position: "absolute", inset: "0", backgroundColor: "#B8A88F" }}
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
            <div
              style={{ marginTop: "clamp(48px, 6vw, 88px)", borderTop: "1px solid rgba(255,255,255,.16)" }}
              data-s="margin-top: clamp(48px, 6vw, 88px); border-top: 1px solid rgba(255,255,255,.16)"
            >
              <Link
                href="/services/kitchen"
                className="row-l"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px 32px",
                  padding: "26px 0",
                  borderBottom: "1px solid rgba(255,255,255,.16)",
                  textDecoration: "none",
                }}
                data-s="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px 32px; padding: 26px 0; border-bottom: 1px solid rgba(255,255,255,.16); text-decoration: none"
              >
                <span className="ri" aria-hidden="true">
                  <span className="ri-t">
                    <span className="ri-s ri-K27" />
                    <span className="ri-s ri-K20" />
                    <span className="ri-s ri-K3" />
                    <span className="ri-s ri-K27" />
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#E3B5A9" }}>01</span>
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "clamp(36px, 4.4vw, 64px)",
                      lineHeight: "1",
                      color: "#FFFFFF",
                    }}
                    data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(36px, 4.4vw, 64px); line-height: 1; color: #FFFFFF"
                  >
                    Kitchen
                  </span>
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Custom cabinets
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Islands
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Pantries
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Countertops
                  </span>
                </span>
              </Link>
              <Link
                href="/services/bathroom"
                className="row-l"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px 32px",
                  padding: "26px 0",
                  borderBottom: "1px solid rgba(255,255,255,.16)",
                  textDecoration: "none",
                }}
                data-s="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px 32px; padding: 26px 0; border-bottom: 1px solid rgba(255,255,255,.16); text-decoration: none"
              >
                <span className="ri" aria-hidden="true">
                  <span className="ri-t">
                    <span className="ri-s ri-B15" />
                    <span className="ri-s ri-B12" />
                    <span className="ri-s ri-B1" />
                    <span className="ri-s ri-B15" />
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#E3B5A9" }}>02</span>
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "clamp(36px, 4.4vw, 64px)",
                      lineHeight: "1",
                      color: "#FFFFFF",
                    }}
                    data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(36px, 4.4vw, 64px); line-height: 1; color: #FFFFFF"
                  >
                    Bathroom
                  </span>
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Vanities
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Linen towers
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Countertops
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Storage
                  </span>
                </span>
              </Link>
              <Link
                href="/services/walk-in"
                className="row-l"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px 32px",
                  padding: "26px 0",
                  borderBottom: "1px solid rgba(255,255,255,.16)",
                  textDecoration: "none",
                }}
                data-s="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px 32px; padding: 26px 0; border-bottom: 1px solid rgba(255,255,255,.16); text-decoration: none"
              >
                <span className="ri" aria-hidden="true">
                  <span className="ri-t">
                    <span className="ri-s ri-W5" />
                    <span className="ri-s ri-W7" />
                    <span className="ri-s ri-W3" />
                    <span className="ri-s ri-W5" />
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#E3B5A9" }}>03</span>
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "clamp(36px, 4.4vw, 64px)",
                      lineHeight: "1",
                      color: "#FFFFFF",
                    }}
                    data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(36px, 4.4vw, 64px); line-height: 1; color: #FFFFFF"
                  >
                    Walk-ins
                  </span>
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Closet systems
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Islands
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Lighting
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Shoe walls
                  </span>
                </span>
              </Link>
              <Link
                href="/services"
                className="row-l"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px 32px",
                  padding: "26px 0",
                  borderBottom: "1px solid rgba(255,255,255,.16)",
                  textDecoration: "none",
                }}
                data-s="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px 32px; padding: 26px 0; border-bottom: 1px solid rgba(255,255,255,.16); text-decoration: none"
              >
                <span className="ri" aria-hidden="true">
                  <span className="ri-t">
                    <span className="ri-s ri-K21" />
                    <span className="ri-s ri-B17" />
                    <span className="ri-s ri-W1" />
                    <span className="ri-s ri-K21" />
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#E3B5A9" }}>04</span>
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "clamp(36px, 4.4vw, 64px)",
                      lineHeight: "1",
                      color: "#FFFFFF",
                    }}
                    data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(36px, 4.4vw, 64px); line-height: 1; color: #FFFFFF"
                  >
                    Whole home
                  </span>
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Living rooms
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Home offices
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Built-ins
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    3D design
                  </span>
                  <span
                    style={{
                      padding: "8px 14px",
                      borderRadius: "0",
                      border: "1px solid rgba(255,255,255,.28)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,.88)",
                    }}
                    data-s="padding: 8px 14px; border-radius: 0; border: 1px solid rgba(255,255,255,.28); font-size: 13px; color: rgba(255,255,255,.88)"
                  >
                    Installation
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="sec">
          <div className="wrap">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  marginBottom: "clamp(32px, 4vw, 56px)",
                }}
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
                  We made these
                  <br />
                  dreams come true.
                </h2>
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
                  From a first sketch to a finished room — homes we’ve transformed across Tampa Bay.
                </p>
              </div>
              <div style={{ marginBottom: "clamp(32px, 4vw, 56px)" }} data-s="margin-bottom: clamp(32px, 4vw, 56px)">
                <Link
                  href="/gallery"
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
                  See all projects
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(16px, 2vw, 28px)" }}>
              <div style={{ flex: "1 1 340px" }}>
                <Link
                  href="/gallery"
                  className="tile"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    textDecoration: "none",
                    color: "#22252A",
                    height: "100%",
                  }}
                  data-s="display: flex; flex-direction: column; gap: 14px; text-decoration: none; color: #22252A; height: 100%"
                >
                  <div
                    style={{
                      flex: "1",
                      minHeight: "clamp(300px, 32vw, 480px)",
                      borderRadius: "0",
                      overflow: "hidden",
                      position: "relative",
                    }}
                    data-s="flex: 1; min-height: clamp(300px, 32vw, 480px); border-radius: 0; overflow: hidden; position: relative"
                  >
                    <div
                      className="ph tile-img"
                      role="img"
                      aria-label="Kitchen project — The Westchase Residence, Tampa"
                      style={{ position: "absolute", inset: "0", backgroundColor: "#2B4A3F" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "16px",
                        padding: "6px 14px",
                        borderRadius: "0",
                        background: "#FFFFFF",
                        color: "#1D2B44",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                      data-s="position: absolute; left: 16px; top: 16px; padding: 6px 14px; border-radius: 0; background: #FFFFFF; color: #1D2B44; font-size: 12px; font-weight: 600"
                    >
                      Kitchen
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px" }}
                  >
                    <h3
                      style={{
                        margin: "0",
                        fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                        fontWeight: "400",
                        fontSize: "26px",
                        color: "#1D2B44",
                      }}
                    >
                      The Carrollwood Home
                    </h3>
                    <span style={{ fontSize: "14px", color: "#5E636B", whiteSpace: "nowrap" }}>Wesley Chapel, FL</span>
                  </div>
                </Link>
              </div>
              <div style={{ flex: "1 1 340px" }}>
                <Link
                  href="/gallery"
                  className="tile"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    textDecoration: "none",
                    color: "#22252A",
                    height: "100%",
                  }}
                  data-s="display: flex; flex-direction: column; gap: 14px; text-decoration: none; color: #22252A; height: 100%"
                >
                  <div
                    style={{
                      flex: "1",
                      minHeight: "clamp(300px, 32vw, 480px)",
                      borderRadius: "0",
                      overflow: "hidden",
                      position: "relative",
                    }}
                    data-s="flex: 1; min-height: clamp(300px, 32vw, 480px); border-radius: 0; overflow: hidden; position: relative"
                  >
                    <div
                      className="ph tile-img"
                      role="img"
                      aria-label="Bathroom project — The Lutz Residence, Clearwater"
                      style={{ position: "absolute", inset: "0", backgroundColor: "#5B7A99" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "16px",
                        padding: "6px 14px",
                        borderRadius: "0",
                        background: "#FFFFFF",
                        color: "#1D2B44",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                      data-s="position: absolute; left: 16px; top: 16px; padding: 6px 14px; border-radius: 0; background: #FFFFFF; color: #1D2B44; font-size: 12px; font-weight: 600"
                    >
                      Bathroom
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px" }}
                  >
                    <h3
                      style={{
                        margin: "0",
                        fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                        fontWeight: "400",
                        fontSize: "26px",
                        color: "#1D2B44",
                      }}
                    >
                      The Palma Ceia Home
                    </h3>
                    <span style={{ fontSize: "14px", color: "#5E636B", whiteSpace: "nowrap" }}>St. Petersburg, FL</span>
                  </div>
                </Link>
              </div>
            </div>
            <div style={{ marginTop: "clamp(24px, 3vw, 40px)" }}>
              <Link
                href="/gallery"
                className="tile"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  textDecoration: "none",
                  color: "#22252A",
                  height: "100%",
                }}
                data-s="display: flex; flex-direction: column; gap: 14px; text-decoration: none; color: #22252A; height: 100%"
              >
                <div
                  style={{
                    flex: "1",
                    minHeight: "clamp(280px, 38vw, 560px)",
                    borderRadius: "0",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  data-s="flex: 1; min-height: clamp(280px, 38vw, 560px); border-radius: 0; overflow: hidden; position: relative"
                >
                  <div
                    className="ph tile-img"
                    role="img"
                    aria-label="Walk-in project — The Westchase Residence, Tampa"
                    style={{ position: "absolute", inset: "0", backgroundColor: "#C9BFB1" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "16px",
                      padding: "6px 14px",
                      borderRadius: "0",
                      background: "#FFFFFF",
                      color: "#1D2B44",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                    data-s="position: absolute; left: 16px; top: 16px; padding: 6px 14px; border-radius: 0; background: #FFFFFF; color: #1D2B44; font-size: 12px; font-weight: 600"
                  >
                    Walk-in
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px" }}>
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "400",
                      fontSize: "26px",
                      color: "#1D2B44",
                    }}
                  >
                    The Carrollwood Home
                  </h3>
                  <span style={{ fontSize: "14px", color: "#5E636B", whiteSpace: "nowrap" }}>Wesley Chapel, FL</span>
                </div>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "clamp(16px, 2vw, 28px)",
                marginTop: "clamp(24px, 3vw, 40px)",
              }}
            >
              <div style={{ flex: "1 1 340px" }}>
                <Link
                  href="/gallery"
                  className="tile"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    textDecoration: "none",
                    color: "#22252A",
                    height: "100%",
                  }}
                  data-s="display: flex; flex-direction: column; gap: 14px; text-decoration: none; color: #22252A; height: 100%"
                >
                  <div
                    style={{
                      flex: "1",
                      minHeight: "clamp(300px, 32vw, 480px)",
                      borderRadius: "0",
                      overflow: "hidden",
                      position: "relative",
                    }}
                    data-s="flex: 1; min-height: clamp(300px, 32vw, 480px); border-radius: 0; overflow: hidden; position: relative"
                  >
                    <div
                      className="ph tile-img"
                      role="img"
                      aria-label="Kitchen project — The Westchase Residence, Tampa"
                      style={{ position: "absolute", inset: "0", backgroundColor: "#B8A88F" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "16px",
                        padding: "6px 14px",
                        borderRadius: "0",
                        background: "#FFFFFF",
                        color: "#1D2B44",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                      data-s="position: absolute; left: 16px; top: 16px; padding: 6px 14px; border-radius: 0; background: #FFFFFF; color: #1D2B44; font-size: 12px; font-weight: 600"
                    >
                      Kitchen
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px" }}
                  >
                    <h3
                      style={{
                        margin: "0",
                        fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                        fontWeight: "400",
                        fontSize: "26px",
                        color: "#1D2B44",
                      }}
                    >
                      The Carrollwood Home
                    </h3>
                    <span style={{ fontSize: "14px", color: "#5E636B", whiteSpace: "nowrap" }}>Wesley Chapel, FL</span>
                  </div>
                </Link>
              </div>
              <div style={{ flex: "1 1 340px" }}>
                <Link
                  href="/gallery"
                  className="tile"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    textDecoration: "none",
                    color: "#22252A",
                    height: "100%",
                  }}
                  data-s="display: flex; flex-direction: column; gap: 14px; text-decoration: none; color: #22252A; height: 100%"
                >
                  <div
                    style={{
                      flex: "1",
                      minHeight: "clamp(300px, 32vw, 480px)",
                      borderRadius: "0",
                      overflow: "hidden",
                      position: "relative",
                    }}
                    data-s="flex: 1; min-height: clamp(300px, 32vw, 480px); border-radius: 0; overflow: hidden; position: relative"
                  >
                    <div
                      className="ph tile-img"
                      role="img"
                      aria-label="Bathroom project — The Lutz Residence, Clearwater"
                      style={{ position: "absolute", inset: "0", backgroundColor: "#8DA4BC" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "16px",
                        padding: "6px 14px",
                        borderRadius: "0",
                        background: "#FFFFFF",
                        color: "#1D2B44",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                      data-s="position: absolute; left: 16px; top: 16px; padding: 6px 14px; border-radius: 0; background: #FFFFFF; color: #1D2B44; font-size: 12px; font-weight: 600"
                    >
                      Bathroom
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px" }}
                  >
                    <h3
                      style={{
                        margin: "0",
                        fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                        fontWeight: "400",
                        fontSize: "26px",
                        color: "#1D2B44",
                      }}
                    >
                      The Palma Ceia Home
                    </h3>
                    <span style={{ fontSize: "14px", color: "#5E636B", whiteSpace: "nowrap" }}>St. Petersburg, FL</span>
                  </div>
                </Link>
              </div>
            </div>
            <p style={{ margin: "20px 0 0", fontSize: "13px", color: "#5E636B" }}>
              <span style={{ color: "#5E636B" }}>Recent work across Tampa Bay</span>
            </p>
          </div>
        </section>
        <section className="sec" style={{ background: "#FFFFFF" }}>
          <div className="wrap">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  marginBottom: "clamp(32px, 4vw, 56px)",
                }}
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
                  Seven steps. One team.
                </h2>
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
                  You always know what comes next — and who to call.
                </p>
              </div>
              <div style={{ marginBottom: "clamp(32px, 4vw, 56px)" }} data-s="margin-bottom: clamp(32px, 4vw, 56px)">
                <Link
                  href="/mission"
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
                  Our full process
                </Link>
              </div>
            </div>
            <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
              <defs>
                <linearGradient id="stg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#8FA89A" stopOpacity=".38" />
                  <stop offset="1" stopColor="#8FA89A" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="st7" role="list">
              <button type="button" className={st0} onClick={go0} aria-label="Step 1: Free Designer Consultation">
                <span className="st-l">
                  <span>01.</span>
                  <b>Free Designer Consultation</b>
                  <span className="st-go" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
                <span className="st-d">
                  A designer visits your home, measures the space and talks through your needs, materials, scope and
                  budget.
                </span>
                <span className="st-arc" aria-hidden="true">
                  <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M0 100 A100 100 0 0 1 200 100" vectorEffect="non-scaling-stroke" />
                    <circle cx="0" cy="100" r="2.5" />
                    <circle cx="200" cy="100" r="2.5" />
                  </svg>
                  <span className="st-ic">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 5h16v11H9l-5 4z" />
                    </svg>
                  </span>
                </span>
              </button>
              <button type="button" className={st1} onClick={go1} aria-label="Step 2: Design & quote">
                <span className="st-l">
                  <span>02.</span>
                  <b>Design & quote</b>
                  <span className="st-go" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
                <span className="st-d">We turn your ideas into a preliminary design and a clear, written budget.</span>
                <span className="st-arc" aria-hidden="true">
                  <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M0 100 A100 100 0 0 1 200 100" vectorEffect="non-scaling-stroke" />
                    <circle cx="0" cy="100" r="2.5" />
                    <circle cx="200" cy="100" r="2.5" />
                  </svg>
                  <span className="st-ic">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 20l4-1 11-11-3-3L5 16z" />
                      <path d="M14 6l3 3" />
                    </svg>
                  </span>
                </span>
              </button>
              <button type="button" className={st2} onClick={go2} aria-label="Step 3: Contract">
                <span className="st-l">
                  <span>03.</span>
                  <b>Contract</b>
                  <span className="st-go" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
                <span className="st-d">
                  A detailed contract covers materials, scope and conditions. We handle permits if needed and set the
                  schedule.
                </span>
                <span className="st-arc" aria-hidden="true">
                  <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M0 100 A100 100 0 0 1 200 100" vectorEffect="non-scaling-stroke" />
                    <circle cx="0" cy="100" r="2.5" />
                    <circle cx="200" cy="100" r="2.5" />
                  </svg>
                  <span className="st-ic">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 3h9l4 4v14H6z" />
                      <path d="M9 12h7M9 16h5" />
                    </svg>
                  </span>
                </span>
              </button>
              <button type="button" className={st3} onClick={go3} aria-label="Step 4: 2D/3D real-time edits">
                <span className="st-l">
                  <span>04.</span>
                  <b>2D/3D real-time edits</b>
                  <span className="st-go" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
                <span className="st-d">
                  We review the plan together and adjust it live. Once you approve, your final 3D design is produced.
                </span>
                <span className="st-arc" aria-hidden="true">
                  <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M0 100 A100 100 0 0 1 200 100" vectorEffect="non-scaling-stroke" />
                    <circle cx="0" cy="100" r="2.5" />
                    <circle cx="200" cy="100" r="2.5" />
                  </svg>
                  <span className="st-ic">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
                      <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
                    </svg>
                  </span>
                </span>
              </button>
              <button type="button" className={st4} onClick={go4} aria-label="Step 5: Renovation phase">
                <span className="st-l">
                  <span>05.</span>
                  <b>Renovation phase</b>
                  <span className="st-go" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
                <span className="st-d">
                  Our project management team coordinates brands, colors, permits and measurements — and keeps you
                  updated.
                </span>
                <span className="st-arc" aria-hidden="true">
                  <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M0 100 A100 100 0 0 1 200 100" vectorEffect="non-scaling-stroke" />
                    <circle cx="0" cy="100" r="2.5" />
                    <circle cx="200" cy="100" r="2.5" />
                  </svg>
                  <span className="st-ic">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 6a4 4 0 0 0 4 5l-8 8-3-3 8-8a4 4 0 0 0-1-2z" />
                    </svg>
                  </span>
                </span>
              </button>
              <button type="button" className={st5} onClick={go5} aria-label="Step 6: Delivery & installation">
                <span className="st-l">
                  <span>06.</span>
                  <b>Delivery & installation</b>
                  <span className="st-go" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
                <span className="st-d">
                  We handle deliveries, install everything to the inch, remove debris and keep your home clean and safe.
                </span>
                <span className="st-arc" aria-hidden="true">
                  <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M0 100 A100 100 0 0 1 200 100" vectorEffect="non-scaling-stroke" />
                    <circle cx="0" cy="100" r="2.5" />
                    <circle cx="200" cy="100" r="2.5" />
                  </svg>
                  <span className="st-ic">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
                      <circle cx="7" cy="18" r="1.6" />
                      <circle cx="17" cy="18" r="1.6" />
                    </svg>
                  </span>
                </span>
              </button>
              <button type="button" className={st6} onClick={go6} aria-label="Step 7: Final inspection">
                <span className="st-l">
                  <span>07.</span>
                  <b>Final inspection</b>
                  <span className="st-go" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
                <span className="st-d">
                  We check every detail against our quality standards, document the result and ask for your feedback.
                </span>
                <span className="st-arc" aria-hidden="true">
                  <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M0 100 A100 100 0 0 1 200 100" vectorEffect="non-scaling-stroke" />
                    <circle cx="0" cy="100" r="2.5" />
                    <circle cx="200" cy="100" r="2.5" />
                  </svg>
                  <span className="st-ic">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
            <div className="gt">
              <div className="gt-h">
                <span>Timeline</span>
                <span>Your project, step by step</span>
              </div>
              <div className="gt-g">
                <div className="gt-lines" aria-hidden="true">
                  <i style={{ gridColumn: "1" }} />
                  <i style={{ gridColumn: "2" }} />
                  <i style={{ gridColumn: "3" }} />
                  <i style={{ gridColumn: "4" }} />
                  <i style={{ gridColumn: "5" }} />
                  <i style={{ gridColumn: "6" }} />
                  <i style={{ gridColumn: "7" }} />
                  <i style={{ gridColumn: "8" }} />
                </div>
                <button type="button" className={st0} onClick={go0} style={{ gridColumn: "1 / span 2", gridRow: "1" }}>
                  <span className="gt-pill">01 · Free Designer Consultation</span>
                  <span className="gt-d">
                    <b>01 — Free Designer Consultation</b>A designer visits your home, measures the space and talks
                    through your needs, materials, scope and budget.
                  </span>
                </button>
                <button type="button" className={st1} onClick={go1} style={{ gridColumn: "2 / span 2", gridRow: "2" }}>
                  <span className="gt-pill">02 · Design & quote</span>
                  <span className="gt-d">
                    <b>02 — Design & quote</b>We turn your ideas into a preliminary design and a clear, written budget.
                  </span>
                </button>
                <button type="button" className={st2} onClick={go2} style={{ gridColumn: "3 / span 2", gridRow: "3" }}>
                  <span className="gt-pill">03 · Contract</span>
                  <span className="gt-d">
                    <b>03 — Contract</b>A detailed contract covers materials, scope and conditions. We handle permits if
                    needed and set the schedule.
                  </span>
                </button>
                <button type="button" className={st3} onClick={go3} style={{ gridColumn: "4 / span 2", gridRow: "4" }}>
                  <span className="gt-pill">04 · 2D/3D real-time edits</span>
                  <span className="gt-d">
                    <b>04 — 2D/3D real-time edits</b>We review the plan together and adjust it live. Once you approve,
                    your final 3D design is produced.
                  </span>
                </button>
                <button type="button" className={st4} onClick={go4} style={{ gridColumn: "5 / span 2", gridRow: "5" }}>
                  <span className="gt-pill">05 · Renovation phase</span>
                  <span className="gt-d">
                    <b>05 — Renovation phase</b>Our project management team coordinates brands, colors, permits and
                    measurements — and keeps you updated.
                  </span>
                </button>
                <button type="button" className={st5} onClick={go5} style={{ gridColumn: "6 / span 2", gridRow: "6" }}>
                  <span className="gt-pill">06 · Delivery & installation</span>
                  <span className="gt-d">
                    <b>06 — Delivery & installation</b>We handle deliveries, install everything to the inch, remove
                    debris and keep your home clean and safe.
                  </span>
                </button>
                <button type="button" className={st6} onClick={go6} style={{ gridColumn: "7 / span 2", gridRow: "7" }}>
                  <span className="gt-pill">07 · Final inspection</span>
                  <span className="gt-d">
                    <b>07 — Final inspection</b>We check every detail against our quality standards, document the result
                    and ask for your feedback.
                  </span>
                </button>
              </div>
            </div>
            <ol className="old-steps" style={{ margin: "0", padding: "0", listStyle: "none" }}>
              <li
                className="band"
                style={{
                  position: "relative",
                  zIndex: "1",
                  padding: "clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px)",
                  borderRadius: "0",
                  background: "#EEF3F0",
                  color: "#1F3D33",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "8px clamp(16px, 3vw, 48px)",
                }}
                data-s="position: relative; z-index: 1; padding: clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px); border-radius: 0; background: #EEF3F0; color: #1F3D33; display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px clamp(16px, 3vw, 48px)"
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(36px, 3.6vw, 56px)",
                    lineHeight: "1",
                    minWidth: "72px",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(36px, 3.6vw, 56px); line-height: 1; min-width: 72px"
                >
                  01
                </span>
                <span
                  style={{
                    flex: "1 1 280px",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(24px, 2.4vw, 36px)",
                    lineHeight: "1.1",
                  }}
                  data-s="flex: 1 1 280px; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(24px, 2.4vw, 36px); line-height: 1.1"
                >
                  Free Designer Consultation
                </span>
                <span style={{ flex: "1 1 320px", fontSize: "15px", lineHeight: "1.55", color: "#36584A" }}>
                  A designer visits your home, measures the space and talks through your needs, materials, scope and
                  budget.
                </span>
              </li>
              <li
                className="band"
                style={{
                  position: "relative",
                  zIndex: "2",
                  padding: "clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px)",
                  borderRadius: "0",
                  background: "#DCE6E0",
                  color: "#1F3D33",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "8px clamp(16px, 3vw, 48px)",
                }}
                data-s="position: relative; z-index: 2; padding: clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px); border-radius: 0; background: #DCE6E0; color: #1F3D33; display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px clamp(16px, 3vw, 48px)"
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(36px, 3.6vw, 56px)",
                    lineHeight: "1",
                    minWidth: "72px",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(36px, 3.6vw, 56px); line-height: 1; min-width: 72px"
                >
                  02
                </span>
                <span
                  style={{
                    flex: "1 1 280px",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(24px, 2.4vw, 36px)",
                    lineHeight: "1.1",
                  }}
                  data-s="flex: 1 1 280px; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(24px, 2.4vw, 36px); line-height: 1.1"
                >
                  Design submission & quote
                </span>
                <span style={{ flex: "1 1 320px", fontSize: "15px", lineHeight: "1.55", color: "#36584A" }}>
                  We turn your ideas into a preliminary design and a clear, written budget.
                </span>
              </li>
              <li
                className="band"
                style={{
                  position: "relative",
                  zIndex: "3",
                  padding: "clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px)",
                  borderRadius: "0",
                  background: "#BCCDC3",
                  color: "#142A23",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "8px clamp(16px, 3vw, 48px)",
                }}
                data-s="position: relative; z-index: 3; padding: clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px); border-radius: 0; background: #BCCDC3; color: #142A23; display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px clamp(16px, 3vw, 48px)"
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(36px, 3.6vw, 56px)",
                    lineHeight: "1",
                    minWidth: "72px",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(36px, 3.6vw, 56px); line-height: 1; min-width: 72px"
                >
                  03
                </span>
                <span
                  style={{
                    flex: "1 1 280px",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(24px, 2.4vw, 36px)",
                    lineHeight: "1.1",
                  }}
                  data-s="flex: 1 1 280px; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(24px, 2.4vw, 36px); line-height: 1.1"
                >
                  Contract
                </span>
                <span style={{ flex: "1 1 320px", fontSize: "15px", lineHeight: "1.55", color: "#2A4A3E" }}>
                  A detailed contract covers materials, scope and conditions. We handle permits if needed and set the
                  schedule.
                </span>
              </li>
              <li
                className="band"
                style={{
                  position: "relative",
                  zIndex: "4",
                  padding: "clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px)",
                  borderRadius: "0",
                  background: "#8FA89A",
                  color: "#142A23",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "8px clamp(16px, 3vw, 48px)",
                }}
                data-s="position: relative; z-index: 4; padding: clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px); border-radius: 0; background: #8FA89A; color: #142A23; display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px clamp(16px, 3vw, 48px)"
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(36px, 3.6vw, 56px)",
                    lineHeight: "1",
                    minWidth: "72px",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(36px, 3.6vw, 56px); line-height: 1; min-width: 72px"
                >
                  04
                </span>
                <span
                  style={{
                    flex: "1 1 280px",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(24px, 2.4vw, 36px)",
                    lineHeight: "1.1",
                  }}
                  data-s="flex: 1 1 280px; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(24px, 2.4vw, 36px); line-height: 1.1"
                >
                  2D/3D real-time edits
                </span>
                <span style={{ flex: "1 1 320px", fontSize: "15px", lineHeight: "1.55", color: "#142A23" }}>
                  We review the plan together and adjust it live. Once you approve, your final 3D design is produced.
                </span>
              </li>
              <li
                className="band"
                style={{
                  position: "relative",
                  zIndex: "5",
                  padding: "clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px)",
                  borderRadius: "0",
                  background: "#5B7A99",
                  color: "#FFFFFF",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "8px clamp(16px, 3vw, 48px)",
                }}
                data-s="position: relative; z-index: 5; padding: clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px); border-radius: 0; background: #5B7A99; color: #FFFFFF; display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px clamp(16px, 3vw, 48px)"
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(36px, 3.6vw, 56px)",
                    lineHeight: "1",
                    minWidth: "72px",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(36px, 3.6vw, 56px); line-height: 1; min-width: 72px"
                >
                  05
                </span>
                <span
                  style={{
                    flex: "1 1 280px",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(24px, 2.4vw, 36px)",
                    lineHeight: "1.1",
                  }}
                  data-s="flex: 1 1 280px; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(24px, 2.4vw, 36px); line-height: 1.1"
                >
                  Renovation phase
                </span>
                <span
                  style={{ flex: "1 1 320px", fontSize: "15px", lineHeight: "1.55", color: "rgba(255,255,255,.88)" }}
                  data-s="flex: 1 1 320px; font-size: 15px; line-height: 1.55; color: rgba(255,255,255,.88)"
                >
                  Our project management team coordinates brands, colors, permits and measurements — and keeps you
                  updated.
                </span>
              </li>
              <li
                className="band"
                style={{
                  position: "relative",
                  zIndex: "6",
                  padding: "clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px)",
                  borderRadius: "0",
                  background: "#3A5672",
                  color: "#FFFFFF",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "8px clamp(16px, 3vw, 48px)",
                }}
                data-s="position: relative; z-index: 6; padding: clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px); border-radius: 0; background: #3A5672; color: #FFFFFF; display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px clamp(16px, 3vw, 48px)"
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(36px, 3.6vw, 56px)",
                    lineHeight: "1",
                    minWidth: "72px",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(36px, 3.6vw, 56px); line-height: 1; min-width: 72px"
                >
                  06
                </span>
                <span
                  style={{
                    flex: "1 1 280px",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(24px, 2.4vw, 36px)",
                    lineHeight: "1.1",
                  }}
                  data-s="flex: 1 1 280px; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(24px, 2.4vw, 36px); line-height: 1.1"
                >
                  Delivery & installation
                </span>
                <span
                  style={{ flex: "1 1 320px", fontSize: "15px", lineHeight: "1.55", color: "rgba(255,255,255,.85)" }}
                  data-s="flex: 1 1 320px; font-size: 15px; line-height: 1.55; color: rgba(255,255,255,.85)"
                >
                  We handle deliveries, install everything to the inch, remove debris and keep your home clean and safe.
                </span>
              </li>
              <li
                className="band"
                style={{
                  position: "relative",
                  zIndex: "7",
                  padding: "clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px)",
                  borderRadius: "0",
                  background: "#1D2B44",
                  color: "#FFFFFF",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "8px clamp(16px, 3vw, 48px)",
                }}
                data-s="position: relative; z-index: 7; padding: clamp(36px, 3.4vw, 52px) clamp(24px, 4vw, 56px) clamp(28px, 2.6vw, 40px); border-radius: 0; background: #1D2B44; color: #FFFFFF; display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px clamp(16px, 3vw, 48px)"
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(36px, 3.6vw, 56px)",
                    lineHeight: "1",
                    minWidth: "72px",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(36px, 3.6vw, 56px); line-height: 1; min-width: 72px"
                >
                  07
                </span>
                <span
                  style={{
                    flex: "1 1 280px",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(24px, 2.4vw, 36px)",
                    lineHeight: "1.1",
                  }}
                  data-s="flex: 1 1 280px; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(24px, 2.4vw, 36px); line-height: 1.1"
                >
                  Final inspection
                </span>
                <span
                  style={{ flex: "1 1 320px", fontSize: "15px", lineHeight: "1.55", color: "rgba(255,255,255,.8)" }}
                  data-s="flex: 1 1 320px; font-size: 15px; line-height: 1.55; color: rgba(255,255,255,.8)"
                >
                  We check every detail against our quality standards, document the result and ask for your feedback.
                </span>
              </li>
            </ol>
          </div>
          <div
            className="mq"
            aria-hidden="true"
            style={{ background: "#F6F3EE", padding: "clamp(24px, 3vw, 44px) 0" }}
            data-s="background: #F6F3EE; padding: clamp(24px, 3vw, 44px) 0"
          >
            <div
              className="mq-in"
              style={{
                fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                fontSize: "clamp(64px, 9vw, 140px)",
                lineHeight: "1",
                color: "#1D2B44",
              }}
            >
              <span>Kitchens</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Bathrooms</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Walk-ins</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Tampa Bay</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Kitchens</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Bathrooms</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Walk-ins</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Tampa Bay</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Kitchens</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Bathrooms</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Walk-ins</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Tampa Bay</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Kitchens</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Bathrooms</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Walk-ins</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
              <span>Tampa Bay</span>
              <span style={{ padding: "0 .3em", opacity: ".35" }} data-s="padding: 0 .3em; opacity: .35">
                /
              </span>
            </div>
          </div>
        </section>
        <section className="sec tr2">
          <div className="wrap">
            <h2 className="tr-h">Built on trust.</h2>
            <div className="tr2-g">
              <div className="cgc cg-f">
                <div className="cg-top">
                  <span className="cg-lab">Fact 03</span>
                  <span className="cg-chip" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div>
                  <span className="cg-num">[X]</span>
                  <span className="cg-s">Years in business — serving Tampa Bay homeowners</span>
                </div>
              </div>
              <div className="cgc cg-f">
                <div className="cg-top">
                  <span className="cg-lab">Fact 04</span>
                  <span className="cg-chip" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div>
                  <span className="cg-num">[X]</span>
                  <span className="cg-s">Projects completed — kitchens, baths and closets</span>
                </div>
              </div>
              <div className="cgc cg-f">
                <div className="cg-top">
                  <span className="cg-lab">Fact 05</span>
                  <span className="cg-chip" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div>
                  <span className="cg-num">4</span>
                  <span className="cg-s">Cities served — Tampa · Bradenton · Clearwater · St. Pete</span>
                </div>
              </div>
              <div className="cgc cg-f">
                <div className="cg-top">
                  <span className="cg-lab">Fact 06</span>
                  <span className="cg-chip" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div>
                  <span className="cg-num">[X]%</span>
                  <span className="cg-s">Client satisfaction — final-inspection surveys</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec">
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
                What Our Clients
                <br />
                Say About Us
              </h2>
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
                Real reviews from homeowners in Tampa Bay.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <figure
                style={{
                  flex: "1 1 340px",
                  margin: "0",
                  padding: "clamp(28px, 3vw, 44px)",
                  background: "#F6F3EE",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "40px",
                  minHeight: "360px",
                }}
                data-s="flex: 1 1 340px; margin: 0; padding: clamp(28px, 3vw, 44px); background: #F6F3EE; display: flex; flex-direction: column; justify-content: space-between; gap: 40px; min-height: 360px"
              >
                <blockquote
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(24px, 2.4vw, 34px)",
                    fontWeight: "500",
                    lineHeight: "1.2",
                    letterSpacing: "-.02em",
                    color: "#1D2B44",
                  }}
                  data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(24px, 2.4vw, 34px); font-weight: 500; line-height: 1.2; letter-spacing: -.02em; color: #1D2B44"
                >
                  “[Client review — copied word for word from a verified Google review.]”
                </blockquote>
                <figcaption style={{ fontSize: "15px", lineHeight: "1.5", color: "#5E636B" }}>
                  <span style={{ color: "#1D2B44", fontWeight: "600" }}>[First name L.]</span>
                  <br />
                  Tampa — Kitchen remodel
                </figcaption>
              </figure>
              <figure
                style={{
                  flex: "1 1 340px",
                  margin: "0",
                  padding: "clamp(28px, 3vw, 44px)",
                  background: "#1F3D33",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "40px",
                  minHeight: "360px",
                }}
                data-s="flex: 1 1 340px; margin: 0; padding: clamp(28px, 3vw, 44px); background: #1F3D33; display: flex; flex-direction: column; justify-content: space-between; gap: 40px; min-height: 360px"
              >
                <blockquote
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(24px, 2.4vw, 34px)",
                    fontWeight: "500",
                    lineHeight: "1.2",
                    letterSpacing: "-.02em",
                    color: "#FFFFFF",
                  }}
                  data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(24px, 2.4vw, 34px); font-weight: 500; line-height: 1.2; letter-spacing: -.02em; color: #FFFFFF"
                >
                  “[Client review — copied word for word from a verified Google review.]”
                </blockquote>
                <figcaption
                  style={{ fontSize: "15px", lineHeight: "1.5", color: "rgba(255,255,255,.7)" }}
                  data-s="font-size: 15px; line-height: 1.5; color: rgba(255,255,255,.7)"
                >
                  <span style={{ color: "#FFFFFF", fontWeight: "600" }} data-s="color: #FFFFFF; font-weight: 600">
                    [First name L.]
                  </span>
                  <br />
                  Tampa — Bathroom remodel
                </figcaption>
              </figure>
              <div
                style={{
                  flex: "1 1 260px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "clamp(28px, 3vw, 44px)",
                  background: "#1D2B44",
                  color: "#FFFFFF",
                  minHeight: "360px",
                }}
                data-s="flex: 1 1 260px; display: flex; flex-direction: column; justify-content: space-between; gap: 20px; padding: clamp(28px, 3vw, 44px); background: #1D2B44; color: #FFFFFF; min-height: 360px"
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "clamp(96px, 10vw, 160px)",
                    fontWeight: "500",
                    lineHeight: ".85",
                    letterSpacing: "-.04em",
                  }}
                  data-s="font-family: var(--font-urbanist), system-ui, sans-serif; font-size: clamp(96px, 10vw, 160px); font-weight: 500; line-height: .85; letter-spacing: -.04em"
                >
                  [4.9]
                </span>
                <span
                  style={{ fontSize: "15px", lineHeight: "1.5", color: "rgba(255,255,255,.75)" }}
                  data-s="font-size: 15px; line-height: 1.5; color: rgba(255,255,255,.75)"
                >
                  Average rating on Google
                  <br />
                  from [N] reviews — to be provided
                </span>
              </div>
            </div>
          </div>
        </section>
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
                    style={{ borderRadius: "0", background: "#F6F3EE" }}
                    data-s="border-radius: 0; background: #F6F3EE"
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
                    {f.open && (
                      <>
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
                      </>
                    )}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section className="sec">
          <div className="wrap">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  marginBottom: "clamp(32px, 4vw, 56px)",
                }}
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
                  Ideas for your home.
                </h2>
              </div>
              <div style={{ marginBottom: "clamp(32px, 4vw, 56px)" }} data-s="margin-bottom: clamp(32px, 4vw, 56px)">
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
                  All articles
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(16px, 2vw, 28px)" }}>
              <Link
                href="/blog/space-optimization-in-small-kitchens"
                className="tile"
                style={{
                  flex: "1 1 300px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  textDecoration: "none",
                  color: "#22252A",
                }}
                data-s="flex: 1 1 300px; display: flex; flex-direction: column; gap: 16px; text-decoration: none; color: #22252A"
              >
                <div
                  style={{ height: "240px", borderRadius: "0", overflow: "hidden", position: "relative" }}
                  data-s="height: 240px; border-radius: 0; overflow: hidden; position: relative"
                >
                  <div
                    className="ph tile-img"
                    role="img"
                    aria-label="Article cover: V&C Cabinet Design Concept LLC – The Premier Choice in Bradenton, Tampa, Clearwater, and St. Petersburg"
                    style={{ position: "absolute", inset: "0", backgroundColor: "#2B4A3F" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "14px",
                      top: "14px",
                      padding: "6px 14px",
                      borderRadius: "0",
                      background: "#FFFFFF",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#1D2B44",
                    }}
                    data-s="position: absolute; left: 14px; top: 14px; padding: 6px 14px; border-radius: 0; background: #FFFFFF; font-size: 12px; font-weight: 600; color: #1D2B44"
                  >
                    Renovation tips
                  </span>
                </div>
                <span style={{ fontSize: "13px", color: "#5E636B" }}>Nov 13, 2023</span>
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "1.2",
                    color: "#1D2B44",
                  }}
                >
                  V&C Cabinet Design Concept LLC – The Premier Choice in Bradenton, Tampa, Clearwater, and St.
                  Petersburg
                </h3>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1F3D33",
                  }}
                >
                  Read more{" "}
                </span>
              </Link>
              <Link
                href="/blog/space-optimization-in-small-kitchens"
                className="tile"
                style={{
                  flex: "1 1 300px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  textDecoration: "none",
                  color: "#22252A",
                }}
                data-s="flex: 1 1 300px; display: flex; flex-direction: column; gap: 16px; text-decoration: none; color: #22252A"
              >
                <div
                  style={{ height: "240px", borderRadius: "0", overflow: "hidden", position: "relative" }}
                  data-s="height: 240px; border-radius: 0; overflow: hidden; position: relative"
                >
                  <div
                    className="ph tile-img"
                    role="img"
                    aria-label="Article cover: Elevate Your Space: Embracing the Latest Design Trends"
                    style={{ position: "absolute", inset: "0", backgroundColor: "#8DA4BC" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "14px",
                      top: "14px",
                      padding: "6px 14px",
                      borderRadius: "0",
                      background: "#FFFFFF",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#1D2B44",
                    }}
                    data-s="position: absolute; left: 14px; top: 14px; padding: 6px 14px; border-radius: 0; background: #FFFFFF; font-size: 12px; font-weight: 600; color: #1D2B44"
                  >
                    Cabinet Design
                  </span>
                </div>
                <span style={{ fontSize: "13px", color: "#5E636B" }}>Nov 6, 2023</span>
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "1.2",
                    color: "#1D2B44",
                  }}
                >
                  Elevate Your Space: Embracing the Latest Design Trends
                </h3>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1F3D33",
                  }}
                >
                  Read more{" "}
                </span>
              </Link>
              <Link
                href="/blog/space-optimization-in-small-kitchens"
                className="tile"
                style={{
                  flex: "1 1 300px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  textDecoration: "none",
                  color: "#22252A",
                }}
                data-s="flex: 1 1 300px; display: flex; flex-direction: column; gap: 16px; text-decoration: none; color: #22252A"
              >
                <div
                  style={{ height: "240px", borderRadius: "0", overflow: "hidden", position: "relative" }}
                  data-s="height: 240px; border-radius: 0; overflow: hidden; position: relative"
                >
                  <div
                    className="ph tile-img"
                    role="img"
                    aria-label="Article cover: Space Optimization in Small Kitchens"
                    style={{ position: "absolute", inset: "0", backgroundColor: "#B8A88F" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "14px",
                      top: "14px",
                      padding: "6px 14px",
                      borderRadius: "0",
                      background: "#FFFFFF",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#1D2B44",
                    }}
                    data-s="position: absolute; left: 14px; top: 14px; padding: 6px 14px; border-radius: 0; background: #FFFFFF; font-size: 12px; font-weight: 600; color: #1D2B44"
                  >
                    Kitchen
                  </span>
                </div>
                <span style={{ fontSize: "13px", color: "#5E636B" }}>Oct 31, 2023</span>
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "1.2",
                    color: "#1D2B44",
                  }}
                >
                  Space Optimization in Small Kitchens
                </h3>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1F3D33",
                  }}
                >
                  Read more{" "}
                </span>
              </Link>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
    </>
  );
}
