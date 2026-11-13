import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";

/** Generated from the "Article" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function ArticleContent() {
  return (
    <>
      <SiteHeader variant="solid" current="blog" />
      <main>
        <article>
          <header className="sec" style={{ paddingBottom: "40px" }}>
            <div
              className="wrap"
              style={{ maxWidth: "1040px", display: "flex", flexDirection: "column", gap: "20px" }}
              data-s="max-width: 1040px; display: flex; flex-direction: column; gap: 20px"
            >
              <nav aria-label="Breadcrumb">
                <ol
                  style={{
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    fontSize: "14px",
                  }}
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" style={{ color: "#22252A", fontWeight: "600" }}>
                    Space Optimization in Small Kitchens
                  </li>
                </ol>
              </nav>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <Link
                  href="/blog"
                  style={{
                    padding: "6px 12px",
                    borderRadius: "0",
                    background: "#EEF3F0",
                    color: "#1F3D33",
                    fontWeight: "700",
                    fontSize: "13px",
                    textDecoration: "none",
                  }}
                  data-s="padding: 6px 12px; border-radius: 0; background: #EEF3F0; color: #1F3D33; font-weight: 700; font-size: 13px; text-decoration: none"
                >
                  Cabinet Design
                </Link>
                <Link
                  href="/blog"
                  style={{
                    padding: "6px 12px",
                    borderRadius: "0",
                    background: "#EEF3F0",
                    color: "#1F3D33",
                    fontWeight: "700",
                    fontSize: "13px",
                    textDecoration: "none",
                  }}
                  data-s="padding: 6px 12px; border-radius: 0; background: #EEF3F0; color: #1F3D33; font-weight: 700; font-size: 13px; text-decoration: none"
                >
                  DIY Projects
                </Link>
              </div>
              <h1
                style={{
                  margin: "0",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "350",
                  fontSize: "clamp(42px, 6.4vw, 88px)",
                  lineHeight: "1",
                  letterSpacing: "-.025em",
                  color: "#1D2B44",
                }}
              >
                Space Optimization in Small Kitchens
              </h1>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 20px",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#5E636B",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "0",
                      background: "#EEF3F0",
                      color: "#1F3D33",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "600",
                    }}
                    data-s="width: 40px; height: 40px; border-radius: 0; background: #EEF3F0; color: #1F3D33; display: flex; align-items: center; justify-content: center; font-family: var(--font-urbanist), system-ui, sans-serif; font-weight: 600"
                  >
                    I
                  </span>
                  <span>
                    By <strong style={{ color: "#22252A" }}>Irvin Rolf Parcon</strong>
                  </span>
                </span>
                <time>October 31, 2023</time>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>6 min read</span>
              </div>
            </div>
          </header>
          <div className="wrap" style={{ maxWidth: "1280px" }}>
            <div
              className="ph"
              role="img"
              aria-label="Compact kitchen with pull-out storage and under-cabinet lighting"
              style={{ height: "clamp(260px, 42vw, 600px)", backgroundColor: "#B8A88F", borderRadius: "0" }}
              data-s="height: clamp(260px, 42vw, 600px); background-color: #B8A88F; border-radius: 0;"
            />
          </div>
          <div
            className="wrap"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(32px, 6vw, 96px)",
              paddingTop: "64px",
              paddingBottom: "clamp(64px, 8vw, 112px)",
              alignItems: "flex-start",
            }}
            data-s="display: flex; flex-wrap: wrap; gap: clamp(32px, 6vw, 96px); padding-top: 64px; padding-bottom: clamp(64px, 8vw, 112px); align-items: flex-start"
          >
            <aside
              style={{ flex: "1 1 240px", maxWidth: "320px", display: "flex", flexDirection: "column", gap: "24px" }}
              data-s="flex: 1 1 240px; max-width: 320px; display: flex; flex-direction: column; gap: 24px"
            >
              <nav
                aria-label="Table of contents"
                style={{ padding: "24px", borderRadius: "0", background: "#FFFFFF", border: "1px solid #E6DFD5" }}
                data-s="padding: 24px; border-radius: 0; background: #FFFFFF; border: 1px solid #E6DFD5"
              >
                <p
                  style={{
                    margin: "0 0 12px",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: ".16em",
                    color: "#5E636B",
                  }}
                >
                  IN THIS ARTICLE
                </p>
                <ol
                  style={{
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                  data-s="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 4px"
                >
                  <li>
                    <a
                      href="#s1"
                      className="lnk"
                      style={{
                        display: "flex",
                        gap: "10px",
                        minHeight: "36px",
                        alignItems: "center",
                        fontSize: "15px",
                        color: "#1F3D33",
                        fontWeight: "700",
                        textDecoration: "none",
                      }}
                      data-s="display: flex; gap: 10px; min-height: 36px; align-items: center; font-size: 15px; color: #1F3D33; font-weight: 700; text-decoration: none"
                    >
                      <span style={{ color: "#A23B2C", fontWeight: "700" }}>01</span>Smart Storage Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#s2"
                      className="lnk"
                      style={{
                        display: "flex",
                        gap: "10px",
                        minHeight: "36px",
                        alignItems: "center",
                        fontSize: "15px",
                        color: "#40444B",
                        fontWeight: "500",
                        textDecoration: "none",
                      }}
                      data-s="display: flex; gap: 10px; min-height: 36px; align-items: center; font-size: 15px; color: #40444B; font-weight: 500; text-decoration: none"
                    >
                      <span style={{ color: "#A23B2C", fontWeight: "700" }}>02</span>Compact Appliances
                    </a>
                  </li>
                  <li>
                    <a
                      href="#s3"
                      className="lnk"
                      style={{
                        display: "flex",
                        gap: "10px",
                        minHeight: "36px",
                        alignItems: "center",
                        fontSize: "15px",
                        color: "#40444B",
                        fontWeight: "500",
                        textDecoration: "none",
                      }}
                      data-s="display: flex; gap: 10px; min-height: 36px; align-items: center; font-size: 15px; color: #40444B; font-weight: 500; text-decoration: none"
                    >
                      <span style={{ color: "#A23B2C", fontWeight: "700" }}>03</span>Clever Organization and
                      Decluttering
                    </a>
                  </li>
                  <li>
                    <a
                      href="#s4"
                      className="lnk"
                      style={{
                        display: "flex",
                        gap: "10px",
                        minHeight: "36px",
                        alignItems: "center",
                        fontSize: "15px",
                        color: "#40444B",
                        fontWeight: "500",
                        textDecoration: "none",
                      }}
                      data-s="display: flex; gap: 10px; min-height: 36px; align-items: center; font-size: 15px; color: #40444B; font-weight: 500; text-decoration: none"
                    >
                      <span style={{ color: "#A23B2C", fontWeight: "700" }}>04</span>Lighting and Color Palette
                    </a>
                  </li>
                </ol>
              </nav>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                data-s="display: flex; flex-direction: column; gap: 12px"
              >
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#5E636B" }}>
                  SHARE
                </span>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="#"
                    aria-label="Share on Facebook"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0",
                      border: "1px solid #C9BFB1",
                      color: "#1D2B44",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    data-s="width: 44px; height: 44px; border-radius: 0; border: 1px solid #C9BFB1; color: #1D2B44; display: flex; align-items: center; justify-content: center"
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
                      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Share on LinkedIn"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0",
                      border: "1px solid #C9BFB1",
                      color: "#1D2B44",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    data-s="width: 44px; height: 44px; border-radius: 0; border: 1px solid #C9BFB1; color: #1D2B44; display: flex; align-items: center; justify-content: center"
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
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M7.5 10.5V17M7.5 7.3v.01M11.5 17v-6.5M11.5 13.5c0-2 1.2-3 2.6-3s2.4 1 2.4 3V17" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Share on Email"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0",
                      border: "1px solid #C9BFB1",
                      color: "#1D2B44",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    data-s="width: 44px; height: 44px; border-radius: 0; border: 1px solid #C9BFB1; color: #1D2B44; display: flex; align-items: center; justify-content: center"
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
                      <rect x="3" y="5" width="18" height="14" rx="1.5" />
                      <path d="M3.5 6l8.5 7 8.5-7" />
                    </svg>
                  </a>
                </div>
              </div>
            </aside>
            <div style={{ flex: "3 1 480px", maxWidth: "700px", minWidth: "0" }}>
              <p style={{ margin: "0", fontSize: "clamp(19px, 1.7vw, 22px)", lineHeight: "1.65", color: "#22252A" }}>
                A small kitchen can be challenging — but with careful planning and a few creative solutions, it can be
                as functional and beautiful as a large one. Here are practical ways to get the most out of every inch.
              </p>
              <h2
                id="s1"
                style={{
                  margin: "56px 0 20px",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "450",
                  fontSize: "clamp(28px, 3vw, 38px)",
                  lineHeight: "1.15",
                  color: "#1D2B44",
                }}
              >
                <span style={{ color: "#A23B2C" }}>1.</span> Smart Storage Solutions
              </h2>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
                data-s="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 14px"
              >
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Pull-out shelves and drawers:</strong> Reach everything at the
                    back of deep cabinets.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Vertical storage:</strong> Wall shelves and rails free up
                    counters and cabinets.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Hanging pot racks:</strong> Clear the cabinets and add
                    character.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Under-sink organizers:</strong> Turn the most awkward cabinet
                    into useful storage.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Corner cabinets:</strong> Lazy Susans and pull-out trays make
                    corners usable.
                  </span>
                </li>
              </ul>
              <h2
                id="s2"
                style={{
                  margin: "56px 0 20px",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "450",
                  fontSize: "clamp(28px, 3vw, 38px)",
                  lineHeight: "1.15",
                  color: "#1D2B44",
                }}
              >
                <span style={{ color: "#A23B2C" }}>2.</span> Compact Appliances
              </h2>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
                data-s="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 14px"
              >
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Slim refrigerators:</strong> Tall, narrow models save precious
                    width.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Compact dishwashers:</strong> Slimline or drawer units for
                    smaller loads.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Microwave–oven combos:</strong> Two functions, one footprint.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Slide-in ranges:</strong> A streamlined fit between cabinets.
                  </span>
                </li>
              </ul>
              <aside
                aria-label="Book a consultation"
                style={{
                  margin: "56px 0 0",
                  padding: "32px",
                  borderRadius: "0",
                  background: "#1F3D33",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                data-s="margin: 56px 0 0; padding: 32px; border-radius: 0; background: #1F3D33; display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between"
              >
                <div
                  style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "8px" }}
                  data-s="flex: 1 1 280px; display: flex; flex-direction: column; gap: 8px"
                >
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#E3B5A9" }}>
                    FREE CONSULTATION
                  </span>
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "26px",
                      lineHeight: "1.25",
                      color: "#F6F3EE",
                    }}
                  >
                    Planning a small kitchen? Book a free designer consultation.
                  </p>
                </div>
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
                  Book now
                </Link>
              </aside>
              <h2
                id="s3"
                style={{
                  margin: "56px 0 20px",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "450",
                  fontSize: "clamp(28px, 3vw, 38px)",
                  lineHeight: "1.15",
                  color: "#1D2B44",
                }}
              >
                <span style={{ color: "#A23B2C" }}>3.</span> Clever Organization and Decluttering
              </h2>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
                data-s="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 14px"
              >
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Dual-purpose furniture:</strong> Benches and islands with
                    built-in storage.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Clear countertops:</strong> Store small appliances out of
                    sight.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Magnetic knife strips:</strong> Free a drawer and keep knives
                    at hand.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Compact dining:</strong> Fold-down or wall-mounted tables.
                  </span>
                </li>
              </ul>
              <h2
                id="s4"
                style={{
                  margin: "56px 0 20px",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: "450",
                  fontSize: "clamp(28px, 3vw, 38px)",
                  lineHeight: "1.15",
                  color: "#1D2B44",
                }}
              >
                <span style={{ color: "#A23B2C" }}>4.</span> Lighting and Color Palette
              </h2>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
                data-s="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 14px"
              >
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Under-cabinet lighting:</strong> Brighter counters and a sense
                    of depth.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Light colors:</strong> Pale cabinets and walls reflect light
                    and feel airy.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "14px", fontSize: "18px", lineHeight: "1.7" }}>
                  <span style={{ color: "#1F3D33", flexShrink: "0", paddingTop: "4px" }} />
                  <span>
                    <strong style={{ color: "#1D2B44" }}>Mirror backsplash:</strong> Visually doubles the space.
                  </span>
                </li>
              </ul>
              <div
                style={{
                  marginTop: "56px",
                  padding: "32px",
                  borderRadius: "0",
                  background: "#F6F3EE",
                  borderTop: "3px solid #1F3D33",
                }}
                data-s="margin-top: 56px; padding: 32px; border-radius: 0; background: #F6F3EE; border-top: 3px solid #1F3D33"
              >
                <h2
                  style={{
                    margin: "0 0 12px",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "450",
                    fontSize: "30px",
                    color: "#1D2B44",
                  }}
                >
                  Conclusion
                </h2>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7" }}>
                  Optimizing a small kitchen is both a practical necessity and a creative exercise. With smart storage,
                  compact appliances, good organization and thoughtful lighting, even the smallest kitchen can feel
                  orderly, open and inviting.
                </p>
              </div>
              <nav
                aria-label="More articles"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginTop: "48px",
                  paddingTop: "32px",
                  borderTop: "1px solid #C9BFB1",
                }}
              >
                <Link
                  href="/blog/space-optimization-in-small-kitchens"
                  style={{
                    flex: "1 1 260px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    padding: "20px",
                    borderRadius: "0",
                    border: "1px solid #E6DFD5",
                    background: "#FFFFFF",
                    textDecoration: "none",
                  }}
                  data-s="flex: 1 1 260px; display: flex; flex-direction: column; gap: 6px; padding: 20px; border-radius: 0; border: 1px solid #E6DFD5; background: #FFFFFF; text-decoration: none"
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#5E636B",
                    }}
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
                    </svg>{" "}
                    Previous
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "19px",
                      lineHeight: "1.3",
                      color: "#1D2B44",
                    }}
                  >
                    Elevate Your Home Spaces: The Ultimate Guide…
                  </span>
                </Link>
                <Link
                  href="/blog/space-optimization-in-small-kitchens"
                  style={{
                    flex: "1 1 260px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    padding: "20px",
                    borderRadius: "0",
                    border: "1px solid #E6DFD5",
                    background: "#FFFFFF",
                    textDecoration: "none",
                    textAlign: "right",
                    alignItems: "flex-end",
                  }}
                  data-s="flex: 1 1 260px; display: flex; flex-direction: column; gap: 6px; padding: 20px; border-radius: 0; border: 1px solid #E6DFD5; background: #FFFFFF; text-decoration: none; text-align: right; align-items: flex-end"
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#5E636B",
                    }}
                  >
                    Next{" "}
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
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontSize: "19px",
                      lineHeight: "1.3",
                      color: "#1D2B44",
                    }}
                  >
                    Elevate Your Space: Embracing the Latest Design Trends
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </article>
        <section className="sec" style={{ background: "#F6F3EE" }} data-s="background: #F6F3EE">
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
                Similar Posts
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
              <Link
                href="/blog/space-optimization-in-small-kitchens"
                className="card"
                style={{
                  flex: "1 1 320px",
                  display: "flex",
                  flexDirection: "column",
                  background: "#FFFFFF",
                  borderRadius: "0",
                  overflow: "hidden",
                  border: "1px solid #E6DFD5",
                  textDecoration: "none",
                  color: "#22252A",
                }}
                data-s="flex: 1 1 320px; display: flex; flex-direction: column; background: #FFFFFF; border-radius: 0; overflow: hidden; border: 1px solid #E6DFD5; text-decoration: none; color: #22252A"
              >
                <div
                  className="ph"
                  role="img"
                  aria-label="Article cover: V&C Cabinet Design Concept LLC – The Premier Choice in Bradenton, Tampa, Clearwater, and St. Petersburg"
                  style={{ height: "220px", backgroundColor: "#2B4A3F" }}
                />
                <div
                  style={{
                    padding: "24px 28px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: "1",
                  }}
                  data-s="padding: 24px 28px 28px; display: flex; flex-direction: column; gap: 12px; flex: 1"
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      alignItems: "center",
                      fontSize: "13px",
                      color: "#5E636B",
                    }}
                  >
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "0",
                        background: "#EEF3F0",
                        color: "#1F3D33",
                        fontWeight: "700",
                        fontSize: "12px",
                      }}
                      data-s="padding: 4px 10px; border-radius: 0; background: #EEF3F0; color: #1F3D33; font-weight: 700; font-size: 12px"
                    >
                      Renovation tips
                    </span>
                    <time>Nov 13, 2023</time>
                  </div>
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "23px",
                      lineHeight: "1.25",
                      color: "#1D2B44",
                    }}
                  >
                    V&C Cabinet Design Concept LLC – The Premier Choice in Bradenton, Tampa, Clearwater, and St.
                    Petersburg
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5E636B" }}>
                    What sets a local, full-service cabinet studio apart — from the first visit to the final inspection.
                  </p>
                  <span
                    style={{
                      marginTop: "auto",
                      paddingTop: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#1F3D33",
                    }}
                  >
                    Read more{" "}
                  </span>
                </div>
              </Link>
              <Link
                href="/blog/space-optimization-in-small-kitchens"
                className="card"
                style={{
                  flex: "1 1 320px",
                  display: "flex",
                  flexDirection: "column",
                  background: "#FFFFFF",
                  borderRadius: "0",
                  overflow: "hidden",
                  border: "1px solid #E6DFD5",
                  textDecoration: "none",
                  color: "#22252A",
                }}
                data-s="flex: 1 1 320px; display: flex; flex-direction: column; background: #FFFFFF; border-radius: 0; overflow: hidden; border: 1px solid #E6DFD5; text-decoration: none; color: #22252A"
              >
                <div
                  className="ph"
                  role="img"
                  aria-label="Article cover: Elevate Your Space: Embracing the Latest Design Trends"
                  style={{ height: "220px", backgroundColor: "#8DA4BC" }}
                />
                <div
                  style={{
                    padding: "24px 28px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: "1",
                  }}
                  data-s="padding: 24px 28px 28px; display: flex; flex-direction: column; gap: 12px; flex: 1"
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      alignItems: "center",
                      fontSize: "13px",
                      color: "#5E636B",
                    }}
                  >
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "0",
                        background: "#EEF3F0",
                        color: "#1F3D33",
                        fontWeight: "700",
                        fontSize: "12px",
                      }}
                      data-s="padding: 4px 10px; border-radius: 0; background: #EEF3F0; color: #1F3D33; font-weight: 700; font-size: 12px"
                    >
                      Cabinet Design
                    </span>
                    <time>Nov 6, 2023</time>
                  </div>
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "23px",
                      lineHeight: "1.25",
                      color: "#1D2B44",
                    }}
                  >
                    Elevate Your Space: Embracing the Latest Design Trends
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5E636B" }}>
                    Two-tone cabinetry, warm woods, hidden storage: the trends worth bringing home this year.
                  </p>
                  <span
                    style={{
                      marginTop: "auto",
                      paddingTop: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#1F3D33",
                    }}
                  >
                    Read more{" "}
                  </span>
                </div>
              </Link>
              <Link
                href="/blog/space-optimization-in-small-kitchens"
                className="card"
                style={{
                  flex: "1 1 320px",
                  display: "flex",
                  flexDirection: "column",
                  background: "#FFFFFF",
                  borderRadius: "0",
                  overflow: "hidden",
                  border: "1px solid #E6DFD5",
                  textDecoration: "none",
                  color: "#22252A",
                }}
                data-s="flex: 1 1 320px; display: flex; flex-direction: column; background: #FFFFFF; border-radius: 0; overflow: hidden; border: 1px solid #E6DFD5; text-decoration: none; color: #22252A"
              >
                <div
                  className="ph"
                  role="img"
                  aria-label="Article cover: Elevate Your Home Spaces: The Ultimate Guide to Kitchen, Bathroom, and Closet Cabinet Designs"
                  style={{ height: "220px", backgroundColor: "#BCCDC3" }}
                  data-s="height: 220px; background-color: #BCCDC3"
                />
                <div
                  style={{
                    padding: "24px 28px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: "1",
                  }}
                  data-s="padding: 24px 28px 28px; display: flex; flex-direction: column; gap: 12px; flex: 1"
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      alignItems: "center",
                      fontSize: "13px",
                      color: "#5E636B",
                    }}
                  >
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "0",
                        background: "#EEF3F0",
                        color: "#1F3D33",
                        fontWeight: "700",
                        fontSize: "12px",
                      }}
                      data-s="padding: 4px 10px; border-radius: 0; background: #EEF3F0; color: #1F3D33; font-weight: 700; font-size: 12px"
                    >
                      Closets
                    </span>
                    <time>Oct 23, 2023</time>
                  </div>
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "23px",
                      lineHeight: "1.25",
                      color: "#1D2B44",
                    }}
                  >
                    Elevate Your Home Spaces: The Ultimate Guide to Kitchen, Bathroom, and Closet Cabinet Designs
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5E636B" }}>
                    A room-by-room guide to choosing cabinet styles, layouts and finishes.
                  </p>
                  <span
                    style={{
                      marginTop: "auto",
                      paddingTop: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#1F3D33",
                    }}
                  >
                    Read more{" "}
                  </span>
                </div>
              </Link>
              <Link
                href="/blog/space-optimization-in-small-kitchens"
                className="card"
                style={{
                  flex: "1 1 320px",
                  display: "flex",
                  flexDirection: "column",
                  background: "#FFFFFF",
                  borderRadius: "0",
                  overflow: "hidden",
                  border: "1px solid #E6DFD5",
                  textDecoration: "none",
                  color: "#22252A",
                }}
                data-s="flex: 1 1 320px; display: flex; flex-direction: column; background: #FFFFFF; border-radius: 0; overflow: hidden; border: 1px solid #E6DFD5; text-decoration: none; color: #22252A"
              >
                <div
                  className="ph"
                  role="img"
                  aria-label="Article cover: Elevate Your Space with V&C: Clearwater’s Source for Luxury Cabinet Solutions"
                  style={{ height: "220px", backgroundColor: "#5B7A99" }}
                />
                <div
                  style={{
                    padding: "24px 28px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: "1",
                  }}
                  data-s="padding: 24px 28px 28px; display: flex; flex-direction: column; gap: 12px; flex: 1"
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      alignItems: "center",
                      fontSize: "13px",
                      color: "#5E636B",
                    }}
                  >
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "0",
                        background: "#EEF3F0",
                        color: "#1F3D33",
                        fontWeight: "700",
                        fontSize: "12px",
                      }}
                      data-s="padding: 4px 10px; border-radius: 0; background: #EEF3F0; color: #1F3D33; font-weight: 700; font-size: 12px"
                    >
                      Bathroom
                    </span>
                    <time>Sep 26, 2023</time>
                  </div>
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "23px",
                      lineHeight: "1.25",
                      color: "#1D2B44",
                    }}
                  >
                    Elevate Your Space with V&C: Clearwater’s Source for Luxury Cabinet Solutions
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5E636B" }}>
                    How luxury cabinetry transforms bathrooms and kitchens in Clearwater homes.
                  </p>
                  <span
                    style={{
                      marginTop: "auto",
                      paddingTop: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#1F3D33",
                    }}
                  >
                    Read more{" "}
                  </span>
                </div>
              </Link>
              <Link
                href="/blog/space-optimization-in-small-kitchens"
                className="card"
                style={{
                  flex: "1 1 320px",
                  display: "flex",
                  flexDirection: "column",
                  background: "#FFFFFF",
                  borderRadius: "0",
                  overflow: "hidden",
                  border: "1px solid #E6DFD5",
                  textDecoration: "none",
                  color: "#22252A",
                }}
                data-s="flex: 1 1 320px; display: flex; flex-direction: column; background: #FFFFFF; border-radius: 0; overflow: hidden; border: 1px solid #E6DFD5; text-decoration: none; color: #22252A"
              >
                <div
                  className="ph"
                  role="img"
                  aria-label="Article cover: Transforming Kitchens: Modern Kitchen Renovation in Clearwater, Florida"
                  style={{ height: "220px", backgroundColor: "#A89C8B" }}
                />
                <div
                  style={{
                    padding: "24px 28px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: "1",
                  }}
                  data-s="padding: 24px 28px 28px; display: flex; flex-direction: column; gap: 12px; flex: 1"
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      alignItems: "center",
                      fontSize: "13px",
                      color: "#5E636B",
                    }}
                  >
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "0",
                        background: "#EEF3F0",
                        color: "#1F3D33",
                        fontWeight: "700",
                        fontSize: "12px",
                      }}
                      data-s="padding: 4px 10px; border-radius: 0; background: #EEF3F0; color: #1F3D33; font-weight: 700; font-size: 12px"
                    >
                      Kitchen
                    </span>
                    <time>Sep 22, 2023</time>
                  </div>
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                      fontWeight: "450",
                      fontSize: "23px",
                      lineHeight: "1.25",
                      color: "#1D2B44",
                    }}
                  >
                    Transforming Kitchens: Modern Kitchen Renovation in Clearwater, Florida
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#5E636B" }}>
                    Inside a modern kitchen renovation — layout, materials and the details that matter.
                  </p>
                  <span
                    style={{
                      marginTop: "auto",
                      paddingTop: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#1F3D33",
                    }}
                  >
                    Read more{" "}
                  </span>
                </div>
              </Link>
              <Link
                href="/blog"
                className="card"
                style={{
                  flex: "1 1 320px",
                  minHeight: "280px",
                  padding: "32px",
                  borderRadius: "0",
                  border: "1.5px solid #1D2B44",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textDecoration: "none",
                }}
                data-s="flex: 1 1 320px; min-height: 280px; padding: 32px; border-radius: 0; border: 1.5px solid #1D2B44; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none"
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontSize: "32px",
                    lineHeight: "1.15",
                    color: "#1D2B44",
                  }}
                >
                  Browse all articles
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: "700",
                    color: "#1F3D33",
                  }}
                >
                  Go to the blog{" "}
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
