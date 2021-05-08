const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

var bodyParser = require("body-parser");

// form payment

const cors = require("cors");
const db = require("../database/index.js");
const { router } = require("../database/router/products.js");
const { routerAdmin } = require("../database/router/admin.js");
app.use(cookieParser());
const path = require("path");
// app.use(cors({
//   origin:["http://localhost:3000"]
// }))
// var allowedDomains = ['*', 'http://localhost:3000/'];
// app.use(cors({
//   origin: function (origin, callback) {
//     // bypass the requests with no origin (like curl requests, mobile apps, etc )
//     if (!origin) return callback(null, true);
 
//     if (allowedDomains.indexOf(origin) === -1) {
//       var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));
// let ALLOWED_ORIGINS = ["*", "http://localhost:3000"];
//  const fn = function (req, res, next)  {
//   console.log('*********',req.headers.origin)

//   let origin = req.headers.origin;
//   let theOrigin = (ALLOWED_ORIGINS.indexOf(origin) >= 0) ? origin : ALLOWED_ORIGINS[0];
//   res.setHeader("Access-Control-Allow-Origin", theOrigin);
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//   next();
  
// }


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }),
);

// app.use('/api/admin',routerAdmin)
app.use("/", routerAdmin); //aminside
app.set("port", 3333);
app.use(express.json());

app.use("/", router); //extra work if i need it later
app.use("/api/poducts", router); //croud for the products

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

const mailRouter = require("../database/router/nodeMail");
app.use("/api", mailRouter);

const paymentRouter = require("../database/router/payment");
app.use("/api", paymentRouter, () => console.log("test"));

//

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// port
app.set("port", 3333);


module.exports = app;
