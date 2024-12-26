const express = require('express')
const { getHomePage, getUpdatePage, postCreateUser, getCreatePage, postUpdateUser, postDeleteUser, postHandleRemove } = require('../controllers/home.controller.js')
const router = express.Router()


router.get("/", getHomePage)

router.get('/create', getCreatePage)
router.post("/create-user", postCreateUser)

router.get('/update/:id', getUpdatePage)
router.post('/update-user', postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user/', postHandleRemove)


module.exports = router