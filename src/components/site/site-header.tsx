"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sx } from "@/components/site/sx";

export type NavKey = "home" | "mission" | "services" | "gallery" | "blog" | "contact";

type SiteHeaderProps = {
  /** `overlay` floats over a dark hero image; `solid` sits on white. */
  variant?: "overlay" | "solid";
  /** Highlights the matching top-level nav item. */
  current?: NavKey;
  /** The Home page uses the sage version of the logo, the other pages the gold one. */
  logoTone?: "gold" | "sage";
};

// Inline styles that differ between the two header variants, as written in the design.
const VARIANTS = {
  overlay: {
    header:
      "position: absolute; top: clamp(8px, 1.2vw, 16px); left: clamp(8px, 1.2vw, 16px); right: clamp(8px, 1.2vw, 16px); z-index: 20",
    nav: "justify-self: start; display: flex; gap: 2px; align-items: center; padding: 4px; background: #FFFFFF",
    info: "flex-direction: column; gap: 2px; font-size: 13px; line-height: 1.35; color: #FFFFFF",
    infoMuted: "color: rgba(255,255,255,.7)",
    infoPhone: "color: #FFFFFF; text-decoration: none; font-weight: 600",
    cta: "display: inline-flex; align-items: center; gap: 14px; min-height: 44px; padding: 0 18px; background: #FFFFFF; color: #142A23; font-size: 13px; font-weight: 600; text-decoration: none; white-space: nowrap",
    call: "width: 44px; height: 44px; align-items: center; justify-content: center; background: #FFFFFF; color: #142A23",
  },
  solid: {
    header: "position: relative; background: #FFFFFF; z-index: 20",
    nav: "justify-self: start; display: flex; gap: 2px; align-items: center; padding: 4px; background: #F6F3EE",
    info: "flex-direction: column; gap: 2px; font-size: 13px; line-height: 1.35; color: #1D2B44",
    infoMuted: "color: #5E636B",
    infoPhone: "color: #1D2B44; text-decoration: none; font-weight: 600",
    cta: "display: inline-flex; align-items: center; gap: 14px; min-height: 44px; padding: 0 18px; background: #142A23; color: #FFFFFF; font-size: 13px; font-weight: 600; text-decoration: none; white-space: nowrap",
    call: "width: 44px; height: 44px; align-items: center; justify-content: center; background: #142A23; color: #FFFFFF",
  },
};

const LOGOS = {
  gold: {
    wordmark: "/images/logo-gold-on-dark.png",
    symbol: "/images/symbol-gold-on-dark.png",
    menu: "/images/logo-gold.png",
  },
  sage: {
    wordmark: "/images/logo-sage-on-dark.png",
    symbol: "/images/symbol-sage-on-dark.png",
    menu: "/images/logo-green.png",
  },
};

const NAV_LINK =
  "display: inline-flex; align-items: center; gap: 4px; min-height: 36px; padding: 0 14px; font-size: 13px; text-decoration: none; color: #5E636B; font-weight: 500;";
const NAV_LINK_ACTIVE =
  "display: inline-flex; align-items: center; gap: 4px; min-height: 36px; padding: 0 14px; font-size: 13px; text-decoration: none; background: #142A23; color: #FFFFFF; font-weight: 600;";
const navLink = (active: boolean) => (active ? NAV_LINK_ACTIVE : NAV_LINK);

