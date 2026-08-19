// GeoSpy service worker.
// Goal: once installed, the app must launch with zero network access.
const CACHE_NAME = 'geospy-v4';

// Must be cached or the app cannot start offline.
const CRITICAL = ['./finch.html'];

// Nice to have; a failure here must not abort the install.
const OPTIONAL = [
  './finch-manifest.json',
  './sector-map.jpg',
  './finch-icon-180.png',
  './finch-icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    // Fetch everything before writing anything.
    const fetchOne = async url => {
      const res = await fetch(new Request(url, {cache: 'reload'}));
      if (!res || !res.ok) throw new Error('precache fetch failed: ' + url);
      return [url, res];
    };

    // A missing critical file throws here, before the new cache is even
    // created: install fails, activate never runs, and the previous cache
    // keeps serving the app untouched.
    const critical = await Promise.all(CRITICAL.map(fetchOne));
    const optional = (await Promise.all(
      OPTIONAL.map(url => fetchOne(url).catch(() => null))
    )).filter(Boolean);

    const cache = await caches.open(CACHE_NAME);
    try {
      // App shell first, so the cache is usable as early as possible.
      for (const [url, res] of critical) await cache.put(url, res);
      for (const [url, res] of optional) {
        try { await cache.put(url, res); } catch (e) { /* non-essential */ }
      }
      // Do not trust the writes: confirm the shell can actually be read back
      // before declaring this version good.
      for (const url of CRITICAL) {
        if (!(await cache.match(url))) throw new Error('precache verify failed: ' + url);
      }
    } catch (e) {
      // Never leave a half-built cache behind - it would survive as dead
      // weight and could be mistaken for a working version.
      await caches.delete(CACHE_NAME);
      throw e;
    }

    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map(n => n === CACHE_NAME ? null : caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req, {ignoreSearch: true});

    if (cached) {
      // Serve from cache immediately, then refresh in the background so a new
      // version is picked up next launch whenever there happens to be signal.
      event.waitUntil((async () => {
        try {
          const fresh = await fetch(req, {cache: 'no-cache'});
          if (fresh && fresh.ok) await cache.put(req, fresh.clone());
        } catch (e) { /* offline: keep serving the cached copy */ }
      })());
      return cached;
    }

    try {
      const res = await fetch(req);
      if (res && res.ok) cache.put(req, res.clone()).catch(() => {});
      return res;
    } catch (e) {
      // Offline and uncached: any page navigation still gets the app.
      if (req.mode === 'navigate') {
        const shell = await cache.match('./finch.html');
        if (shell) return shell;
      }
      throw e;
    }
  })());
});

self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
  if (event.data === 'version' && event.source) event.source.postMessage({version: CACHE_NAME});
});
