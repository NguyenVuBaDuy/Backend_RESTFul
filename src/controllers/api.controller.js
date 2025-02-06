const User = require('../models/user.js')

const getUsersAPI = async (req, res) => {
    const users = await User.find({})
    return res.status(200).json({
        errorCode: 0,
        data: users
    })
}


const createUser = async (req, res) => {
    const { email, name, city } = req.body
    const user = await User.create({
        email, name, city
    })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const updateUser = async (req, res) => {
    const { email, name, city, id } = req.body
    const user = await User.updateOne({ _id: id }, { email, name, city })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const deleteUser = async (req, res) => {
    const id = req.body.id
    const user = await User.deleteOne({ _id: id })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}


module.exports = {
    getUsersAPI,
    createUser,
    updateUser,
    deleteUser
}