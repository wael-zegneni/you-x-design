const express = require('express')
const router = express.Router()
const {addComment,
    getTestimonial,
    getCommentByCourseId,
} = require ('../controllers/CommentController')

router.post('/add', addComment)
router.get('/testimonials', getTestimonial)
router.get('/', getCommentByCourseId)

module.exports = router