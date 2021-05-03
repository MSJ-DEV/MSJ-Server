const express = require("express");
const app = express();

const cors = require('cors')
const db = require('../database/index.js')
const {router} =require('../database/router/products.js')
const {routerAdmin} =require('../database/router/admin.js')
const path = require("path");
app.use(cors())
app.set('port',3333)
app.use(express.json());


// app.use('/api/admin',routerAdmin)
app.use('/',routerAdmin)//aminside

app.use('/',router)//extra work if i need it later 
app.use('/api/poducts',router)//croud for the products 


// passport middelware
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());




// calling and using  routers here
// const { router } = require("../database/router/products.js");
// app.use("/api/poducts", router);

const userRouter = require("../database/router/users");
app.use("/api/users", userRouter);

const userAuthRouter = require("../database/router/user-auth");
app.use("/api/auth", userAuthRouter);


app.get("/", function (req, res) {
  res.send("SERVER IS RUNNING! ");
});


module.exports = app;
