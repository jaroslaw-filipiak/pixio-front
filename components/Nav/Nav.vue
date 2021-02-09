<template>
  <div class="nav-wrapper" :class="{ navOpen: navOpen }">
    <!-- <Hamburger /> -->
    <div class="hamburger" @click="toggleMenu">
      <svg viewBox="0 0 12 10" class="hamburger" height="30px" width="30px">
        <path
          d="M10,2 L2,2"
          class="upper"
          style="fill: none; stroke: #fff; stroke-linecap: round"
        />
        <path
          d="M2,5 L10,5"
          class="middle"
          style="fill: none; stroke: #fff; stroke-linecap: round"
        />
        <path
          d="M10,8 L2,8"
          class="lower"
          style="fill: none; stroke: #fff; stroke-linecap: round"
        />
      </svg>
    </div>
    <div class="logo" style="color: #fff">
      <img :src="require(`~/assets/img/logo-txt.svg`)" />
    </div>
    <nav v-if="navOpen" class="nav-main">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
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
