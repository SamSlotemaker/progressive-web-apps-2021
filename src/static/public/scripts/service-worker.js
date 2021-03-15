//when worker installs
self.addEventListener('install', (event) => {
    console.log('installing')
    event.waitUntil((async () => {
        const cacheOffline = await caches.open('offline');
        await cacheOffline.add(new Request('/offline'));

        const cacheCss = await caches.open('cached-css');
        await cacheCss.add(new Request('/styles/style.css'));

        self.skipWaiting()
    })())
});

//when worker activates
self.addEventListener('activate', (event) => {
    console.log('activate')
});

//when worker fetches
self.addEventListener('fetch', (event) => {
    event.respondWith((async () => {
        try {
            //try to fetch the urls
            const networkResponse = await fetch(event.request);
            return networkResponse;
        } catch (error) {
            //catch error when fetching fails and respond with the offline page
            const cache = await caches.open('offline');
            const cachedResponse = await cache.match('/offline');
            return cachedResponse;
        }
    })());
});