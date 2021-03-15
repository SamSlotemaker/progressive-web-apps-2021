const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

const renderOverviewPage = require('./modules/routes/renderOverview.js')
const renderDetailPage = require('./modules/routes/renderDetail.js')

//declare middleware
app.use(express.static(path.join(__dirname, 'static/public')))
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views/pages'))

//get routes 
app.get('/', renderOverviewPage)
app.get('/games/:id', renderDetailPage)
app.get('/offline', (req, res) => {
    res.render('offline.ejs')
})
app.get("/service-worker.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "static/public/scripts", "service-worker.js"));
});
app.get('*', (req, res) => {
    res.render('error')
})

//start express server
app.listen(port, () => {
    console.log(`app listening on port: ${port}`)
})