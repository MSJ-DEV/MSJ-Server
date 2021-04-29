const express = require("express");
const router = express.Router();
// getting the logic from controller
const signInController = require("../controllers/signin");
const passport = require("passport");
// const { authChecker } = require("../../server/passport");

// ************************************** authenticate with facebook ************************************** \\
router.get("/facebook", function (req, res) {
  // handle with passport
  res.send("logging in with facebook");
});

// ************************************** authenticate with google ************************************** \\
router.get("/google", function (req, res) {
  // handle with passport
  res.send("logging in with google");
});

// ************************************** authenticate with email ************************************** \\
router.post("/login", function (req, res) {
  signInController.comparePassword(req.body.email, req.body.password).then((data)=> {
    res.send(data)
  })

  .catch((err)=> {
    res.send(err)
  })
});



// ************************************** authenticate logout ************************************** \\
router.get("/logout", function (req, res) {
  // handle with passport
  res.render("logging out");
});

module.exports = router;
