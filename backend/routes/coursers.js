const express = require('express');
const router = express.Router();
// const {paginatedResults} = require('../middlewares/pagination')
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
  function paginatedResults  (model)  {
        return async (req, res, next) => {
          const page = parseInt(req.query.page)
          const limit = parseInt(req.query.limit)
      
          const startIndex = (page - 1) * limit
          const endIndex = page * limit
      
          const results = {}
      
          if (endIndex < await model.countDocuments().exec()) {
            results.next = {
              page: page + 1,
              limit: limit
            }
          }
          
          if (startIndex > 0) {
            results.previous = {
              page: page - 1,
              limit: limit
            }
          }
          try {
            results.results = await model.find().limit(limit).skip(startIndex).exec()
            res.paginatedResults = results
            next()
          } catch (e) {
            res.status(500).json({ message: e.message })
          }
        }
    }
module.exports = router
