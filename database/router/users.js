const express = require("express");
const router = express.Router();

console.log("test");
// register
router.post("/create", function (req, res) {
  res.send("Creating new user");
});

// authentificate
router.post("/auth", function (req, res) {
  res.send("auth");
});

// profile
router.get("/profile", function (req, res) {
  res.send("profile");
});

module.exports = router;
