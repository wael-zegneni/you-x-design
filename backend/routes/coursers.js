const express = require('express');
const router = express.Router();
const { paginatedResults } = require('../middlewares/pagination')
const {addCourse,
    getCourses,
    updateCourse,
    deleteCourse,
    getCourseById,
    getCoursesByDate,
    getCourseForInstructor,
} = require('../controllers/CourseController')
const {uploadCourse} = require('../middlewares/fileStorageEngine');
const Course = require('../models/Course');

router.get('/', getCourses)
router.get('/instructor', getCourseForInstructor)
router.get('/new', getCoursesByDate)
router.get('/getone', getCourseById)
router.post('/add',uploadCourse.single('thumbnail'),addCourse)
router.patch('/update',uploadCourse.single('thumbnail'),updateCourse)
router.delete('/delete',deleteCourse)
router.get('/courses',paginatedResults(Course,'instructor', 6), (req, res) => {
  
    console.log('paginatedresults ' + res.paginatedResults)
    res.send(res.paginatedResults)
  
    
  })
  
module.exports = router
