let radios = document.querySelectorAll('form>input')
let gamesSection = document.querySelector('.games')
let gameList = null

//add rending from gamelist to each radio button on change
radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        renderGameList(gameList, e.target.value)
    })
})
//fetch data from backend
getData('/gamesJSON').then(result => {
    gameList = result
})
//render gameList into html
function renderGameList(gameList, value) {
    const filteredList = filterOnGenre(gameList, value)
    const gameArticles = createGameList(filteredList)
    gamesSection.innerHTML = ''
    gameArticles.forEach(article => {
        gamesSection.insertAdjacentHTML('beforeend', article)
    })

}
//filters given array on given genre
function filterOnGenre(array, genre) {
    if (genre === 'all') {
        return array
    }
    else {
        return array.filter(game => {
            return game.genres[0].name === genre
        })
    }
}
//fetch data from url and return results property
function getData(url) {
    return fetch(url).then(response => response.json()).then(result => {
        return result.results
    })
}
// return array with game articles
function createGameList(gameList) {
    // check for filtering
    return gameList.map(game => {
        //insert game articles
        return (
            `<article class="game">
                    <a href='game/${game.id}'>
                        <header>
                            <h2>${game.name}</h2>
                            <h3>Rating: ${game.rating}</h3>
                        </header>
                      
                            <p class="genre">${game.genres[0].name}</p>
                            <div class="thumbnail-container">               
                        
                        </div>   
                        <img src="${game.background_image}" alt=""/> 
                        </a>
                    </article>`)
    })
}