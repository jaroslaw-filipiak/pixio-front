<template>
  <main :class="{ isMenuVisible: isMenuVisible }">
    <Nav />
    <Hero v-on:scroll.native="handleScroll" />
    <!-- <ArrowBottomIndicator/> -->
    <FullPageHome />
    <Rightnav />
  </main>
</template>

<script>
export default {
  data() {
    return {
      isMaskVisible: true,
      isVideoVisible: false,
      isMenuVisible: false
    };
  },
  methods: {
    handleScroll(event) {
      this.handleScrollLock();
    }
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);

    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    // console.log($.fn.fullpage);
    // console.log($nuxt);
    // fullpage_api.moveTo(3);
    // console.log(fullpage_api);
    fullpage_api.setAllowScrolling(false, "down");
    fullpage_api.setAllowScrolling(false, "up");
    console.log("index mounted set allow scrolling to false");
  },
  computed: {
    isScrollLock() {
      return this.$store.state.isScrollLock;
    }
  }
};
</script>

<style lang="scss">
.section {
  background-color: rgb(46, 46, 46);
  color: #fff;

  .fp-tableCell {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  iframe.hero {
    width: 100vw;
    height: 100vh;
    border: none;
    position: relative;
  }

  .move-mask {
    position: relative;

    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    // background-color: #000;
    // background-image: url("~assets/img/mask.png");
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;

    @include xl-min {
      left: -20px;
    }

    // @include md-min {
    //   width: 110%;
    //   height: 110%;
    // }
  }
}

.hero-switcher {
  border: 2px solid red;
}
</style>
