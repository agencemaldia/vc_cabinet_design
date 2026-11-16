// Converts the site's photos (public/images/*.jpg) to WebP and points every reference in src/ at the
// .webp files. Halves the image weight (≈11 MB → ≈5 MB) with no visible loss.
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

const mb = (n) => (n / 1e6).toFixed(1);
console.log(`${jpgs.length} photos: ${mb(before)} MB → ${mb(after)} MB (WebP). ${files} files updated.`);
