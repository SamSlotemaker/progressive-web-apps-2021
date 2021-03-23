// SERVICEWORKER
if ('serviceWorker' in navigator) {
    send().catch(err => console.error(err))
}

// Register service worker
async function send() {
    const register = await navigator.serviceWorker.register('../service-worker.js', {
        scope: '/'
    })
    console.log('Registered worker')
}

//hide submit button when javascript is enabled;
const submitGenreButton = document.querySelector('.submit-genre-button')
if (submitGenreButton) {
    submitGenreButton.classList.add('hide')
}


