const Course = require('../models/Course')

const addCourse = async (req,res)=> {
    let course = await Course.findOne({ title : req.body.title})
    if (course) {
        res.status(400).send('course already exists')
    } else {
      
    try {
        let currentDate = Date.now()
        course = new Course({
            title : req.body.title,
            description : req.body.description,
            tags : req.body.tags,
            date : currentDate,
            language : req.body.language,
            url : req.body.url,
            thumbnail : req.file.path,
            content : req.body.content,
            type : 'article'
        })
        
        console.log(course)
        await course.save();
        return res.send(course)
    } catch (error) {
        res.status(400).send(error)
    }
}
}
const getCourses = async (req,res)=> {
    const courses = await Course.find()
    console.log(courses)
    return res.send(courses)
}

module.exports = {
    addCourse,
    getCourses
}