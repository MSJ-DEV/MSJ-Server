// here you can find all user request for sign in

const bcrypt = require("bcryptjs");
const config = require("../config");
const { connection } = require("../index");
const userController = require("./user");
const passport = require("passport");
const jwt = require("jsonwebtoken");

// ************************************** function to compare password ************************************** \\

const comparePassword = async function (email, oldPassword) {
  const checkEmail = await userController.getOneUserByEmail(email);
  console.log(checkEmail);
};

module.exports = { comparePassword };
