const Course = require('../models/Course')
const { findById } = require('../models/User')
const User = require('../models/User')
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
        console.log('course ' + course)
        let instructor = await User.findById(req.body.instructor)
        console.log(instructor)
        if (instructor) {
            await course.save();
            instructor.courses.push(course._id)
            await instructor.save();
            return res.send(course)
        } else {
            res.status(400).send('instructor not found')
        }
        
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
const getCoursesByDate = async(req,res)=>{
    const courses = await Course.find().populate('instructor').sort('-date')
    return res.send(courses)
}
const getCourseById = async (req,res) => {

    try {
        const course = await Course.findOne({ _id : req.body.id})
        console.log('course by id ' + course)
        res.send(course)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
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

const deleteCourse = async (req,res) => {
    try {
        let course = await Course.findById(req.body.id)
        let instructor= await User.findById(course.instructor)
        console.log(instructor)
        // res.send(instructor)
        Course.deleteOne({ _id : course.id}, async function(err){
            console.log('instructor in delete ' + instructor)
            if (!err && instructor) {
                // if(!err){
                
                await instructor.courses.pull(course.id)
                await instructor.save()
                res.send('Course deleted !');
                
            }
            else {
                res.status(400).send(err);
            }  
            })
    } catch (error) {
        console.log(error)
        res.send(error)        
    }
    
}

module.exports = {
    addCourse,
    getCourses,
    updateCourse,
    deleteCourse,
    getCourseById,
    getCoursesByDate,
}