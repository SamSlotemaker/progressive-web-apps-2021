//returns array with unique genres
module.exports = function createUniqueGenreList(data) {
    const games = data
    const gameList = games.results
    const genreList = gameList.map(game => game.genres[0].name)
    const uniqueGenres = [...new Set(genreList)]
    return uniqueGenres
}