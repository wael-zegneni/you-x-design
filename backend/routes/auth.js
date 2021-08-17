const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");
const { body } = require('express-validator');

const {
    signin,
    register,
    LoginFb,
    CallbackFb
} = require ('../controllers/authController')

router.route('/login').post(signin);
router.post('/register', [
    body('name', "Name is required!!").notEmpty(),
    body('RegisterEmail', "Please provide a valid email address!").isEmail(),
    body('phone', "Phone must be a number!!").isNumeric(),
    body('RegisterPassword', "Password's length must be at least 5 characters").isLength({ min: 5 })
], register)
router.route('/facebook',passport.authenticate('facebook', { scope : 'email,user_photos' })).get(LoginFb);
router.route('/facebook/callback',
passport.authenticate('facebook', {
    successRedirect : '/',
    failureRedirect : '/'
})).get(CallbackFb);
module.exports = router