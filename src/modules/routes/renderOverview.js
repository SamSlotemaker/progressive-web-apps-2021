const getData = require('../api/api.js')
const createUniqueGenreList = require('../genres.js')
const filterGameList = require('../filter.js')

const subjectGames = 'games'
const pageSize = '?page_size=10'
let gameData = null;

//renders the overview page
async function renderOverviewPage(req, res) {
    //get data when it doensn't already exist
    let pageNumber = 1;
    if (req.query.page) {
        pageNumber = parseInt(req.query.page)
    }
    let page = '&page=' + pageNumber
    const pageQuery = pageSize + page
    gameData = await getData(subjectGames, pageQuery)
    //create unique genrelist
    const genres = createUniqueGenreList(gameData)
    //extract results from data
    const gameList = gameData.results

    //filter gamelist on what query has been entered, returns original array on empty queries
    let filteredGameList = filterGameList(gameList, req.query.search, req.query.genres)

    //paging
    let prevPage = pageNumber - 1
    let nextPage = pageNumber + 1
    // render page with the lists
    res.render('overview', { games: filteredGameList, genres: genres, filteredGenre: req.query.genres, searchQuery: req.query.search, prevPage, nextPage })
}

function sendGamesJSON(req, res) {
    res.json(gameData)
}

exports.sendGamesJSON = sendGamesJSON
exports.renderOverviewPage = renderOverviewPage


