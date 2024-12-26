
const connection = require('../config/database.js')
const { getAllUsers } = require('../services/crud.services.js')

const getHomePage = async (req, res) => {
    const users = await getAllUsers()
    return res.render('home.page.ejs', { users })
}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body
    const [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES(?,?,?) `, [email, name, city]
    )
    res.send('Create User Successfully')
}

const getCreatePage = (req, res) => {
    res.render('create.user.ejs')
}

module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage
}