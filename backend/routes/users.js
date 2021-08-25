const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");


const {
    updateUser,
    deleteUser,
    getUser,
    getInstructors,   
    } = require ( "../controllers/UserController")

    
router.route('/').get(getUser).patch(updateUser).delete(deleteUser);
router.get('/instructors', getInstructors)

module.exports = router