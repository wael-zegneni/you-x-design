var _passport = require('passport');
var _LocalStrategy = require('passport-local').Strategy;
var _passportJWT = require("passport-jwt");
var _JWTStrategy   = _passportJWT.Strategy;
var _ExtractJWT = _passportJWT.ExtractJwt;
const User = require('../models/User')
_passport.use(new _LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, 
    function (email, password, callback) {
         
        return User.findOne({email, password})
           .then(user => {
               if (!user) {
                   return callback(null, false, {message: 'Incorrect email or password.'});
               }
               return callback(null, user, {message: 'Logged In Successfully'});
          })
          .catch(err => callback(err));
    }
));
_passport.use(new _JWTStrategy({
    jwtFromRequest: _ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
},
function (jwtPayload, callback) {

    
    return User.findOneById(jwtPayload.id)
        .then(user => {
            return callback(null, user);
        })
        .catch(err => {
            return cllback(err);
        });
}
));