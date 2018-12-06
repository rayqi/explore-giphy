const express = require('express')
const router = express.Router()
const axios = require('axios')
require('../secrets')

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

router.get('/:content', (req, res, next) => {
    console.log('hitting here')
    return axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params.content}&api_key=${API_KEY}`)
        .then(res => res.data)
        .then(results => res.send(results))
})

router.get('/trending', (req, res, next) => {
    console.log('hitting here')
    return axios.get(`http://api.giphy.com/v1/gifs/trending&api_key=${API_KEY}`)
        .then(res => res.data)
        .then(results => res.send(results))
})



// router.get('/:content', (req, res, next) => {
//     console.log('hitting here')
//     let rating = 'r'
//     axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params.content}&rating=${rating}&api_key=${API_KEY}`)
//         .then(res => res.data)
//         .then(results => res.send(results))
// })




module.exports = router;