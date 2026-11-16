"use client";

import { useId, useState } from "react";

import { Collapse } from "@/components/site/collapse";
import { ds } from "@/components/site/sx";

/** FAQ accordion of the original V&C design: grey items, white square with +/−, first answer open. */
export function DesignFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const id = useId();
  return (
    <div {...ds({ flex: "1.4 1 480px", display: "flex", flexDirection: "column", gap: "10px" })}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="vc-dfaq" {...ds({ borderRadius: "0", background: "#EFF0F2" })}>
            <h3 {...ds({ margin: "0" })}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                {...ds({
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
                  fontWeight: 600,
                  color: "#1D2B44",
                  cursor: "pointer",
                })}
              >
                <span>{f.q}</span>
                <span
                  aria-hidden="true"
                  {...ds({
                    width: "40px",
                    height: "40px",
                    flexShrink: 0,
                    borderRadius: "0",
                    background: "#FFFFFF",
                    color: isOpen ? "#125A50" : "#1D2B44",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  })}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={`${id}-${i}`} role="region">
              <Collapse open={isOpen}>
                <p
                  {...ds({
                    margin: "0",
                    padding: "0 64px 24px 28px",
                    fontSize: "15px",
                    lineHeight: "1.65",
                    color: "#40444B",
                  })}
                >
                  {f.a}
                </p>
              </Collapse>
            </div>
          </div>
        );
      })}
    </div>
  );
}
