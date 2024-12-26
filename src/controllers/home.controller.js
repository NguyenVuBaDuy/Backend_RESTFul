
const connection = require('../config/database.js')

const getHomePage = (req, res) => {
    return res.render('home.page.ejs')
}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getABC
}