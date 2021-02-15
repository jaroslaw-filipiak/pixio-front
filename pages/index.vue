<template>
  <main>
    <Nav />
    <Hero v-on:scroll.native="handleScroll" />

    <full-page
      ref="fullpage"
      :options="options"
      style="postion: relative; top: 100vh"
    >
      <Section2 />
      <Section3 />
      <Section4 />
      <Instagram />
      <Contact />

      <div class="section">
        <div class="slide">sd</div>
      </div>

    </full-page>
    <Rightnav />
  </main>
</template>

<script>
export default {
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#side-menu",
        anchors: [
          "home",
          "solutions",
          "projects",
          "about",
          "instagram",
          "contact",
          "page7",
          "page8",
        ],
        scrollingSpeed: 150,
        navigation: true,
        navigationPosition: 'right',
        // navigationTooltips: ['firstSlide', 'secondSlide'],
        afterLoad: this.afterLoad,
        afterLoad: this.afterLoad,
        onSlideLeave: this.onSlideLeave,
        onLeave: this.onLeave,
      },
      done: false,
      isMaskVisible: true,
      isVideoVisible: false,
    };
  },
  methods: {
    handleScrollLock() {
      this.store.commit('changeScrollLock', 'dfdff')
    },
    afterSlideLoad() {
      console.log("after slide load..");
      console.log(e);
    },
    afterLoad() {
      // console.log("Emitted 'after load' event.");
    },
    onLeave(e) {
      console.log("on leave..");
      console.log(e);
    },
    onSlideLeave(section, origin, destination, direction) {
      // console.log("on slide leave..");
      // console.log(section);
      // console.log(origin);
      // console.log(destination);
      // console.log(direction);
    },
    onYouTubeIframeAPIReady: function () {
      var player;

      player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: "QoiQ0Vo5It0",
        playerVars: {
          enablejsapi: 1,
          controls: 1,
          mute: 1,
          showinfo: 0,
          fs: 0,
          cc_load_policy: 0,
          iv_load_policy: 3,
          autoplay: 1,
          modestbranding: 1,
          autohide: 1,
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      });
    },

    onPlayerReady: function (event) {
      event.target.playVideo();
      // event.target.muteVideo();
      // console.log('PLAYER READY')
      //  event.target.muteVideo();
    },

    onPlayerStateChange: function (event) {},

    stopVideo: function (event) {
      event.target.stopVideo();
      event.target.pauseVideo();
      // console.log(player);
      // console.log(event.target);
    },
    handleScroll(event) {
      console.log('handle scroll fired')
      this.handleScrollLock();
      // console.log("scroll..");
      // console.log(event);
    },
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);

    window.addEventListener('scroll', this.handleScroll);

    

  },
  mounted() {
    this.onYouTubeIframeAPIReady();
    this.afterLoad();
    // console.log($.fn.fullpage);
    // console.log($nuxt);
    // fullpage_api.moveTo(3);
    // console.log(fullpage_api);
    fullpage_api.setAllowScrolling(false, "down");
    fullpage_api.setAllowScrolling(false, "up");
  },
  computed: {
    isScrollLock() {
      return this.$store.state.isScrollLock
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
</style>
