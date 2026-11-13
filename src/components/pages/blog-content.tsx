import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";

/** Generated from the "Blog" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function BlogContent() {
  return (
    <>
      <SiteHeader variant="solid" current="blog" />
      <main>
        <section className="sec" style={{ paddingBottom: "48px" }}>
          <div
            className="wrap"
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
            data-s="display: flex; flex-direction: column; gap: 40px"
          >
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
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                data-s="display: flex; flex-direction: column; gap: 16px"
              >
                <h1
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "350",
                    fontSize: "clamp(56px, 9vw, 128px)",
                    lineHeight: ".95",
                    letterSpacing: "-.03em",
                    color: "#1D2B44",
                  }}
                >
                  Blog
                </h1>
              </div>
              <p
                style={{
                  margin: "0",
                  maxWidth: "420px",
                  fontSize: "clamp(16px, 1.3vw, 19px)",
                  lineHeight: "1.5",
                  color: "#5E636B",
                }}
                data-s="margin: 0; max-width: 420px; font-size: clamp(16px, 1.3vw, 19px); line-height: 1.5; color: #5E636B"
              >
                Design tips, trends and real projects from our team in Tampa Bay.
              </p>
            </div>
            <Link
              href="/blog/space-optimization-in-small-kitchens"
              className="card"
              style={{
                display: "flex",
                flexWrap: "wrap",
                background: "#FFFFFF",
                borderRadius: "0",
                overflow: "hidden",
                border: "1px solid #E6DFD5",
                textDecoration: "none",
                color: "#22252A",
              }}
              data-s="display: flex; flex-wrap: wrap; background: #FFFFFF; border-radius: 0; overflow: hidden; border: 1px solid #E6DFD5; text-decoration: none; color: #22252A"
            >
              <div
                className="ph"
                role="img"
                aria-label="Small kitchen with smart storage"
                style={{ flex: "1.3 1 420px", minHeight: "clamp(260px, 32vw, 460px)", backgroundColor: "#B8A88F" }}
                data-s="flex: 1.3 1 420px; min-height: clamp(260px, 32vw, 460px); background-color: #B8A88F"
              />
              <div
                style={{
                  flex: "1 1 360px",
                  padding: "clamp(28px, 4vw, 56px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  justifyContent: "center",
                }}
                data-s="flex: 1 1 360px; padding: clamp(28px, 4vw, 56px); display: flex; flex-direction: column; gap: 16px; justify-content: center"
              >
                <div style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "13px", color: "#5E636B" }}>
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
                  <time>Oct 31, 2023</time>
                  <span>· 6 min read</span>
                </div>
                <h2
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "400",
                    fontSize: "clamp(32px, 3.6vw, 48px)",
                    lineHeight: "1.08",
                    color: "#1D2B44",
                  }}
                >
                  Space Optimization in Small Kitchens
                </h2>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#5E636B" }}>
                  Smart storage, compact appliances and lighting tricks that make a small kitchen work harder.
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#1F3D33",
                  }}
                >
                  Read the article{" "}
                </span>
              </div>
            </Link>
          </div>
        </section>
        <section style={{ paddingBottom: "clamp(64px, 8vw, 128px)" }}>
          <div className="wrap">
            <div
              role="group"
              aria-label="Filter by category"
              style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "8px", marginBottom: "32px" }}
            >
              <button
                type="button"
                aria-pressed="true"
                style={{
                  minHeight: "44px",
                  padding: "0 18px",
                  borderRadius: "0",
                  border: "1.5px solid #1F3D33",
                  background: "#1F3D33",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-urbanist), sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                data-s="min-height: 44px; padding: 0 18px; border-radius: 0; border: 1.5px solid #1F3D33; background: #1F3D33; color: #FFFFFF; font-family: var(--font-urbanist), sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; white-space: nowrap"
              >
                All
              </button>
              <button
                type="button"
                aria-pressed="false"
                style={{
                  minHeight: "44px",
                  padding: "0 18px",
                  borderRadius: "0",
                  border: "1.5px solid #C9BFB1",
                  background: "#FFFFFF",
                  color: "#22252A",
                  fontFamily: "var(--font-urbanist), sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                data-s="min-height: 44px; padding: 0 18px; border-radius: 0; border: 1.5px solid #C9BFB1; background: #FFFFFF; color: #22252A; font-family: var(--font-urbanist), sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; white-space: nowrap"
              >
                Cabinet Design
              </button>
              <button
                type="button"
                aria-pressed="false"
                style={{
                  minHeight: "44px",
                  padding: "0 18px",
                  borderRadius: "0",
                  border: "1.5px solid #C9BFB1",
                  background: "#FFFFFF",
                  color: "#22252A",
                  fontFamily: "var(--font-urbanist), sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                data-s="min-height: 44px; padding: 0 18px; border-radius: 0; border: 1.5px solid #C9BFB1; background: #FFFFFF; color: #22252A; font-family: var(--font-urbanist), sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; white-space: nowrap"
              >
                Kitchen
              </button>
              <button
                type="button"
                aria-pressed="false"
                style={{
                  minHeight: "44px",
                  padding: "0 18px",
                  borderRadius: "0",
                  border: "1.5px solid #C9BFB1",
                  background: "#FFFFFF",
                  color: "#22252A",
                  fontFamily: "var(--font-urbanist), sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                data-s="min-height: 44px; padding: 0 18px; border-radius: 0; border: 1.5px solid #C9BFB1; background: #FFFFFF; color: #22252A; font-family: var(--font-urbanist), sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; white-space: nowrap"
              >
                Bathroom
              </button>
              <button
                type="button"
                aria-pressed="false"
                style={{
                  minHeight: "44px",
                  padding: "0 18px",
                  borderRadius: "0",
                  border: "1.5px solid #C9BFB1",
                  background: "#FFFFFF",
                  color: "#22252A",
                  fontFamily: "var(--font-urbanist), sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                data-s="min-height: 44px; padding: 0 18px; border-radius: 0; border: 1.5px solid #C9BFB1; background: #FFFFFF; color: #22252A; font-family: var(--font-urbanist), sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; white-space: nowrap"
              >
                Closets
              </button>
              <button
                type="button"
                aria-pressed="false"
                style={{
                  minHeight: "44px",
                  padding: "0 18px",
                  borderRadius: "0",
                  border: "1.5px solid #C9BFB1",
                  background: "#FFFFFF",
                  color: "#22252A",
                  fontFamily: "var(--font-urbanist), sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                data-s="min-height: 44px; padding: 0 18px; border-radius: 0; border: 1.5px solid #C9BFB1; background: #FFFFFF; color: #22252A; font-family: var(--font-urbanist), sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; white-space: nowrap"
              >
                DIY Projects
              </button>
              <button
                type="button"
                aria-pressed="false"
                style={{
                  minHeight: "44px",
                  padding: "0 18px",
                  borderRadius: "0",
                  border: "1.5px solid #C9BFB1",
                  background: "#FFFFFF",
                  color: "#22252A",
                  fontFamily: "var(--font-urbanist), sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                data-s="min-height: 44px; padding: 0 18px; border-radius: 0; border: 1.5px solid #C9BFB1; background: #FFFFFF; color: #22252A; font-family: var(--font-urbanist), sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; white-space: nowrap"
              >
                Renovation tips
              </button>
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
              <div
                style={{
                  flex: "1 1 320px",
                  padding: "32px",
                  borderRadius: "0",
                  background: "#1D2B44",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  justifyContent: "center",
                }}
                data-s="flex: 1 1 320px; padding: 32px; border-radius: 0; background: #1D2B44; display: flex; flex-direction: column; gap: 16px; justify-content: center"
              >
                <span style={{ color: "#8FA89A" }} data-s="color: #8FA89A" />
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                    fontWeight: "400",
                    fontSize: "28px",
                    lineHeight: "1.2",
                    color: "#F6F3EE",
                  }}
                >
                  Planning a project? Talk to a designer.
                </h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "rgba(246,243,238,.82)" }}>
                  Free in-home consultation, measurement and 3D design.
                </p>
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
                  Book a Free Consultation
                </Link>
              </div>
            </div>
            <nav
              aria-label="Pagination"
              style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "56px" }}
            >
              <a
                href="#"
                aria-current="page"
                style={{
                  minWidth: "44px",
                  height: "44px",
                  padding: "0 12px",
                  borderRadius: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontWeight: "700",
                  textDecoration: "none",
                  background: "#1F3D33",
                  color: "#FFFFFF",
                }}
                data-s="min-width: 44px; height: 44px; padding: 0 12px; border-radius: 0; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700; text-decoration: none; background: #1F3D33; color: #FFFFFF;"
              >
                1
              </a>
              <a
                href="#"
                style={{
                  minWidth: "44px",
                  height: "44px",
                  padding: "0 12px",
                  borderRadius: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontWeight: "700",
                  textDecoration: "none",
                  border: "1.5px solid #C9BFB1",
                  color: "#1D2B44",
                }}
                data-s="min-width: 44px; height: 44px; padding: 0 12px; border-radius: 0; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700; text-decoration: none; border: 1.5px solid #C9BFB1; color: #1D2B44;"
              >
                2
              </a>
              <a
                href="#"
                style={{
                  minWidth: "44px",
                  height: "44px",
                  padding: "0 12px",
                  borderRadius: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontWeight: "700",
                  textDecoration: "none",
                  border: "1.5px solid #C9BFB1",
                  color: "#1D2B44",
                }}
                data-s="min-width: 44px; height: 44px; padding: 0 12px; border-radius: 0; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700; text-decoration: none; border: 1.5px solid #C9BFB1; color: #1D2B44;"
              >
                Next{" "}
              </a>
            </nav>
            <p style={{ margin: "16px 0 0", textAlign: "center", fontSize: "13px", color: "#5E636B" }}>
              Categories on articles other than “Space Optimization” are proposals — to confirm.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
