const getData = require('../api.js')

module.exports = async function renderDetailPage(req, res) {
    //get gamedata
    const game = await getData('games/' + req.params.id)
    //render page with gamedata
    res.render('detail', { game: game })
}