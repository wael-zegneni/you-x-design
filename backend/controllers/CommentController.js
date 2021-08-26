const comment = require ('../models/Comment')

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

module.exports = {
    addComment
}