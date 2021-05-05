//  user router
const express = require("express");
const router = express.Router();
// getting the logic from controller
const signUpController = require("../controllers/signup");
const userController = require("../controllers/user");

// ************************************** get all users ************************************** \\
router.get("/fetch", userController.getAllUsers);

// ************************************** create one user ************************************** \\
router.post("/create", (req, res) => {
  signUpController
    .createOneUser(req.body)
    .then((data) => {
      console.log(data);
      res.send({ message: "new user has been created" });
    })
    .catch((err) => res.send({ message: "not created" }));
});

// ************************************** get one user by id ************************************** \\
router.get("/oneUserId/:id", (req, res) => {
  userController
    .getOneUserById(req.params.id)
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
<<<<<<< HEAD
      res.send({ message: data });
=======
      res.send(data);
    })
    .catch((err) => res.send(err));
});

// /*************************** with post the one user by lEmail  */
router.post("/oneUserEmail", (req, res) => {
  userController
    .getOneUserByEmail(req.body.email)
    .then((data) => {
      res.send(data).status(201);
>>>>>>> c039735bff35af297ad3b29f294d2e76d1c92235
    })
    .catch((err) => res.send(err));
});

// ************************************** update one by id ************************************** \\
router.put("/update/:id", (req, res) => {
  userController
    .updateUser(req.params.id, req.body)

    .then((data) => {
      res.send({ message: "your profile has been updated" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error occured while updating your profile" });
    });
});

module.exports = router;

// ************************************** authenticate with facebook ************************************** \\
// router.post("/facebook", function (req, res) {
//   const email = req.body.email;
//   const password = req.body.password;
//   signInController
//     .comparePassword(email, password)
//     .then((data) => {
//       authChecker(passport);

//       res.send({ message: data });
//     })
//     .catch((err) => {
//       res.send({ messahe: "error while logging in", err: err });
//     });
// });
