const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000;

app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('/api', require('./route'))

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(port, () => {
    console.log(`server is running nicely at ${port}`)
})

module.exports = app;