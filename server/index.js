const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')
const db = require('../database/index.js')
const {router} =require('../database/router/products.js')
const {routerAdmin} =require('../database/router/admin.js')
app.use(cookieParser())
const path = require("path");
app.use(cors({
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}))
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
