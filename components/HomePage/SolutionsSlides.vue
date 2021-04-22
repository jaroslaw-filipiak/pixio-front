<template>
  <div class="swipper-outer">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div
          class="tooltip-container "
          :class="{ 'tooltip-container--visible': isTooltipVisible }"
        >
          <div v-if="isTooltipVisible" class="tooltip">
            <div class="tooltip--left">
              <img :src="this.pageVisualProduction.tooltip_1_image[0].url" />
            </div>
            <div class="tooltip--right">
              <span
                v-html="$md.render(this.pageVisualProduction.tooltip_1_content)"
              ></span>

              <div @click="nextSlide" class="tooltip-button ">
                <p>See what can we do using VR</p>
                <img
                  src="@/assets/img/arrow-right-black.svg"
                  alt="arrow right"
                />
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div v-if="isTooltipVisible" class="tooltip">
          <iframe
            class="iframe__page-visual-production"
            :src="
              `https://www.youtube.com/embed/${this.pageVisualProduction.tooltip_2_video_ID}`
            "
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div
          class="tooltip-container"
          :class="{ 'tooltip-container--visible': isTooltipVisible }"
        >
          <div v-if="isTooltipVisible" class="tooltip">
            <div class="tooltip--left">
              <img :src="this.pageVisualProduction.tooltip_3_img[0].url" />
            </div>
            <div class="tooltip--right">
              <span
                v-html="$md.render(this.pageVisualProduction.tooltip_3_content)"
              ></span>
            </div>
          </div>
        </div>
      </swiper-slide>

      <div
        class="swiper-pagination"
        :class="{ 'swiper-pagination__visible': isBulletsVisible }"
        slot="pagination"
      ></div>
    </swiper>

    <div
      v-if="indicatorVisible"
      @click="handleMoreClick"
      class="indicator"
    ></div>

    <div
      v-if="isCloseModalButtonVisible"
      @click="closeSwiper"
      class="swiper-close-cross"
    >
      <div class="arrow-bottom-next-slide--inner">
        <img src="@/assets/img/cross-icon.svg" alt="" />
      </div>
    </div>

    <div v-show="isTooltipVisible" class="swipper-arrows">
      <div class="swiper-pixo-button-next">
        <img src="@/assets/img/arrow-bottom.svg" alt="" />
      </div>
      <div class="swiper-pixo-button-prev">
        <img src="@/assets/img/arrow-bottom.svg" alt="" />
      </div>
    </div>
    <div
      class="swiper-pagination__vp"
      :class="{ 'swiper-pagination__vp-visible': isTooltipVisible }"
    ></div>
  </div>
</template>

<script>
import { pageVisualProductionContent } from "~/graphql/queries";

export default {
  data() {
    return {
      isCloseModalButtonVisible: false,
      isSectionOverlayActive: false,
      indicatorVisible: true,
      isTooltipVisible: false,
      isBulletsVisible: false,
      swiperOptions: {
        // effect: "flip",
        allowTouchMove: true,
        speed: 300,
        pagination: {
          el: ".swiper-pagination__vp",
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-pixo-button-next",
          prevEl: ".swiper-pixo-button-prev"
        }
      },
      pageVisualProduction: {}
    };
  },
  apollo: {
    pageVisualProduction: {
      prefetch: true,
      query: pageVisualProductionContent
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper;
    }
  },
  mounted() {
    this.forceIndicatorVisibleToTrue();
  },
  watch: {
    isSectionOverlayActive: function() {
      this.handleSwipperWrapperOverlay();

      if (this.isSectionOverlayActive) {
        const vrBox = document.querySelector(".vr-info-box--wrapper");
        vrBox.classList.add("vr-box__under");
      } else {
        const vrBox = document.querySelector(".vr-info-box--wrapper");
        vrBox.classList.remove("vr-box__under");
      }
    }
  },
  methods: {
    nextSlide() {
      this.$refs.mySwiper.$swiper.slideNext();
    },
    forceIndicatorVisibleToTrue() {
      this.indicatorVisible = true;
    },
    closeSwiper() {
      this.isSectionOverlayActive = false;
      this.isTooltipVisible = false;
      this.indicatorVisible = true;
      this.isBulletsVisible = false;
      this.isCloseModalButtonVisible = false;
    },
    handleMoreClick() {
      this.isSectionOverlayActive = !this.isSectionOverlayActive;
      this.isTooltipVisible = !this.isTooltipVisible;
      this.indicatorVisible = !this.indicatorVisible;
      this.isBulletsVisible = !this.isBulletsVisible;
      this.isCloseModalButtonVisible = true;
    },
    handleSwipperWrapperOverlay() {
      const container = document.querySelector(".swiper-container");
      const swiperPaginaton = document.querySelector(".swiper-pagination__vp");

      if (this.isSectionOverlayActive) {
        container.classList.add("swipper-container__overlay");
        swiperPaginaton.classList.add("pagination__vp-visible");
        this.$store.commit("setIsTooltipVisible", true);
      } else {
        container.classList.remove("swipper-container__overlay");
        swiperPaginaton.classList.remove("pagination__vp-visible");
        this.$store.commit("setIsTooltipVisible", false);
      }
    }
  }
};
</script>

