import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const { render, routes } = await import(join(root, '.ssr-tmp/entry-server.js'));

const template = readFileSync(join(root, 'dist/index.html'), 'utf-8');

const SITE_URL = 'https://www.williamsautodetailing.com';
const BUSINESS = "William's Auto Detailing";
const RATING = '5.0';
const REVIEWS = '137';

const pageMeta = {
  '/': {
    title: `${BUSINESS} | #1 Mobile Car Detailing in Miami, FL`,
    description: `${BUSINESS} — Miami's top-rated mobile car detailing. We come to your home, office, or apartment. Signature detail, deep-clean packages, ceramic coating, and add-ons. ${RATING} stars · ${REVIEWS}+ Google reviews. Serving all of Miami-Dade County.`,
  },
  '/ceramic-coating': {
    title: `Ceramic Coating Miami — 2–5 Year Paint Protection | ${BUSINESS}`,
    description: `Professional ceramic coating in Miami-Dade. 2–5 year hydrophobic paint protection with full prep included. UV defense, mirror finish, self-cleaning surface. ${RATING} stars · ${REVIEWS}+ reviews. We come to you.`,
  },
  '/detail-packages': {
    title: `Detail Packages — Mobile Car Detailing Miami | ${BUSINESS}`,
    description: `Compare our 3 mobile car detailing packages — Signature, Pristine & Perfect Detail. Interior & exterior included. Professional products, eco-friendly, fully insured. We come to you in Miami-Dade.`,
  },
  '/add-ons': {
    title: `Add-On Services — Engine Bay, Headlights & More | ${BUSINESS}`,
    description: `Specialty add-on detailing services in Miami. Engine bay cleaning, headlight restoration, odor elimination, pet hair removal, clay bar & more. Book standalone or with any package.`,
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${BUSINESS}`,
    description: `Privacy policy for ${BUSINESS}. Learn how we collect, use, and protect your personal information when you use our mobile detailing services.`,
  },
};

const cityNames = {
  'doral-mobile-detailing': 'Doral', 'miami-mobile-detailing': 'Miami',
  'medley-mobile-detailing': 'Medley', 'kendall-mobile-detailing': 'Kendall',
  'tamiami-mobile-detailing': 'Tamiami', 'sweetwater-mobile-detailing': 'Sweetwater',
  'west-miami-mobile-detailing': 'West Miami', 'miami-beach-mobile-detailing': 'Miami Beach',
  'south-miami-mobile-detailing': 'South Miami', 'coral-gables-mobile-detailing': 'Coral Gables',
  'hialeah-gardens-mobile-detailing': 'Hialeah Gardens', 'olympia-heights-mobile-detailing': 'Olympia Heights',
};

function getMeta(url) {
  if (pageMeta[url]) return pageMeta[url];

  const cityMatch = url.match(/^\/areas\/(.+)$/);
  if (cityMatch && cityNames[cityMatch[1]]) {
    const name = cityNames[cityMatch[1]];
    return {
      title: `${name} Mobile Detailing, FL | ${BUSINESS}`,
      description: `${name} mobile car detailing by ${BUSINESS}. We come to your home or office. Ceramic coatings, full details, add-ons. ${RATING} stars · ${REVIEWS}+ reviews. Serving ${name} & surrounding areas.`,
    };
  }

  return pageMeta['/'];
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

for (const url of routes) {
  let appHtml;
  try {
    appHtml = render(url);
  } catch (e) {
    console.warn(`[prerender] skipping ${url} — render error:`, e.message);
    continue;
  }

  const meta = getMeta(url);
  const canonical = `${SITE_URL}${url === '/' ? '/' : url}`;

  let html = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${escapeHtml(meta.description)}"`
    )
    .replace(
      /<link rel="canonical" href="[^"]*"/,
      `<link rel="canonical" href="${canonical}"`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"/,
      `<meta property="og:title" content="${escapeHtml(meta.title)}"`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${escapeHtml(meta.description)}"`
    )
    .replace(
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${canonical}"`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"/,
      `<meta name="twitter:title" content="${escapeHtml(meta.title)}"`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"/,
      `<meta name="twitter:description" content="${escapeHtml(meta.description)}"`
    );

  const filePath = url === '/'
    ? join(root, 'dist/index.html')
    : join(root, 'dist', url.slice(1), 'index.html');

  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html);
  console.log(`[prerender] wrote ${filePath}`);
}

console.log('[prerender] done');
