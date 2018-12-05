const express = require('express')
const router = express.Router()
const axios = require('axios')
require('../secrets')

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
console.log('key', API_KEY)

router.get('/:content', (req, res, next) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params.content}&api_key=${API_KEY}`)
        .then(res => res.data)
        .then(results => res.send(results))
})

module.exports = router;