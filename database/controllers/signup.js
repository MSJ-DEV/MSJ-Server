// here where you can find the process of creation for one user

// to hash the passsword
const bcrypt = require("bcryptjs");

// to create the connection for the query
const { connection } = require("../index");

// ************************************** fetch all users ************************************** \\

const getAllUsers = (req, res) => {
  const sql = "SELECT * FROM USERS";
  connection.query(sql, (err, result) => {
    try {
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  });
};

// ************************************** create one user ************************************** \\

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

// // ************************************** fetch one user by id ************************************** \\

const getOneUser = (id) => {
  console.log(id);
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};
getOneUser(1);
// ************************************** update user information ************************************** \\

// function to update one user by id
// for better user experience, the user have the right to change the information that he wants and keep the rest like it is
// we have to handle that inside the update
// this update function: we will make a get request inside the update
// then we will get the data from the user
// if the data from user is missing a column, we will get it for the object that we have fom the get request
// then we push the whole object again
// so the update will be one function without n if statments
const updateUser = (id) => {
  // we can use our ready function getOneUser
};

// ************************************** function to hash password ************************************** \\

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

// ************************************** function to compare password ************************************** \\

// ************************************** export methods ************************************** \\
module.exports = { getAllUsers, createOneUser, getOneUser };
