/**
 * Responsive photos. Every photo in /public/images (.webp) also exists as `-640.webp` and `-1280.webp` copies,
 * so the browser downloads the size the screen needs instead of the full file. Originals are 1920 px wide,
 * except the before/after project pairs (1448 px). Logos and other files get nothing extra.
 *
 * Usage: <img src={src} {...responsive(src, "(max-width: 700px) 100vw, 33vw")} />
 */
export function responsive(src: string, sizes: string): { srcSet?: string; sizes?: string } {
  const m = /^(\/images\/[^?]+?)\.webp(\?.*)?$/.exec(src);
  if (!m || /-(640|1280)$/.test(m[1]!)) return {};
  const [, base, query = ""] = m;
  const full = base!.startsWith("/images/project-") ? 1448 : 1920;
  return {
    srcSet: `${base}-640.webp${query} 640w, ${base}-1280.webp${query} 1280w, ${base}.webp${query} ${full}w`,
    sizes,
  };
}
