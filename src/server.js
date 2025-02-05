require('dotenv').config()
const express = require('express')
const config = require('./config/config.js')
const webRoutes = require('./routes/web.js')
const connection = require('./config/database.js')
const app = express()
const PORT = process.env.PORT || 8888
const HOST_NAME = process.env.HOST_NAME

config(app)

app.use('/', webRoutes)


const test = 1;
(async () => {
    try {
        await connection();
        app.listen(PORT, HOST_NAME, () => {
            console.log(`App listening on port ${PORT}`)
        });
    } catch (error) {
        console.log("Error connect to database : ", error)
    }
})()

