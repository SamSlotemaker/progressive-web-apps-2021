const CACHE_NAME = 'cached-files';
// Customize this with a different URL if needed.
const OFFLINE_URL = '/offline/';

self.addEventListener('install', (event) => {
    console.log('installing')
    event.waitUntil((async () => {
        const cacheOffline = await caches.open(CACHE_NAME);
        await cacheOffline.add(new Request(OFFLINE_URL));

        const cacheCss = await caches.open('cached-css');
        await cacheCss.add(new Request('/styles/style.css'));

        self.skipWaiting()
    })())
});


self.addEventListener('activate', (event) => {
    console.log('activate')
});

self.addEventListener('fetch', (event) => {
    event.respondWith((async () => {
        try {
            const networkResponse = await fetch(event.request);
            return networkResponse;
        } catch (error) {
            const cache = await caches.open(CACHE_NAME);
            const cachedResponse = await cache.match(OFFLINE_URL);
            return cachedResponse;
        }
    })());
});