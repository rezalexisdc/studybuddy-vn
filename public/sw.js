// Minimal service worker. Its only real job is to exist and answer fetch —
// that's what makes Android/Chrome consider the site "installable" (the
// PWA criterion is a registered SW with a fetch handler, not any particular
// caching strategy). It doesn't cache anything itself: Vite's build output
// is content-hashed per deploy, so a cache here would just as easily serve
// stale JS after a release as speed anything up. skipWaiting/clients.claim
// make a newly deployed SW take over immediately instead of waiting for
// every open tab to close first.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
