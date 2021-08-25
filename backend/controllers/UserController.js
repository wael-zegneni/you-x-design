const User = require('../models/User')

const updateUser = (req,res) => {
    res.send('update user')
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