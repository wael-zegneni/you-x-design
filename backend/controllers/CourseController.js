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
            thumbnail : req.file.path.replace(/ /g,'-'),
            content : req.body.content,
            type : req.body.type,
            instructor : req.body.instructor
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
    const courses = await Course.find().populate('instructor')
    console.log(courses)
    return res.send(courses)
}
const updateCourse = async (req,res)=> {
    try {
        Course.findByIdAndUpdate(req.body.id,{
            description : req.body.description,
            tags : req.body.tags,
            language : req.body.language,
            url : req.body.url,
            thumbnail : req.file.path.replace(/ /g,'-'),
            content : req.body.content,
            type : req.body.type,
            instructor : req.body.instructor
        }, function(err,course){
            if(err){
                console.log(err)
                res.status(400).send(err)
            } else {
                console.log( course )
                res.send(course)
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

const deleteCourse = (req,res) => {
    Course.deleteOne({ _id : req.body.id}, function(err){
    if (!err) {
        res.send('Course deleted !');
    }
    else {
        res.status(400).send('error');
    }  
    })
}

module.exports = {
    addCourse,
    getCourses,
    updateCourse,
    deleteCourse,
}