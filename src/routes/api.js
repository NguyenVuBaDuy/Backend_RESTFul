const express = require('express')
const { getAllUSersAPI } = require('../controllers/api.controller.js')
const routerAPI = express.Router()


routerAPI.get("/", (req, res) => {
    res.send("Restful API")
})

routerAPI.get("/abc", (req, res) => {
    res.status(200).json({
        data: "First API with baduy",
        message: "Baduy"

    })
})

routerAPI.get("/users", getAllUSersAPI)



module.exports = routerAPI