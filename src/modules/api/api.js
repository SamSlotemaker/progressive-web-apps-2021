const fetch = require("node-fetch")
const baseURL = 'https://api.rawg.io/api/'
require('dotenv').config()

module.exports = async function getData(subject, query) {
    try {
        let url = baseURL + subject
        !query || (url += query + '&') //add query to url when given
        query || (url += '?')
        url += 'key=' + process.env.API_KEY

        //fetch data if not available local
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch (err) {
        console.log(err)
        return err
    }
}