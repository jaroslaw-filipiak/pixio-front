<template>
  <div class="section section-2" :style="{ backgroundImage: `url(${image})` }">
    <div v-if="isSectionOverlayActive" class="section-overlay"></div>
    <div class="slide slide-2">
      <div class="slide-title">
        <h1>Virtual production studio in Toronto</h1>
      </div>

      <div
        @click="handleMoreClick"
        class="indicator"
        style="position: fixed; left: 20vw; top: 30vh"
      ></div>
      <div class="tooltip-container">
        <div v-if="isTooltipVisible" class="tooltip">
          <div class="tooltip--left">
            <img src="~/assets/img/about.jpg" />
          </div>
          <div class="tooltip--right">
            <h2>
              About <br />
              unreal engine
            </h2>
            <p>
              Epic Games’ Unreal Engine is the world’s most open and advanced
              real-time 3D tool. Creators across games, film, television,
              architecture, automotive and transportation, advertising, live
              events, and training and simulation choose Unreal to deliver
              cutting-edge content, interactive experiences, and immersive
              virtual worlds.
            </p>
          </div>
        </div>
      </div>
      <div class="vr-info-box--wrapper">
        <div class="vr-info-box">
          <div class="vr-info-box--column vr-info-box--column-1">
            <img src="~/assets/img/fast-forward.svg" />
            <h4>Making <br />impossible</h4>
          </div>
          <div class="vr-info-box--column vr-info-box--column-2">
            <img src="~/assets/img/fast-forward.svg" />
            <h4>Results driven <br />by technology</h4>
          </div>
          <div class="vr-info-box--column vr-info-box--column-3">
            <img src="~/assets/img/fast-forward.svg" />
            <h4>
              Making the sun<br />
              rise or sun set
            </h4>
          </div>
          <div class="vr-info-box--column vr-info-box--column-4">
            <button
              style="position: relative; left: 60px"
              class="btn btn-outline-white"
            >
              Contact us for more information
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="slide slide-2-3">
      <div class="tooltip">
        <iframe
          style="position: relative; z-index: 3"
          width="860"
          height="515"
          src="https://www.youtube.com/embed/kdhsCV45zW0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import image from "@/assets/img/vrbg.jpg";
export default {
  data() {
    return {
      image: image,
      isTooltipVisible: false,
      isSectionOverlayActive: false,
    };
  },
  methods: {
    handleMoreClick() {
      this.isSectionOverlayActive = !this.isSectionOverlayActive;
      this.isTooltipVisible = !this.isTooltipVisible;
    },
  },
  watch: {
    isSectionOverlayActive: function () {
      console.log(this.isSectionOverlayActive);

      //   nextButton.classList.add(
      //     `${this.isSectionOverlayActive ? "fp-next__visible" : "bts"}`
      //   );
      //   prevButton.classList.add("fp-prev__visible");
    },
  },
  mounted() {},
};
</script>

<style lang="scss">

.fp-controlArrow.fp-prev {
  opacity: 0  !important;
}

.vr-info-box--wrapper {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 80px;
}

.vr-info-box {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  line-height: 23px;
  max-width: 888px;
  margin: 0 auto;
  height: 100%;

  .vr-info-box--column {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: 211px;
    // border-right: 2px solid white;
    padding: 0px 30px;
    position: relative;
    z-index: 205;

    &:after {
      content: "";
      display: block;
      width: 3px;
      height: 100%;
      background-color: #fff;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 20%;
    }
    &:last-of-type {
      &:after {
        width: 0;
      }
    }

    img {
      margin-bottom: 20px;
    }
  }
}

.section-2 {
  //   .fp-prev,
  //   .fp-next {
  //     display: none;
  //   }

  .fp-prev__visible,
  .fp-next__visible {
    display: block;
  }

  .fp-tableCell {
    justify-content: center;
    align-items: center;
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
