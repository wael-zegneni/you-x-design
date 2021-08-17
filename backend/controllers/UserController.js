const passport = require("passport-jwt")

const updateUser = (req,res) => {
    res.send('update user')
}
const deleteUser = (req,res)=>{
    res.send('delete user')
}
const getUser = (req,res)=>{
    // let x = passport.ExtractJwt.fromHeader("authorization")
    res.send("x")
}


module.exports = {
    updateUser,
    deleteUser,
    getUser
}