<template>
  <div
    class="section"
    id="section-contact"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="contact-title">
      <h2>More questions ?</h2>
      <p>We are here for you</p>
    </div>
    <div class="contact-form" :class="{'contact-form--succes': isSuccess}">
      <label for="name">
        Hello, my name is
        <input type="text" placeholder="your name" />
      </label>
      <label for="select">
        I would like to:
        <select name="" id="">
          <option value="get an estimate">get an estimate</option>
          <option value="get an estimate">learn more about VP</option>
          <option value="get an estimate">other</option>
        </select>
      </label>
      <label for="email">
        You can reach me via
        <input type="email" placeholder="your e-mail" />
      </label>

      <div class="detalis-txt" style="margin-top: 20px">Here are the details:</div>
      <textarea name="" id="" cols="30" rows="3"></textarea>
      <button @click="sendMessage" class="btn btn-outline-white">Send inquiry</button>
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
          <a href="mailto:">marketing@pixomondo.com</a>
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
          <a href="mailto:">studio@pixomondo.com</a>
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
          <a href="mailto:">jobs@pixomondo.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgImage = require("@/assets/img/contact-bg.jpg");

export default {
  data() {
    return {
      bgImage,
      isSuccess: false
    };
  },
  methods: {
    sendMessage: function() {
      this.isSuccess = !this.isSuccess;
      setTimeout(()=> {
        this.isSuccess = !this.isSuccess;
      },2000)
    }
  }
};
</script>

<style lang="scss">

.contact-title {
  @include xxl-min {
    position: relative;
    top: 6vh;
  }
}
#section-contact {
  background-size: cover;
  background-repeat: no-repeat;

  .contact-title {
    text-align: center;
  }
  .fp-tableCell {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: space-between !important;
    height: 100vh !important;
    padding: 60px 0px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 40px 30px;
    transform: scale(1);

     @include xl {
      transform: scale(.8)
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
    transition: all .2s ease-in-out;

    &--succes {
      border: 1px solid #000;
      transition: all .2s ease-in-out;
      background-color: rgb(0, 0, 0);
      position: relative;
      z-index: 4;
      &::before {
        transition: all .2s ease-in-out;
        content: 'your message was sent successfully';
        color: rgb(255, 255, 255);
        font-size: 22px;
        width: 100%;
        height: 100%;
        display:flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        position: absolute;
        left: 0;
        top: 0;

      }
      label {
        opacity: 0;
      }
       input {
          opacity: 0
        }
        textarea {
          opacity: 0;
        }

        .detalis-txt {
          opacity: 0;
        }
        button {
          opacity: 0;
        }
    }
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

    @include xl {
      transform: scale(.8)
    }
  }

  .contact-info--icon {
    width: 70px;
    height: 70px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }
}
</style>