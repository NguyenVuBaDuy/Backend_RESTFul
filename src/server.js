require('dotenv').config()
const express = require('express')
const path = require('path')
const config = require('./config/config.js')
const webRoutes = require('./routes/web.js')
const connection = require('./config/database.js')

const app = express()
const PORT = process.env.PORT || 8888
const HOST_NAME = process.env.HOST_NAME

config(app)

app.use('/', webRoutes)


connection.query(
    'select * from Users',
    function (err, results, fields) {
        console.log(">>>check results", results)
    }
)

app.listen(PORT, HOST_NAME, () => {
    console.log(`Example app listening on port ${PORT}`)
})