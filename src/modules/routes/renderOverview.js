const getData = require('../api/api.js')
const createUniqueGenreList = require('../genres.js')
const filterGameList = require('../filter.js')

const subjectGames = 'games'
const subjectPlatforms = 'platforms'
const pageSize = '?page_size=20'
const page = '&page=1'
const pageQuery = pageSize + page
const ordering = '?ordering=-games_count'

//set initial datastate to null
let gameData = null
let platformData = null

//renders the overview page
async function renderOverviewPage(req, res) {
    //get data when it doensn't already exist
    if (!gameData && !platformData) {
        gameData = await getData(subjectGames, pageQuery)
        platformData = await getData(subjectPlatforms, ordering)
        console.log('retrieve data...')
    }
    //create unique genrelist
    const genres = createUniqueGenreList(gameData)

    //extract results from data
    const gameList = gameData.results
    const platformList = platformData.results

    //filter gamelist on what query has been entered, returns original array on empty queries
    let filteredGameList = filterGameList(gameList, req.query.search, req.query.genres)

    // render page with the lists
    res.render('overview', { games: filteredGameList, platforms: platformList, genres: genres, filteredGenre: req.query.genres, searchQuery: req.query.search })
}

function passJson(req, res) {
    res.json(gameData)
}

exports.passJson = passJson
exports.renderOverviewPage = renderOverviewPage


