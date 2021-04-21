const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors());

const db = require("../database/index.js");
// for paths
const path = require("path");
// passport middelware
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());
require("./passport")(passport);


app.use(express.json());

// calling and using  routers here
const { router } = require("../database/router/products.js");
app.use("/api/poducts", router);

const userRouter = require("../database/router/users");
app.use("/api/users", userRouter);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// port
app.set("port", 3333);

app.get("/", function (req, res) {
  res.send("SERVER IS RUNNING! ");
});

module.exports = app;
