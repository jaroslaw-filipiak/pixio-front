<template>
  <div
    class="section"
    id="section-contact"
    :style="{
      backgroundImage: `url(${this.pageContact.section_background.url})`
    }"
  >
    <div id="info-modal" :class="{ 'info-modal-show': modalInfo }" @click="hideModalInfo">
      <img class="info-image" src="@/assets/img/logo.svg" alt="">
      <p class="info-message">{{ modalMessage }}</p>
      <p class="info-close">[close]</p>
    </div>
    <div class="contact-title">
      <h2>More questions ?</h2>
      <p>We are here for you</p>
    </div>
    <div class="contact-form">
      <label for="name">
        <div :class="{ 'form-group--error': $v.name.$error }">
          Hello, my name is
          <span class="error" v-if="!$v.name.required"> Name is required</span>
        </div>
        <input
          @input="setName($event.target.value)"
          v-model.trim="name"
          type="text"
          placeholder="your name"
        />
      </label>
      <label for="select">
        <div :class="{ 'form-group--error': $v.select.$error }">
          I would like to:
          <span class="error" v-if="!$v.select.required"
            >This field is required</span
          >
        </div>

        <select
          @input="setSelect($event.target.value)"
          v-model.trim="select"
          name="i-would-like-to"
          id=""
        >
          <option value="get an estimate">get an estimate</option>
          <option value="learn mora about VP">learn more about VP</option>
          <option value="other">other</option>
        </select>
      </label>
      <label for="email">
        <div :class="{ 'form-group--error': $v.email.$error }">
          You can reach me via
          <span class="error" v-if="!$v.email.email"
            >Enter a valid email address</span
          >
          <span class="error" v-if="!$v.email.required"
            >This field is required</span
          >
        </div>

        <input
          @input="setEmail($event.target.value)"
          v-model.trim="email"
          type="email"
          placeholder="your e-mail"
        />
      </label>

      <div
        :class="{ 'form-group--error': $v.message.$error }"
        class="detalis-txt"
        style="margin-top: 20px"
      >
        Here are the details:
        <span class="error" v-if="!$v.message.error"
          >This field is required</span
        >
      </div>
      <textarea
        v-model.trim="message"
        name="message"
        id="message"
        cols="30"
        rows="3"
        @input="setMessage($event.target.value)"
      ></textarea>
      <button @click="sendMessage" class="btn btn-outline-white">
        Send inquiry
      </button>
    </div>
    <div class="contact-info">
      <div class="contact-info--item">
        <div class="contact-info--icon">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2903 22.2568C17.8131 22.2568 22.2903 17.7797 22.2903 12.2568C22.2903 6.73399 17.8131 2.25684 12.2903 2.25684C6.76744 2.25684 2.29028 6.73399 2.29028 12.2568C2.29028 17.7797 6.76744 22.2568 12.2903 22.2568Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.29028 12.2568H22.2903"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2903 2.25684C14.7916 4.99519 16.213 8.54887 16.2903 12.2568C16.213 15.9648 14.7916 19.5185 12.2903 22.2568C9.789 19.5185 8.36753 15.9648 8.29028 12.2568C8.36753 8.54887 9.789 4.99519 12.2903 2.25684V2.25684Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="contact-info--txt">
          <p>Marketing</p>
          <a v-bind:href="'mailto:' + pageContact.marketing_email">{{
            pageContact.marketing_email
          }}</a>
        </div>
      </div>
      <div class="contact-info--item">
        <div class="contact-info--icon">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.75562 9.25684L2.75562 12.2568L5.75562 15.2568"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.75562 5.25684L12.7556 2.25684L15.7556 5.25684"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.7556 19.2568L12.7556 22.2568L9.75562 19.2568"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.7556 9.25684L22.7556 12.2568L19.7556 15.2568"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.75562 12.2568H22.7556"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.7556 2.25684V22.2568"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="contact-info--txt">
          <p>Sales</p>
          <a v-bind:href="'mailto:' + pageContact.sales_email">{{
            pageContact.sales_email
          }}</a>
        </div>
      </div>
      <div class="contact-info--item">
        <div class="contact-info--icon">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.06567 4.25684H20.0657C21.1657 4.25684 22.0657 5.15684 22.0657 6.25684V18.2568C22.0657 19.3568 21.1657 20.2568 20.0657 20.2568H4.06567C2.96567 20.2568 2.06567 19.3568 2.06567 18.2568V6.25684C2.06567 5.15684 2.96567 4.25684 4.06567 4.25684Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.0657 6.25684L12.0657 13.2568L2.06567 6.25684"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="contact-info--txt">
          <p>General inquires</p>
          <a v-bind:href="'mailto:' + pageContact.general_email">{{
            pageContact.general_email
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pageContactContent } from "~/graphql/queries";
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      modalInfo: false,
      modalMessage: 'Hello stranger!',
      pageContact: {
        id: "",
        marketing_email: "",
        sales_email: "",
        general_email: "",
        section_background: {
          url: ""
        }
      },
      name: "",
      select: null,
      email: null,
      message: null
    };
  },
  validations: {
    name: {
      required
    },
    select: {
      required
    },
    email: {
      email,
      required
    },
    message: {
      required
    }
  },
  apollo: {
    pageContact: {
      prefetch: true,
      query: pageContactContent
    }
  },
  methods: {
    setName(value) {
      this.name = value;
      this.$v.name.$touch();
    },
    setSelect(value) {
      this.select = value;
      this.$v.select.$touch();
    },
    setEmail(value) {
      this.email = value;
      this.$v.email.$touch();
    },
    setMessage(value) {
      this.message = value;
      this.$v.message.$touch();
    },
    sendMessage: function() {
      this.$v.$touch();
      this.loading = true;

      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "VALIDATION OK";
        this.$axios
          .post(`${process.env.MAIN_FORM_ENDPOINT}`, {
            form_type: "contact",
            name: this.name,
            select: this.select,
            email: this.email,
            message: this.message
          })
          .then(response => {
            if (response.status == 200 && !response.data.length) {
              this.resetForm();
              this.showModalInfo('Your message was sent successfully')
            } else {
              this.showModalInfo('There was an error trying to send your message. Please contact with support@pixomondo.com')
            }
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
    resetForm: function() {
      this.name = '';
      this.select = null;
      this.email = '';
      this.message = '';
      this.$v.$reset();   // hide validation msg
    },
    showModalInfo: function(message) {
      this.modalInfo = true;
      this.modalMessage = message;
    },
    hideModalInfo: function() {
      this.modalInfo = false;
    },
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

  span {
    font-weight: 500;
    color: #eb5757;
    font-size: 14px;
  }
}

#info-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  height: calc(100% - 100px);
  margin: 20px;
  padding: 20px;
  background: #000;
  border-radius: 10px;
  z-index: 1000000;

  display: none;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-content: center;

  @include lg-min {
    top: 40px;
    height: calc(100% - 80px);
  }

  &.info-modal-show {
    display: flex;
  }

  .info-image {
    max-width: 400px;
    margin: -80px auto 0;
  }
  p {
    text-align: center;
  }
}

.contact-title {
  @include safariMobile {
    display: none !important;
  }
  @include sm {
    display: none !important;
  }

  @include xxl-min {
    position: relative;
    top: 6vh;
  }
}

#section-contact {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;

  .contact-title {
    text-align: center;

    @include safariMobile {
      display: none;
    }
    @include xs {
      display: none;
    }
    @include sm {
      display: none;
    }
  }
  .fp-tableCell {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: space-around !important;
    height: 100vh !important;

    @include xs {
      height: 90vh !important;
    }
    @include xl-min {
      padding: 60px 0px;
      justify-content: space-between !important;
    }
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    border-radius: 20px;
    padding: 0px 30px;
    transform: scale(1);

    @include lg-min {
      border: 1px solid #fff;
      padding: 40px 30px;

      @include safariMobile {
        padding: 3px 0px;
      }
      @include xs {
        padding: 3px 0px;
      }
      @include sm {
        padding: 3px 0px;
      }
    }

    @include xl {
      transform: scale(0.8);
    }

    @include xxl-min {
      min-width: 520px;
      padding: 50px 40px;
    }

    label {
      margin: 10px 0px;
      width: 100%;
      display: flex;
      justify-content: space-between;

      @include safariMobile {
        margin: 3px 0px;
      }
      @include xs {
        margin: 3px 0px;
      }
      @include sm {
        margin: 3px 0px;
      }
    }
    button {
      margin-top: 10px;
    }

    input,
    select {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.7) !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      width: 50%;
      text-align: left;
      padding-left: 10px;

      &::placeholder {
        color: #fff;
        opacity: 0.7;
      }
    }
    select {
      color: #fff;

      option {
        background-color: black;
        color: #fff !important;
        border: none !important;
      }
    }

    textarea {
      margin: 20px 0px;
      background-color: transparent;
      color: #fff;
      border: none;
      width: 100%;
      position: relative;
      border-bottom: 1px solid #fff;
    }
    button {
      text-align: center;
      margin: 0 auto;
    }
    textarea:focus,
    input:focus {
      outline: none;
    }
    transition: all 0.2s ease-in-out;
  }

  .contact-info--item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    text-transform: uppercase;
    margin: 0px 20px;

    a {
      text-transform: none;
      color: #fff;
      font-size: 14px;
    }
  }

  .contact-info {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1);
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 60px;

    @include safariMobile {
      width: 100%;
    }
    @include xs {
      width: 100%;
    }
    @include sm {
      width: 100%;
    }

    @include lg-min {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 0px;
    }

    @include xl {
      transform: scale(0.8);
    }

    &--item {
      margin: 5px 0px;

      @include safariMobile {
        margin: 3px 0px;
        width: 60%;
        margin: 0 auto;
      }
      @include xs {
        margin: 3px 0px;
        width: 60%;
        margin: 0 auto;
      }
      @include sm {
        margin: 3px 0px;
        width: 60%;
      }

      @include xl-min {
        margin: 0px 20px;
      }
    }
  }

  .contact-info--icon {
    width: 32px;
    height: 32px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    @include md-min {
      width: 70px;
      height: 70px;
    }
  }
}
</style>
