const getData = require('./modules/api.js')
const filterGenres = require('./modules/genres.js')
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "static/public")));
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));

const subjectGames = 'games'
const subjectPlatforms = 'platforms'
const pageSize = '?page_size=20'
const page = '&page=1'
const pageQuery = pageSize + page
const ordering = '?ordering=-games_count'

app.get('/', async (req, res) => {
    //get data
    const gameData = await getData(subjectGames, pageQuery)
    const platformData = await getData(subjectPlatforms, ordering)
    const genres = filterGenres(gameData)

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
    else {
        if (req.query.genres) {
            filteredGameList = checkFiltering(gameList, req.query.genres)
        }
        else {
            filteredGameList = gameList
        }
    }
    //check genre filter


    // render page with the lists
    res.render('overview', { games: filteredGameList, platforms: platformList, genres: genres })
})

app.get('/games/:id', async (req, res) => {
    //get gamedata
    const game = await getData('games/' + req.params.id)
    //render page with gamedata
    res.render('detail', { game: game })
})

//start express server
app.listen(port, () => {
    console.log(`app listening on port: ${port}`)
})

function checkFiltering(array, filter) {
    if (filter === 'all') {
        return array
    }
    else {
        return array.filter(game => {
            return game.genres[0].name === filter
        })
    }
}