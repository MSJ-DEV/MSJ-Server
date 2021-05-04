// all operations that are related to user

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
  user = await getOneUserById(id);
  console.log("user from data base", user);
  console.log("user from request . body", data);
  if (user[0]) {
    const newUser = {};
    // user name
    data.firstName
      ? (newUser.firstName = data.firstName)
      : (newUser.firstName = user[0].firstName);
    // last name
    data.lastName
      ? (newUser.lastName = data.lastName)
      : (newUser.lastName = user[0].lastName);
    // email
    data.email ? (newUser.email = data.email) : (newUser.email = user[0].email);
    // password
    if (data.password) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(data.password, salt, (err, hash) => {
          if (err) {
            console.log(err);
          } else {
            newUser.password = hash;
          }
        });
      });
    } else {
      newUser.password = user[0].password;
    }
    // numberPhone
    data.numberPhone
      ? (newUser.numberPhone = data.numberPhone)
      : (newUser.numberPhone = user[0].numberPhone);
    // adresse 1
    data.adresse1
      ? (newUser.adresse1 = data.adresse1)
      : (newUser.adresse1 = user[0].adresse1);
    // adresse 2
    data.adresse2
      ? (newUser.adresse2 = data.adresse2)
      : (newUser.adresse2 = user[0].adresse2);
    // city
    data.city ? (newUser.city = data.city) : (newUser.city = user[0].city);
    // zip code
    data.zipCode
      ? (newUser.zipCode = data.zipCode)
      : (newUser.zipCode = user[0].zipCode);
    // gender
    data.gender
      ? (newUser.gender = data.gender)
      : (newUser.gender = user[0].gender);

    // update the user
    setTimeout(() => {
      return new Promise((resolve, reject) => {
        const sql = `UPDATE users  SET 
        firstName = "${newUser.firstName}",
        lastName = "${newUser.lastName}",
        email = "${newUser.email}",
        password = "${newUser.password}",
        numberPhone = ${newUser.numberPhone},
        city = "${newUser.city}",
        adresse1 = "${newUser.adresse1}",
        adresse2 = "${newUser.adresse2}",
        zipCode = "${newUser.zipCode}",
        gender = "${newUser.gender}"
         WHERE id = ${id}`;
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

module.exports = { getAllUsers, getOneUserByEmail, getOneUserById, updateUser };
