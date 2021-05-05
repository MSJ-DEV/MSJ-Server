// here you find every thing related to  contact us
const nodemailer = require("nodemailer");

// function node mail

const nodeMail = async (req, res) => {
  let text = req.body.text;
  let email = req.body.email;
  let subject = req.body.subjectTosend
  let html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Acme Web Design</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
  <div class="container">
    <h1 class="brand"><span>${subject}</span> Web Design</h1>
    <p> FROM : ${email}</p>
    <div class="wrapper animated bounceInLeft">
    <img src="https://vegibit.com/wp-content/uploads/2017/06/How-To-Send-Email-To-New-Users.png" alt="Trulli" width="500" height="333">
    <img src="pic_trulli.jpg" alt="Trulli" width="500" height="333">
    <img src="pic_trulli.jpg" alt="Trulli" width="500" height="333">

      <p> ${text}</p>
  </div>
</body>
</html>
  `
  res.send("well recive");
  console.log('*****', req.body)
 
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
      from: `"Contact   👻" <msjdevelopper2021@hotmail.com>`, // sender address
      to: 'msjcontactdev@gmail.com', // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: html, // html body
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
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  // ****************************** NODE MAIL **************************
};

module.exports = {
  nodeMail,
};
