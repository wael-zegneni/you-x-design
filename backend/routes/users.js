const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");


const {
    updateUser,
    deleteUser,
    getUser } = require ( "../controllers/UserController")

    
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router