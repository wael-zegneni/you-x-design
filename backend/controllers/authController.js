const User = require('../models/User')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');
const passport = require("passport");

const signin = function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log(user)
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user });
           
        }
       req.login(user, {session: false}, (error) => {
           if (error) {
               res.send(err);
           }
           var token = jwt.sign(user.toJSON(), 'your_jwt_secret');
           console.log(token)
           return res.json({user, token});
        });
    })(req, res);
}
const register = async (req,res) => {

    // Check if this user already exisits
    let user =  await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
    const hashedPassword = await bcrypt.hash(req.body.password,10)
    console.log(hashedPassword)
        user = new User({
            userName: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            role: "student",
        });
        await user.save();
        var token = jwt.sign(user.toJSON(), 'your_jwt_secret');
        res.json({user, token});
    }
    }
    module.exports = {
        signin,
        register
    }
