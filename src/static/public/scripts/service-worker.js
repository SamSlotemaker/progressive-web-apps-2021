const CACHE_NAME = 'core_assets'
const urlsToCache = [
    '/offline',
    '/styles/style.css'
]

//when worker installs
self.addEventListener('install', (event) => {
    console.log('installing')
    event.waitUntil((async () => {
        const cacheOffline = await caches.open(CACHE_NAME)
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
                const networkResponse = await fetch(event.request)
                return networkResponse
            } catch (error) {
                //catch error when fetching fails and respond with the offline page
                const cache = await caches.open(CACHE_NAME)
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
                const cache = await caches.open(CACHE_NAME)
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