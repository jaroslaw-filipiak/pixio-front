// :class="{'side-arrows-visible': isArrowsVisible}"
<template>
  <div class="section section-2" :style="{ backgroundImage: `url(${image})` }">
    <div v-if="isSectionOverlayActive" class="section-overlay"></div>
    <div class="slide slide-2 slide-solutions"  >
      <div class="slide-title">
        <h1>Virtual production studio in Toronto    
          <slot> </slot>  
        </h1>
      </div>

      <div v-if="indicatorVisible"
        @click="handleMoreClick"
        class="indicator"
        style="position: fixed; left: 20vw; top: 30vh"
      ></div>
      <div class="tooltip-container" :class="{'tooltip-container--visible' : isTooltipVisible}">
        <div v-if="isTooltipVisible" class="tooltip" >
          <div class="tooltip--left">
            <img src="~/assets/img/about.jpg" />
          </div>
          <div class="tooltip--right">
            <h2>
              Visual Production Studio in Toronto
            </h2>
            <p>
             Virtual production means amazing results driven by technology. It allows creative people to bring their vision to life way before the final edit or locked cut. With our technology we can highlight the flaws before it’s too late. We can emphasize the strength and originality to make the most out of the production. We can make what seemed impossible come to life inside the VR headset  before the set has been built. We can make the sun rise or sun set whenever you want. And you choose the color. We can even make it rain.
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
      isArrowsVisible: false,
      indicatorVisible: true,
    };
  },
  
  methods: {
    nextSlide(e) {
        fullpage_api.moveSlideLeft();
        console.log('next slide methood')
        console.log(fullpage_api)
    },
    handleMoreClick() {
      this.isSectionOverlayActive = !this.isSectionOverlayActive;
      this.isTooltipVisible = !this.isTooltipVisible;
      this.isArrowsVisible = !this.isArrowsVisible;
      this.indicatorVisible = !this.indicatorVisible
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
    //  isArrowsVisible: function() {
    //    console.log( this.isArrowsVisible)

    //    const sectionClass = document.querySelector('.section-2')
       

    //    if( this.isArrowsVisible) {
    //       sectionClass.classList.add('side-arrows-visible')
    //    } else if (this.isArrowsVisible = false){
    //       sectionClass.classList.remove('side-arrows-visible')
    //    }
    //  }
  },
  mounted() {
    
  
  },
};
</script>

<style lang="scss">

.side-arrows-visible {
  .fp-controlArrow.fp-prev {
 
 }
  .fp-controlArrow.fp-next {
  
 }
}

.fp-controlArrow.fp-prev {
}
 
.fp-controlArrow.fp-next {
  
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
    z-index: 4;

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
