<template>
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
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
data() {
      return {
        isTooltipVisible: true,
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
},
 mounted() {
      console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<style>

</style>