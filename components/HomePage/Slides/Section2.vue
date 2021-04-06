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
          <div class="vr-info-box--column vr-info-box--column-1">
            <img src="~/assets/img/fast-forward.svg" />
            <h4>Making <br />impossible</h4>
          </div>
          <div class="vr-info-box--column vr-info-box--column-2">
            <img src="~/assets/img/icon-zap.svg" />
            <h4>Results driven <br />by technology</h4>
          </div>
          <div class="vr-info-box--column vr-info-box--column-3">
            <img src="~/assets/img/icon-sunset.svg" />
            <h4>
              Making the sun<br />
              rise or sun set
            </h4>
          </div>
          <div class="vr-info-box--column vr-info-box--column-4">
            <button
              @click="goToContact"
              class="btn btn-outline-white btn-outline-white__solutions"
            >
              Contact us for more information
            </button>
          </div>
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
    }
  },
  watch: {
    isSectionOverlayActive: function() {
      // console.log(this.isSectionOverlayActive);
    }
  },
  mounted() {}
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

.vr-info-box--wrapper {
  width: 100%;
  position: absolute;
  bottom: 80px;
  z-index: 11;
  transform: scale(1);

  @include lg-min {
    height: 100px;
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

  @include lg-min {
    flex-direction: row;
    align-items: center;
  }

  .vr-info-box--column {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    padding: 10px 30px;
    position: relative;
    z-index: 4;

    @include lg-min {
      padding: 0px 30px;
      width: 211px;
    }

    &:after {
      content: "";
      display: none;
      width: 3px;
      height: 100%;
      background-color: #fff;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 20%;

      @include lg-min {
        display: block;
      }
    }
    &:last-of-type {
      &:after {
        width: 0;
      }
    }

    img {
      margin-bottom: 20px;
    }

    &-4 {
      @include xs {
        align-items: center;
      }
      @include sm {
        align-items: center;
      }
      @include md {
        align-items: center;
      }
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
