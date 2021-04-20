const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const userController = require("../database/controllers/user");
const signInController = require("../database/controllers/signin");
const config = require("../database/config");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// module.exports = function (passport) {
//   var opts = {};
//   // extract the token from header
//   opts.jwtFromRequest = opts.secretOrKey = "secret";
//   console.log(opts);
//   passport.use(
//     new JWTStrategy(opts, (jwt_payloads, done) => {
//       signUpController.getOneUserById(jwt_payloads._id, (err, user) => {
//         if (err) {
//           return done(err, false);
//         }
//         if (user) {
//           return done(null, user);
//         } else {
//           return done(null, false);
//         }
//       });
//     }),
//   );
// };

// const verify = (req, res, next) => {
//   const token = req.headers.Authorization.split(" ")[1];
//   // create token
//   const secret = "secret";
//   const tokenEmail = req.body.email;
//   const newToken = jwt.sign(tokenEmail, secret, {
//     expiresIn: 604800, //
//   });
//   if (token == newToken) {
//     next();
//   } else {
//     res.send("err");
//   }
// };
// const passportChecker = (email, password) => {
//   passport.use(
//     new LocalStrategy(function (email, password, done) {
//       return new Promise((resolve, reject) => {
//         userController
//           .getOneUserByEmail(user)
//           .then((data) => {
//             if (!data) {
//               resolve(null, false, { message: "Incorrect email." });
//             } else {
//               resolve(null, data);
//             }
//           })
//           .catch(() => {
//             reject("error in passport function");
//           });
//       });
//     }),
//   );
// };

async function authChecker(passeport) {
  passeport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      authenticateUser,
    ),
  );
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
}

module.exports = {
  //   verify,
  //   passportChecker,
  authChecker,
};
