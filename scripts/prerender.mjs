import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const { render, routes, ceramicCities, services, notFoundRoute } = await import(
  pathToFileURL(join(root, '.ssr-tmp/entry-server.js')).href
);

// Keep a pristine copy of the built shell, so running this script a second time
// (e.g. a host that runs both `vite build` and the old build script) still works.
const EMPTY_ROOT = '<div id="root"></div>';
const shellCopy = join(root, 'node_modules/.prerender-shell.html');
let template = readFileSync(join(root, 'dist/index.html'), 'utf-8');
if (template.includes(EMPTY_ROOT)) {
  writeFileSync(shellCopy, template);
} else if (existsSync(shellCopy)) {
  template = readFileSync(shellCopy, 'utf-8');
} else {
  throw new Error('[prerender] dist/index.html is already pre-rendered and no clean copy exists. Run a fresh build.');
}

const SITE_URL = 'https://williamautodetailing.net';
const BUSINESS = "William's Auto Detailing";
const RATING = '5.0';
const REVIEWS = '190';

const pageMeta = {
  '/': {
    title: `Mobile Auto Detailing Miami & Doral | ${BUSINESS}`,
    description: `Professional mobile car detailing in Miami, Doral and surrounding areas. Interior and exterior detailing, ceramic coatings and paint correction. Book today.`,
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
  '/gallery': {
    title: `Car Detailing Gallery — Before & After Photos Miami | ${BUSINESS}`,
    description: `See real before & after results from ${BUSINESS}. Interior detailing, paint correction, ceramic coating, engine bay & headlight restoration across Miami-Dade. ${RATING} stars · ${REVIEWS}+ Google reviews.`,
  },
  '/maintenance-club': {
    title: `Maintenance Club — Car Detailing Membership Miami | ${BUSINESS}`,
    description: `Join the Maintenance Club: weekly, bi-weekly or monthly mobile maintenance details in Miami-Dade. 1 free scratch or stain removal each month and 5–50% off premium add-ons.`,
  },
  '/book': {
    title: `Mobile Detailing Miami — Premium Results in Your Driveway | ${BUSINESS}`,
    description: `Miami's top-rated mobile car detailing. We come to your home or office fully equipped. Instant quote, no payment to book. ${RATING}★ · ${REVIEWS}+ reviews.`,
  },
  '/refer': {
    title: `Give a Wax, Get a Wax — Referral Program | ${BUSINESS}`,
    description: `Refer a friend to ${BUSINESS} and you both get a free one-time upgrade from basic wax to premium wax/sealant. No cost, no catch.`,
  },
  '/199-special': {
    title: `Signature Detail Special — Mobile Detailing Miami | ${BUSINESS}`,
    description: `Signature Detail + upgraded windshield sealant + engine bay detail. We come to you anywhere in Miami-Dade. ${RATING}★ · ${REVIEWS}+ reviews.`,
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

  const serviceMatch = url.match(/^\/services\/(.+)$/);
  if (serviceMatch) {
    const s = services.find((x) => x.slug === serviceMatch[1]);
    if (s) return { title: s.metaTitle, description: s.metaDescription };
  }

  const ceramicMatch = url.match(/^\/ceramic-coating\/(.+)$/);
  if (ceramicMatch) {
    const c = ceramicCities.find((x) => x.citySlug === ceramicMatch[1]);
    if (c) {
      return {
        title: `Ceramic Coating in ${c.name}, FL | ${BUSINESS}`,
        description: c.metaDescription,
      };
    }
  }

  return pageMeta['/'];
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function page(url, appHtml, meta) {
  const canonical = `${SITE_URL}${url === '/' ? '/' : url}`;

  return template
    .replace(EMPTY_ROOT, `<div id="root">${appHtml}</div>`)
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
}

// Every route must render: a missing page would be served as the 404 page,
// so a render error fails the build instead of shipping a broken site.
const failed = [];
for (const url of routes) {
  let html;
  try {
    html = page(url, render(url), getMeta(url));
  } catch (e) {
    console.error(`[prerender] ${url} — render error:`, e.message);
    failed.push(url);
    continue;
  }

  const filePath = url === '/'
    ? join(root, 'dist/index.html')
    : join(root, 'dist', url.slice(1), 'index.html');

  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html);
  console.log(`[prerender] wrote ${filePath}`);
}

if (failed.length) {
  throw new Error(`[prerender] ${failed.length} page(s) failed to render: ${failed.join(', ')}`);
}

// Served by Netlify (see public/_redirects) with a 404 status for any unknown URL.
// No canonical, and noindex so it never enters search results.
const notFound = page(notFoundRoute, render(notFoundRoute), {
  title: `Page not found | ${BUSINESS}`,
  description: `This page doesn't exist. Book a mobile detail with ${BUSINESS} anywhere in Miami-Dade.`,
})
  .replace(/\s*<link rel="canonical" href="[^"]*"\s*\/?>/, '')
  .replace(/<meta name="robots" content="[^"]*"/, '<meta name="robots" content="noindex"');
writeFileSync(join(root, 'dist/404.html'), notFound);
console.log('[prerender] wrote 404.html');

console.log(`[prerender] done — ${routes.length} pages`);
