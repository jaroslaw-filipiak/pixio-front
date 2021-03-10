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

      <div class="section">
        <div class="slide">Instargrammm</div>
        <div class="slide">4.1</div>
      </div>

      <div class="section">Contact</div>

      <div class="section">
        <div class="slide">sd</div>
      </div>

      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">
          Prev
        </button>
        Section 7
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
        menu: "#menu",
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
        scrollingSpeed: 300,
        afterLoad: this.afterLoad,
        onSlideLeave: this.onSlideLeave,
        onLeave: this.onLeave,
      },
      done: false,
      isMaskVisible: true,
      isVideoVisible: false,
      isScrollLock: true,
    };
  },
  methods: {
    afterLoad() {
      // console.log("Emitted 'after load' event.");
    },
    onLeave(e) {
      // console.log("on leave..");
      // console.log(e);
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
        videoId: "9kJxyig3RaE",
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

    onPlayerStateChange: function (event) {
      console.log("onState change event fired...");
      setTimeout(() => {
        // console.log('pause...')
        // event.target.pauseVideo();
      }, 6000);
    },

    stopVideo: function (event) {
      event.target.stopVideo();
      event.target.pauseVideo();
      console.log(player);
      console.log(event.target);
    },

    handleScroll(event) {
      console.log("scroll..");
      console.log(event);
    },
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);

    $(window).bind("mousewheel", function (e) {
      if (e.originalEvent.wheelDelta / 120 > 0) {
        console.log("scrolling up");
        console.log(e.originalEvent);
      } else {
        // (this.isMaskVisible = false),
        // (this.isVideoVisible = true),
        // (this.isScrollLock = false),

        console.log("scrolling down");
        console.log(e.originalEvent);

        // gsap.to( '.move-mask', .5,{css:{scale:.05, opacity:0, rotation: 180}, ease:Quad.easeInOut}));

        gsap.to(".move-mask", {
          scaleX: 20,
          scaleY: 20,
          opacity: 0,
          duration: 2,
        });

        // transform: scale(9.5);
        // opacity: 0;
      }
    });
  },
  mounted() {
    this.onYouTubeIframeAPIReady();
    this.afterLoad();
    console.log($.fn.fullpage);
    console.log($nuxt);
    // fullpage_api.moveTo(3);
    // console.log(fullpage_api);
    // fullpage_api.setAllowScrolling(false, "down");
    // fullpage_api.setAllowScrolling(false, "up");
  },
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
    position: absolute;
    left: -20px;
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

    @include md-min {
      width: 110%;
      height: 110%;
    }
  }
}
</style>
