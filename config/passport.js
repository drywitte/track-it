const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "email"
    },
    function(email, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function(dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.User.findOne({
    where: {
      id: id
    }
  }).then(function(dbUser) {
    cb(null, dbUser);
  }).catch(function(err) {
    cb(err, null);
  })
});

// Exporting our configured passport
module.exports = passport;
