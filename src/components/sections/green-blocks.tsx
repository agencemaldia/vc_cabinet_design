"use client";

import { useEffect, useState, type CSSProperties } from "react";

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
 * Bento modules: each module is a 4 × 2 grid holding four cards and one tall photo — two cards span two
 * columns, two are single — so sizes vary while every module stays a clean rectangle (tops and bottoms
 * aligned). Modules alternate (photo on the right, then on the left). Missing cards become photos.
 * Grid areas: row-start / column-start / row-end / column-end.
 */
const MODULES: { photo: string; cards: string[] }[] = [
  { photo: "1 / 4 / 3 / 5", cards: ["1 / 1 / 2 / 3", "1 / 3 / 2 / 4", "2 / 1 / 3 / 2", "2 / 2 / 3 / 4"] },
  { photo: "1 / 1 / 3 / 2", cards: ["1 / 2 / 2 / 3", "1 / 3 / 2 / 5", "2 / 2 / 3 / 4", "2 / 4 / 3 / 5"] },
];

export function GreenBento({ id, title, lead, items, images }: BlockProps) {
  const groups: Item[][] = [];
  for (let i = 0; i < items.length; i += 4) groups.push(items.slice(i, i + 4));
  let photo = 0;
  const nextPhoto = () => images[photo++ % images.length]!;

  return (
    <section className="sec vc-gb" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Head id={id} title={title} lead={lead} />
        <div className="vc-bento">
          {groups.map((group, g) => {
            const m = MODULES[g % MODULES.length]!;
            return (
              <ul key={g} className="vc-bento__module">
                <li className="vc-bento__photo is-tall" aria-hidden="true" style={{ gridArea: m.photo }}>
                  <img src={nextPhoto()} alt="" loading="lazy" decoding="async" />
                </li>
                {m.cards.map((area, k) => {
                  const it = group[k];
                  const index = g * 4 + k;
                  const [, colStart, , colEnd] = area.split(" / ").map(Number);
                  const wide = colEnd! - colStart! > 1;
                  if (!it)
                    return (
                      <li key={k} className="vc-bento__photo" aria-hidden="true" style={{ gridArea: area }}>
                        <img src={nextPhoto()} alt="" loading="lazy" decoding="async" />
                      </li>
                    );
                  return (
                    <li
                      key={k}
                      className={`vc-bento__card${wide ? " is-wide" : ""}${index % 3 === 1 ? " is-deep" : ""}`}
                      style={{ gridArea: area }}
                    >
                      <span className="vc-bento__n">{num(index)}</span>
                      <h3>{it.title}</h3>
                      <p>{it.text}</p>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** How long a point stays shown before the next one (when nobody is interacting). */
const ROTATE_MS = 7000;

/**
 * Numbered list + preview: on the left the points as large numbered lines (the current one in full colour, with
 * a green bar that fills while it is shown); on the right a photo with a "01 / 06" counter, then the point's
 * title and text. Points move on by themselves, stop while the visitor hovers or picks one, and never move for
 * those who ask their device for reduced motion. Stacked on phones.
 */
export function GreenTabs({ id, title, lead, items, images }: BlockProps) {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [still, setStill] = useState(true);

  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setStill(q.matches);
    sync();
    q.addEventListener("change", sync);
    return () => q.removeEventListener("change", sync);
  }, []);

  const it = items[active]!;
  const playing = !still && !held;

  return (
    <section className="sec vc-gb" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Head id={id} title={title} lead={lead} />
        <div className="vc-tabs" onMouseEnter={() => setHeld(true)} onMouseLeave={() => setHeld(false)}>
          <ol className="vc-tabs__list">
            {items.map((x, i) => (
              <li key={x.title} className={i === active ? "is-active" : undefined}>
                <button
                  type="button"
                  aria-current={i === active ? "true" : undefined}
                  onClick={() => {
                    setActive(i);
                    setHeld(true);
                  }}
                  onFocus={() => setActive(i)}
                >
                  <span className="vc-tabs__n">{num(i)}</span>
                  <span className="vc-tabs__t">{x.title}</span>
                </button>
                {i === active && (
                  <span
                    key={`${active}-${playing}`}
                    className={`vc-tabs__bar${playing ? " is-running" : ""}`}
                    style={{ "--d": `${ROTATE_MS}ms` } as CSSProperties}
                    onAnimationEnd={() => setActive((a) => (a + 1) % items.length)}
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
          <div className="vc-tabs__view" aria-live="polite">
            <div className="vc-tabs__media">
              {items.map((x, i) => (
                <img
                  key={x.title}
                  src={images[i % images.length]}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={i === active ? "is-active" : undefined}
                />
              ))}
              <span className="vc-tabs__count">
                {num(active)} / {num(items.length - 1)}
              </span>
            </div>
            <div key={active} className="vc-tabs__text">
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
