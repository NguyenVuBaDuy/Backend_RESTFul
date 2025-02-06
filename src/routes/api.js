const express = require('express')
const { getUsersAPI, createUser, updateUser, deleteUser } = require('../controllers/api.controller')
const routerAPI = express.Router()


routerAPI.get("/users", getUsersAPI)
routerAPI.post("/users", createUser)
routerAPI.put("/users", updateUser)
routerAPI.delete("/users", deleteUser)

module.exports = routerAPI