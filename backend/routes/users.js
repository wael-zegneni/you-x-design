const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");

const {
    signin,
    register,
    updateUser,
    deleteUser,
    getUser } = require ( "../controllers/UserController")

    router.post('/login', function (req, res, next) {
        passport.authenticate('local', {session: false}, (err, user, info) => {
            
            
            /*if (err || !user) {
                return res.status(400).json({
                    message: 'Something is not right',
                    user   : user });
               
            }*/
           req.login(user, {session: false}, (error) => {
               if (error) {
                   res.send(err);
               }
               var token = jwt.sign(user, 'your_jwt_secret');
               console.log(token)
               return res.json({user, token});
            });
        })(req, res);
    });
router.route('/register').post(register);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router