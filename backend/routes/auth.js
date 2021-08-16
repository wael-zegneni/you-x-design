const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");
const {
    signin,
    register
} = require ('../controllers/authController')

router.route('/login').post(signin);
router.route('/register').post(register);
module.exports = router