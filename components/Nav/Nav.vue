<template>
  <div class="nav-wrapper" :class="{ navOpen: navOpen }">
    <button
      class="hamburger hamburger--spin"
      :class="{ 'is-active': navOpen }"
      @click="toggleMenu"
      type="button"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <div ref="" class="logo" style="color: #fff;">
      <img :src="require(`~/assets/img/logo-txt.svg`)" />
    </div>
    <nav class="nav-main">
      <ul>
        <li><a @click="handleMenu" link-to="1" href="#">Home</a></li>
        <li>
          <a @click="handleMenu" link-to="2" href="#">Visual Production </a>
        </li>
        <li><a @click="handleMenu" link-to="3" href="#">Projects</a></li>
        <li><a @click="handleMenu" link-to="4" href="#">About</a></li>
        <li><a @click="handleMenu" link-to="5" href="#">Social media</a></li>
        <li><a @click="handleMenu" link-to="6" href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Hamburger from "./Hamburger";

export default {
  components: {
    Hamburger
  },
  data: function() {
    return {
      // navOpen: false
    };
  },
  methods: {
    toggleMenu: function() {
      this.$store.commit("changeNavOpen", !this.$store.state.navOpen);
    },
    handleMenu: function(e) {
      this.removeAllActiveClasses();
      fullpage_api.moveTo(e.target.attributes[0].value);
      this.$store.commit("changeNavOpen", false);
    },
    removeAllActiveClasses: function() {
      const items = document.querySelectorAll(".slide-link");

      items.forEach(item => item.classList.remove("slide-link__active"));
    },
    addActiveClass: function(item) {
      item.classList.add("slide-link__active");
    }
  },
  computed: {
    navOpen() {
      return this.$store.state.navOpen;
    }
  },
  mounted() {
    // console.log(this.navOpen);
  }
};
</script>

<style lang="scss">
.logo {
  display: none;
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
  transition: all 0.3s ease-in-out !important;
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 0px 10px;
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
  transition: all 0.3s ease-in-out !important;

  @include lg-min {
    padding: 0px 64px 0px 10px;
    width: 280px;
  }

  .nav-main {
    width: 85vw;
    height: 100vh;
    transition: all 0.3s ease-in-out;
    opacity: 1;

    @include lg-min {
      width: 280px;
    }

    ul {
      li {
        a {
          display: inline-block;
          position: relative;
          opacity: 0.8;
          &:after {
            content: "";
            display: block;
            width: 0%;
            height: 2px;
            background-color: #fff;
            position: absolute;
            left: 0;
            bottom: 0;
            transition: all 0.1s ease-in-out;
          }

          &:hover {
            opacity: 1;
            &:after {
              content: "";
              display: block;
              width: 100%;
              height: 2px;
              background-color: #fff;
              position: absolute;
              left: 0;
              bottom: 0;
              transition: all 0.1s ease-in-out;
            }
          }
        }
      }
    }
  }
}

.nav-main {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 10px;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  transition: all 0.3s ease-in-out;
  opacity: 0;

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    min-width: 140px;

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
