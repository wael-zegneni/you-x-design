const express = require('express');
const router = express.Router();
const {addCourse,getCourses,updateCourse,deleteCourse} = require('../controllers/CourseController')
const {uploadCourse} = require('../middlewares/fileStorageEngine')

router.route('/').get(getCourses)
router.post('/add',uploadCourse.single('thumbnail'),addCourse)
router.patch('/update',uploadCourse.single('thumbnail'),updateCourse)
router.delete('/delete',deleteCourse)

module.exports = router
