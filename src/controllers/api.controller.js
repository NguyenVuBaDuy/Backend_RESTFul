const User = require('../models/user.js')
const { uploadSingleFile, uploadMultipleFiles } = require('../services/file.service.js')

const getUsersAPI = async (req, res) => {
    const users = await User.find({})
    return res.status(200).json({
        errorCode: 0,
        data: users
    })
}


const createUserAPI = async (req, res) => {
    const { email, name, city } = req.body
    const user = await User.create({
        email, name, city
    })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const updateUserAPI = async (req, res) => {
    const { email, name, city, id } = req.body
    const user = await User.updateOne({ _id: id }, { email, name, city })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    const id = req.body.id
    const user = await User.deleteOne({ _id: id })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const uploadSingleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    const result = await uploadSingleFile(req.files.image)
    console.log(">>> check result : ", result)

    return res.send('upload single file')
}

const uploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    if (Array.isArray(req.files.image)) {
        const result = await uploadMultipleFiles(req.files.image)
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    } else {
        return await uploadSingleFileAPI(req, res)
    }
}

module.exports = {
    getUsersAPI,
    createUserAPI,
    updateUserAPI,
    deleteUserAPI,
    uploadSingleFileAPI,
    uploadMultipleFilesAPI
}