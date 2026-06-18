import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Load the SSR bundle
const { render, routes } = await import(join(root, '.ssr-tmp/entry-server.js'));

// Read the client-built HTML template
const template = readFileSync(join(root, 'dist/index.html'), 'utf-8');

for (const url of routes) {
  let appHtml;
  try {
    appHtml = render(url);
  } catch (e) {
    console.warn(`[prerender] skipping ${url} — render error:`, e.message);
    continue;
  }

  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Determine output path
  const filePath = url === '/'
    ? join(root, 'dist/index.html')
    : join(root, 'dist', url.slice(1), 'index.html');

  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html);
  console.log(`[prerender] wrote ${filePath}`);
}

console.log('[prerender] done');
