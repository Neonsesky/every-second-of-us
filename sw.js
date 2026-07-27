/* Shady ♥ Nirsh — offline-first, auto-updating */
const CACHE = "sn-clock-v3";
const PRECACHE = [
  "./", "./index.html", "./manifest.webmanifest", "./love-notes.json", "./words.json",
  "./icons/icon-192.png", "./icons/icon-512.png",
  "./icons/apple-touch-icon.png", "./icons/favicon-32.png"
];
/* these always try the network first, so Nirsh's GitHub edits arrive automatically;
   if she's offline, the last cached version loads instead */
const NETWORK_FIRST = ["/", "/index.html", "/love-notes.json", "/words.json"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  const isNetFirst = NETWORK_FIRST.some((p) => url.pathname.endsWith(p));
  if (isNetFirst) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
  } else {
    e.respondWith(
      caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request))
    );
  }
});
