"use client";

import Link from "next/link";
import { Fragment } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { Collapse } from "@/components/site/collapse";
import { ContactSection } from "@/components/site/contact-section";
import { useDesignState, type DesignData } from "@/components/pages/use-design-state";

const DATA: DesignData = {
  items: [
    {
      room: "Modern",
      cap: "Kitchen — white shaker",
      city: "Clearwater, FL",
      h: 360,
      tone: "#B8A88F",
      alt: "Kitchen, modern — walnut veneer, St. Petersburg",
      room_ctx: "Kitchen",
      cls: "p-K27",
    },
    {
      room: "Classic",
      cap: "Kitchen — matte lacquer",
      city: "Bradenton, FL",
      h: 260,
      tone: "#8DA4BC",
      alt: "Kitchen, classic — painted oak, Brandon",
      room_ctx: "Kitchen",
      cls: "p-K3",
    },
    {
      room: "Islands",
      cap: "Kitchen — natural oak",
      city: "Lutz, FL",
      h: 420,
      tone: "#C9BFB1",
      alt: "Kitchen, islands — high-gloss white, Odessa",
      room_ctx: "Kitchen",
      cls: "p-K20",
    },
    {
      room: "Details",
      cap: "Kitchen — white shaker",
      city: "Tampa, FL",
      h: 280,
      tone: "#6B8A7A",
      alt: "Kitchen, details — walnut veneer, Wesley Chapel",
      room_ctx: "Kitchen",
      cls: "p-K15",
    },
    {
      room: "Modern",
      cap: "Kitchen — matte lacquer",
      city: "Clearwater, FL",
      h: 300,
      tone: "#A89C8B",
      alt: "Kitchen, modern — painted oak, St. Petersburg",
      room_ctx: "Kitchen",
      cls: "p-K21",
    },
    {
      room: "Classic",
      cap: "Kitchen — natural oak",
      city: "Bradenton, FL",
      h: 380,
      tone: "#5B7A99",
      alt: "Kitchen, classic — high-gloss white, Brandon",
      room_ctx: "Kitchen",
      cls: "p-K1",
    },
    {
      room: "Islands",
      cap: "Kitchen — white shaker",
      city: "Lutz, FL",
      h: 250,
      tone: "#BCCDC3",
      alt: "Kitchen, islands — walnut veneer, Odessa",
      room_ctx: "Kitchen",
      cls: "p-K19",
    },
    {
      room: "Details",
      cap: "Kitchen — matte lacquer",
      city: "Tampa, FL",
      h: 340,
      tone: "#2B4A3F",
      alt: "Kitchen, details — painted oak, Wesley Chapel",
      room_ctx: "Kitchen",
      cls: "p-K12",
    },
    {
      room: "Modern",
      cap: "Kitchen — natural oak",
      city: "Clearwater, FL",
      h: 290,
      tone: "#B7C6D6",
      alt: "Kitchen, modern — high-gloss white, St. Petersburg",
      room_ctx: "Kitchen",
      cls: "p-K5",
    },
    {
      room: "Classic",
      cap: "Kitchen — white shaker",
      city: "Bradenton, FL",
      h: 260,
      tone: "#D08C7C",
      alt: "Kitchen, classic — walnut veneer, Brandon",
      room_ctx: "Kitchen",
      cls: "p-K22",
    },
    {
      room: "Islands",
      cap: "Kitchen — matte lacquer",
      city: "Lutz, FL",
      h: 330,
      tone: "#E6DFD5",
      alt: "Kitchen, islands — painted oak, Odessa",
      room_ctx: "Kitchen",
      cls: "p-K16",
    },
    {
      room: "Details",
      cap: "Kitchen — natural oak",
      city: "Tampa, FL",
      h: 270,
      tone: "#8FA89A",
      alt: "Kitchen, details — high-gloss white, Wesley Chapel",
      room_ctx: "Kitchen",
      cls: "p-K6",
    },
  ],
  filters: ["All", "Modern", "Classic", "Islands", "Details"],
  faqs: [
    [
      "How much does a custom kitchen cost?",
      "Pricing depends on the size of the room, the materials and the finishes you choose. After your free consultation, you receive a clear, written and itemized quote — with no hidden costs. Your designer gives you a written, itemized quote after the free consultation.",
    ],
    [
      "Can you work with my existing layout?",
      "Yes. We can keep your plumbing and appliance locations or redesign the whole layout — whichever fits your goals and budget.",
    ],
    [
      "Do you supply countertops and appliances?",
      "Yes. We supply and install countertops and coordinate your appliances, so your kitchen is delivered complete and ready to use.",
    ],
    [
      "How long does a kitchen take?",
      "It depends on cabinetry lead times and the scope of work. You receive a written schedule before work begins, and we keep you updated until the final inspection.",
    ],
  ],
};

