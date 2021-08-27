const express = require('express')
const router = express.Router()
const {addComment,
    getTestimonial,
} = require ('../controllers/CommentController')

router.post('/add', addComment)
router.get('/testimonials', getTestimonial)

module.exports = router