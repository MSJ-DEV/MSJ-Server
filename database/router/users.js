//  user router

const express = require("express");
const router = express.Router();
// getting the logic from controller
const userController = require("../controllers/signup");

// create one user
router.post("/create", (req, res) => {
  userController
    .createOneUser(req.body)
    .then(() => {
      res.send({ msg: "created" });
    })
    .catch((err) => res.send({ msg: "not created" }));
});

// getting all users for testing purpose
router.get("/fetch", userController.getAllUsers);

// authentificate
router.post("/auth", function (req, res) {
  res.send("auth");
});

// profile
router.get("/profile", userController.getAllUsers);

module.exports = router;
