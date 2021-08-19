const Candidate = require('../models/Candidates')
const { validationResult } = require('express-validator');

const addCandidate = async (req,res) => {

    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let candidate = await Candidate.findOne({email: req.body.email})
    if(candidate) {
        return res.status(400).json({errors :[{msg: "Email already applied !"}]})
    }else{
    try {
        candidate = new Candidate({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            residence : req.body.residence,
            age : req.body.age,
            job : req.body.job,
            bio : req.body.bio,
            school : req.body.school,
            degree : req.body.degree,
            facebook : req.body.facebook,
            linkedin : req.body.linkedin,
            instagram : req.body.instagram
        })
        await candidate.save();
        res.send(candidate)
        
    } catch (error) {
        res.status(400).send(error)
    }
}
}
// const register = async (req,res) => {
//     // Finds the validation errors in this request and wraps them in an object with handy functions
//     const errors = validationResult(req);
//     console.log(errors)
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     // Check if this user already exisits
//     let user =  await User.findOne({ email: req.body.RegisterEmail });
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
//                 role: "student",
//             });
//             await user.save();
//             var token = jwt.sign(user.toJSON(), 'your_jwt_secret');
//             res.json({user, token});
//        } catch (error) {
//         res.status(400).send(error)
//         }
//        }
    
//     }
    module.exports = {
        addCandidate,
    }