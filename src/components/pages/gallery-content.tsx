"use client";

import { Fragment } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { ContactSection } from "@/components/site/contact-section";
import { useDesignState, type DesignData } from "@/components/pages/use-design-state";

const DATA: DesignData = {
  items: [
    {
      room: "Kitchens",
      cap: "Kitchen — white shaker",
      city: "Tampa, FL",
      h: 360,
      tone: "#B8A88F",
      alt: "Kitchen project — walnut veneer, Wesley Chapel",
      cls: "p-K27",
    },
    {
      room: "Bathrooms",
      cap: "Bathroom — matte lacquer",
      city: "Clearwater, FL",
      h: 260,
      tone: "#5B7A99",
      alt: "Bathroom project — painted oak, St. Petersburg",
      cls: "p-B15",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — natural oak",
      city: "Bradenton, FL",
      h: 420,
      tone: "#E6DFD5",
      alt: "Kitchen project — high-gloss white, Brandon",
      cls: "p-K3",
    },
    {
      room: "Walk-ins",
      cap: "Walk-in — white shaker",
      city: "Lutz, FL",
      h: 280,
      tone: "#6B8A7A",
      alt: "Walk-in project — walnut veneer, Odessa",
      cls: "p-W5",
    },
    {
      room: "Bathrooms",
      cap: "Bathroom — matte lacquer",
      city: "Tampa, FL",
      h: 300,
      tone: "#B7C6D6",
      alt: "Bathroom project — painted oak, Wesley Chapel",
      cls: "p-B1",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — natural oak",
      city: "Clearwater, FL",
      h: 380,
      tone: "#8DA4BC",
      alt: "Kitchen project — high-gloss white, St. Petersburg",
      cls: "p-K20",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — white shaker",
      city: "Bradenton, FL",
      h: 250,
      tone: "#BCCDC3",
      alt: "Kitchen project — walnut veneer, Brandon",
      cls: "p-K15",
    },
    {
      room: "Bathrooms",
      cap: "Bathroom — matte lacquer",
      city: "Lutz, FL",
      h: 340,
      tone: "#8FA89A",
      alt: "Bathroom project — painted oak, Odessa",
      cls: "p-B12",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — natural oak",
      city: "Tampa, FL",
      h: 290,
      tone: "#A89C8B",
      alt: "Kitchen project — high-gloss white, Wesley Chapel",
      cls: "p-K21",
    },
    {
      room: "Walk-ins",
      cap: "Walk-in — white shaker",
      city: "Clearwater, FL",
      h: 260,
      tone: "#D08C7C",
      alt: "Walk-in project — walnut veneer, St. Petersburg",
      cls: "p-W1",
    },
    {
      room: "Bathrooms",
      cap: "Bathroom — matte lacquer",
      city: "Bradenton, FL",
      h: 330,
      tone: "#C9BFB1",
      alt: "Bathroom project — painted oak, Brandon",
      cls: "p-B17",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — natural oak",
      city: "Lutz, FL",
      h: 270,
      tone: "#2B4A3F",
      alt: "Kitchen project — high-gloss white, Odessa",
      cls: "p-K1",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — white shaker",
      city: "Tampa, FL",
      h: 310,
      tone: "#B8A88F",
      alt: "Kitchen project — walnut veneer, Wesley Chapel",
      cls: "p-K19",
    },
    {
      room: "Bathrooms",
      cap: "Bathroom — matte lacquer",
      city: "Clearwater, FL",
      h: 400,
      tone: "#5B7A99",
      alt: "Bathroom project — painted oak, St. Petersburg",
      cls: "p-B4",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — natural oak",
      city: "Bradenton, FL",
      h: 240,
      tone: "#E6DFD5",
      alt: "Kitchen project — high-gloss white, Brandon",
      cls: "p-K12",
    },
    {
      room: "Walk-ins",
      cap: "Walk-in — white shaker",
      city: "Lutz, FL",
      h: 360,
      tone: "#6B8A7A",
      alt: "Walk-in project — walnut veneer, Odessa",
      cls: "p-W7",
    },
    {
      room: "Bathrooms",
      cap: "Bathroom — matte lacquer",
      city: "Tampa, FL",
      h: 260,
      tone: "#B7C6D6",
      alt: "Bathroom project — painted oak, Wesley Chapel",
      cls: "p-B11",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — natural oak",
      city: "Clearwater, FL",
      h: 420,
      tone: "#8DA4BC",
      alt: "Kitchen project — high-gloss white, St. Petersburg",
      cls: "p-K5",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — white shaker",
      city: "Bradenton, FL",
      h: 280,
      tone: "#BCCDC3",
      alt: "Kitchen project — walnut veneer, Brandon",
      cls: "p-K22",
    },
    {
      room: "Bathrooms",
      cap: "Bathroom — matte lacquer",
      city: "Lutz, FL",
      h: 300,
      tone: "#8FA89A",
      alt: "Bathroom project — painted oak, Odessa",
      cls: "p-B9",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — natural oak",
      city: "Tampa, FL",
      h: 380,
      tone: "#A89C8B",
      alt: "Kitchen project — high-gloss white, Wesley Chapel",
      cls: "p-K16",
    },
    {
      room: "Walk-ins",
      cap: "Walk-in — white shaker",
      city: "Clearwater, FL",
      h: 250,
      tone: "#D08C7C",
      alt: "Walk-in project — walnut veneer, St. Petersburg",
      cls: "p-W3",
    },
    {
      room: "Bathrooms",
      cap: "Bathroom — matte lacquer",
      city: "Bradenton, FL",
      h: 340,
      tone: "#C9BFB1",
      alt: "Bathroom project — painted oak, Brandon",
      cls: "p-B2",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — natural oak",
      city: "Lutz, FL",
      h: 290,
      tone: "#2B4A3F",
      alt: "Kitchen project — high-gloss white, Odessa",
      cls: "p-K6",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — white shaker",
      city: "Tampa, FL",
      h: 260,
      tone: "#B8A88F",
      alt: "Kitchen project — walnut veneer, Wesley Chapel",
      cls: "p-K10",
    },
    {
      room: "Bathrooms",
      cap: "Bathroom — matte lacquer",
      city: "Clearwater, FL",
      h: 330,
      tone: "#5B7A99",
      alt: "Bathroom project — painted oak, St. Petersburg",
      cls: "p-B13",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — natural oak",
      city: "Bradenton, FL",
      h: 270,
      tone: "#E6DFD5",
      alt: "Kitchen project — high-gloss white, Brandon",
      cls: "p-K25",
    },
    {
      room: "Walk-ins",
      cap: "Walk-in — white shaker",
      city: "Lutz, FL",
      h: 310,
      tone: "#6B8A7A",
      alt: "Walk-in project — walnut veneer, Odessa",
      cls: "p-W6",
    },
    {
      room: "Bathrooms",
      cap: "Bathroom — matte lacquer",
      city: "Tampa, FL",
      h: 400,
      tone: "#B7C6D6",
      alt: "Bathroom project — painted oak, Wesley Chapel",
      cls: "p-B5",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — natural oak",
      city: "Clearwater, FL",
      h: 240,
      tone: "#8DA4BC",
      alt: "Kitchen project — high-gloss white, St. Petersburg",
      cls: "p-K2",
    },
    {
      room: "Kitchens",
      cap: "Kitchen — white shaker",
      city: "Bradenton, FL",
      h: 360,
      tone: "#BCCDC3",
      alt: "Kitchen project — walnut veneer, Brandon",
      cls: "p-K23",
    },
  ],
  filters: ["All", "Kitchens", "Bathrooms", "Walk-ins"],
};

/** Generated from the "Gallery" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function GalleryContent() {
  const { chips, closeLb, ctaHref, lb, lbIndex, lbOpen, lbTotal, next, prev, shown } = useDesignState(DATA);
  return (
    <>
      <SiteHeader variant="solid" current="gallery" />
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
              Check out our
              <br />
              <em style={{ color: "#1F3D33" }}>latest projects.</em>
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
              31 kitchens, bathrooms and walk-in closets designed, built and installed by V&C across Tampa Bay. Tap any
              photo for details.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }} />
          </div>
        </section>
        <section style={{ paddingBottom: "clamp(64px, 8vw, 128px)" }}>
          <div className="wrap">
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
            <p style={{ margin: "16px 0 0", fontSize: "14px", color: "#5E636B" }}>
              <span style={{ color: "#5E636B" }}>Recent work across Tampa Bay</span>
            </p>
          </div>
        </section>
        <ContactSection
          title="Let’s work together."
          lede="Tell us about your project and we’ll plan a free in-home visit."
          appointment="Or make an appointment — call or visit our Tampa showroom."
        />
      </main>
    </>
  );
}
