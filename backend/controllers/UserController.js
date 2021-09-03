const User = require('../models/User')
const Candidate = require('../models/Candidates') 
const bcrypt = require ('bcrypt')

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
        User.findByIdAndUpdate(req.body.id,{
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
const deleteUser = (req,res)=>{
    User.deleteOne({ _id: req.body.id }, function(err) {
        if (!err) {
                res.send('user deleted !');
        }
        else {
                res.status(400).send('error');
        }
    });
}
const findUserById = async (req,res)=>{
    const user = await User.findById(req.body.id)
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
module.exports = {
    updateUser,
    deleteUser,
    findUserById,
    getInstructors,
    getStudents,
    updateProfilePic,
    approveInstructor,
}