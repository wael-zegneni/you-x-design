const express = require('express');
const router = express.Router();
const {addCourse,getCourses} = require('../controllers/CourseController')

router.route('/').get(getCourses)
router.route('/add').post(addCourse)

module.exports = router
