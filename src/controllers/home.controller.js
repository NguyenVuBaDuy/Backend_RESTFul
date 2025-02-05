
const connection = require('../config/database.js')
const { getAllUsers, getUserByID, createUser, updateUser, deleteUser } = require('../services/crud.services.js')

const User = require('../models/user.js')

const getHomePage = async (req, res) => {
    const users = await User.find({})
    return res.render('home.page.ejs', { users })
}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body
    createUser(email, name, city)
    res.send('Create User Successfully')
}

const getCreatePage = (req, res) => {
    res.render('create.user.ejs')
}

const getUpdatePage = async (req, res) => {
    const id = req.params.id
    const user = await getUserByID(id)
    if (user) res.render('edit.user.ejs', { user })
    else res.send("Don't have user have this id")
}

const postUpdateUser = async (req, res) => {
    const { email, name, city, id } = req.body
    updateUser(id, email, name, city)
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const id = req.params.id
    const user = await getUserByID(id)
    res.render("delete.user.ejs", { user })
}

const postHandleRemove = async (req, res) => {
    const id = req.body.id
    deleteUser(id)
    res.redirect('/')
}

module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemove,
}