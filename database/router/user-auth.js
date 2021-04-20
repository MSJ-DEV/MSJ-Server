const express = require("express");
const router = express.Router();
// getting the logic from controller
const signInController = require("../controllers/signin");
const passport = require("passport");
const { authChecker } = require("../../server/passport");

// ************************************** authenticate with facebook ************************************** \\
router.post("/facebook", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  signInController
    .comparePassword(email, password)
    .then((data) => {
      authChecker(passport);

      res.send({ message: data });
    })
    .catch((err) => {
      res.send({ messahe: "error while logging in", err: err });
    });
});

// ************************************** authenticate with google ************************************** \\
router.post("/google", function (req, res) {});

// ************************************** authenticate with email ************************************** \\
router.post("/login", function (req, res) {
  res.render("login");
});

module.exports = router;
