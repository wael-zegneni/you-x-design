var _passport = require('passport');
var _LocalStrategy = require('passport-local').Strategy;
var _passportJWT = require("passport-jwt");
var _JWTStrategy   = _passportJWT.Strategy;
var _ExtractJWT = _passportJWT.ExtractJwt;
var FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config()
const bcrypt = require ('bcrypt')
const User = require('../models/User');

_passport.use(new _LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, 
    async function (email, password, callback) {
        
        return User.findOne({email})
           .then(user => {
               if (!user) {
                   return callback(null, false, {message: 'Incorrect email or password.'});
               }
               //return callback(null, user, {message: 'Logged In Successfully'});
               
               try {
                   if ( bcrypt.compare(password, user.password)) {
                    return callback(null, user, {message: 'Logged In Successfully'});
                   } else {
                    return callback(null, false, {message: 'Incorrect password.'});
                   }
                   
               } catch (error) {
                   return callback(error)
               }
               
          })
          .catch(err => callback(err));
    }
));
_passport.use(new _JWTStrategy({
    jwtFromRequest: _ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
},
/*function(_passport){
    let opts = {};
    opts.jwtFromRequest = _ExtractJWT.fromHeader("authorization")
    opts.secretOrKey = 'your_jwt_secret'
    _passport.use(new _JWTStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.data._id, (err, User) => {
        if(err){
          return done(err, false);
        }
  
        if(User){
          return done(null, User);
        } else {
          return done(null, false);
        }
      });
    }));
  }*/
 function (jwtPayload, callback) {
    

     return User.findOne({id: jwtPayload.id})
         .then(user => {
             console.log(user)
             return callback(null, user);
        })
        .catch(err => {
            return callback(err);
         });
 }
));
_passport.use(new FacebookStrategy({

    // pull in our app id and secret from our auth.js file
    clientID        : process.env.CLIENT_ID,
    clientSecret    : process.env.CLIENT_SECRET,
    callbackURL     : "http://localhost:4000/api/v1/auth/facebook/callback"

},// facebook will send back the token and profile
function(token, refreshToken, profile, done) {

    console.log(profile)
    return done(null,profile)
}));
_passport.serializeUser(function(user, done) {
    done(null, user);
});

// used to deserialize the user
_passport.deserializeUser(function(id, done) {
    return done(null,user)
});