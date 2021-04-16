// here where you can find the process of creation for one user

// to hash the passsword
const bcrypt = require("bcryptjs");

// to create the connection for the query
const { connection } = require("../index");

// function get all users
const getAllUsers = (req, res) => {
  // working with promise ( no need for async fn)

  const sql = "SELECT * FROM USERS";
  connection.query(sql, (err, result) => {
    try {
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  });
};

// // function get all users
// const getAllUsers = (req, res) => {
//   // working with promise ( no need for async fn)

//   const sql = "SELECT * FROM USERS";
//   connection.query(sql, (err, result, fields) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// };

// function to create one user
var newPassword = "";
const createOneUser = (user) => {
  // sending the flat password and getting hashed one to store it in db
  user.password = hashPassword(user.password);
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO users (firstName, lastName, email, password, numberPhone) VALUES ("${user.firstName}", "${user.lastName}", "${user.email}", "${newPassword}", ${user.numberPhone})`;
    connection.query(sql, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};

// password hashing function
const hashPassword = function (password) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        throw err;
      } else {
        newPassword = hash;
      }
    });
  });
};
// password comparing function

module.exports = { getAllUsers, createOneUser };
