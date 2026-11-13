import Link from "next/link";
/** Fixed call / consultation bar shown on small screens (`.sticky-m`). */
export function MobileCallBar() {
  return (
    <div
      className="sticky-m"
      style={{
        position: "fixed",
        left: "12px",
        right: "12px",
        bottom: "12px",
        zIndex: "40",
        padding: "6px",
        background: "#1F3D33",
        borderRadius: "0",
        boxShadow: "0 16px 32px -12px rgba(0,0,0,.45)",
        gridTemplateColumns: "1fr 1.7fr",
        gap: "6px",
      }}
      data-s="position: fixed; left: 12px; right: 12px; bottom: 12px; z-index: 40; padding: 6px; background: #1F3D33; border-radius: 0; box-shadow: 0 16px 32px -12px rgba(0,0,0,.45); grid-template-columns: 1fr 1.7fr; gap: 6px"
    >
      <a
        href="tel:+17272233490"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          minHeight: "48px",
          borderRadius: "0",
          color: "#FFFFFF",
          fontSize: "15px",
          fontWeight: "600",
          textDecoration: "none",
        }}
        data-s="display: flex; align-items: center; justify-content: center; gap: 8px; min-height: 48px; border-radius: 0; color: #FFFFFF; font-size: 15px; font-weight: 600; text-decoration: none"
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
        Call
      </a>
      <Link
        href="/contact"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "48px",
          borderRadius: "0",
          background: "#FFFFFF",
          color: "#1F3D33",
          fontSize: "15px",
          fontWeight: "600",
          textDecoration: "none",
        }}
        data-s="display: flex; align-items: center; justify-content: center; min-height: 48px; border-radius: 0; background: #FFFFFF; color: #1F3D33; font-size: 15px; font-weight: 600; text-decoration: none"
      >
        Free Consultation
      </Link>
    </div>
  );
}
