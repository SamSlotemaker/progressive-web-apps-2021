module.exports = function checkFiltering(array, filter) {
    if (filter === 'all') {
        return array
    }
    else {
        return array.filter(game => {
            return game.genres[0].name === filter
        })
    }
}