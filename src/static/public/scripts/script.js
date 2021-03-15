// SERVICEWORKER
if ('serviceWorker' in navigator) {
    send().catch(err => console.error(err))
}
else {
    console.log('no servicve worker')
}

// Register service worker
async function send() {
    console.log('Registering service worker...')
    const register = await navigator.serviceWorker.register('./service-worker.js', {
        scope: '/'
    })
    console.log('Registered worker');
}

//handle form submit on radiobutton change
const genreButtons = document.querySelectorAll('main section>form>input')

// if (genreButtons) {
//     genreButtons.forEach(button => {
//         button.addEventListener('change', function () {
//             this.form.submit()
//         })
//     })
// }

//hide submit button when javascript is enabled;
const submitGenreButton = document.querySelector('.submit-genre-button')
if (submitGenreButton) {
    submitGenreButton.classList.add('hide')
}


