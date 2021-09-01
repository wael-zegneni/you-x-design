const express = require('express');
const router = express.Router();
const { paginatedResults } = require('../middlewares/pagination')
const {addCourse,
    getCourses,
    updateCourse,
    deleteCourse,
    getCourseById,
    getCoursesByDate,
} = require('../controllers/CourseController')
const {uploadCourse} = require('../middlewares/fileStorageEngine');
const Course = require('../models/Course');

router.get('/', getCourses)
router.get('/new', getCoursesByDate)
router.get('/getone', getCourseById)
router.post('/add',uploadCourse.single('thumbnail'),addCourse)
router.patch('/update',uploadCourse.single('thumbnail'),updateCourse)
router.delete('/delete',deleteCourse)
router.get('/courses',paginatedResults(Course), (req, res) => {
    res.send(res.paginatedResults)
  })
  
module.exports = router
