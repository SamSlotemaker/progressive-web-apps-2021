const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const getData = require('./modules/api.js')
const createUniqueGenreList = require('./modules/genres.js')
const checkFiltering = require('./modules/filter.js')

const subjectGames = 'games'
const subjectPlatforms = 'platforms'
const pageSize = '?page_size=20'
const page = '&page=1'
const pageQuery = pageSize + page
const ordering = '?ordering=-games_count'

//set initial datastate to null
let gameData = null;
let platformData = null;

//declare middleware
app.use(express.static(path.join(__dirname, "static/public")));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));

app.get('/', async (req, res) => {
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