//filters gameList on given queries
module.exports = function filterGameList(array, searchQuery, genreQuery) {
    //check search
    if (searchQuery) {
        return filterOnSearch(array, searchQuery)
    }
    //check genre filter
    else if (genreQuery) {
        return filterOnGenre(array, genreQuery)
    }
    //return original array
    else {
        return array;
    }
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

//filters given array on given searchQuery
function filterOnSearch(array, searchQuery) {
    return array.filter(item => {
        return item.name.toLowerCase().includes(searchQuery)
    })
}
