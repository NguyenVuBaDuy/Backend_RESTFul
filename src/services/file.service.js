
const path = require('path')

const uploadSingleFile = async (fileObject) => {
    const timestamp = Date.now()
    const fileExtension = path.extname(fileObject.name)
    const fileNameWithoutExt = path.basename(fileObject.name, fileExtension)
    const newFileName = `${fileNameWithoutExt}_${timestamp}${fileExtension}`
    const uploadPath = path.resolve(__dirname, '../public/images/upload', newFileName)
    try {
        await fileObject.mv(uploadPath)
        return {
            status: "success",
            path: newFileName,
            error: null
        }
    } catch (err) {
        console.log(">>> check err : ", err)
        return {
            status: "failed",
            path: "null",
            error: JSON.stringify(err)
        }
    }
}

const uploadMultipleFiles = async (files) => {
    try {
        const uploadPath = path.resolve(__dirname, '../public/images/upload')
        const resultArr = []
        let countSuccess = 0
        for (let i = 0; i < files.length; i++) {
            const timestamp = Date.now()
            const fileExtension = path.extname(files[i].name)
            const fileNameWithoutExt = path.basename(files[i].name, fileExtension)
            const newFileName = `${fileNameWithoutExt}_${timestamp}${fileExtension}`
            const finalPath = `${uploadPath}/${newFileName}`

            try {
                await files[i].mv(finalPath)
                resultArr.push({
                    status: "success",
                    path: newFileName,
                    fileName: files[i].name,
                    error: null
                })
                countSuccess++
            } catch (err) {
                console.log(">>> check err : ", err)
                resultArr.push({
                    status: "failed",
                    path: "null",
                    fileName: files[i].name,
                    error: JSON.stringify(err)
                })
            }
        }

        return {
            countSuccess: countSuccess,
            detail: resultArr
        }

    } catch (error) {

    }
}

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles,
}