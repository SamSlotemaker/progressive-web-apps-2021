// SERVICEWORKER
if ('serviceWorker' in navigator) {
    send().catch(err => console.error(err))
}

// Register service worker
async function send() {
    const register = await navigator.serviceWorker.register('../service-worker.js', {
        scope: '/'
    })
}

//hide submit button when javascript is enabled;
const submitGenreButton = document.querySelector('.submit-genre-button')
if (submitGenreButton) {
    submitGenreButton.classList.add('hide')
}


const offlinePage = document.querySelector('.cache-links-container')
if (offlinePage) {
    caches.open('html-cache').then(function (cache) {
        cache.keys().then(function (cacheNames) {
            let cacheURLS = cacheNames.map(name => name.url)
            console.log(cacheURLS)

            let anchorsHTML = createCacheAnchors(cacheURLS)
            anchorsHTML.forEach(anchor => {
                offlinePage.insertAdjacentHTML('beforeend', anchor)
            })
        })
    });
}

function createCacheAnchors(array) {
    return array.map(item => {
        return `
        <a class="cache-links" href='${item}'>${item}</a>
        `
    })
}
