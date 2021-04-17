const configSQL = require("../configSQL");
module.exports = {
  host: "localhost",
  user: configSQL.user,
  password: configSQL.password,
  database: "carrefour",
};
