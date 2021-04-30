<template>
  <div
    id="section2"
    class="section section-2"
    :style="{
      backgroundImage: `url(${this.pageVisualProduction.section_background.url})`
    }"
  >
    <div class="section-2-gradient-overlay"></div>
    <div class="slide slide-2 slide-solutions">
      <SolutionsSlides />

      <div class="vr-info-box--wrapper">
        <div class="vr-info-box">
          <button
            v-if="!tooltipVisibility"
            @click="goToContact"
            class="btn btn-outline-white btn-outline-white__solutions"
          >
            Additional information
          </button>
        </div>
      </div>
    </div>
    <slot> </slot>
  </div>
</template>

<script>
import image from "@/assets/img/vrbg.jpg";
import { pageVisualProductionContent } from "~/graphql/queries";
export default {
  data() {
    return {
      image: image,
      isTooltipVisible: true,
      isSectionOverlayActive: false,
      isArrowsVisible: false,
      indicatorVisible: true,
      pageVisualProduction: {
        id: "",
        section_background: {
          url: ""
        }
      }
    };
  },
  apollo: {
    pageVisualProduction: {
      prefetch: true,
      query: pageVisualProductionContent
    }
  },
  methods: {
    goToContact() {
      fullpage_api.moveTo(6);
    },
    nextSlide(e) {
      fullpage_api.moveSlideLeft();
    },
    handleMoreClick() {
      this.isSectionOverlayActive = !this.isSectionOverlayActive;
      this.isTooltipVisible = !this.isTooltipVisible;
      this.isArrowsVisible = !this.isArrowsVisible;
      this.indicatorVisible = !this.indicatorVisible;
      console.log("handle more click");
    }
  },
  mounted() {},
  computed: {
    tooltipVisibility() {
      return this.$store.state.isTooltipVisible;
    }
  }
};
</script>

<style lang="scss">
.vr-box__under {
  z-index: -1 !important;
}

.section-2-gradient-overlay {
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=1);

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.side-arrows-visible {
  .fp-controlArrow.fp-prev {
  }
  .fp-controlArrow.fp-next {
  }
}

.slide {
  .swiper-close-cross {
    @include xs {
      margin-bottom: 10vh !important;
    }
    @include safariMobile {
      margin-bottom: 10vh !important;
    }
  }
  // .swiper-pagination__vp {
  //   bottom: -20px;
  //   margin-bottom: 0;
  // }
  // .swiper-close-cross {
  //   bottom: -50px;
  //   margin-bottom: 0;
  // }

  // @include sm-min {
  //   .swiper-pagination__vp {
  //     bottom: 0px;
  //   }
  //   .swiper-close-cross {
  //     bottom: -25px;
  //   }
  // }

  // @include md-min {
  //   .swiper-pagination__vp {
  //     bottom: 22px;
  //   }
  //   .swiper-close-cross {
  //     bottom: -17px;
  //   }
  // }

  @include lg-min {
    // .swiper-pagination__vp {
    //   bottom: 30px;
    // }
    .swiper-close-cross {
      bottom: -15px;
    }
  }

  @include xl-min {
    .swiper-close-cross {
      bottom: -20px;
    }
  }

  .vr-info-box--wrapper {
    width: 100%;
    position: absolute;
    bottom: 80px;
    z-index: 11;
    transform: scale(1);

    @include lg-min {
      height: 60px;
    }

    @include xl {
      transform: scale(0.9);
      left: -10px;
    }
  }

  .vr-info-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    line-height: 23px;
    max-width: 888px;
    margin: 0 auto;
    height: 100%;

    @include safariMobile {
      margin-bottom: 100px;
    }

    @include md {
      font-size: 24px;
    }

    @include lg-min {
      flex-direction: row;
      align-items: center;
    }

    button {
      margin: auto;
    }
  }
}
.section-2 {
  .fp-prev__visible,
  .fp-next__visible {
    display: block;
  }

  .fp-tableCell {
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 80px 0px;
    position: relative;
    @include xs {
      height: 90vh !important;
    }
  }

  h1 {
    margin: 0 auto;
    text-align: center;
    font-size: 24px;
    max-width: 260px;
  }

  .slide-2-3 {
    .fp-tableCell {
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 80px 0px;
      position: relative;
    }
  }
}

.section-overlay {
  background-color: #5d3e3e;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
}
</style>
