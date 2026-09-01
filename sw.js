/**
 * Leaf Creationism service worker.
 *
 * Goal: make repeat visits feel instant and survive a flaky mobile connection.
 *
 * Strategy per request type:
 *   - navigations (HTML): network first, fall back to cache, then to a cached
 *     shell. Always prefer fresh HTML so new deploys and SEO content are picked
 *     up immediately.
 *   - assets (images, video, fonts, JS, CSS): cache first. Filenames are stable
 *     or content-hashed, so a cached copy is always correct and this is what
 *     removes the repeat-visit download entirely.
 *
 * Cross-origin asset requests are cached too, so this keeps working whether the
 * images come from Vercel or from Firebase Cloud Storage.
 */

/* Bumped so the previous shell — which still contained the intro loader and
   the Tailwind CDN — is evicted rather than served from cache to returning
   visitors. */
const VERSION = 'leaf-v2';
const SHELL_CACHE = `${VERSION}-shell`;
const ASSET_CACHE = `${VERSION}-assets`;

// Kept deliberately small: just enough to render something offline.
const SHELL_URLS = ['/', '/favicon.ico', '/site.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      // Individual failures must not abort the whole install.
      .then((cache) => Promise.allSettled(SHELL_URLS.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => !key.startsWith(VERSION)).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

const isAsset = (url) =>
  /\.(?:jpg|jpeg|png|webp|svg|gif|ico|mp4|webm|woff2?|js|css)$/i.test(url.pathname);

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Never cache the enquiry API — submissions must always hit the network.
  if (url.pathname.startsWith('/api/')) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(SHELL_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((hit) => hit || caches.match('/')))
    );
    return;
  }

  if (isAsset(url)) {
    event.respondWith(
      caches.match(request).then((hit) => {
        if (hit) return hit;
        return fetch(request).then((response) => {
          // Only cache real successes. Opaque cross-origin responses are kept
          // as well so Firebase-hosted assets still benefit.
          if (response.ok || response.type === 'opaque') {
            const copy = response.clone();
            caches.open(ASSET_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        });
      })
    );
  }
});
