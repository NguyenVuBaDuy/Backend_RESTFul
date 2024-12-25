const express = require('express')
const { getHomePage, getABC } = require('../controllers/home.controller.js')
const router = express.Router()


router.get("/", getHomePage)


router.get("/abc", getABC)


module.exports = router