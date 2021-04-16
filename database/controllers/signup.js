// here where you can find the process of creation for one user

const mysql = require("mysql");
const mySQLconfig = require("../config");
const Promise = require("bluebird");
// to hash the passsword
const bcrypt = require("bcryptjs");
// to create the connection for the query
const connection = mysql.createConnection(mySQLconfig);

// function get all users
const getAllUsers = () => {
  // working with promise ( no need for async fn)
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM USERS";
    connection.query(sql, (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = { getAllUsers };
