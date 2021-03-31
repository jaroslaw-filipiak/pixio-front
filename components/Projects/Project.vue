<template>
  <span>
    <figure
      @click="showFuckingVideo"
      class="gallery__item"
      style="position: relative;"
    >
      <div class="gallery__item-img">
        <div
          class="gallery__item-imginner"
          :style="{ backgroundImage: `url(${backgroundUrl})` }"
          data-scroll
          data-scroll-speed="-0.8"
          :data-video-id="movieEmbeed"
        ></div>
      </div>
      <figcaption class="gallery__item-caption">
        <h2 class="gallery__item-title" data-scroll data-scroll-speed="1">
          {{ title }}
          <slot> </slot>
        </h2>

        <a class="gallery__item-link"
          ><svg
            width="17"
            height="21"
            viewBox="0 0 17 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.96875 1.1626L15.9688 10.1626L1.96875 19.1626V1.1626V1.1626Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </figcaption>
    </figure>

    <!-- <div class="project-video" :class="{'project-video__visible': isVideoVisible}">
    <video-embed  ref="youtube" :params="{autoplay: 1}" :src="videoSRC"></video-embed>
   </div> -->
  </span>
</template>

<script>
import backgroundImagePath from "@/assets/img/poster-star-treck-discovery.jpg";
export default {
  props: {
    title: String,
    backgroundUrl: String,
    movieEmbeed: String
    // src: String
  },
  data() {
    return {
      backgroundImagePath,
      isVideoVisible: false
    };
  },
  mounted() {},
  methods: {
    showFuckingVideo: function(e) {
      if (e.target.attributes[0].value == "gallery__item-caption") {
        const itemURL =
          e.target.parentElement.children[0].children[0].attributes[2].value;
        this.$store.commit("changeVideoURL", itemURL);
        this.$store.commit("changeVideoTooltipVisibility", true);
      } else {
        const itemURL = e.target.attributes[2].value;
        this.$store.commit("changeVideoURL", itemURL);
        // this.isVideoVisible = !this.isVideoVisible;
        // first click = show Video toolip
        this.$store.commit("changeVideoTooltipVisibility", true);
      }
    }
  },

  computed: {
    // isVideoTooltipVisible() {
    //     return this.$store.state.isVideoTooltipVisible
    // },
    // videoSRC() {
    //   return this.$store.state.videoSRC
    // }
  },

  watch: {
    isVideoVisible: function() {
      this.isVideoVisible = this.$store.state.isVideoTooltipVisible;
    }
  }
};
</script>

<style lang="scss">
// .project-video {
//     width:650px;
//     height:389px;
//     z-index: -1;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     opacity: 1;
//     border: 1px solid blue;

//     &__visible {
//       border: 1px solid red;
//       opacity: 1;
//       z-index: 90;
//     }

//     iframe {
//        width:650px;
//       height:389px;
//     }
//   }
</style>
