<template>
  <div class="section section-projects">
    <div
      @click="setVideoTooltipToFalse"
      class="section-projects--overlay"
      :class="{
        'section-projects--overlay__is-visible': getVideoTooltipVisibleInfo
      }"
    ></div>
    <div class="slide" style="transform: rotate(-1deg)">
      <div class="content" :class="{ isBlured: getVideoTooltipVisibleInfo }">
        <div class="gallery">
          <Project @click.native="handleClickInProject" :my-prop="count">
          </Project>
        </div>
      </div>
    </div>

    <div
      class="tet"
      :class="{
        'tet__visible video-tooltip-visible': getVideoTooltipVisibleInfo
      }"
    >
      <div
        id="portfolioVideo"
        :class="{ 'video-tooltip-visible': getVideoTooltipVisibleInfo }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tooltipVideoVisible: false
    };
  },
  methods: {
    setVideoTooltipToFalse: function() {
      this.$store.commit("setVideoTooltipToFalse", false);
      console.log("setVideoTooltipToFalse");
    },
    setVideoTooltipVisibleInfoToFalse: function() {
      this.$store.commit("changeVideoTooltipVisibilityToFalse", false);
    },
    handleClickInProject: function(e) {
      this.$store.commit(
        "changeVideoTooltipVisibility",
        !this.tooltipVideoVisible
      );
    },
    onYouTubeIframeAPIReady: function() {
      var playerVid;

      playerVid = new YT.Player("portfolioVideo", {
        height: "548",
        width: "900",
        videoId: "ng-LJ0x4vUo",
        loop: 1,
        playerVars: {
          enablejsapi: 1,
          controls: 1,
          mute: 1,
          showinfo: 0,
          fs: 0,
          cc_load_policy: 0,
          iv_load_policy: 3,
          autoplay: 0,
          loop: 1,
          playlist: "ng-LJ0x4vUo",
          modestbranding: 1,
          autohide: 1
        },
        enablejsapi: 1,
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      });
    },
    onPlayerReady: function(event) {
      setTimeout(() => {
        event.target.playVideo();
        console.log(event.target);
      }, 5000);

      setTimeout(() => {
        event.target.loadVideoById("WeoAgb7v3fU");
      }, 8000);
    },

    onPlayerStateChange: function(event) {}
  },
  mounted() {
    this.onYouTubeIframeAPIReady();
  },

  computed: {
    getVideoTooltipVisibleInfo() {
      return this.$store.state.isVideoTooltipVisible;
    },
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style lang="scss">
.isBlured {
  transition: all 0.3s ease-in-out;
  filter: blur(5px) !important;
}

.tet {
  width: 60vw;
  height: 60vh;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
}

.tet__visible {
  z-index: 33;
}

.video-tooltip-visible {
  iframe#portfolioVideo {
    //  visible
    display: block;
  }
}

iframe#portfolioVideo {
  display: none;
}

#portfolioVideo {
  opacity: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
}

.demo-2 {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}

* {
  --color-gallery-title: #d9d0be;
  --color-gallery-number: #181817;
  --color-gallery-link: #fff;
  --color-gallery-link-bg: #cc0000;
  --color-gallery-link-hover: #0e0e0d;
  --color-gallery-link-bg-hover: #d9d0be;
  --cursor-stroke: none;
  --cursor-fill: #cc0000;
  --cursor-stroke-width: 1px;
}

.rotate {
  transform: rotate(-2deg);
}

.gallery {
  display: flex;
  margin-left: 5vw;
  width: 100%;
}

.gallery__item {
  transition: all 0.2s ease-in-out;
  margin: 0 3vw;
  display: grid;
  grid-template-areas:
    "... ..."
    "... gallery-image"
    "... ...";

  grid-template-columns: 1rem 21vmax;
  grid-template-rows: 40px 28vmax 3rem;

  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.05);
  }
}

.gallery__item-img {
  grid-area: gallery-image;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  will-change: transform;
}

.gallery__item-imginner {
  background-size: contain;
  background-position: 50% 0;
  width: calc(100% + 10vw);
  margin-left: -5vw;
  height: 100%;
  will-change: transform;
  background-repeat: no-repeat;
  cursor: pointer;
}

.gallery__item-caption {
  grid-area: 1 / 1 / 4 / 3;
  display: grid;
  grid-template-areas:
    "gallery-number gallery-title"
    "gallery-link ..."
    "gallery-link gallery-tags";
  grid-template-columns: 1rem auto;
  grid-template-rows: 29px 36rem 3rem;
}

.gallery__item-number {
  grid-area: gallery-number;
  font-size: 6rem;
  font-size: clamp(2.5rem, 9vw, 6.5rem);
  justify-self: end;
  padding-right: 2rem;
  color: var(--color-gallery-number);
  display: none;
}

.gallery__item-title {
  grid-area: gallery-title;
  margin: 0;
  font-size: 24px;
  color: var(--color-gallery-title);
  font-family: "Jost", sans-serif !important;
}

.gallery__item-number,
.gallery__item-title,
.gallery__text {
  font-family: moret, serif;
  font-weight: 800;
  font-style: italic;
  align-self: center;
}

.gallery__item-link {
  grid-area: gallery-link;
  align-self: end;
  font-size: 1.5rem;
  background: #d7d0c0;
  color: var(--color-gallery-link);
  text-decoration: underline;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  left: 59px;
  top: -43px;

  @include xl-min {
    top: -38%;
    left: 0%;
  }
}

.gallery__item-link:focus,
.gallery__item-link:hover {
  background: var(--color-gallery-link-bg-hover);
  color: var(--color-gallery-link-hover);
  text-decoration: none;
}

.gallery__item-tags {
  grid-area: gallery-tags;
  justify-self: end;
  font-size: 1.5rem;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  cursor: pointer;
}

.gallery__text {
  font-size: 20vw;
  line-height: 0.8;
  margin: 0 12vw;
  text-transform: lowercase;
  color: transparent;
  -webkit-text-stroke: 1px #645c5b;
  text-stroke: 1px #645c5b;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

.gallery__text-inner {
  display: block;
}

/* @media screen and (min-width: 53em) {
  .frame {
    grid-template-areas: "title demos demos links";
  }
  .frame__info {
    justify-self: end;
  }
} */
.section-projects {
  transition: all 0.5s ease-in;

  .content {
    filter: blur(0px);
    transition: all 0.3s ease-in;
  }
}
.section-projects--overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.5s ease-in;

  &__is-visible {
    z-index: 2;
    transition: all 0.5s ease-in;
  }
}
</style>
