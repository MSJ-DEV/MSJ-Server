const express = require("express");
const router = express.Router();
// getting the logic from controller
const signInController = require("../controllers/signin");
const signUpController = require("../controllers/signup");
const passport = require("passport");
// const { authChecker } = require("../../server/passport");

// ************************************** authenticate with facebook ************************************** \\
router.get("/facebook", function (req, res) {
  // handle with passport
  res.send("logging in with facebook");
});

// ************************************** authenticate with google singUp ************************************** \\
router.post("/signup/google", (req, res) => {
  if (req.body.email) {
    signUpController
      .createOneUserWithGoogle(req.body)

      .then((data) => {
        res.send({ message: "your profile has been created" });
      })
      .catch((err) => {
        // console.log(err);
        res.send({ message: "error occured creating your profile" });
      });
  } else
    res.send({
      message: "something went wrong, please try again or contact our support",
    });
});
// ************************************** authenticate with google signIn ************************************** \\
router.post("/signIn/google", (req, res) => {
  signInController
    .checkUserAuthWithGoogle(req.body.email, req.body.id)

    .then((data) => {
      // console.log(data);
      res.send({ message: "Welcome to our App!" });
    })
    .catch((err) => {
      res.send({ message: "error occured while checking your informations" });
    });
});

// ************************************** authenticate with email ************************************** \\
router.post("/login", function (req, res) {
  signInController
    .comparePassword(req.body.email, req.body.password)
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.send(err);
    });
});

// ************************************** authenticate logout ************************************** \\
router.get("/logout", function (req, res) {
  // handle with passport
  res.render("logging out");
});

module.exports = router;
