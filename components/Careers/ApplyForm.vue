<template>
  <div class="apply-form--content">
    <div class="apply-form--title">You are apply for: {{ title }}</div>
    <form class="box" action="">
      <!-- Name -->
      <div class="form-section">
        <div class="form-section--title">
          Contact
        </div>
        <div class="form-row--title"><span>*</span>Name:</div>
        <div class="form-row--inputs">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Surname" />
        </div>
      </div>

      <!-- Email Address: -->
      <div class="form-section">
        <div class="form-row--title"><span>*</span>Email Address:</div>
        <div class="form-row--inputs">
          <input type="email" placeholder="Email" />
          <input type="email" placeholder="Confirm Email" />
        </div>
      </div>

      <!-- Location: -->
      <div class="form-section">
        <div class="form-row--title"><span>*</span>Location:</div>
        <div class="form-row--inputs">
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="City" />
        </div>
      </div>

      <div style="border: 1px solid #f1efe8; margin-top: 30px"></div>

      <!-- Languages : -->
      <div class="form-section">
        <div class="form-section--title">
          Profile
        </div>

        <div class="form-row--title"><span>*</span>Languages:</div>
        <div class="form-row--inputs">
          <input type="text" placeholder="Please type" />
        </div>

        <div class="form-row--title"><span>*</span>Skill level:</div>
        <div class="form-row--inputs">
          <input type="text" placeholder="eg. Master" />
        </div>
      </div>

      <!--Resume: -->
      <div class="form-section">
        <div class="form-section--title">
          Resume (essential to the process):
        </div>
        <div class="form-row--title">
          <span>*</span>Resume:
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM9 5.5V7.5H11V5.5H9ZM9 9.5V15.5H11V9.5H9ZM2 10.5C2 14.91 5.59 18.5 10 18.5C14.41 18.5 18 14.91 18 10.5C18 6.09 14.41 2.5 10 2.5C5.59 2.5 2 6.09 2 10.5Z"
              fill="black"
              fill-opacity="0.54"
            />
          </svg>
        </div>
        <div class="form-row--inputs">
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="City" />
        </div>
      </div>

      <!-- Upload -->
      <div class="box__input">
        <input
          class="box__file"
          type="file"
          name="files[]"
          id="file"
          data-multiple-caption="{count} files selected"
          multiple
        />
        <label class="label-file" for="file"
          ><strong>Upload a file </strong
          ><span class="box__dragndrop"> or drag and drop here</span>.</label
        >
        <!-- <button class="box__button" type="submit">Upload</button> -->
      </div>
      <div class="box__uploading">Uploading…</div>
      <div class="box__success">Done!</div>
      <div class="box__error">Error! <span></span>.</div>

      <!-- demo / showreel -->
      <div class="form-section">
        <div class="form-row--title"><span>*</span>Demo or showreel:</div>
        <div class="form-row--inputs">
          <input type="text" placeholder="Paste only an URL here" />
        </div>
      </div>

      <!-- Software skill level : -->
      <div class="form-section">
        <div class="form-section--title">
          Software skill level:
        </div>
        <div class="form-section--subtitle">
          Please enter below software you are familiar with, state your level of
          advancement in each case (supervisor, senior, junior, beginner).
        </div>

        <div class="form-row--title"><span>*</span>2D / Compositing:</div>
        <div class="form-row--inputs">
          <input type="text" placeholder="2D / Compositing:" />
        </div>

        <div class="form-row--title"><span>*</span>3D:</div>
        <div class="form-row--inputs">
          <input type="text" placeholder="3D Software" />
        </div>

        <div class="form-row--title"><span>*</span>Editing:</div>
        <div class="form-row--inputs">
          <input type="text" placeholder="3Editing Software" />
        </div>

        <div class="form-row--title"><span>*</span>Office:</div>
        <div class="form-row--inputs">
          <input type="text" placeholder="Office Software" />
        </div>

        <div class="form-row--title"><span>*</span>Programming:</div>
        <div class="form-row--inputs">
          <input type="text" placeholder="Programming languages" />
        </div>

        <div class="form-row--title">
          <span>*</span>Web design / Web Development:
        </div>
        <div class="form-row--inputs">
          <input type="text" placeholder="Web design software or languages" />
        </div>
      </div>

      <div style="border: 1px solid #f1efe8; margin-top: 30px"></div>

      <!-- Terms -->
      <div class="form-section">
        <div class="form-section--title">
          Terms and conditions:
        </div>
        <div class="form-section--subtitle__terms">
          Must be checked in order to proceed with application
        </div>
      </div>

      <div class="form-section">
        <div id="custom-scrollbar" class="terms">
          By clicking “I Agree”, you are agreeing with the following terms
          concerning your submission of materials (in the following: “submitted
          materials”) to Pixomondo. Pixomondo will not review submitted
          materials for employment evaluation unless the submitter agrees to
          these release terms. You represent and warrant that the submitted
          materials have been created by you in person and do not violate the
          rights of any other party. You acknowledge that Pixomondo may be
          developing materials that are similar or identical to your submitted
          materials and that Pixomondo will have no obligation of any kind to
          you concerning those materials if Pixomondo has created, developed or
          acquired them independently without reference to your submitted
          materials. You further agree that Pixomondo shall have the same rights
          as any member of the general public to any public domain materials
          contained in your submitted materials. You agree to submit any dispute
          concerning this release or Pixomondo`s use of your submitted materials
          to binding arbitration in the City and County of Los Angeles,
          California in accordance with the commercial arbitration rules of the
          American Arbitration Association. You agree that any arbitration award
          favorable to you shall be limited to a monetary amount that does not
          exceed the fair market value, as of the date of this release, of the
          protected portion of the submitted materials that are the subject of
          the award. You acknowledge and agree that you shall in no event have
          any right to seek injunctive relief to restrict the development or
          distribution of any Pixomondo production. You agree that this release
          is freely assignable by Pixomondo. YOU ACKNOWLEDGE AND AGREE THAT YOU
          HAVE READ AND UNDERSTOOD THE TERMS OF THIS RELEASE AND THAT THIS
          RELEASE CONTAINS OUR COMPLETE UNDERSTANDING CONCERNING PIXOMONDO’S
          LIABILITY IN CONNECTION WITH YOUR SUBMITTED MATERIALS.
        </div>
      </div>

      <label class="checkbox-container">
        <p>I agree to the Terms and Conditions</p>
        <input type="checkbox" checked="checked" />
        <span class="checkmark"></span>
      </label>

      <div class="form-buttons">
        <div>
          <BackButton />
        </div>
        <div>
          <ApplyButton />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// require("dotenv").config();
import axios from "axios";

export default {
  props: ["title"],
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      name: "",
      email: "",
      location: "",
      languages: ""
    };
  },
  mounted() {
    // this.initMailer();
    // this.testMailer();
    this.postMailer();
  },
  methods: {
    //     SMTP username: Your Gmail address.
    // SMTP password: Your Gmail password.
    // SMTP server address: smtp.gmail.com.
    // Gmail SMTP port (TLS): 587.
    // SMTP port (SSL): 465.
    // SMTP TLS/SSL required: yes.

    // initMailer() {
    //   // 1
    //   let transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //       user: process.env.SMTP_USERNAME,
    //       pass: process.env.SMTP_PASSWORD
    //     },

    //     host: "smtp.gmail.com",
    //     port: 587,
    //     secure: false
    //   });

    //   // 2
    //   let emailBody = transporter.sendMail({
    //     from: '"Pixo test 👻" <jaroslaw.filipiak@25wat.com>', // sender address
    //     to: "info@j-filipiak.pl", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>" // html body
    //   });

    //   // 3

    //   transporter.sendMail(emailBody, function(err, data) {
    //     if (err) {
    //       console.log("err//email", err);
    //     } else {
    //       console.log("email send");
    //     }
    //   });
    // },
    // testMailer() {
    //   // Use at least Nodemailer v4.1.0
    //   const nodemailer = require("nodemailer");
    //   // Generate SMTP service account from ethereal.email
    //   nodemailer.createTestAccount((err, account) => {
    //     if (err) {
    //       console.error("Failed to create a testing account. " + err.message);
    //       return process.exit(1);
    //     }

    //     console.log("Credentials obtained, sending message...");

    //     // Create a SMTP transporter object
    //     let transporter = nodemailer.createTransport({
    //       host: account.smtp.host,
    //       port: account.smtp.port,
    //       secure: account.smtp.secure,
    //       auth: {
    //         user: account.user,
    //         pass: account.pass
    //       }
    //     });

    //     // Message object
    //     let message = {
    //       from: "Sender Name <sender@example.com>",
    //       to: "Recipient <recipient@example.com>",
    //       subject: "Nodemailer is unicode friendly ✔",
    //       text: "Hello to myself!",
    //       html: "<p><b>Hello</b> to myself!</p>"
    //     };

    //     transporter.sendMail(message, (err, info) => {
    //       if (err) {
    //         console.log("Error occurred. " + err.message);
    //         return process.exit(1);
    //       }

    //       console.log("Message sent: %s", info.messageId);
    //       // Preview only available when sending through an Ethereal account
    //       console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //     });
    //   });
    // }

    postMailer() {
      axios
        .post("/api/mailer", this.pdfUrlPath)
        .then(data => {})
        .catch(error => {});
    }
  }
};
</script>

<style lang="scss">
.form-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    margin: 10px;
  }
}
.apply-form {
  &--title {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    border-bottom: 2px solid #f1efe8;
    padding-bottom: 24px;
    color: #222;
  }

  &--content {
    width: 100%;
    background-color: #fff;
    padding: 30px;
    @include lg-min {
      width: 590px;
    }

    form {
      margin: 10px 0px;

      input {
        border: 1px solid #d7d0c0;
        color: #222;
        font-size: 14px;
        font-weight: 500;
        padding: 14px 16px;
        width: 100%;
        margin: 15px;
        border-radius: 3px;
      }
    }
  }
}

.form-section {
  margin-top: 14px;
  &--title {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 29px;
    margin: 14px 0px;
    color: #222;
  }

  &--subtitle {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #878787;

    &__terms {
      color: #222222;
      font-weight: 600;
    }
  }
}

.form-row {
  &--title {
    color: #222;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 31px;
    margin: 8px 0px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      font-weight: 500;
      color: #eb5757;
      font-size: 14px;
    }

    svg {
      margin-left: 10px;
    }
  }

  &--inputs {
    display: flex;
    justify-content: space-between;
    margin: -15px;
  }
}

.box__dragndrop {
  display: inline-block;
  color: #878787;
  font-size: 14px;
}

.box__input {
  border: 1px dashed #d7d0c0;
  padding: 20px;
  margin-top: 16px;
  overflow: hidden;

  input[type="file"] {
    overflow: hidden;
    width: 1px;
  }
}

.box__uploading,
.box__success,
.box__error {
  display: none;
}

.box.has-advanced-upload {
  background-color: white;
  outline: 2px dashed black;
  outline-offset: -10px;
}
.box.has-advanced-upload .box__dragndrop {
  display: inline;
}
.box.is-dragover {
  background-color: grey;
}
.box.is-uploading .box__input {
  visibility: none;
}
.box.is-uploading .box__uploading {
  display: block;
}

.label-file {
  strong {
    color: #5680e9;
    font-weight: 600;
  }

  font-size: 14px;
}

.box__file {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.terms {
  height: 118px;
  padding: 8px 16px;
  border: 1px solid #d7d0c0;
  box-sizing: border-box;
  border-radius: 3px;
  overflow-y: scroll;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
