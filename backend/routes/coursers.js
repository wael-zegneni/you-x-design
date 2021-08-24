const express = require('express');
const router = express.Router();
const {addCourse,getCourses} = require('../controllers/CourseController')
const {uploadCourse} = require('../middlewares/fileStorageEngine')

router.route('/').get(getCourses)
router.post('/add',uploadCourse.single('thumbnail'),addCourse)

module.exports = router
