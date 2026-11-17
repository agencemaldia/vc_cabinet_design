"use client";

import { useId, useState } from "react";

import { Collapse } from "@/components/site/collapse";
import { ds } from "@/components/site/sx";

const P = { margin: "0", maxWidth: "560px", fontSize: "16px", lineHeight: "1.6", color: "#22252A" };

/**
 * Long introduction: the first paragraph is shown, the others unfold under it with "Read more" (and fold back
 * with "Show less"). The hidden text stays in the page for search engines.
 */
export function ReadMore({ paragraphs, labels }: { paragraphs: string[]; labels: { more: string; less: string } }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const [first, ...rest] = paragraphs;
  return (
    <>
      <p {...ds(P)}>{first}</p>
      {rest.length > 0 && (
        <>
          <div id={id}>
            <Collapse open={open}>
              <div {...ds({ display: "flex", flexDirection: "column", gap: "20px" })}>
                {rest.map((text) => (
                  <p key={text} {...ds(P)}>
                    {text}
                  </p>
                ))}
              </div>
            </Collapse>
          </div>
          <button
            type="button"
            className="vc-readmore"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen(!open)}
          >
            {open ? labels.less : labels.more}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </>
      )}
    </>
  );
}