<style lang="scss">
.slide-2 {
  .swiper-container {
    z-index: 0;
  }
}
.arrow-bottom-next-slide--inner {
  opacity: 1;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
    transition: all 0.3s ease-in-out;
  }
}

.swiper-pixo-button-next,
.swiper-pixo-button-prev {
  width: 40px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s ease-in;
  &:hover {
    opacity: 0.7;
    transition: all 0.3s ease-in;
  }
}

.swiper-pixo-button-next {
  img {
    transform: rotate(270deg);
  }
}

.swiper-pixo-button-prev {
  img {
    transform: rotate(90deg);
  }
}

.swiper-button-disabled {
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.swipper-arrows {
  width: 80vw;
  height: 9%;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 7;
  transform: translate(-50%, -50%);
  margin-top: 82px;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;

  opacity: 1;
  transition: all 0.3s ease-in-out;

  @include xs {
    display: none;
  }
  @include sm {
    display: none;
  }
  @include md {
    display: none;
  }
  @include lg {
    display: none;
  }

  @include xl-min {
    width: 80vw;
  }

  @include xxl-min {
    width: 85vw;
  }
}

.swipper-outer {
  position: relative;
  width: 100vw;
  height: 100vh;
  left: -95px;
  top: -82px;
  @include xs {
    left: 0;
  }
  @include sm {
    left: 0;
  }
  @include md {
    left: 0;
  }
  @include lg {
    left: 0;
  }
}

.swiper-close-cross {
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  width: 100%;

  position: absolute;
  bottom: -155px;
  left: 0;
  z-index: 22;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  bottom: 0px;

  @include safariMobile {
    margin-bottom: 60px;
    transform: scale(0.6);
  }
  @include xs {
    margin-bottom: 60px;
    transform: scale(0.6);
  }
  @include sm {
    margin-bottom: 60px;
    transform: scale(0.6);
  }

  @include md {
    bottom: -115px;
  }
  @include lg {
    margin-left: -95px;
  }

  @include lg-min {
    height: 50px;
  }

  @include xl {
    bottom: -155px;
  }

  @include xxl-min {
    height: 80px;
  }
}

.swipper-container {
  background: rgba(93, 62, 62, 0) !important;
  transition: all 0.2s ease-in-out;
}

.swipper-container__overlay {
  background: rgba(93, 62, 62, 0.9) !important;
  transition: all 0.5s ease-in-out;
}

.swiper-container .swiper-pagination-bullet {
  margin: 0px 5px !important;
}

.swiper-pagination {
  left: 0px;

  width: 100vw;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  &__visible {
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }

  @include lg-min {
    bottom: 67px;
  }
  @include xxl-min {
    bottom: 85px;
  }
}

.swiper-container {
  &__overlay-visible {
    background: rgba(93, 62, 62, 0.9);
    transition: all 0.2s ease-in-out;
  }
}

.swiper-container {
  z-index: 5;
  width: calc(100vw);
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(93, 62, 62, 0);
  transition: all 0.2s ease-in-out;
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #000 !important;
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
  }

  .swiper-pagination-bullets {
    bottom: 120px;
    left: 0;
    width: 100%;
    z-index: 9999;
    position: absolute;
  }

  .swiper-pagination-bullet {
    cursor: pointer;
  }
}

.tooltip-button {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  p {
    font-weight: bold;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    bottom: -2px;
    left: 0;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;
  }

  &:hover {
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #000;
      position: absolute;
      bottom: -2px;
      left: 0;
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      animation-fill-mode: forwards;
    }
  }
}
</style>
