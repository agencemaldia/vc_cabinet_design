"use client";

import { useId, useState } from "react";

import { Collapse } from "@/components/site/collapse";

type Fact = [label: string, text: string];

/**
 * The facts of a realized project (specification §3): the four key ones are always shown, the others (overview,
 * original state, methods) unfold under them with "See the details". Everything stays in the page for search
 * engines.
 */
export function ProjectFacts({
  main,
  more,
  labels,
}: {
  main: Fact[];
  more: Fact[];
  labels: { more: string; less: string };
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const list = (facts: Fact[]) =>
    facts.map(([k, v]) => (
      <div key={k}>
        <dt>{k}</dt>
        <dd>{v}</dd>
      </div>
    ));
  return (
    <>
      <dl>{list(main)}</dl>
      {more.length > 0 && (
        <>
          <div id={id}>
            <Collapse open={open}>
              <dl className="vc-proj__more">{list(more)}</dl>
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
