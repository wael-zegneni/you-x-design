const User = require('../models/User')


const login = (req,res) => {
    res.send('login')
}
const register = (req,res) => {
    res.send('register')
}
const updateUser = (req,res) => {
    res.send('update user')
}
const deleteUser = (req,res)=>{
    res.send('delete user')
}
const getUser = (req,res)=>{
    res.send('get user')
}


module.exports = {
    login,
    register,
    updateUser,
    deleteUser,
    getUser
}