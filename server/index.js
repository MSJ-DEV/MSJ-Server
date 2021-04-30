const express = require("express");
const app = express();
const nodemailer = require("nodemailer");


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

app.use(cors());



// for paths
const path = require("path");
// passport middelware
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());

// calling and using  routers here
// const { router } = require("../database/router/products.js");
// app.use("/api/poducts", router);

const userRouter = require("../database/router/users");
app.use("/api/users", userRouter);

const userAuthRouter = require("../database/router/user-auth");
app.use("/api/auth", userAuthRouter);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// port
app.set("port", 3333);

// ****************************** NODE MAIL **************************
// let transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: testAccount.user, // generated ethereal user
//     pass: testAccount.pass, // generated ethereal password
//   },
// });

// // send mail with defined transport object
// let info = await transporter.sendMail({
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// });

// console.log("Message sent: %s", info.messageId);
// // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// // Preview only available when sending through an Ethereal account
// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...



// ****************************** NODE MAIL **************************


app.get("/", function (req, res) {
  res.send("SERVER IS RUNNING! ");
});


module.exports = app;
