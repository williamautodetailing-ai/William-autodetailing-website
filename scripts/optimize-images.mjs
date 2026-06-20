/**
 * Image optimization script
 *
 * Generates responsive srcset variants (480w, 768w) from existing images
 * and downloads + converts the two stock photos used on subpages.
 *
 * Usage:
 *   npm install sharp   (one-time)
 *   node scripts/optimize-images.mjs
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const optimized = join(root, 'public/images/optimized');

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('sharp is not installed. Run: npm install sharp');
  process.exit(1);
}

const WIDTHS = [480, 768];

const localImages = [
  { src: join(optimized, 'hero-porsche.webp'), base: 'hero-porsche' },
  { src: join(optimized, 'about-us/audi-r8.webp'), base: 'about-us/audi-r8' },
  { src: join(optimized, 'promotions/engine-bay-after.webp'), base: 'promotions/engine-bay-after' },
  { src: join(optimized, 'promotions/engine-bay-before.webp'), base: 'promotions/engine-bay-before' },
];

const stockImages = [
  {
    url: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1920',
    base: 'ceramic-hero',
  },
  {
    url: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920',
    base: 'city-hero',
  },
];

async function resizeLocal(entry) {
  for (const w of WIDTHS) {
    const outPath = join(optimized, `${entry.base}-${w}.webp`);
    if (existsSync(outPath)) {
      console.log(`  skip (exists): ${outPath}`);
      continue;
    }
    mkdirSync(dirname(outPath), { recursive: true });
    await sharp(entry.src)
      .resize({ width: w })
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log(`  created: ${outPath}`);
  }
}

async function downloadAndConvert(entry) {
  const fullPath = join(optimized, `${entry.base}.webp`);
  const allPaths = [fullPath, ...WIDTHS.map(w => join(optimized, `${entry.base}-${w}.webp`))];

  if (allPaths.every(p => existsSync(p))) {
    console.log(`  skip (all exist): ${entry.base}`);
    return;
  }

  console.log(`  downloading: ${entry.url}`);
  const res = await fetch(entry.url);
  if (!res.ok) {
    console.error(`  FAILED to download ${entry.url}: ${res.status}`);
    return;
  }
  const buffer = Buffer.from(await res.arrayBuffer());

  mkdirSync(dirname(fullPath), { recursive: true });

  if (!existsSync(fullPath)) {
    await sharp(buffer).resize({ width: 1200 }).webp({ quality: 80 }).toFile(fullPath);
    console.log(`  created: ${fullPath}`);
  }

  for (const w of WIDTHS) {
    const outPath = join(optimized, `${entry.base}-${w}.webp`);
    if (existsSync(outPath)) continue;
    await sharp(buffer).resize({ width: w }).webp({ quality: 80 }).toFile(outPath);
    console.log(`  created: ${outPath}`);
  }
}

console.log('Generating responsive variants for local images...');
for (const entry of localImages) {
  if (!existsSync(entry.src)) {
    console.warn(`  source missing: ${entry.src}`);
    continue;
  }
  await resizeLocal(entry);
}

console.log('\nDownloading and converting stock images...');
for (const entry of stockImages) {
  await downloadAndConvert(entry);
}

console.log('\nDone! Now rebuild with: npm run build');
