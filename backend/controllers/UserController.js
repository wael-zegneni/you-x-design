const User = require('../models/User')

const renderLogin = (req,res) => {
    res.send('loaded login')
}
const login = (req,res) => {
    res.send('login')
}
const renderRegister = (req,res) => {
    res.send('loaded register')
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
    renderLogin,
    login,
    renderRegister,
    register,
    updateUser,
    deleteUser,
    getUser
}