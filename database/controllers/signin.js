// here you can find all user request for sign in

var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0//", salt);
const config = require("../config");
const { connection } = require("../index");
const userController = require("./user");
const signUpController = require("./signup");
const passport = require("passport");
const jwt = require("jsonwebtoken");

// ************************************** function to compare password ************************************** \\

// compare function of bcrypt didn't work for me. compring pw manually
const comparePassword = async function (email, oldPassword) {
  const checkEmail = await userController.getOneUserByEmail(email);
  if (checkEmail[0]) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(
        oldPassword,
        checkEmail[0].password,
        async function (err, match) {
          if (err) {
            reject("error occured while checking your password");
          }
          if (match) {
            resolve("password matched");
          } else {
            resolve("wrong password");
          }
        },
      );
    });
  } else {
    return "Invalid email";
  }
};

module.exports = { comparePassword };
