/**
 * Upload everything in ./assets to Firebase Cloud Storage.
 *
 * Usage:
 *   node scripts/upload-assets-to-firebase.mjs            # upload changed files
 *   node scripts/upload-assets-to-firebase.mjs --force    # re-upload everything
 *   node scripts/upload-assets-to-firebase.mjs --dry-run  # show what would happen
 *
 * Requires in .env (never commit these):
 *   FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
 *   FIREBASE_SERVICE_ACCOUNT=./firebase/service-account.json
 *
 * Files are made public-read so the site can load them without auth, and are
 * sent with a long immutable cache header — the filenames are stable, so the
 * browser and Google's edge can hold them indefinitely.
 */

import { createReadStream, existsSync } from 'node:fs';
import { readFile, readdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import admin from 'firebase-admin';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS_DIR = join(ROOT, 'assets');

const args = new Set(process.argv.slice(2));
const FORCE = args.has('--force');
const DRY_RUN = args.has('--dry-run');

/** Minimal .env reader so this script has no extra dependency. */
async function loadEnv() {
  const envPath = join(ROOT, '.env');
  if (!existsSync(envPath)) return;
  const raw = await readFile(envPath, 'utf8');
  for (const line of raw.split('\n')) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const value = match[2].replace(/^["']|["']$/g, '');
    if (!process.env[match[1]]) process.env[match[1]] = value;
  }
}

const CONTENT_TYPES = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.gif': 'image/gif',
  '.ico': 'image/x-icon', '.mp4': 'video/mp4', '.webm': 'video/webm',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.json': 'application/json'
};

const contentTypeFor = (name) => {
  const ext = name.slice(name.lastIndexOf('.')).toLowerCase();
  return CONTENT_TYPES[ext] || 'application/octet-stream';
};

/** Recursively collect files, skipping macOS AppleDouble junk. */
async function collectFiles(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('._') || entry.name === '.DS_Store') continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await collectFiles(full, out);
    else out.push(full);
  }
  return out;
}

const md5Base64 = async (path) =>
  new Promise((resolve, reject) => {
    const hash = createHash('md5');
    createReadStream(path)
      .on('data', (chunk) => hash.update(chunk))
      .on('end', () => resolve(hash.digest('base64')))
      .on('error', reject);
  });

async function main() {
  await loadEnv();

  const bucketName = process.env.FIREBASE_STORAGE_BUCKET;
  const keyPath = process.env.FIREBASE_SERVICE_ACCOUNT;

  if (!bucketName || !keyPath) {
    console.error(
      'Missing config. Set FIREBASE_STORAGE_BUCKET and FIREBASE_SERVICE_ACCOUNT in .env\n' +
      'See .env.example for the exact names.'
    );
    process.exit(1);
  }

  const resolvedKey = join(ROOT, keyPath.replace(/^\.\//, ''));
  if (!existsSync(resolvedKey)) {
    console.error(`Service account key not found at: ${resolvedKey}`);
    process.exit(1);
  }

  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(await readFile(resolvedKey, 'utf8'))),
    storageBucket: bucketName
  });
  const bucket = admin.storage().bucket();

  const files = await collectFiles(ASSETS_DIR);
  const totalBytes = (await Promise.all(files.map(async (f) => (await stat(f)).size)))
    .reduce((sum, n) => sum + n, 0);

  console.log(`Bucket : ${bucketName}`);
  console.log(`Files  : ${files.length} (${(totalBytes / 1024 / 1024).toFixed(1)} MB)`);
  console.log(DRY_RUN ? 'Mode   : DRY RUN — nothing will be written\n' : '');

  let uploaded = 0;
  let skipped = 0;

  for (const localPath of files) {
    // Keep the same path shape the site already uses: assets/....
    const remotePath = `assets/${relative(ASSETS_DIR, localPath).split('\\').join('/')}`;
    const remote = bucket.file(remotePath);

    if (!FORCE) {
      // Compare MD5s so re-runs only push what actually changed.
      const [exists] = await remote.exists();
      if (exists) {
        const [meta] = await remote.getMetadata();
        if (meta.md5Hash && meta.md5Hash === (await md5Base64(localPath))) {
          skipped += 1;
          continue;
        }
      }
    }

    if (DRY_RUN) {
      console.log(`  would upload  ${remotePath}`);
      uploaded += 1;
      continue;
    }

    await bucket.upload(localPath, {
      destination: remotePath,
      metadata: {
        contentType: contentTypeFor(localPath),
        cacheControl: 'public, max-age=31536000, immutable'
      }
    });
    await remote.makePublic();
    uploaded += 1;
    if (uploaded % 25 === 0) console.log(`  ...${uploaded} uploaded`);
  }

  console.log(`\nDone. uploaded=${uploaded} unchanged=${skipped}`);
  if (!DRY_RUN && uploaded > 0) {
    console.log(`\nPublic base URL for FIREBASE_ASSET_BASE:`);
    console.log(`  https://storage.googleapis.com/${bucketName}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
