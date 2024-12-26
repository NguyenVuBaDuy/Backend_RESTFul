const express = require('express')
const { getHomePage, getABC, postCreateUser } = require('../controllers/home.controller.js')
const router = express.Router()


router.get("/", getHomePage)
router.get("/abc", getABC)

router.post("/create-user", postCreateUser)


module.exports = router