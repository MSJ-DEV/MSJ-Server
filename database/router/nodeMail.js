const express = require("express");
const router = express.Router();

// call the controller
const mailController = require("../controllers/nodeMail");

// function mail

router.post("/sendmail", mailController.nodeMail);

module.exports = router;
