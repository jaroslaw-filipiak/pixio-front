require("dotenv").config();
const nodemailer = require("nodemailer");

var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("simple server start"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });

// let mailOptions = {
//   from: "jaroslaw.filipiak@25wat.com",
//   to: "info@j-filipiak.pl",
//   subject: "test message",
//   text: "content"
// };

// transporter.sendMail(mailOptions, function(err, data) {
//   if (err) {
//     console.log("err", err);
//   } else {
//     console.log("email send");
//   }
// });
