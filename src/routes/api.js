const express = require('express')
const { getUsersAPI, createUserAPI, updateUserAPI, deleteUserAPI, uploadSingleFileAPI, uploadMultipleFilesAPI } = require('../controllers/api.controller')
const routerAPI = express.Router()


routerAPI.get("/users", getUsersAPI)
routerAPI.post("/users", createUserAPI)
routerAPI.put("/users", updateUserAPI)
routerAPI.delete("/users", deleteUserAPI)

routerAPI.post("/file", uploadSingleFileAPI)
routerAPI.post("/files", uploadMultipleFilesAPI)


module.exports = routerAPI