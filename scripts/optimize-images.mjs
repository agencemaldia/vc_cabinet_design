// Converts the site's photos (public/images/*.jpg) to WebP and points every reference in src/ at the
// .webp files. Halves the image weight (≈11 MB → ≈5 MB) with no visible loss. Then makes the 640 and 1280 px
// copies (`name-640.webp`, `name-1280.webp`) that src/lib/images.ts offers to phones and small cards.
// Run from the repo root after adding photos or re-running the design import:
//   node scripts/optimize-images.mjs
import { readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const IMAGES = "public/images";
const MAX_WIDTH = 1920;
const QUALITY = 72;

const jpgs = readdirSync(IMAGES).filter((f) => /\.jpe?g$/i.test(f));
let before = 0;
let after = 0;
for (const f of jpgs) {
  const src = join(IMAGES, f);
  const out = src.replace(/\.jpe?g$/i, ".webp");
  before += statSync(src).size;
  await sharp(src).resize({ width: MAX_WIDTH, withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(out);
  after += statSync(out).size;
  rmSync(src);
}

// rewrite /images/<name>.jpg → .webp in the code and styles
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(join(dir, d.name)) : /\.(tsx?|css)$/.test(d.name) ? [join(dir, d.name)] : [],
  );
let files = 0;
for (const file of walk("src")) {
  const text = readFileSync(file, "utf8");
  const next = text.replace(/(\/images\/[\w-]+)\.jpe?g/gi, "$1.webp");
  if (next !== text) {
    writeFileSync(file, next);
    files++;
  }
}

// responsive copies of every photo (new or replaced ones only)
const SIZES = [640, 1280];
let copies = 0;
for (const f of readdirSync(IMAGES)) {
  if (!f.endsWith(".webp") || /-(640|1280)\.webp$/.test(f)) continue;
  const src = join(IMAGES, f);
  const { width = 0 } = await sharp(src).metadata();
  if (width !== MAX_WIDTH && !f.startsWith("project-")) {
    console.warn(`${f} is ${width} px wide: src/lib/images.ts expects ${MAX_WIDTH} px originals.`);
  }
  for (const w of SIZES) {
    const out = src.replace(/\.webp$/, `-${w}.webp`);
    if (width <= w) continue;
    try {
      if (statSync(out).mtimeMs >= statSync(src).mtimeMs) continue;
    } catch {
      // not made yet
    }
    await sharp(src).resize({ width: w }).webp({ quality: 78 }).toFile(out);
    copies++;
  }
}

const mb = (n) => (n / 1e6).toFixed(1);
console.log(`${jpgs.length} photos: ${mb(before)} MB → ${mb(after)} MB (WebP). ${files} files updated.`);
console.log(`${copies} responsive copies made.`);
