"use client";

import { useId, useState } from "react";

import { Collapse } from "@/components/site/collapse";

/**
 * FAQ as interactive accordions (specification §2, section 5): one question open at a time, a real button
 * with `aria-expanded` / `aria-controls`, and a smooth open/close animation (`Collapse`). The answers stay in
 * the HTML, so search engines and assistants read them.
 */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const id = useId();
  return (
    <div className="vc-faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`vc-faq__item${isOpen ? " is-open" : ""}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="vc-faq__icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={`${id}-${i}`} role="region">
              <Collapse open={isOpen}>
                <p>{item.a}</p>
              </Collapse>
            </div>
          </div>
        );
      })}
    </div>
  );
}
