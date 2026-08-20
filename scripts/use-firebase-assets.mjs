/**
 * Point the built site at Firebase Cloud Storage for /assets/... files.
 *
 * Runs after `vite build` and rewrites source-asset references in the emitted
 * JS, CSS and HTML to the Firebase public base URL.
 *
 * This is a build-time string rewrite rather than a source change on purpose:
 *   - the site has 100+ hardcoded asset paths across JS and CSS
 *   - template literals like `/assets/portfolio/thumbs/${name}` still compile to
 *     a literal prefix in the bundle, so a prefix rewrite catches them too
 *   - it is fully reversible: build without FIREBASE_ASSET_BASE set and the
 *     site serves assets from Vercel again, with no code to revert
 *
 * IMPORTANT — dist/assets holds TWO different things:
 *   1. our source assets, copied in by the build, always inside a named folder
 *      (assets/brand/..., assets/portfolio/..., assets/media/...). These are
 *      uploaded to Firebase, so they are safe to rewrite.
 *   2. Vite's own emitted output, sitting flat at the top level with content
 *      hashes (assets/index-a1b2c3.js, assets/creative-agency-art-ShJZ4JE5.svg).
 *      These are NEVER uploaded to Firebase. Rewriting them would 404.
 *
 * So the rewrite is restricted to the top-level folder names that actually
 * exist in ./assets, read from disk so the list cannot drift.
 *
 * No-op when FIREBASE_ASSET_BASE is unset, so this is safe to leave wired into
 * the build permanently.
 */

import { readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const ASSETS_SRC = join(ROOT, 'assets');
const REWRITABLE = new Set(['.js', '.css', '.html']);

async function collect(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await collect(full, out);
    else if (REWRITABLE.has(extname(entry.name))) out.push(full);
  }
  return out;
}

/** Top-level folders inside ./assets — the only paths that reach Firebase. */
async function sourceAssetFolders() {
  const entries = await readdir(ASSETS_SRC, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('._'))
    .map((entry) => entry.name);
}

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

async function main() {
  const base = (process.env.FIREBASE_ASSET_BASE || '').replace(/\/+$/, '');

  if (!base) {
    console.log('  firebase: FIREBASE_ASSET_BASE not set — assets stay on Vercel');
    return;
  }

  const folders = await sourceAssetFolders();
  if (folders.length === 0) {
    console.log('  firebase: no source asset folders found — nothing to rewrite');
    return;
  }

  // Delimiter keeps us on real references. Backtick is included so template
  // literals are covered; without it /assets/portfolio/thumbs/ was missed.
  const pattern = new RegExp(
    `(["'\`(=])\\/assets\\/(${folders.map(escapeRegex).join('|')})\\/`,
    'g'
  );

  const files = await collect(DIST);
  let changedFiles = 0;
  let totalHits = 0;

  for (const file of files) {
    const original = await readFile(file, 'utf8');
    const hits = (original.match(pattern) || []).length;
    if (!hits) continue;

    await writeFile(file, original.replace(pattern, `$1${base}/assets/$2/`), 'utf8');
    changedFiles += 1;
    totalHits += hits;
  }

  console.log(
    `  firebase: rewrote ${totalHits} asset refs in ${changedFiles} files -> ${base}\n` +
    `            (folders: ${folders.join(', ')}; Vite output left on Vercel)`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
