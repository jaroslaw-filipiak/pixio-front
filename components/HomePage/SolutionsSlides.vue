<template>
<div class="swipper-outer">
  <swiper ref="mySwiper" :options="swiperOptions">

    <swiper-slide>
       <div class="tooltip-container " :class="{'tooltip-container--visible' : isTooltipVisible}">
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
    </swiper-slide>

    <swiper-slide>
      <div v-if="isTooltipVisible" class="tooltip">
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
    </swiper-slide>

    <swiper-slide>
      <div class="tooltip-container" :class="{'tooltip-container--visible' : isTooltipVisible}">
        <div v-if="isTooltipVisible" class="tooltip" >
          <div class="tooltip--left">
            <img src="~/assets/img/about2.jpg" />
          </div>
          <div class="tooltip--right">
            <h2>
             Our value and <br> pride – people
            </h2>
            <p>
            At Pixomondo we pride ourselves on the ability to work with one of the most creative minds in the industry. They support an innovative environment oriented to develop award-winning movies and TV series. Our passion is to deliver visionary ideas of highest quality. We provide it on-time and on-budget with outstanding service. We have extended this approach to our work in Virtual Production firmly merging best people with the newest technology.
            </p>
          </div>
        </div>
      </div>
    </swiper-slide>

    <div class="swiper-pagination" :class="{'swiper-pagination__visible': isBulletsVisible }" slot="pagination">
    </div>

  </swiper>

      <div v-if="indicatorVisible"
        @click="handleMoreClick"
        class="indicator"
        style="position: fixed; left: 20vw; top: 30vh">
      </div>

     <div v-if="isCloseModalButtonVisible"  @click="closeSwiper" class="swiper-close-cross">
         <div class="arrow-bottom-next-slide--inner">
           <img src="@/assets/img/cross-icon.svg" alt="">
         </div>
     </div>

</div>
  
</template>

<script>
export default {
data() {
      return {
        isCloseModalButtonVisible: false,
        isSectionOverlayActive: false,
        indicatorVisible: true,
        isTooltipVisible: false,
        isBulletsVisible: false,
        swiperOptions: {
         pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
          // Some Swiper option/callback...
        }
      }
},
watch: {
  isSectionOverlayActive: function() {
     console.log(this.isSectionOverlayActive);
     this.handleSwipperWrapperOverlay()
  }
    
},
methods: {
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
     const container = document.querySelector('.swiper-container');

    if(this.isSectionOverlayActive) {
      container.classList.add('swipper-container__overlay')
    } else {
       container.classList.remove('swipper-container__overlay')
    }
    
  }
},
 mounted() {
      console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<style lang="scss">

.swipper-outer {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: -95px;
    top: 0;
}

.swiper-close-cross {
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 22;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.swipper-container {
   background: rgba(93, 62, 62, 0)!important;
   transition: all .2s ease-in-out;
}

.swipper-container__overlay {
      background: rgba(93, 62, 62, 0.9) !important;
      transition: all .5s ease-in-out;
}

.swiper-container .swiper-pagination-bullet {
    margin: 0px 5px !important;
}

.swiper-pagination {
  left: 0px;
  bottom: 120px;
  width: 100vw;
  opacity: 0;
  transition: all .2s ease-in-out;
  &__visible {
    opacity: 1;
    transition: all .2s ease-in-out;
  }
}

.swiper-container {
  &__overlay-visible {
     background: rgba(93, 62, 62, 0.9);
     transition: all .2s ease-in-out;
  }
}

.swiper-container {
    z-index: 5;
    width: calc(100vw);
    height: 100vh;
    position: absolute;
    // left: -95px;
    top: 0;
    background: rgba(93, 62, 62, 0);
    transition: all .2s ease-in-out;
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

</style>