"use client";

import { useState, type CSSProperties } from "react";

type Item = { title: string; text: string };
type BlockProps = { id: string; title: string; lead: string; items: Item[]; images: string[] };

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Section title and lead, in the design's section-head style. */
function Head({ id, title, lead }: { id: string; title: string; lead: string }) {
  return (
    <div className="vc-gb__head">
      <h2 id={`${id}-title`}>{title}</h2>
      <p>{lead}</p>
    </div>
  );
}

/**
 * Bento grid: flat green cards (number, title, text) mixed with photos, on a regular grid so every row is
 * aligned at the top and the bottom. Photos fill the cells left in the last row.
 */
export function GreenBento({ id, title, lead, items, images }: BlockProps) {
  const cols = 3;
  const cells = Math.max(items.length + 1, Math.ceil((items.length + 1) / cols) * cols);
  const photos = cells - items.length;
  // one photo opens the grid (second cell), the others close it
  const order: ({ kind: "item"; i: number } | { kind: "photo"; i: number })[] = [];
  let p = 0;
  items.forEach((_, i) => {
    order.push({ kind: "item", i });
    if (i === 0 && p < photos) order.push({ kind: "photo", i: p++ });
  });
  while (p < photos) order.push({ kind: "photo", i: p++ });

  return (
    <section className="sec vc-gb" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Head id={id} title={title} lead={lead} />
        <ul className="vc-bento">
          {order.map((cell, k) =>
            cell.kind === "item" ? (
              <li key={`i${cell.i}`} className={`vc-bento__card${cell.i % 3 === 2 ? " is-deep" : ""}`}>
                <span className="vc-bento__n">{num(cell.i)}</span>
                <h3>{items[cell.i]!.title}</h3>
                <p>{items[cell.i]!.text}</p>
              </li>
            ) : (
              <li key={`p${k}`} className="vc-bento__photo" aria-hidden="true">
                <img src={images[cell.i % images.length]} alt="" loading="lazy" decoding="async" />
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}

/**
 * Expanding panels: one open panel (photo under a green veil, number, title and text), the others narrow
 * with their title written vertically; hovering, focusing or clicking a panel opens it. Stacked on phones.
 */
export function GreenPanels({ id, title, lead, items, images }: BlockProps) {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec vc-gb" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Head id={id} title={title} lead={lead} />
        <ul className="vc-panels">
          {items.map((it, i) => (
            <li
              key={it.title}
              className={`vc-panel${i === open ? " is-open" : ""}`}
              style={{ "--img": `url(${images[i % images.length]})` } as CSSProperties}
              onMouseEnter={() => setOpen(i)}
            >
              <button type="button" aria-expanded={i === open} onClick={() => setOpen(i)} onFocus={() => setOpen(i)}>
                <span className="vc-panel__n">{num(i)}</span>
                <span className="vc-panel__label">{it.title}</span>
              </button>
              <div className="vc-panel__body">
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
