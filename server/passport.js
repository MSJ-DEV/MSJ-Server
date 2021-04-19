const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const signUpController = require("../database/controllers/signup");
const config = require("../database/config");

module.exports = function (passport) {
  var opts = {};
  // extract the token from header
  opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "secret";
  passport.use(
    new JWTStrategy(opts, (jwt_payloads, done) => {
      signUpController.getOneUserById(jwt_payloads._id, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }),
  );
};
