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
    res.send('delete user')
}
const getUser = (req,res)=>{
    //let x = passport.ExtractJwt.fromAuthHeaderAsBearerToken
    console.log("x")
    res.send("workss")
}
const getInstructors = async (req,res) =>{
    instructors = await User.find({role : "instructor"})
    console.log(instructors)
    res.send(instructors)
}

module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getInstructors,
}