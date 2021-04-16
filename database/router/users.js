const express = require("express");
const router = express.Router();
// getting the logic from controller
const userController = require("../controllers/signup");

// register
router.post("/create", function (req, res) {
  res.send("Creating new user");
});

// authentificate
router.post("/auth", function (req, res) {
  res.send("auth");
});

// getting all users for testing purpose
router.get("/profile", userController.getAllUsers);

// profile
router.get("/profile", userController.getAllUsers);

module.exports = router;
