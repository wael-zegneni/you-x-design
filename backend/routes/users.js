const express = require('express');
const router = express.Router();

const {
    renderLogin,
    login,
    renderRegister,
    register,
    updateUser,
    deleteUser,
    getUser } = require ( "../controllers/UserController")

router.route('/login').get(renderLogin).post(login);
router.route('/register').get(renderRegister).post(register);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router