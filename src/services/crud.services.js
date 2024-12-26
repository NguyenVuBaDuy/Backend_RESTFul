
const connection = require('../config/database.js')

const getAllUsers = async () => {
    const [results, fields] = await connection.query(
        'select * from Users'
    )
    return results
}

const getUserByID = async (id) => {
    const [results, fields] = await connection.query(
        'select * from Users where Users.id=?',
        [id]
    )
    return results
}

const createUser = async (email, name, city) => {
    const [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES(?,?,?) `, [email, name, city]
    )
    return results
}

const updateUser = async (id, email, name, city) => {
    const [results, fields] = await connection.query(
        `UPDATE Users
         SET email=?, name=?, city= ?
         WHERE id=?
         `, [email, name, city, id]
    )
    return results
}

const deleteUser = async (id) => {
    const [results, fields] = await connection.query(
        `DELETE FROM Users
         WHERE id=?
         `, [id]
    )
    return results
}

module.exports = {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
}