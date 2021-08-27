const express = require('express');
const router = express.Router();
const {addCourse,
    getCourses,
    updateCourse,
    deleteCourse,
    getCourseById,
} = require('../controllers/CourseController')
const {uploadCourse} = require('../middlewares/fileStorageEngine')

router.get('/', getCourses)
router.get('/getone', getCourseById)
router.post('/add',uploadCourse.single('thumbnail'),addCourse)
router.patch('/update',uploadCourse.single('thumbnail'),updateCourse)
router.delete('/delete',deleteCourse)

module.exports = router
