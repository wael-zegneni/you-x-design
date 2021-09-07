const User = require('../models/User')
const Candidate = require('../models/Candidates') 
const bcrypt = require ('bcrypt')
const Course = require('../models/Course')

const updateUser = async (req,res) => {
    try {
            User.findByIdAndUpdate(req.body.id,{
                userName: req.body.name,
                phone: req.body.phone,
                role: req.body.role,
                age : req.body.age,
                residence : req.body.residence,
                bio : req.body.bio,        
            }, function(err,user){
                if (err) {
                    console.log(err)
                    res.status(400).send(err)
                } else {
                    console.log(user)
                    res.send(user)
                }
            }) 
        
    
} catch (error) {
    console.log(error)
    res.status(400).send(error)
}
}
const updateProfilePic = async (req,res)=> {
    try {
        User.findByIdAndUpdate(req.query.id,{
            avatar : req.file.path
        },function(err,user){
            if (err) {
                res.status(400).send(err)
            } else {
                res.send('profile picture updated')
            }
        })
    } catch (error) {
        res.status(400).send(error)
    }
}
const removeProfilePic = async (req,res)=> {
    try {
        User.findByIdAndUpdate(req.query.id,{
            avatar : "public\\uploads\\default.jpg"
        },function(err,user){
            if (err) {
                res.status(400).send(err)
            } else {
                res.send('profile picture updated')
            }
        })
    } catch (error) {
        res.status(400).send(error)
    }
}
const deleteUser = (req,res)=>{
    User.deleteOne({ _id: req.query.id }, function(err) {
        if (!err) {
                res.send('user deleted !');
        }
        else {
                res.status(400).send('error');
        }
    });
}
const findUserById = async (req,res)=>{
    const user = await User.findById(req.query.id).populate('saved')
    res.send(user)
}
const getInstructors = async (req,res) =>{
    const results = {}
    results.total = await User.countDocuments({role : "instructor"})
    results.instructors = await User.find({role : "instructor"}) 
    console.log(results)
    res.send(results)
}
const getStudents = async(req,res) =>{
    const results = {} 
    results.total = await User.countDocuments({role : "student"})
    results.students = await User.find({role : "student"})
    console.log(results)
    res.send(results)
}
const approveInstructor = async(req,res) => {
        candidate = await Candidate.findById(req.body.id)
        console.log(candidate)
        let x = await User.find({email : candidate.email, role: "instructor"})
        console.log('x : ' ,x)
        if(x.length)
        {
            res.status(400).send('email already used as instructor')
        }else {
            try {  
            const password = await bcrypt.hash('test12345',10)
            let instructor = new User({
                userName : candidate.name,
                phone : candidate.phone,
                email : candidate.email,
                residence : candidate.residence,
                age : candidate.age,
                career : candidate.job,
                bio: candidate.bio,
                school : candidate.school,
                degree : candidate.degree,
                facebook : candidate.facebook,
                linkedin : candidate.linkedin,
                instagram : candidate.instagram,
                role : "instructor",
                password: password,
                avatar : "public\\uploads\\default.jpg",
        
            })
            console.log('candidate approved : ',instructor)
            await instructor.save()
            await Candidate.deleteOne({_id : candidate.id})
            await candidate.save()
            res.send(instructor)
            
        } catch (error) {
            res.status(400).send(error)
        }
            
        }
    }

const saveCourse = async (req,res) => {
    try {
        const course = await Course.findById(req.body.course)
        const user = await User.findById(req.body.user)
        var exist = false
        if (user.saved.length) {   
            for (var i =0 ; i < user.saved.length ; i++){
                if (user.saved[i]==req.body.course){
                    exist = true
                }
            }
        }
        console.log(exist)
        if (exist) {
            res.status(400).send('course already saved')
        } else {
            await user.saved.push(course._id)
            await user.save()
            res.send('course saved')
        }
        
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
    
}

module.exports = {
    updateUser,
    deleteUser,
    findUserById,
    getInstructors,
    getStudents,
    updateProfilePic,
    approveInstructor,
    saveCourse,
    removeProfilePic,
}