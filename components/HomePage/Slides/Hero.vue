<template>
  <div
    class="section hero"
    style="
      position: relative;
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: -1;
    "
  >
    <div class="move-mask">
      <div class="mask-mobile--wrapper">
        <div class="mask-mobile--inner">
          <img class="mask-mobile" src="@/assets/img/mobile-mask.png" alt="">
        </div>
      </div>
      <div class="move-mask--inner">
  <svg
     
        width="1922"
        height="1082"
        viewBox="0 0 1922 1082"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <rect width="1922" height="1082" fill="transparent" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1920 -43H0V1123.67H1920V-43ZM949.7 466.441L896.675 381.286H1002.42L949.7 466.441ZM642.959 528.456V447.003H732.669C756.407 446.695 769.663 464.281 770.279 487.112C771.204 512.412 757.332 528.147 737.91 528.456H642.959ZM1278.33 542.956C1275.86 480.016 1248.73 445.769 1192.63 444.843C1132.2 448.546 1107.54 484.953 1106 542.339C1108.16 603.12 1133.13 637.367 1186.77 638.601C1241.03 641.687 1274.01 613.919 1278.33 542.956ZM949.7 609.599L888.352 703.393L1010.43 703.702L949.7 609.599ZM544 704.01H642.034L641.726 596.024L780.145 595.715C830.086 593.247 860.298 563.011 870.163 505.007L779.836 380.977H544.617L544 704.01ZM1120.8 380.052L1008.89 535.552L1136.21 703.084C1266.92 716.66 1329.2 698.148 1370.51 611.759C1380.37 569.49 1379.75 527.221 1372.97 484.953C1346.15 399.489 1284.49 361.848 1120.8 380.052Z"
            fill="#109cc7"
          />
        </g>

        <defs>
          <clipPath id="clip0">
            <rect width="1922" height="1082" fill="transparent" />
          </clipPath>
        </defs>
      </svg>
      </div>
     
    </div>

    <div id="player"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    $(window).bind("mousewheel", (e) => {
      if (e.originalEvent.wheelDelta / 120 > 0) {
        // console.log("scrolling up");
        // console.log(e.originalEvent);
      } else {
        // (this.isMaskVisible = false),
        // (this.isVideoVisible = true),
        // (this.isScrollLock = false),

        // console.log("scrolling down");
        // console.log(e.originalEvent);

        // gsap.to( '.move-mask', .5,{css:{scale:.05, opacity:0, rotation: 180}, ease:Quad.easeInOut}));

        gsap.to(".move-mask", {
          scaleX: 20,
          scaleY: 20,
          opacity: 0,
          duration: 2,
        });

        setInterval(() => {
          fullpage_api.setAllowScrolling(true, "down");
          fullpage_api.setAllowScrolling(true, "up");
        }, 1000);
    //  fullpage_api.setAllowScrolling(true, "down");
    //  fullpage_api.setAllowScrolling(true, "up");


        // transform: scale(9.5);
        // opacity: 0;
      }
    });
  },
  getters: {
    getNumber() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style lang="scss">



.mask {
    width: 100%;
    height: 100%;
    background-color: orange;
    -webkit-clip-path: url(#clip);
    clip-path: url(#clip);
}

.mask-mobile--wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;


  @include lg-min {
    display: none;
  }

  &:before {
    content: '';
    display: block;
    width: 100vw;
    height: 40vh;
    background-color: red;
    position: absolute;
    bottom: 0;
    left: 0;
  }

   &:after {
    content: '';
    display: block;
    width: 100vw;
    height: 40vh;
    background-color: rgb(98, 209, 148);
    position: absolute;
    top: 0;
    left: 0;
  }
}

.mask-mobile--inner {
  border: 2px dashed yellow;
  display: inline-block;
  position: relative;
  z-index: -1;
   &:after {
    content: '';
    display: block;
    width: 40vw;
    height: 100vh;
    background-color: rgb(54, 139, 150);
    position: absolute;
    top: 0;
    right: -40vw;
  }
   &:before {
    content: '';
    display: block;
    width: 40vw;
    height: 100vh;
    background-color: rgb(211, 50, 149);
    position: absolute;
    top: 0;
    left: -40vw;
  }
  
}

.move-mask {
  .move-mask--inner {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content:center
  }
  display: none; 
  position: relative;
  @include lg-min {
    display: block;
  }

    &:before {
      display: none; 
      @include lg-min {
        display: block;
      }
      content: '';
      width: 100vw;
      height: 25vh;
      background: #2ed60d;
      position: absolute;
      left: 0;
      bottom: 0px;
    }

     &:after {
       display: none; 
       @include lg-min {
         display: block;
       }
      content: '';
      width: 100vw;
      height: 30vh;
      background: #c00808;
      position: absolute;
      left: 0;
      top: 0px;
    }
 

 svg {
  display: none;
  @include lg-min {
    display: block;
  }
 }
}


.hero {
  iframe {
    transform: scale(4.5);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    @include lg-min {
      transform: scale(1);
    }
  }
}
</style>