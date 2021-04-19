//  user router

const express = require("express");
const { user } = require("../../configSQL");
const router = express.Router();
// getting the logic from controller
const userController = require("../controllers/signup");

// ************************************** get all users ************************************** \\
router.get("/fetch", userController.getAllUsers);

// ************************************** create one user ************************************** \\
router.post("/create", (req, res) => {
  userController
    .createOneUser(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.send({ message: "not created" }));
});

// ************************************** get one user by id ************************************** \\
router.get("/oneUserId/:id", (req, res) => {
  userController
    .getOneUser(req.params.id)
    .then((data) => {
      res.send({ message: "done" });
    })
    .catch((err) => res.send({ message: "error occured" }));
});

// ************************************** get one user by email ************************************** \\
router.get("/oneUserEmail", (req, res) => {
  userController
    .getOneUserByEmail(req.body.email)
    .then((data) => {
      res.send({ message: "done" });
    })
    .catch((err) => res.send({ message: "error occured" }));
});

// ************************************** update one by id ************************************** \\
router.put("/update/:id", (req, res) => {
  userController
    .updateUser(req.params.id, req.body)
    .then((data) => {
      res.send({ message: "your profile has been updated" });
    })
    .catch((err) => {
      res.send({ message: "error occured while updating your profile" });
    });
});

// ************************************** to do later ************************************** \\
router.post("/auth", function (req, res) {
  res.send("auth");
});

// ************************************** to do later  ************************************** \\

router.get("/profile", userController.getAllUsers);

module.exports = router;
