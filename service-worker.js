var chacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {
    self.skipwaiting();

event.waitUntil(
    caches.open(cacheName)
        .then(cache => cache.addAll([

            './index.html',
            './assets/css/main.css',
            './images/logoSH.png',
            






        ]))
);
    });