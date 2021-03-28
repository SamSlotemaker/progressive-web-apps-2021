const CORE_CACHE_VERSION = 'v11'
const CORE_CACHES = 'core_assets'
const CASH_NAME = CORE_CACHES + '-' + CORE_CACHE_VERSION
//core urls to always cache on install
const urlsToCache = [
    '/offline',
    '/styles/style.css',
    '/scripts/filter.js',
    '/scripts/script.js',
]

//when worker installs
self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        const cacheOffline = await caches.open(CASH_NAME)
        await cacheOffline.addAll(urlsToCache).then(() => {
            self.skipWaiting()
        })
    })())
})

//when worker activates
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim())

    //delete old caches
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    if (cacheName !== 'html-assets' && cacheName.includes(CORE_CACHES) && cacheName !== CASH_NAME) {
                        return true
                    }
                }).map(function (cacheName) {
                    return caches.delete(cacheName)
                })
            )
        })
    )
})

//when worker fetches
self.addEventListener('fetch', (event) => {
    //catch core files 
    if (isCoreGetRequest(event.request)) {
        return event.respondWith(
            caches.open(CASH_NAME)
                .then(cache => cache.match(event.request.url))
        )
    }
    //html requests
    else if (isHtmlRequest(event.request)) {
        return event.respondWith((async () => {
            //try to fetch the urls
            return caches.open('html-cache')
                .then(cache => cache.match(event.request.url))
                .then(response => response ? response : fetchAndCache(event.request, 'html-cache'))
                .catch(error => {
                    //catch failing html requests 
                    return caches.open(CASH_NAME)
                        .then(cache => cache.match('/offline'))
                })
        }
        )())
    }
})
//fetch page, put response in cache and return response
function fetchAndCache(request, cacheName) {
    return fetch(request)
        .then(response => {
            if (!response.ok) {
                throw new TypeError('Bad response status')
            }
            const clone = response.clone()
            caches.open(cacheName).then((cache) => cache.put(request, clone))
            return response
        })
}

function isHtmlRequest(request) {
    try {
        return request.method === 'GET' &&
            request.headers.get('accept').indexOf('text/html') !== -1
    }
    catch (err) {
        return false
    }
}
function isCoreGetRequest(request) {
    const url = new URL(request.url)
    const pathname = url.pathname
    return request.method === 'GET' && urlsToCache.includes(pathname)
}
