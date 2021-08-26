const User = require('../models/User')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');
const passport = require("passport");
require('dotenv').config
const { validationResult } = require('express-validator');

const signin = function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log(info)
        if (err || !user) {
            return res.status(400).json(info);
        }
       req.login(user, {session: false}, (error) => {
           if (error) {
               res.send(err);
           }
           var token = jwt.sign(user.toJSON(), process.env.SECRET_KEY);
           console.log(token)
           return res.json({user, token});
        });
    })(req, res);
}
const register = async (req,res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Check if this user already exisits
    let user =  await User.findOne({ email: req.body.RegisterEmail });
    if (user) {
        return res.status(400).json({errors :[{msg: "user already exists !"}]});
    } else {
        // Insert the new user if they do not exist yet
       try {
        const hashedPassword = await bcrypt.hash(req.body.RegisterPassword,10)
        console.log(hashedPassword)
            user = new User({
                userName: req.body.name,
                email: req.body.RegisterEmail,
                phone: req.body.phone,
                password: hashedPassword,
                role: req.body.role,
                age : req.body.age,
                residence : req.body.residence,
                bio : req.body.bio,
            });
            await user.save();
            var token = jwt.sign(user.toJSON(), process.env.SECRET_KEY);
            res.json({user, token});
       } catch (error) {
        res.status(400).send(error)
        }
       }
    
    }

    // Loadin connected user
    const loadUser = (req, res) => {
        res.send(req.connectedUser)
    }

    const LoginFb = (req,res)=>{
        res.send("facebook login")
    }
    const CallbackFb = (req,res)=>{
        res.send("callback facebook")
    }
    module.exports = {
        signin,
        register,
        LoginFb,
        CallbackFb,
        loadUser
    }
