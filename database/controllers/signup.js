// here where you can find the process of creation for one user

const userController = require("./user");
// to hash the passsword
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0//", salt);
// to create the connection for the query
const { connection } = require("../index");

// ************************************** create one user ************************************** \\

var newPassword = "";
const createOneUser = async function (user) {
  var check = await userController.getOneUserByEmail(user.email);

  if (check[0]) {
    return " this email is already in use";
  } else {
    // sending the flat password and getting hashed one to store it in db
    user.password = await hashPassword(user.password);
    setTimeout(() => {
      return new Promise((resolve, reject) => {
        console.log(newPassword);
        const sql = `INSERT INTO users (firstName, lastName, email, password, numberPhone) VALUES ("${user.firstName}", "${user.lastName}", "${user.email}", "${newPassword}", ${user.numberPhone})`;
        connection.query(sql, (err, result) => {
          if (err) {
            console.log(err);
            return reject(err);
          } else {
            return resolve({ message: "new user has been created" });
          }
        });
      });
    }, 1000);
  }
};

// ************************************** function to hash password ************************************** \\

const hashPassword = async function (password) {
  await bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        newPassword = hash;
        return hash;
      }
    });
  });
};

// ************************************** export methods ************************************** \\

module.exports = { createOneUser, hashPassword };
