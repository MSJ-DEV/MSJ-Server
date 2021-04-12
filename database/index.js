const mysql = require("mysql2");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);



const getAll = function (callback) {
  let str = `select * from `;
  connection.query(str, (err, result) => {
    return err ? callback(err, null) : callback(null, result);
  });
};

module.exports = {
  connection,
  getAll
};
