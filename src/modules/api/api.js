const fetch = require("node-fetch")
const baseURL = 'https://api.rawg.io/api/'

module.exports = async function getData(subject, query) {
    try {
        let url = baseURL + subject
        !query || (url += query + '&') //add query to url when given
        query || (url += '?')
        url += 'key=b7f15a856765429c84087fadd9e167e7'

        //fetch data if not available local
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch (err) {
        return err
    }
}