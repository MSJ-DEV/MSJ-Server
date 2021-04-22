const express = require("express");
const app = express();

var cors = require('cors')
const db = require('../database/index.js')
const {router} =require('../database/router/products.js')
const {routerAdmin} =require('../database/router/admin.js')
app.use(cors())
app.set('port',3333)
app.use(express.json());

app.use('/api/admin',routerAdmin)
app.use('/api/poducts',router)

var bodyParser = require("body-parser");
var cors = require("cors");
// const db = require("../database/index.js");
// for paths
const path = require("path");
// passport middelware
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

// calling and using  routers here
const { router } = require("../database/router/products.js");
app.use("/api/poducts", router);

const userRouter = require("../database/router/users");
app.use("/api/users", userRouter);

const userAuthRouter = require("../database/router/user-auth");
app.use("/api/auth", userAuthRouter);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// port
app.set("port", 3333);

app.get("/", function (req, res) {
  res.send("SERVER IS RUNNING! ");
});


module.exports = app;
