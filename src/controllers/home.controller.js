
const getHomePage = (req, res) => {
    res.send("Hello")
}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getABC
}