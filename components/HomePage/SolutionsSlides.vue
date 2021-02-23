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
            <div @click="nextSlide"  class="tooltip-button ">
              <p>See what can we do using VR</p>
              <img src="@/assets/img/arrow-right-black.svg" alt="arrow right">
            </div>
            
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div v-if="isTooltipVisible" class="tooltip">
        <iframe
          style="position: relative; z-index: 3"
          width="650"
          height="389"
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

    <div v-show="isTooltipVisible" class="swipper-arrows">
    <div class="swiper-pixo-button-next"><img src="@/assets/img/arrow-bottom.svg" alt=""></div>
     <div class="swiper-pixo-button-prev"><img src="@/assets/img/arrow-bottom.svg" alt=""></div>
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
          effect: 'flip',
          allowTouchMove: false,
          speed: 200,
         pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
           nextEl: '.swiper-pixo-button-next',
           prevEl: '.swiper-pixo-button-prev',
        }
          // Some Swiper option/callback...
        }
      }
},
computed: {
  swiper() {
      return this.$refs.mySwiper
    }
},
mounted() {
 this.forceIndicatorVisibleToTrue();
//  const swiper = document.querySelector('.swiper-container').swiper;

  console.log('Current Swiper instance object', this.swiper)
  // console.log('myswiper' , $swiper)
      // this.swiper.slideTo(3, 1000, false)
 
},
watch: {
  isSectionOverlayActive: function() {
     console.log(this.isSectionOverlayActive);
     this.handleSwipperWrapperOverlay()
     console.log('watch isSectionOverlayActive')
  }
    
},
methods: {
 
  nextSlide() {
    // console.log(this.$refs.mySwiper)
    // this.$refs.mySwiper.$swiper.slideTo(1)
    this.$refs.mySwiper.$swiper.slideNext()
    
    // swiper.slideNext();
    // this.swiper.slideTo(2, 1000, false)
  },
  forceIndicatorVisibleToTrue() {
    this.indicatorVisible = true,
    console.log('forceIndicatorVisibleToTrue')
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
     const container = document.querySelector('.swiper-container');

    if(this.isSectionOverlayActive) {
      container.classList.add('swipper-container__overlay')
       this.$store.commit('setIsTooltipVisible', true)
    } else {
       container.classList.remove('swipper-container__overlay')
        this.$store.commit('setIsTooltipVisible', false)
    }
    
  }
},

}
</script>

<style lang="scss">

.arrow-bottom-next-slide--inner {
  opacity: 1; 
   transition: all .3s ease-in-out;
  &:hover {
    opacity: .7;
    transition: all .3s ease-in-out;
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
 transition: all .3s ease-in;
 &:hover {
   opacity: .7;
   transition: all .3s ease-in;
   }
}

.swiper-pixo-button-next {
  img {
transform: rotate(270deg)
  }
  
}

.swiper-pixo-button-prev {
  img {
 transform: rotate(90deg)
  }
 
}

 .swiper-button-disabled {
      opacity: 0;
      transition: all .3s ease-in-out;
    }
    
.swipper-arrows {
    width: 80vw;
    height: 9%;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 7;
    transform: translate(-50%, -50%);

    display:flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    opacity: 1;
    transition: all .3s ease-in-out;

    @include lg-min {
      width: 80vw;
    }
    

    @include xxl-min {
      width: 85vw;
    }

   
}

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

    @include lg-min {
      height: 50px;
    }

    @include xxl-min {
      height: 80px;
    }
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
 
  width: 100vw;
  opacity: 0;
  transition: all .2s ease-in-out;
  &__visible {
    opacity: 1;
    transition: all .2s ease-in-out;
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
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: rgba(0, 0, 0, 0);
      position: absolute;
      bottom: -2px;
      left: 0;
      transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
      animation-fill-mode: forwards;
    }

  &:hover {
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #000;
      position: absolute;
      bottom: -2px;
      left: 0;
      transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
     animation-fill-mode: forwards;
    }
  }
}
</style>