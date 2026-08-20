/* 健康教练 PWA - Service Worker
   离线缓存应用外壳，保证后台/离线可用 */
const CACHE_NAME = "health-coach-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./data.js",
  "./manifest.json",
  "./icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // 仅处理同源 GET
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  // 网络优先，失败回退缓存（数据文件始终取最新）
  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
  );
});
