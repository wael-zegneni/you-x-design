const Comment = require ('../models/Comment')

const addComment = async (req,res) => {
    try {
        let comment = new Comment({
            content : req.body.content,
            date : Date.now(),
            istestimonial : req.body.istestimonial,
            user : req.body.user,
            course : req.body.course
        })
        await comment.save()
        console.log(comment)
        res.send(comment)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
    
}
const getTestimonial = async (req,res) => {
    try {
        let testimonials = await Comment.find({istestimonial: true}).populate('user')
        if (testimonials) {
            console.log("testimonials" + testimonials)
            res.send(testimonials)
        } else {
            res.send("no testimonials")
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
const getCommentByCourseId = async (req,res) => {
    try {
        let comment = await Comment.find({ course : req.body.course }).populate('user')
        if (comment) {
            console.log("comments : " + comment)
            res.send(comment)
        } else {
            res.send("no comments on this course")
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports = {
    addComment,
    getTestimonial,
    getCommentByCourseId,
}