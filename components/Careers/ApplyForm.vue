<template>
  <div class="apply-form--content">
    <div class="apply-form--title">
      You are apply for: {{ title }}
      <span style="font-size: 12px; font-weight: 400;" class="job-id"
        >( offer id:{{ offerID }} )</span
      >
    </div>
    <form class="box" action="" id="frm">
      <!-- Name -->
      <div class="form-section">
        <div class="form-section--title">
          Contact
        </div>
        <div
          :class="{ 'form-group--error': $v.name.$error || $v.surname.$error }"
          class="form-row--title"
        >
          <span>*</span>Name:<span class="error" v-if="!$v.name.required">
            &nbsp;&nbsp;Name is required</span
          ><span class="error" v-if="!$v.surname.required">
            &nbsp;&nbsp;Surname is required</span
          >
        </div>
        <div class="form-row--inputs">
          <input
            v-model.trim="name"
            @input="setName($event.target.value)"
            type="text"
            placeholder="Name"
          />

          <input
            v-model.trim="surname"
            @input="setSurname($event.target.value)"
            type="text"
            placeholder="Surname"
          />
        </div>
      </div>

      <!-- Email Address: -->
      <div class="form-section">
        <div
          :class="{
            'form-group--error': $v.email.$error | $v.confirmEmail.$error
          }"
          class="form-row--title"
        >
          <span>*</span>Email Address:
          <span class="error" v-if="!$v.email.email">
            &nbsp;&nbsp;enter a valid email address</span
          >
          <span class="error" v-if="!$v.confirmEmail.sameAs">
            &nbsp;&nbsp;e-mails do not match</span
          >
        </div>

        <div class="form-row--inputs">
          <input
            @input="setEmail($event.target.value)"
            v-model.trim="email"
            type="email"
            placeholder="Email"
          />
          <input
            v-model.trim="confirmEmail"
            @input="setConfirmEmail($event.target.value)"
            type="email"
            placeholder="Confirm Email"
          />
        </div>
      </div>

      <!-- Location: -->
      <div class="form-section">
        <div
          :class="{
            'form-group--error': $v.country.$error | $v.city.$error
          }"
          class="form-row--title"
        >
          <span>*</span>Location:
          <span class="error" v-if="!$v.country.required">
            &nbsp;&nbsp;Country is required</span
          >
          <span class="error" v-if="!$v.city.required">
            &nbsp;&nbsp;City is required</span
          >
        </div>
        <div class="form-row--inputs">
          <input
            @input="setCountry($event.target.value)"
            v-model.trim="country"
            type="text"
            placeholder="Country"
          />
          <input
            @input="setCity($event.target.value)"
            v-model.trim="city"
            type="text"
            placeholder="City"
          />
        </div>
      </div>

      <div style="border: 1px solid #f1efe8; margin-top: 30px"></div>

      <!-- Languages : -->
      <div class="form-section">
        <div class="form-section--title">
          Profile
        </div>

        <div class="form-row--title"><span></span>Languages:</div>
        <div class="form-row--inputs">
          <input v-model="languages" type="text" placeholder="Please type" />
        </div>

        <div class="form-row--title"><span></span>Skill level:</div>
        <div class="form-row--inputs">
          <input
            v-model="languagesSkill"
            type="text"
            placeholder="eg. Master"
          />
        </div>
      </div>

      <!--Resume: -->
      <div class="form-section">
        <div
          :class="{
            'form-group--error': $v.resumeCity.$error | $v.resumeCountry.$error
          }"
          class="form-section--title"
        >
          Resume (essential to the process):
          <span class="error" v-if="!$v.resumeCountry.required">
            &nbsp;&nbsp;Country is required</span
          >
          <span class="error" v-if="!$v.resumeCity.required">
            &nbsp;&nbsp;City is required</span
          >
        </div>
        <div class="form-row--title">
          <span>*</span>Resume:
          <span class="error" v-if="!$v.resumeCountry.required">
            &nbsp;&nbsp;Country is required</span
          >
          <span class="error" v-if="!$v.resumeCity.required">
            &nbsp;&nbsp;City is required</span
          >
          <svg
            style="display: none"
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
          <input
            @input="setResumeCountry($event.target.value)"
            v-model.trim="resumeCountry"
            type="text"
            placeholder="Country"
          />
          <input
            @input="setResumeCity($event.target.value)"
            v-model.trim="resumeCity"
            type="text"
            placeholder="City"
          />
        </div>
      </div>

      <!-- Upload -->

      <div class="box__input">
        <input
          type="file"
          name="file"
          id="file"
          ref="file"
          class="inputfile"
          v-on:change="handleFileUpload()"
        />
        <label class="label-file" for="file"
          ><strong>Upload a file </strong
          ><span class="box__dragndrop">
            {{ this.file.name ? this.file.name : "" }}</span
          ></label
        >
        <!-- <button class="box__button" type="submit">Upload</button> -->
      </div>
      <div class="box__uploading">Uploading…</div>
      <div class="box__success">Done!</div>
      <div class="box__error">Error! <span></span>.</div>

      <!-- demo / showreel -->
      <div class="form-section">
        <div
          :class="{ 'form-group--error': $v.demoURL.$error }"
          class="form-row--title"
        >
          <span>*</span>Demo or showreel:<span
            class="error"
            v-if="!$v.demoURL.required"
          >
            &nbsp;&nbsp;Demo is required</span
          >
        </div>
        <div class="form-row--inputs">
          <input
            @input="setdemoURL($event.target.value)"
            v-model.trim="demoURL"
            type="text"
            placeholder="Paste only an URL here"
          />
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

        <div
          :class="{ 'form-group--error': $v.twodCompositing.$error }"
          class="form-row--title"
        >
          <span>*</span>2D / Compositing:
          <span class="error" v-if="!$v.twodCompositing.required">
            &nbsp;&nbsp;this field is required</span
          >
        </div>
        <div class="form-row--inputs">
          <input
            v-model.trim="twodCompositing"
            @input="settwodCompositing($event.target.value)"
            type="text"
            placeholder="2D / Compositing:"
          />
        </div>

        <div
          :class="{ 'form-group--error': $v.treeDsoftware.$error }"
          class="form-row--title"
        >
          <span>*</span>3D:
          <span class="error" v-if="!$v.treeDsoftware.required">
            &nbsp;&nbsp;this field is required</span
          >
        </div>
        <div class="form-row--inputs">
          <input
            v-model.trim="treeDsoftware"
            @input="settreeDsoftware($event.target.value)"
            type="text"
            placeholder="3D Software"
          />
        </div>

        <div
          :class="{ 'form-group--error': $v.editing.$error }"
          class="form-row--title"
        >
          <span>*</span>Editing:
          <span class="error" v-if="!$v.editing.required">
            &nbsp;&nbsp;this field is required</span
          >
        </div>
        <div class="form-row--inputs">
          <input
            v-model.trim="editing"
            @input="setediting($event.target.value)"
            type="text"
            placeholder="3Editing Software"
          />
        </div>

        <div
          :class="{ 'form-group--error': $v.officeSoftware.$error }"
          class="form-row--title"
        >
          <span>*</span>Office:
          <span class="error" v-if="!$v.officeSoftware.required">
            &nbsp;&nbsp;this field is required</span
          >
        </div>
        <div class="form-row--inputs">
          <input
            v-model.trim="officeSoftware"
            @input="setofficeSoftware($event.target.value)"
            type="text"
            placeholder="Office Software"
          />
        </div>

        <div
          :class="{ 'form-group--error': $v.proggramingLanguages.$error }"
          class="form-row--title"
        >
          <span>*</span>Programming:
          <span class="error" v-if="!$v.proggramingLanguages.required">
            &nbsp;&nbsp;this field is required</span
          >
        </div>
        <div class="form-row--inputs">
          <input
            v-model.trim="proggramingLanguages"
            @input="setproggramingLanguages($event.target.value)"
            type="text"
            placeholder="Programming languages"
          />
        </div>

        <div
          :class="{ 'form-group--error': $v.webDesignSoftware.$error }"
          class="form-row--title"
        >
          <span>*</span>Web design / Web Development:
          <span class="error" v-if="!$v.webDesignSoftware.required">
            &nbsp;&nbsp;this field is required</span
          >
        </div>
        <div class="form-row--inputs">
          <input
            v-model="webDesignSoftware"
            @input="setwebDesignSoftware($event.target.value)"
            type="text"
            placeholder="Web design software or languages"
          />
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

      <label
        :class="{
          'form-group--error': $v.terms.$error
        }"
        class="checkbox-container"
      >
        <p>
          I agree to the Terms and Conditions
          <span class="error" v-if="!$v.terms.checked"> select checkbox</span>
        </p>
        <input
          v-model.trim="terms"
          type="checkbox"
          @input="setTerms($event.target.checked)"
        />
        <span class="checkmark"></span>
      </label>

      <div class="form-buttons" @click="sendData">
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
import {
  required,
  minLength,
  between,
  email,
  sameAs
} from "vuelidate/lib/validators";

