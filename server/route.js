const express = require('express')
const router = express.Router()
const axios = require('axios')
require('../secrets')

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// This route returns an array of images based on the query(content) provided
router.get('/:content', (req, res, next) => {
    return axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params.content}&api_key=${API_KEY}`)
        .then(res => res.data)
        .then(results => res.send(results))
        .catch(next)
})

// This route returns an array of trending gifs 
router.get('/trending', (req, res, next) => {
    return axios.get(`http://api.giphy.com/v1/gifs/trending&api_key=${API_KEY}`)
        .then(res => res.data)
        .then(results => res.send(results))
        .catch(next)
})

module.exports = router;