const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");

const {
    login,
    register,
    updateUser,
    deleteUser,
    getUser } = require ( "../controllers/UserController")

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router