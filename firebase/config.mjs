/**
 * Firebase configuration for Leaf Creationism.
 *
 * Everything here is read from environment variables so no keys are committed.
 * Put the real values in .env (which is gitignored) — see .env.example.
 *
 * WHY CLOUD STORAGE AND NOT FIREBASE HOSTING:
 * Firebase Hosting on the free Spark plan allows only 360 MB of transfer PER DAY.
 * The assets folder is ~66 MB, and a single visit pulls roughly 3-4 MB, so the
 * site would stop serving after about 90 visitors a day. Cloud Storage on Spark
 * allows 100 GB per month instead, which is the same order as Vercel's free
 * tier, so that is what the assets go to.
 *
 * KNOWN TRADE-OFF:
 * Cloud Storage's free quota only applies to buckets in us-central1, us-west1
 * and us-east1. Vercel currently serves this site from its Mumbai edge (bom1),
 * which is far closer to the Kerala audience. Moving assets to a US bucket will
 * add latency for Indian visitors. That is why ASSET_BASE is switchable: build
 * without FIREBASE_ASSET_BASE set and everything falls back to Vercel instantly.
 */

/** Storage bucket name, e.g. "leaf-creationism.firebasestorage.app". */
export const STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET || '';

/**
 * Public base URL that /assets/... is rewritten to at build time.
 * Leave unset to keep serving assets from Vercel.
 */
export const ASSET_BASE = (process.env.FIREBASE_ASSET_BASE || '').replace(/\/+$/, '');

/** Service account JSON path, used only by the local upload script. */
export const SERVICE_ACCOUNT_PATH = process.env.FIREBASE_SERVICE_ACCOUNT || '';

/** Client-side config, only needed if you later add Firestore/Auth in the app. */
export const clientConfig = {
  apiKey: process.env.FIREBASE_API_KEY || '',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.FIREBASE_PROJECT_ID || '',
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.FIREBASE_APP_ID || ''
};

export const isAssetHostingEnabled = () => Boolean(ASSET_BASE);
