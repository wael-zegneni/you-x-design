
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
    updateUser,
    deleteUser,
    getUser
}