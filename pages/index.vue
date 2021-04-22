<template>
  <main class="main-mobile" :class="{ isMenuVisible: isMenuVisible }">
    <TopLogo />
    <Nav />
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
    @include xs {
      height: 90vh !important;
    }
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
    display: flex;
    align-items: center;
    justify-content: center;

    @include xl-min {
      left: -20px;
    }
  }
}
</style>
