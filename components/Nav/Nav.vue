<template>
  <div class="nav-wrapper" :class="{ navOpen: navOpen }">

      <button class="hamburger hamburger--spin" :class="{'is-active': navOpen}" @click="toggleMenu" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <div class="logo" style="color: #fff">''
      <img :src="require(`~/assets/img/logo-txt.svg`)" />
    </div>
    <nav v-if="navOpen" class="nav-main">
      <ul>
        <li><a @click="handleMenu" link-to="1" href="#">Home</a></li>
        <li><a @click="handleMenu" link-to="2" href="#">Solutions</a></li>
        <li><a @click="handleMenu" link-to="3" href="#">Projects</a></li>
        <li><a @click="handleMenu" link-to="4" href="#">About</a></li>
        <li><a @click="handleMenu" link-to="5" href="#">Instagram</a></li>
        <li><a @click="handleMenu" link-to="6" href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import Hamburger from "./Hamburger";

  export default {
    components: {
      Hamburger,
    },
    data: function () {
      return {
        navOpen: false,
      };
    },
    methods: {
      toggleMenu: function () {
        this.navOpen = !this.navOpen;
        console.log("toggle menu");
      },
      handleMenu: function (e) {
        this.removeAllActiveClasses();
        fullpage_api.moveTo(e.target.attributes[0].value);
      },
      removeAllActiveClasses: function () {
        const items = document.querySelectorAll(".slide-link");

        items.forEach((item) => item.classList.remove("slide-link__active"));
      },
      addActiveClass: function (item) {
        item.classList.add("slide-link__active");
      },
    },
  };

</script>

<style lang="scss">


  .logo {
    margin: 0 auto;

    img {
      position: relative;
      left: -35px;
    }

    @include md-min {
      display: none;
    }
  }

  .nav-wrapper {
    width: 100%;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px 0px 32px;
    overflow: visible;
    grid-area: nav;
    overflow: visible;
    z-index: 2;

    @include lg-min {
      width: 95px;
      height: 100vh;
    }
  }

  .navOpen {
    width: 100%;

    @include md-min {
      padding: 0px 64px 0px 32px;
      width: 230px;
    }

    .nav-main {
      width: 85vw;
      height: 100vh;

      @include md-min {
        width: 230px;
      }
    }
  }

  .nav-main {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 0;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 40px;

    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;

      li {
        margin: 4px 0px;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }

</style>
