const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");
const {
    signin,
    register,
    LoginFb,
    CallbackFb
} = require ('../controllers/authController')

router.route('/login').post(signin);
router.route('/register').post(register);
router.route('/facebook',passport.authenticate('facebook', { scope : 'email,user_photos' })).get(LoginFb);
router.route('/facebook/callback',
passport.authenticate('facebook', {
    successRedirect : '/',
    failureRedirect : '/'
})).get(CallbackFb);
module.exports = router