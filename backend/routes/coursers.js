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
const {addRating}=require('../controllers/RatingController');
const Course = require('../models/Course');

router.get('/', getCourses)
router.get('/instructor', getCourseForInstructor)
router.get('/new', getCoursesByDate)
router.get('/getone', getCourseById)
router.post('/add',uploadCourse.single('thumbnail'),addCourse)
router.patch('/update',uploadCourse.single('thumbnail'),updateCourse)
router.delete('/delete',deleteCourse)
<<<<<<< HEAD
router.post('/rate', addRating)
router.get('/courses',paginatedResults(Course,'instructor', 12), (req, res) => {
=======
router.get('/courses',paginatedResults(Course,'instructor', 6), (req, res) => {
>>>>>>> 3feb9d8bbcc7fe8aa7cf8f1bf7c1528e35c34830
  
    console.log('paginatedresults ' + res.paginatedResults)
    res.send(res.paginatedResults)
  
    
  })
  
module.exports = router
