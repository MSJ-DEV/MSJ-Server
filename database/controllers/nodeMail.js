// here you find every thing related to  contact us
const nodemailer = require("nodemailer");

// function node mail

const nodeMail = async (req, res) => {
  res.send("well recive");
  let text = req.body.text;
  let email = req.body.email;
  // ****************************** NODE MAIL **************************
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "msjdevelopper2021@hotmail.com", // generated ethereal user
      pass: "rmadi12345", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = await transporter
    .sendMail({
      from: `"Fred Foo 👻" <msjdevelopper2021@hotmail.com>`, // sender address
      to: "rmadi.med1@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: text, // plain text body
      html: text, // html body
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  //   console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  // ****************************** NODE MAIL **************************
};

module.exports = {
  nodeMail,
};
