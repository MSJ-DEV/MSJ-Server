const configSQl = require("../configSQL");

module.exports = {
  host: "localhost",
  user: configSQl.user,
  password: configSQl.password,
  database: "carrefour",
};
