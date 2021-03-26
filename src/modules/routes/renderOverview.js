const getData = require('../api/api.js')
const createUniqueGenreList = require('../genres.js')
const filterGameList = require('../filter.js')

const subjectGames = 'games'
const subjectPlatforms = 'platforms'
const pageSize = '?page_size=10'
const ordering = '?ordering=-games_count'

//set initial datastate to null
let gameData = null
let platformData = null

//renders the overview page
async function renderOverviewPage(req, res) {
    //get data when it doensn't already exist
    let page = '&page='
    if (req.query.page) {
        page += req.query.page
    } else {
        page += '1'
    }
    const pageQuery = pageSize + page
    console.log('getting:' + pageQuery)
    gameData = await getData(subjectGames, pageQuery)
    platformData = await getData(subjectPlatforms, ordering)
    console.log('retrieve data...')
    //create unique genrelist
    const genres = createUniqueGenreList(gameData)
    //extract results from data
    const gameList = gameData.results

    //filter gamelist on what query has been entered, returns original array on empty queries
    let filteredGameList = filterGameList(gameList, req.query.search, req.query.genres)

    // render page with the lists
    res.render('overview', { games: filteredGameList, genres: genres, filteredGenre: req.query.genres, searchQuery: req.query.search })
}

function sendGamesJSON(req, res) {
    res.json(gameData)
}

exports.sendGamesJSON = sendGamesJSON
exports.renderOverviewPage = renderOverviewPage


