require('dotenv').config()
const express = require('express')
const config = require('./config/config.js')
const webRoutes = require('./routes/web.js')
const apiRoutes = require('./routes/api.js')
const connection = require('./config/database.js')
const fileUpload = require('express-fileupload');
const app = express()
const PORT = process.env.PORT || 8888
const HOST_NAME = process.env.HOST_NAME

// default options
app.use(fileUpload());

config(app)

app.use('/', webRoutes)
app.use('/v1/api/', apiRoutes)


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