export default {
  props: ["title", "offerID"],
  data() {
    return {
      submitStatus: null,
      applyID: this.offerID,
      recipient: "",
      loading: false,
      success: false,
      errored: false,
      name: null,
      surname: null,
      email: null,
      confirmEmail: "",
      country: "",
      city: "",
      languages: "",
      languagesSkill: "",
      demoURL: "",
      twodCompositing: "",
      treeDsoftware: "",
      editing: "",
      officeSoftware: "",
      proggramingLanguages: "",
      webDesignSoftware: "",
      resumeCountry: "",
      resumeCity: "",
      terms: "",
      file: ""
    };
  },

  validations: {
    name: {
      required
    },
    surname: {
      required
    },
    email: {
      email
    },
    confirmEmail: {
      sameAs: sameAs("email")
    },
    country: {
      required
    },
    city: {
      required
    },
    resumeCountry: {
      required
    },
    resumeCity: {
      required
    },
    demoURL: {
      required
    },
    twodCompositing: {
      required
    },
    treeDsoftware: {
      required
    },
    editing: {
      required
    },
    officeSoftware: {
      required
    },
    proggramingLanguages: {
      required
    },
    webDesignSoftware: {
      required
    },
    terms: {
      checked: value => value === true
    }
  },

  async fetch() {
    this.recipient = await fetch(
      `${process.env.MAIN_API_ENDPOINT}jobs?id=${this.applyID}`
    ).then(res => res.json());
  },

  mounted() {
    $("input[type='file']").on("keyup", function(e) {
      if (e.keyCode === 27) this.blur(), e.stopPropagation();
    });

    $(document).on("keyup", function(e) {
      // The active element (i.e. focused) should be the <body> element
      if (e.keyCode === 27) console.log(document.activeElement);
    });
  },
  methods: {
    setName(value) {
      this.name = value;
      this.$v.name.$touch();
    },
    setSurname(value) {
      this.surname = value;
      this.$v.surname.$touch();
    },
    setEmail(value) {
      this.email = value;
      this.$v.email.$touch();
    },
    setTerms(value) {
      this.terms = value;
      this.$v.terms.$touch();
    },
    setCountry(value) {
      this.country = value;
      this.$v.country.$touch();
    },
    setResumeCountry(value) {
      this.resumeCountry = value;
      this.$v.resumeCountry.$touch();
    },
    setResumeCity(value) {
      this.resumeCity = value;
      this.$v.resumeCity.$touch();
    },
    setCity(value) {
      this.city = value;
      this.$v.city.$touch();
    },
    setdemoURL(value) {
      this.demoURL = value;
      this.$v.demoURL.$touch();
    },
    setConfirmEmail(value) {
      this.confirmEmail = value;
      this.$v.confirmEmail.$touch();
    },
    settwodCompositing(value) {
      this.twodCompositing = value;
      this.$v.twodCompositing.$touch();
    },
    settreeDsoftware(value) {
      this.treeDsoftware = value;
      this.$v.treeDsoftware.$touch();
    },
    setediting(value) {
      this.editing = value;
      this.$v.editing.$touch();
    },
    setofficeSoftware(value) {
      this.officeSoftware = value;
      this.$v.officeSoftware.$touch();
    },
    setproggramingLanguages(value) {
      this.proggramingLanguages = value;
      this.$v.proggramingLanguages.$touch();
    },
    setwebDesignSoftware(value) {
      this.webDesignSoftware = value;
      this.$v.webDesignSoftware.$touch();
    },

    sendData: function() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "VALIDATION OK";
        const items = {
          form_type: "apply",
          title: this.title,
          recipient: this.recipient[0].apply_to,
          name: this.name,
          surname: this.surname,
          email: this.email,
          confirmEmail: this.confirmEmail,
          country: this.country,
          city: this.city,
          languages: this.languages,
          languagesSkill: this.languagesSkill,
          demoURL: this.demoURL,
          twodCompositing: this.twodCompositing,
          treeDsoftware: this.treeDsoftware,
          editing: this.editing,
          officeSoftware: this.officeSoftware,
          proggramingLanguages: this.proggramingLanguages,
          webDesignSoftware: this.webDesignSoftware,
          resumeCountry: this.resumeCountry,
          resumeCity: this.resumeCity,
          terms: this.terms,
          city: this.city,
          country: this.country
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(items));
        formData.append("files.file", this.file);
        this.$axios
          .post(`${process.env.APPLY_FORM_POST}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            this.success = true;
            this.errored = false;
          })
          .catch(error => {
            this.errored = true;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>

<style lang="scss">
.error {
  display: none;
}

.form-group--error {
  .error {
    display: block;
  }
}
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
  padding: 0px;
  margin-top: 16px;
  overflow: hidden;

  input[type="file"] {
    overflow: hidden;
    width: 0.1px;
    z-index: -1;
    position: relative;
    left: -999px;
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

span.error {
  font-weight: 500;
  color: #eb5757;
  font-size: 14px;
}
</style>
