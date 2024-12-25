require('dotenv').config()
const express = require('express')
const path = require('path')
const config = require('./config/config.js')
const webRoutes = require('./routes/web.js')
const mysql = require('mysql2')

const app = express()
const PORT = process.env.PORT || 8888
const HOST_NAME = process.env.HOST_NAME

config(app)

app.use('/test', webRoutes)

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    database: 'baduy',
    password: '123456'
})

connection.query(
    'select * from Users',
    function (err, results, fields) {
        console.log(">>>check results", results)
    }
)

app.listen(PORT, HOST_NAME, () => {
    console.log(`Example app listening on port ${PORT}`)
})