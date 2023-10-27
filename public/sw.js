// Incrementing OFFLINE_VERSION will kick off the install event and force
// previously cached resources to be updated from the network.
// This variable is intentionally declared and unused.
const OFFLINE_VERSION = 1;

const CACHE_NAME = "offline";
const OFFLINE_URL = "/banking-web/offline";
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      // Setting {cache: 'reload'} in the new request ensures that the
      // response isn't fulfilled from the HTTP cache; i.e., it will be
      // from the network.
      const res = await fetch(
        new Request(`${OFFLINE_URL}`, {
          cache: "reload",
        })
      );
      const resClone = res.clone();
      const cache = await caches.open(CACHE_NAME);
      await cache.put(OFFLINE_URL, resClone);
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      // See https://developers.google.com/web/updates/2017/02/navigation-preload
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Only call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          // Use the navigation preload response if it's supported.
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          // Always try the network first.
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          // Only catch if an exception is thrown
          // HTTP response in the range of 4xx or 5xx will NOT trigger the catch().
          console.log("Fetch failed; returning offline page instead.", error);

          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(OFFLINE_URL);
          return cachedResponse;
        }
      })()
    );
  }
});