export function SiteHeader({ variant = "solid", current, logoTone = "gold" }: SiteHeaderProps) {
  const v = VARIANTS[variant];
  const logo = LOGOS[logoTone];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={scrolled ? "is-sc" : undefined} {...sx(v.header)}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "start",
            gap: "16px",
            padding: "clamp(14px, 1.8vw, 28px) clamp(14px, 2.2vw, 36px)",
          }}
          data-s="display: grid; grid-template-columns: 1fr auto 1fr; align-items: start; gap: 16px; padding: clamp(14px, 1.8vw, 28px) clamp(14px, 2.2vw, 36px)"
        >
          <nav className="nav-d hx-nav" aria-label="Main" {...sx(v.nav)}>
            <Link href="/" aria-current={current === "home" ? "page" : undefined} {...sx(navLink(current === "home"))}>
              Home
            </Link>
            <Link
              href="/mission"
              aria-current={current === "mission" ? "page" : undefined}
              {...sx(navLink(current === "mission"))}
            >
              Mission
            </Link>
            <div className="dd">
              <Link
                href="/services"
                aria-current={current === "services" ? "page" : undefined}
                aria-haspopup="true"
                {...sx(navLink(current === "services"))}
              >
                Services
              </Link>
              <div
                className="dd-menu"
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "-4px",
                  width: "220px",
                  padding: "4px",
                  background: "#FFFFFF",
                  boxShadow: "0 24px 48px -20px rgba(0,0,0,.35)",
                  flexDirection: "column",
                  zIndex: "30",
                }}
                data-s="position: absolute; top: 40px; left: -4px; width: 220px; padding: 4px; background: #FFFFFF; box-shadow: 0 24px 48px -20px rgba(0,0,0,.35); flex-direction: column; z-index: 30"
              >
                <Link
                  href="/services"
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    textDecoration: "none",
                    color: "#1D2B44",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  All our Services
                </Link>
                <Link
                  href="/services/kitchen"
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    textDecoration: "none",
                    color: "#1D2B44",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Kitchen
                </Link>
                <Link
                  href="/services/bathroom"
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    textDecoration: "none",
                    color: "#1D2B44",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Bathroom
                </Link>
                <Link
                  href="/services/walk-in"
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    textDecoration: "none",
                    color: "#1D2B44",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Walk-in
                </Link>
              </div>
            </div>
            <Link
              href="/gallery"
              aria-current={current === "gallery" ? "page" : undefined}
              {...sx(navLink(current === "gallery"))}
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              aria-current={current === "blog" ? "page" : undefined}
              {...sx(navLink(current === "blog"))}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              aria-current={current === "contact" ? "page" : undefined}
              {...sx(navLink(current === "contact"))}
            >
              Contact Us
            </Link>
          </nav>
          <span className="burger" aria-hidden="true" />
          <div
            style={{
              justifySelf: "center",
              display: "flex",
              alignItems: "stretch",
              background: "#142A23",
              color: "#FFFFFF",
            }}
            data-s="justify-self: center; display: flex; align-items: stretch; background: #142A23; color: #FFFFFF"
          >
            <Link
              href="/"
              aria-label="V&C Cabinet Design Concept — Home"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                minHeight: "52px",
                padding: "0 18px",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
              data-s="display: flex; align-items: center; gap: 12px; min-height: 52px; padding: 0 18px; color: #FFFFFF; text-decoration: none"
            >
              <img
                className="hx-logo-t"
                src={logo.wordmark}
                alt="V&C Cabinet Design"
                style={{ display: "block", height: "34px", width: "auto" }}
              />
              <img
                className="hx-sym"
                src={logo.symbol}
                alt="V&C Cabinet Design"
                style={{ height: "30px", width: "30px" }}
              />
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "56px",
                border: "0",
                borderLeft: "1px solid rgba(255,255,255,.18)",
                background: "transparent",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
              data-s="display: flex; align-items: center; justify-content: center; width: 56px; border: 0; border-left: 1px solid rgba(255,255,255,.18); background: transparent; color: #FFFFFF; cursor: pointer"
              onClick={openMenu}
            >
              <span
                aria-hidden="true"
                style={{ display: "flex", flexDirection: "column", gap: "5px", width: "26px" }}
                data-s="display: flex; flex-direction: column; gap: 5px; width: 26px"
              >
                <span style={{ height: "1.5px", background: "currentColor" }} />
                <span style={{ height: "1.5px", background: "currentColor" }} />
              </span>
            </button>
          </div>
          <div
            style={{ justifySelf: "end", display: "flex", alignItems: "flex-start", gap: "clamp(16px, 2vw, 40px)" }}
            data-s="justify-self: end; display: flex; align-items: flex-start; gap: clamp(16px, 2vw, 40px)"
          >
            <div className="hx-info" {...sx(v.info)}>
              <span {...sx(v.infoMuted)}>Tampa Bay, Florida</span>
              <a href="tel:+17272233490" {...sx(v.infoPhone)}>
                727-223-3490
              </a>
            </div>
            <Link href="/contact" className="hdr-cta" {...sx(v.cta)}>
              Free Consultation <span aria-hidden="true">↗</span>
            </Link>
            <a href="tel:+17272233490" className="burger" aria-label="Call 727-223-3490" {...sx(v.call)}>
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
            </a>
          </div>
        </div>
      </header>
      {menuOpen && (
        <>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            style={{
              position: "fixed",
              inset: "0",
              zIndex: "50",
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
            }}
            data-s="position: fixed; inset: 0; z-index: 50; background: #FFFFFF; display: flex; flex-direction: column; overflow-y: auto"
          >
            <div
              className="wrap"
              style={{
                height: "84px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: "0",
              }}
            >
              <img
                src={logo.menu}
                alt="V&C Cabinet Design"
                style={{ display: "block", height: "48px", width: "auto" }}
              />
              <button
                type="button"
                aria-label="Close menu"
                style={{
                  width: "44px",
                  height: "44px",
                  border: "0",
                  background: "#F6F3EE",
                  color: "#1D2B44",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                data-s="width: 44px; height: 44px; border: 0; background: #F6F3EE; color: #1D2B44; display: flex; align-items: center; justify-content: center; cursor: pointer"
                onClick={closeMenu}
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
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </button>
            </div>
            <nav
              aria-label="Main"
              className="wrap"
              style={{ display: "flex", flexDirection: "column" }}
              data-s="display: flex; flex-direction: column"
            >
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "64px",
                  borderBottom: "1px solid #E6DFD5",
                  color: "#1D2B44",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontSize: "34px",
                  fontWeight: "500",
                  letterSpacing: "-.03em",
                  textDecoration: "none",
                }}
                data-s="display: flex; align-items: center; min-height: 64px; border-bottom: 1px solid #E6DFD5; color: #1D2B44; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: 34px; font-weight: 500; letter-spacing: -.03em; text-decoration: none"
              >
                Home
              </Link>
              <Link
                href="/mission"
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "64px",
                  borderBottom: "1px solid #E6DFD5",
                  color: "#1D2B44",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontSize: "34px",
                  fontWeight: "500",
                  letterSpacing: "-.03em",
                  textDecoration: "none",
                }}
                data-s="display: flex; align-items: center; min-height: 64px; border-bottom: 1px solid #E6DFD5; color: #1D2B44; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: 34px; font-weight: 500; letter-spacing: -.03em; text-decoration: none"
              >
                Mission
              </Link>
              <Link
                href="/services"
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "64px",
                  borderBottom: "1px solid #E6DFD5",
                  color: "#1D2B44",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontSize: "34px",
                  fontWeight: "500",
                  letterSpacing: "-.03em",
                  textDecoration: "none",
                }}
                data-s="display: flex; align-items: center; min-height: 64px; border-bottom: 1px solid #E6DFD5; color: #1D2B44; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: 34px; font-weight: 500; letter-spacing: -.03em; text-decoration: none"
              >
                Services
              </Link>
              <Link
                href="/services"
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "44px",
                  paddingLeft: "4px",
                  color: "#40444B",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
                data-s="display: flex; align-items: center; min-height: 44px; padding-left: 4px; color: #40444B; font-size: 16px; text-decoration: none"
              >
                — All our Services
              </Link>
              <Link
                href="/services/kitchen"
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "44px",
                  paddingLeft: "4px",
                  color: "#40444B",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
                data-s="display: flex; align-items: center; min-height: 44px; padding-left: 4px; color: #40444B; font-size: 16px; text-decoration: none"
              >
                — Kitchen
              </Link>
              <Link
                href="/services/bathroom"
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "44px",
                  paddingLeft: "4px",
                  color: "#40444B",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
                data-s="display: flex; align-items: center; min-height: 44px; padding-left: 4px; color: #40444B; font-size: 16px; text-decoration: none"
              >
                — Bathroom
              </Link>
              <Link
                href="/services/walk-in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "44px",
                  paddingLeft: "4px",
                  color: "#40444B",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
                data-s="display: flex; align-items: center; min-height: 44px; padding-left: 4px; color: #40444B; font-size: 16px; text-decoration: none"
              >
                — Walk-in
              </Link>
              <Link
                href="/gallery"
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "64px",
                  borderBottom: "1px solid #E6DFD5",
                  color: "#1D2B44",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontSize: "34px",
                  fontWeight: "500",
                  letterSpacing: "-.03em",
                  textDecoration: "none",
                }}
                data-s="display: flex; align-items: center; min-height: 64px; border-bottom: 1px solid #E6DFD5; color: #1D2B44; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: 34px; font-weight: 500; letter-spacing: -.03em; text-decoration: none"
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "64px",
                  borderBottom: "1px solid #E6DFD5",
                  color: "#1D2B44",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontSize: "34px",
                  fontWeight: "500",
                  letterSpacing: "-.03em",
                  textDecoration: "none",
                }}
                data-s="display: flex; align-items: center; min-height: 64px; border-bottom: 1px solid #E6DFD5; color: #1D2B44; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: 34px; font-weight: 500; letter-spacing: -.03em; text-decoration: none"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "64px",
                  borderBottom: "1px solid #E6DFD5",
                  color: "#1D2B44",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontSize: "34px",
                  fontWeight: "500",
                  letterSpacing: "-.03em",
                  textDecoration: "none",
                }}
                data-s="display: flex; align-items: center; min-height: 64px; border-bottom: 1px solid #E6DFD5; color: #1D2B44; font-family: var(--font-urbanist), system-ui, sans-serif; font-size: 34px; font-weight: 500; letter-spacing: -.03em; text-decoration: none"
              >
                Contact Us
              </Link>
            </nav>
            <div
              className="wrap"
              style={{
                marginTop: "auto",
                paddingTop: "32px",
                paddingBottom: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
              data-s="margin-top: auto; padding-top: 32px; padding-bottom: 32px; display: flex; flex-direction: column; gap: 10px"
            >
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  minHeight: "52px",
                  background: "#F6F3EE",
                  color: "#1D2B44",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
                data-s="display: flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; background: #F6F3EE; color: #1D2B44; font-weight: 600; text-decoration: none"
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
        </>
      )}
    </>
  );
}
