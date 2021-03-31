const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD
  }
});

let mailOptions = {
  from: "jaroslaw.filipiak@25wat.com",
  to: "info@j-filipiak.pl",
  subject: "test message",
  text: "content"
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("err", err);
  } else {
    console.log("email send");
  }
});
