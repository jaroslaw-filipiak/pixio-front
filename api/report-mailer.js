const app = require("express")();
const nodemailer = require("nodemailer");

// transporter

module.exports = { path: "/api", handler: app };

app.post("/mailer", (req, res) => {
  const options = {
    from: "app@company.com>",
    to: "User <user@domain.com>",
    subject: "Your attachment",
    text: "Your attachment",
    html: "<p>Your attachment is attached</p>",
    attachments: [
      {
        filename: "attachment.pdf",
        path: "https://domain.com/path/to/file.pdf"
      }
    ]
  };

  transporter.sendMail(options, (err, info) => {
    if (info) console.log(info);
    if (error) console.log(error);
  });
});
