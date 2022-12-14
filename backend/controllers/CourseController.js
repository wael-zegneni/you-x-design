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
            thumbnail : req.file.path.replace(/ /g,'-').replace('(','').replace(')',''),
            content : req.body.content,
            type : req.body.type,
            instructor : req.body.instructor,
            avgRating : 0,
            ratings : [],
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
    const courses = await Course.find().populate('instructor').limit(6)
    console.log(courses)
    return res.send(courses)
}
const getCoursesByDate = async(req,res)=>{
    const courses = await Course.find().populate('instructor').sort('-date').limit(10)
    return res.send(courses)
}
const getCourseById = async (req,res) => {

    try {
        let results ={}
        const course = await Course.findOne({ _id : req.query.id }).populate('ratings').populate('instructor')
        let five = 0;
        let four= 0;
        let three = 0;
        let two = 0;
        let one = 0;
        if (course.ratings.length){
            let ratings = course.ratings
            for (i in ratings){
                if (ratings[i].rating == 5) 
                    five++
                 else if(ratings[i].rating== 4) 
                    four ++
                else if(ratings[i].rating==3)
                    three++
                else if(ratings[i].rating==2)
                    two++
                else if(ratings[i].rating==1)
                    one++
            }
        }
        results.totalRatings = course.ratings.length
        results.one = one;
        results.two=two;
        results.three=three;
        results.four=four;
        results.five =five;
        results.average = course.avgRating
        results.course = course
        res.send(results)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
const getCourseForInstructor = async(req,res) => {
    try {
        const result = {}
        result.courses = await Course.find({instructor : req.body.instructor})
        result.total = await Course.countDocuments({instructor : req.body.instructor})
        res.send(result)
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
            thumbnail : req.file.path.replace(/ /g,'-').replace('(','').replace(')',''),
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
    getCourseForInstructor,
}