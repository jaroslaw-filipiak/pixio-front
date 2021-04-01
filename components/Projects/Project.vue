<template>
  <span>
    <figure
      @click="showVideo"
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
  </span>
</template>

<script>
export default {
  props: {
    title: String,
    backgroundUrl: String,
    movieEmbeed: String
  },
  data() {
    return {
      isVideoVisible: false
    };
  },
  mounted() {},
  methods: {
    showVideo: function(e) {
      if (e.target.attributes[0].value == "gallery__item-caption") {
        const itemURL =
          e.target.parentElement.children[0].children[0].attributes[2].value;
        this.$store.commit("changeVideoURL", itemURL);
        this.$store.commit("changeVideoTooltipVisibility", true);
      } else {
        const itemURL = e.target.attributes[2].value;
        this.$store.commit("changeVideoURL", itemURL);
        this.$store.commit("changeVideoTooltipVisibility", true);
      }
    }
  },

  watch: {
    isVideoVisible: function() {
      this.isVideoVisible = this.$store.state.isVideoTooltipVisible;
    }
  }
};
</script>
