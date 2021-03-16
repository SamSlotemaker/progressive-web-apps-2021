const CORE_CACHES = 'core_assets'
const urlsToCache = [
    '/offline',
    '/styles/style.css',
    '/gamesJSON'
]

//when worker installs
self.addEventListener('install', (event) => {
    console.log('installing')
    event.waitUntil((async () => {
        const cacheOffline = await caches.open(CORE_CACHES)
        await cacheOffline.addAll(urlsToCache).then(() => {
            self.skipWaiting()
        })
    })())
})

//when worker activates
self.addEventListener('activate', (event) => {
    console.log('activate')
    event.waitUntil(clients.claim());
})

//when worker fetches
self.addEventListener('fetch', (event) => {
    //catch failing html requests 
    if (isHtmlRequest(event.request)) {
        event.respondWith((async () => {
            try {
                //try to fetch the urls
                return caches.open('html-cache')
                    .then(cache => cache.match(event.request.url))
                    .then(response => response ? response : fetchAndCache(event.request, 'html-cache'))

                // const networkResponse = await fetch(event.request)
                // return networkResponse
            } catch (error) {
                //catch error when fetching fails and respond with the offline page
                const cache = await caches.open(CORE_CACHES)
                const cachedResponse = await cache.match('/offline')
                return cachedResponse
            }
        })())
    }
    //catch failing css requests
    else if (isCssRequest(event.request)) {
        event.respondWith((async () => {
            try {
                //try to fetch the urls
                const networkResponse = await fetch(event.request)
                return networkResponse
            } catch (error) {
                //catch error when fetching fails and respond with the offline page
                const cache = await caches.open(CORE_CACHES)
                const cachedResponse = await cache.match('/styles/style.css')
                return cachedResponse
            }
        })())
    }
})

function isHtmlRequest(request) {
    return request.method === 'GET' &&
        request.headers.get('accept').indexOf('text/html') !== -1
}
function isCssRequest(request) {
    return request.method === 'GET' &&
        request.headers.get('accept').indexOf('text/css') !== -1
}

function fetchAndCache(request, cacheName) {
    return fetch(request)
        .then(response => {
            if (!response.ok) {
                throw new TypeError('Bad response status');
            }

            const clone = response.clone()
            caches.open(cacheName).then((cache) => cache.put(request, clone))
            return response
        })
}