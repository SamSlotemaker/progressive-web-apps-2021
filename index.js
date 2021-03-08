const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));


app.get('/', (req, res) => {
    res.render('overview')
})


app.listen(port, () => {
    console.log(`app listening on port: ${port}`)
})