/** Generated from the "Kitchen" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function KitchenContent() {
  const { chips, clipW, closeLb, ctaHref, faqs, lb, lbIndex, lbOpen, lbTotal, next, pos, prev, shown, slide } =
    useDesignState(DATA);
  return (
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
                    <li>
                      <Link
                        href="/services"
                        style={{ color: "rgba(255,255,255,.85)" }}
                        data-s="color: rgba(255,255,255,.85)"
                      >
                        Services
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" style={{ color: "#FFFFFF" }} data-s="color: #FFFFFF">
                      Kitchen
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
                  The heart of your home,
                  <br />
                  <em style={{ color: "#BCCDC3" }} data-s="color: #BCCDC3">
                    made to measure.
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
                  Cabinets, islands, pantries and storage designed around the way you cook, gather and live.
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
                  <a
                    href="#work"
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
                    See the gallery
                  </a>
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
                Your kitchen, exactly as you imagined it.
              </h2>
              <p
                style={{ margin: "0", maxWidth: "560px", fontSize: "16px", lineHeight: "1.6", color: "#22252A" }}
                data-s="margin: 0; max-width: 560px; font-size: 16px; line-height: 1.6; color: #22252A"
              >
                From compact galley kitchens to open-plan family spaces, we design every cabinet for your room and your
                routine.
              </p>
              <p
                style={{ margin: "0", maxWidth: "560px", fontSize: "16px", lineHeight: "1.6", color: "#22252A" }}
                data-s="margin: 0; max-width: 560px; font-size: 16px; line-height: 1.6; color: #22252A"
              >
                Choose European, Canadian or American styles, then fine-tune finishes, countertops and hardware with
                your designer in 3D.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
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
                <a
                  href="tel:+17272233490"
                  className="lnk"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    minHeight: "44px",
                    fontWeight: "700",
                    color: "#1D2B44",
                    textDecoration: "none",
                  }}
                  data-s="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; font-weight: 700; color: #1D2B44; text-decoration: none"
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
                  </svg>
                  727-223-3490
                </a>
              </div>
            </div>
            <div
              className="ph"
              role="img"
              aria-label="Kitchen by V&C — detail"
              style={{
                height: "clamp(360px, 40vw, 600px)",
                backgroundColor: "#2B4A3F",
                flex: "1 1 420px",
                borderRadius: "0",
              }}
              data-s="height: clamp(360px, 40vw, 600px); background-color: #2B4A3F; flex: 1 1 420px; border-radius: 0;"
            />
          </div>
        </section>
        <section id="work" className="sec" style={{ background: "#FFFFFF" }}>
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
                Your dream. Our work.
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
                A selection of kitchens we’ve designed and installed across Tampa Bay.
              </p>
            </div>
            <div
              role="group"
              aria-label="Filter projects"
              style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}
            >
              {chips.map((c, cIndex) => (
                <Fragment key={cIndex}>
                  <button
                    type="button"
                    aria-pressed={c.pressed}
                    onClick={c.pick}
                    style={{
                      minHeight: "44px",
                      padding: "0 20px",
                      borderRadius: "0",
                      border: c.bd,
                      background: c.bg,
                      color: c.fg,
                      fontFamily: "var(--font-urbanist), sans-serif",
                      fontSize: "15px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                    data-s="min-height: 44px; padding: 0 20px; border-radius: 0; border: {{c.bd}}; background: {{c.bg}}; color: {{c.fg}}; font-family: var(--font-urbanist), sans-serif; font-size: 15px; font-weight: 600; cursor: pointer"
                  >
                    {c.label}{" "}
                    <span style={{ opacity: ".7", fontWeight: "500" }} data-s="opacity: .7; font-weight: 500">
                      {c.count}
                    </span>
                  </button>
                </Fragment>
              ))}
            </div>
            <div className="masonry">
              {shown.map((it, itIndex) => (
                <Fragment key={itIndex}>
                  <figure
                    style={{
                      margin: "0 0 20px",
                      breakInside: "avoid",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                    data-s="margin: 0 0 20px; break-inside: avoid; display: flex; flex-direction: column; gap: 8px"
                  >
                    <button
                      type="button"
                      onClick={it.open}
                      aria-label={`Open photo: ${it.alt}`}
                      className={`ph ${it.cls}`}
                      style={{
                        display: "block",
                        width: "100%",
                        height: `${it.h}px`,
                        border: "0",
                        padding: "0",
                        borderRadius: "0",
                        backgroundColor: it.tone,
                        cursor: "zoom-in",
                      }}
                      data-s="display: block; width: 100%; height: {{it.h}}px; border: 0; padding: 0; border-radius: 0; background-color: {{it.tone}}; cursor: zoom-in"
                    />
                    <figcaption
                      style={{ display: "flex", justifyContent: "space-between", gap: "8px", fontSize: "13px" }}
                    >
                      <span style={{ fontWeight: "600", color: "#22252A" }}>{it.cap}</span>
                      <span style={{ color: "#5E636B" }}>{it.city}</span>
                    </figcaption>
                  </figure>
                </Fragment>
              ))}
            </div>
            {lbOpen && (
              <>
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-label="Project photo"
                  style={{
                    position: "fixed",
                    inset: "0",
                    zIndex: "60",
                    background: "rgba(19,29,47,.96)",
                    overflowY: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                  }}
                >
                  <div style={{ width: "100%", maxWidth: "1240px", display: "flex", flexWrap: "wrap", gap: "32px" }}>
                    <div style={{ flex: "3 1 480px", position: "relative" }}>
                      <div
                        className={`ph ${lb.cls}`}
                        role="img"
                        aria-label={lb.alt}
                        style={{ height: "clamp(320px, 44vw, 640px)", borderRadius: "0", backgroundColor: lb.tone }}
                        data-s="height: clamp(320px, 44vw, 640px); border-radius: 0; background-color: {{lb.tone}}"
                      />
                      <button
                        type="button"
                        aria-label="Previous photo"
                        onClick={prev}
                        style={{
                          position: "absolute",
                          left: "16px",
                          top: "50%",
                          marginTop: "-24px",
                          width: "48px",
                          height: "48px",
                          borderRadius: "0",
                          border: "0",
                          background: "#F6F3EE",
                          color: "#1D2B44",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                        data-s="position: absolute; left: 16px; top: 50%; margin-top: -24px; width: 48px; height: 48px; border-radius: 0; border: 0; background: #F6F3EE; color: #1D2B44; display: flex; align-items: center; justify-content: center; cursor: pointer"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M15 6l-6 6 6 6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label="Next photo"
                        onClick={next}
                        style={{
                          position: "absolute",
                          right: "16px",
                          top: "50%",
                          marginTop: "-24px",
                          width: "48px",
                          height: "48px",
                          borderRadius: "0",
                          border: "0",
                          background: "#F6F3EE",
                          color: "#1D2B44",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                        data-s="position: absolute; right: 16px; top: 50%; margin-top: -24px; width: 48px; height: 48px; border-radius: 0; border: 0; background: #F6F3EE; color: #1D2B44; display: flex; align-items: center; justify-content: center; cursor: pointer"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                      </button>
                    </div>
                    <div
                      style={{
                        flex: "1 1 280px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        color: "#F6F3EE",
                      }}
                      data-s="flex: 1 1 280px; display: flex; flex-direction: column; gap: 16px; color: #F6F3EE"
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "13px", color: "#BCCDC3" }} data-s="font-size: 13px; color: #BCCDC3">
                          {lbIndex} / {lbTotal}
                        </span>
                        <button
                          type="button"
                          aria-label="Close"
                          onClick={closeLb}
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "0",
                            border: "1px solid rgba(246,243,238,.4)",
                            background: "transparent",
                            color: "#F6F3EE",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                          data-s="width: 44px; height: 44px; border-radius: 0; border: 1px solid rgba(246,243,238,.4); background: transparent; color: #F6F3EE; display: flex; align-items: center; justify-content: center; cursor: pointer"
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
                            <path d="M5 5l14 14M19 5L5 19" />
                          </svg>
                        </button>
                      </div>
                      <span
                        style={{
                          alignSelf: "flex-start",
                          padding: "4px 12px",
                          borderRadius: "0",
                          background: "#2A4A3E",
                          color: "#BCCDC3",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                        data-s="align-self: flex-start; padding: 4px 12px; border-radius: 0; background: #2A4A3E; color: #BCCDC3; font-size: 12px; font-weight: 700"
                      >
                        {lb.room}
                      </span>
                      <h3
                        style={{
                          margin: "0",
                          fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                          fontWeight: "400",
                          fontSize: "32px",
                          lineHeight: "1.15",
                        }}
                      >
                        {lb.cap}
                      </h3>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "14px",
                          color: "rgba(246,243,238,.8)",
                        }}
                      >
                        {lb.city}
                      </span>
                      <dl
                        style={{
                          margin: "8px 0 0",
                          display: "grid",
                          gridTemplateColumns: "100px 1fr",
                          gap: "10px",
                          fontSize: "14px",
                        }}
                        data-s="margin: 8px 0 0; display: grid; grid-template-columns: 100px 1fr; gap: 10px; font-size: 14px"
                      >
                        <dt style={{ color: "#8FA89A" }} data-s="color: #8FA89A">
                          Style
                        </dt>
                        <dd style={{ margin: "0" }}>Transitional</dd>
                        <dt style={{ color: "#8FA89A" }} data-s="color: #8FA89A">
                          Finish
                        </dt>
                        <dd style={{ margin: "0" }}>Painted shaker</dd>
                        <dt style={{ color: "#8FA89A" }} data-s="color: #8FA89A">
                          Hardware
                        </dt>
                        <dd style={{ margin: "0" }}>Matte black pulls</dd>
                      </dl>
                      <a
                        href={ctaHref}
                        style={{
                          marginTop: "16px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minHeight: "52px",
                          borderRadius: "0",
                          background: "#F6F3EE",
                          color: "#1F3D33",
                          fontWeight: "700",
                          textDecoration: "none",
                        }}
                        data-s="margin-top: 16px; display: inline-flex; align-items: center; justify-content: center; min-height: 52px; border-radius: 0; background: #F6F3EE; color: #1F3D33; font-weight: 700; text-decoration: none"
                      >
                        Book a Free Designer Consultation
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
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
                From dated to dream.
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
                Drag to compare the same room before and after V&C.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                height: "clamp(320px, 44vw, 640px)",
                borderRadius: "0",
                overflow: "hidden",
              }}
              data-s="position: relative; height: clamp(320px, 44vw, 640px); border-radius: 0; overflow: hidden"
            >
              <div
                className="ph"
                role="img"
                aria-label="After — renovated room"
                style={{ position: "absolute", inset: "0", backgroundColor: "#2B4A3F" }}
              />
              <span
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "16px",
                  padding: "6px 14px",
                  borderRadius: "0",
                  background: "#FFFFFF",
                  color: "#142A23",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
                data-s="position: absolute; right: 16px; top: 16px; padding: 6px 14px; border-radius: 0; background: #FFFFFF; color: #142A23; font-size: 13px; font-weight: 600"
              >
                After
              </span>
              <div
                className="ph"
                role="img"
                aria-label="Before — original room"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: clipW,
                  backgroundColor: "#A89C8B",
                  filter: "saturate(.3)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "16px",
                  padding: "6px 14px",
                  borderRadius: "0",
                  background: "#142A23",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
                data-s="position: absolute; left: 16px; top: 16px; padding: 6px 14px; border-radius: 0; background: #142A23; color: #FFFFFF; font-size: 13px; font-weight: 600"
              >
                Before
              </span>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: clipW,
                  width: "2px",
                  marginLeft: "-1px",
                  background: "#FFFFFF",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "50%",
                  marginTop: "-24px",
                  left: clipW,
                  marginLeft: "-24px",
                  width: "48px",
                  height: "48px",
                  borderRadius: "0",
                  background: "#FFFFFF",
                  color: "#142A23",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                data-s="position: absolute; top: 50%; margin-top: -24px; left: {{clipW}}; margin-left: -24px; width: 48px; height: 48px; border-radius: 0; background: #FFFFFF; color: #142A23; display: flex; align-items: center; justify-content: center"
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
                  <path d="M15 6l-6 6 6 6" />
                </svg>
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
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </div>
            </div>
            <label
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
                marginTop: "16px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Reveal {pos}%
              <input
                type="range"
                min="0"
                max="100"
                value={pos}
                onChange={slide}
                aria-label="Before and after comparison"
                style={{ flex: "1 1 240px", height: "44px", accentColor: "#1F3D33" }}
              />
            </label>
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
                Everything, handled.
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
                One quote, one team, one schedule.
              </p>
            </div>
            <ol
              style={{
                margin: "0",
                padding: "0",
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "0",
                borderTop: "1px solid #C9BFB1",
              }}
            >
              <li
                style={{
                  flex: "1 1 200px",
                  padding: "28px 24px 28px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                data-s="flex: 1 1 200px; padding: 28px 24px 28px 0; display: flex; flex-direction: column; gap: 12px"
              >
                <span style={{ color: "#4A6A8A" }} />
                <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#1D2B44" }}>Design</h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#5E636B" }}>
                  2D/3D plans with real-time edits
                </p>
              </li>
              <li
                style={{
                  flex: "1 1 200px",
                  padding: "28px 24px 28px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                data-s="flex: 1 1 200px; padding: 28px 24px 28px 0; display: flex; flex-direction: column; gap: 12px"
              >
                <span style={{ color: "#4A6A8A" }} />
                <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#1D2B44" }}>Cabinets</h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#5E636B" }}>
                  Custom-built, soft-close, to the inch
                </p>
              </li>
              <li
                style={{
                  flex: "1 1 200px",
                  padding: "28px 24px 28px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                data-s="flex: 1 1 200px; padding: 28px 24px 28px 0; display: flex; flex-direction: column; gap: 12px"
              >
                <span style={{ color: "#4A6A8A" }} />
                <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#1D2B44" }}>Countertops</h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#5E636B" }}>
                  Quartz, granite, wood — templated on site
                </p>
              </li>
              <li
                style={{
                  flex: "1 1 200px",
                  padding: "28px 24px 28px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                data-s="flex: 1 1 200px; padding: 28px 24px 28px 0; display: flex; flex-direction: column; gap: 12px"
              >
                <span style={{ color: "#4A6A8A" }} />
                <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#1D2B44" }}>Hardware</h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#5E636B" }}>
                  Pulls, organizers, pull-outs, lighting
                </p>
              </li>
              <li
                style={{
                  flex: "1 1 200px",
                  padding: "28px 24px 28px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                data-s="flex: 1 1 200px; padding: 28px 24px 28px 0; display: flex; flex-direction: column; gap: 12px"
              >
                <span style={{ color: "#4A6A8A" }} />
                <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#1D2B44" }}>Installation</h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#5E636B" }}>
                  Delivery, fitting, clean-up, inspection
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className="sec" style={{ background: "#FFFFFF" }}>
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
                Happy kitchen owners.
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
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
                  Wesley Chapel — Kitchen remodel
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="sec grain" style={{ backgroundColor: "#1D2B44" }}>
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
                  color: "#FFFFFF",
                }}
                data-s="margin: 0; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 400; font-size: clamp(40px, 5.4vw, 76px); line-height: 1.04; letter-spacing: -.01em; color: #FFFFFF"
              >
                Let us take care of the rest of your home.
              </h2>
              <p
                style={{
                  margin: "0",
                  maxWidth: "560px",
                  fontSize: "clamp(16px, 1.3vw, 19px)",
                  lineHeight: "1.5",
                  color: "rgba(255,255,255,.78)",
                }}
                data-s="margin: 0; max-width: 560px; font-size: clamp(16px, 1.3vw, 19px); line-height: 1.5; color: rgba(255,255,255,.78)"
              >
                Kitchens, bathrooms, walk-ins — or your whole home.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
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
    </>
  );
}
