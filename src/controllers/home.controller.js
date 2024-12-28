
const { getUserByID, deleteUser } = require('../services/crud.services.js')
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
    await User.create({ email, name, city })
    res.send('Successfully Created User')
}

const getCreatePage = (req, res) => {
    res.render('create.user.ejs')
}

const getUpdatePage = async (req, res) => {
    const id = req.params.id
    let user = await User.findById(id).exec()
    res.render('edit.user.ejs', { user })
}

const postUpdateUser = async (req, res) => {
    const { email, name, city, id } = req.body
    await User.updateOne({ _id: id }, { name, email, city })
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const id = req.params.id
    let user = await User.findById(id).exec()
    res.render("delete.user.ejs", { user })
}

const postHandleRemove = async (req, res) => {
    const id = req.body.id
    await User.deleteOne({
        _id: id
    })
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