const User = require('../models/User')

const updateUser = async (req,res) => {
    try { 
    User.findByIdAndUpdate(req.body.id,{
        userName: req.body.name,
        phone: req.body.phone,
        role: req.body.role,
        age : req.body.age,
        residence : req.body.residence,
        bio : req.body.bio,
        avatar : req.file.path,

    }, function(err,user){
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log(user)
            res.send(user)
        }
    })
} catch (error) {
    console.log(error)
    res.send(error)
}
    // res.send('update user')
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
    instructors = await User.find({role : "instructor"})
    console.log(instructors)
    res.send(instructors)
}
const getStudents = async(req,res) =>{
    students = await User.find({role : "student"})
    console.log(students)
    res.send(students)
}

module.exports = {
    updateUser,
    deleteUser,
    findUserById,
    getInstructors,
    getStudents,
}