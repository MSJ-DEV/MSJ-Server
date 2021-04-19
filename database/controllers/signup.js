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

// ************************************** fetch one user by email ************************************** \\

const getOneUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE email = "${email}"`;
    connection.query(sql, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};
// ************************************** create one user ************************************** \\

var newPassword = "";
const createOneUser = async function (user) {
  var check = await getOneUserByEmail(user.email);

  if (check[0]) {
    return " this email is already in use";
  } else {
    console.log("in");
    // sending the flat password and getting hashed one to store it in db
    user.password = hashPassword(user.password);
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO users (firstName, lastName, email, password, numberPhone) VALUES ("${user.firstName}", "${user.lastName}", "${user.email}", "${newPassword}", ${user.numberPhone})`;
      connection.query(sql, (err, result) => {
        if (err) {
          return reject(err);
        } else {
          return resolve("created");
        }
      });
    });
  }
};

// // ************************************** fetch one user by id ************************************** \\

const getOneUserById = (id) => {
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

// ************************************** update user information ************************************** \\

// function to update one user by id
// for better user experience, the user have the right to change the information that he wants and keep the rest like it is
// we have to handle that inside the update
// this update function: we will make a get request inside the update
// then we will get the data from the user
// if the data from user is missing a column, we will get it for the object that we have fom the get request
// then we push the whole object again
// so the update will be one function without n if statments

const updateUser = async function (id, data) {
  var user;
  user = await getOneUser(id);
  console.log("data", data);
  if (user[0]) {
    const newUser = {};
    // user name
    if (data.firstName) {
      newUser.firstName = data.firstName;
    } else {
      newUser.firstName = user[0].firstName;
    }
    // last name
    if (data.lastName) {
      newUser.lastName = data.lastName;
    } else {
      newUser.lastName = user[0].lastName;
    }
    // email
    if (data.email) {
      newUser.email = data.email;
    } else {
      newUser.email = user[0].email;
    }
    // password
    if (data.password) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(data.password, salt, (err, hash) => {
          if (err) {
            console.log(err);
          } else {
            newUser.password = hash;
            console.log(newUser.password);
          }
        });
      });
    } else {
      newUser.password = user[0].password;
    }
    // numberPhone
    if (data.numberPhone) {
      newUser.numberPhone = data.numberPhone;
    } else {
      newUser.numberPhone = user[0].numberPhone;
    }
    setTimeout(() => {
      return new Promise((resolve, reject) => {
        const sql = `UPDATE users  SET firstName = "${newUser.firstName}", lastName = "${newUser.lastName}", email = "${newUser.email}", password = "${newUser.password}", numberPhone = ${newUser.numberPhone} WHERE id = ${id}`;
        connection.query(sql, (err, result) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(result);
          }
        });
      });
    }, 1000);
  }
};

// ************************************** function to hash password ************************************** \\

const hashPassword = async function (password) {
  bcrypt.genSalt(10, (err, salt) => {
    console.log(salt);
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

// ************************************** function to compare password ************************************** \\

// ************************************** export methods ************************************** \\
module.exports = {
  getAllUsers,
  createOneUser,
  getOneUserById,
  updateUser,
  getOneUserByEmail,
};
