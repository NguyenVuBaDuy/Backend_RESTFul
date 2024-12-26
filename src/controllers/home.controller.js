
const connection = require('../config/database.js')

const getHomePage = (req, res) => {
    return res.render('home.page.ejs')
}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    const { email, name, city } = req.body
    connection.query(
        `INSERT INTO 
        Users(email, name, city) 
        VALUES(?,?,?) `,
        [email, name, city], function (err, results) {
            console.log(results)
            res.send("Create user successfully")
        })
}

module.exports = {
    getHomePage,
    getABC,
    postCreateUser
}