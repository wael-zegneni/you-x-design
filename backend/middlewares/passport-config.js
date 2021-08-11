var _passport = require('passport');
var _LocalStrategy = require('passport-local').Strategy;
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