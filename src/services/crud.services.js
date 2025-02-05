
const connection = require('../config/database.js')
const User = require('../models/user.js')

const getAllUsers = async () => {
    const [results, fields] = await connection.query(
        'select * from Users'
    )
    return results
}

const getUserByID = async (id) => {
    const results = await User.findById(id).exec()
    return results
}

const createUser = async (email, name, city) => {
    await User.create({
        email, name, city
    })
}

const updateUser = async (id, email, name, city) => {
    await User.updateOne({ _id: id }, { email, name, city })
}

const deleteUser = async (id) => {
    await User.deleteOne({ _id: id })
}

module.exports = {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
}