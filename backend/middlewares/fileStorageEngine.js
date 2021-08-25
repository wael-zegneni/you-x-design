const multer = require("multer");
const fileStorageEnginecv = multer.diskStorage({
    destination :(req, file ,cb)=> {
        cb(null, './public/uploads/cv')
    },
    filename :(req,file, cb)=> {
        cb(null, Date.now()+"-"+ file.originalname)
    }

});
const fileStorageEngineCourse = multer.diskStorage({
    destination :(req, file ,cb)=> {
        cb(null, './public/uploads/courses/img')
    },
    filename :(req,file, cb)=> {
        cb(null, Date.now()+"-"+ file.originalname.replace(/ /g,'-'))
    }

});
const uploadCv = multer({storage: fileStorageEnginecv})
const uploadCourse = multer({storage: fileStorageEngineCourse}) 

module.exports = {
    uploadCv,
    uploadCourse

};