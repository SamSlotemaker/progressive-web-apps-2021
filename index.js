const getData = require('./modules/api.js')
const filterGenres = require('./modules/genres.js')
const express = require("express");
const app = express();
const port = process.ENV.port || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "static/public")));
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
    // render page with the lists
    res.render('overview', { games: gameList, platforms: platformList, genres: genres })
})

app.get('/games/:id', async (req, res) => {
    //get gamedata
    const game = await getData('games/' + req.params.id)
    //render page with gamedata
    res.render('detail', { game: game })
})

app.listen(port, () => {
    console.log(`app listening on port: ${port}`)
})




