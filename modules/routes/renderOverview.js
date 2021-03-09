const getData = require('../api.js')
const createUniqueGenreList = require('../genres.js')
const checkFiltering = require('../filter.js')

const subjectGames = 'games'
const subjectPlatforms = 'platforms'
const pageSize = '?page_size=20'
const page = '&page=1'
const pageQuery = pageSize + page
const ordering = '?ordering=-games_count'

//set initial datastate to null
let gameData = null;
let platformData = null;

module.exports = async function renderOverviewPage(req, res) {
    //get data when it doensn't already exist
    if (!gameData && !platformData) {
        gameData = await getData(subjectGames, pageQuery)
        platformData = await getData(subjectPlatforms, ordering)
        console.log('retrieve data...')
    }
    //filter genres
    const genres = createUniqueGenreList(gameData)

    //extract results from data
    const gameList = gameData.results
    const platformList = platformData.results

    let filteredGameList
    //check search
    if (req.query.search) {
        filteredGameList = gameList.filter(item => {
            return item.name.toLowerCase().includes(req.query.search)
        })
    }
    //check genre filter
    else if (req.query.genres) {
        filteredGameList = checkFiltering(gameList, req.query.genres)
    }
    else {
        filteredGameList = gameList
    }

    // render page with the lists
    res.render('overview', { games: filteredGameList, platforms: platformList, genres: genres, filteredGenre: req.query.genres, searchQuery: req.query.search })
}