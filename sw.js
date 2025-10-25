self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('fortune-cache-v1').then(cache => cache.addAll([
      './',
      './index.html',
      './manifest.webmanifest',
      './sw.js',
      './icons/icon-192.png',
      './icons/icon-512.png',
      './icons/icon-180.png'
    ]))
  );
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
