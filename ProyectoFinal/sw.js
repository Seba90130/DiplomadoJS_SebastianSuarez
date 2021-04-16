const CACHE_NAME = "cache-app";
const FAITH = "";

self.addEventListener('install', event => {
    console.log("Service Worker: Proceso de instalacion en proceso");

    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
               FAITH + '/index.html',
               FAITH +'/assets/css/style.css',
               FAITH + '/assets/js/main.js',
               FAITH + '/assets/Images/IconoWeb.png'
            ]);
        }).then(() => {
            console.log("Service Worker: Proceso de instalacion completo");
        }).catch(error => console.error(error))

    )
})
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(CACHE_NAME)
            .then(cache => cache.match(event.request, { ignoreSearch: true }))
            .then(response => {
                return response || fetch(event.request)
            }).catch(error => console.log(error))
    )
})

