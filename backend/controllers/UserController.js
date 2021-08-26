const User = require('../models/User')

const updateUser = async (req,res) => {
    try { 
    User.findByIdAndUpdate(req.body.id,{
        userName: req.body.name,
        email: req.body.email,
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
// let user =  await User.findOne({ email: req.body.RegisterEmail });
//     if (user) {
//         return res.status(400).json({errors :[{msg: "user already exists !"}]});
//     } else {
//         // Insert the new user if they do not exist yet
//        try {
//         const hashedPassword = await bcrypt.hash(req.body.RegisterPassword,10)
//         console.log(hashedPassword)
//             user = new User({
//                 userName: req.body.name,
//                 email: req.body.RegisterEmail,
//                 phone: req.body.phone,
//                 password: hashedPassword,
//                 role: req.body.role,
//                 age : req.body.age,
//                 residence : req.body.residence,
//                 bio : req.body.bio,
//             });
//             await user.save();
//             var token = jwt.sign(user.toJSON(), process.env.SECRET_KEY);
//             res.json({user, token});
//        } catch (error) {
//         res.status(400).send(error)
//         }
//        }
    
//     }
// User.findByIdAndUpdate(user_id, { name: 'Gourav' },
//                             function (err, docs) {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("Updated User : ", docs);
//     }
// });


module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getInstructors,
}