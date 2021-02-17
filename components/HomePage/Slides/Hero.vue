<template>
  <div 
    class="section hero"
    style="
      
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
            fill="#000"
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

    <div class="start-indicator">
      <div class="start-indicator--inner">
          <p>start</p>
      <div class="roll"></div>
      <div class="roll-circle"></div>
      </div> 
    </div>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
       isMaskVisible: true,
       isVideoVisible: false,
    };
  },
  watch: {
    isMaskVisible: function() {
      if(isMaskVisible) {

        $(window).bind('mousewheel', (e) => {
          console.log('scroll down and..')
           console.log(isMaskVisible)
        })

      } else {

      }
      
    }
  },
  mounted() {
     this.onYouTubeIframeAPIReady();
  
    $(window).bind("mousewheel", (e) => {
      if (e.originalEvent.wheelDelta / 120 > 0) {
        // console.log("scrolling up");
      } else {
        // (this.isMaskVisible = false),
        // (this.isVideoVisible = true),
        // (this.isScrollLock = false),

        // console.log("scrolling down");
        // console.log(e.originalEvent);

        // gsap.to( '.move-mask', .5,{css:{scale:.05, opacity:0, rotation: 180}, ease:Quad.easeInOut}));

        let maskReveal = gsap.to(".move-mask", {
          scaleX: 20,
          scaleY: 20,
          opacity: 0,
          duration: 2,
          onComplete: maskRevealIsEnd
        })

        maskReveal.play();

        let hideIndicator = gsap.to(".start-indicator", {
          opacity: 0,
          duration: 0,
          // onComplete: maskRevealIsEnd
        })

        let showArrowIndicator = gsap.to('.arrow-bottom-indicator', {
          opacity: 1
        })

        let showHamburger = gsap.to('.hamburger', {
              opacity: 1
        })

         let showFpNav = gsap.to('#fp-nav', {
              'z-index': 2,
               opacity: 1

        })

//       .fp-nav--visible {
// //   transition: all .3s ease-in-out;
//   z-index: 2 !important;
//   opacity: 1 !important;
// }

        function maskRevealIsEnd() {
            fullpage_api.setAllowScrolling(true, "down");
            fullpage_api.setAllowScrolling(true, "up");

            // const hamburgerMask = document.querySelector('.hamburger-mask')
            // hamburgerMask.classList.add('hamburger-mask--disabled')

            const nav = document.querySelector('#fp-nav')
           

            hideIndicator.play();
            showArrowIndicator.play();

            showHamburger.play();
            showFpNav.play();
            // nav.classList.add('fp-nav--visible')
        }

        // gsap.to(".move-mask", {
        //   scaleX: 20,
        //   scaleY: 20,
        //   opacity: 0,
        //   duration: 2,
        // });

       

        // setTimeout(() => {
        //   fullpage_api.setAllowScrolling(true, "down");
        //   fullpage_api.setAllowScrolling(true, "up");
        //   console.log(fullpage_api)
        //   console.log('timeout..')
        // }, 1000);
      }
    });

     

        function showStartIndicator() {
          gsap.to(".start-indicator", {
          opacity: 1,
          duration: .3,
          // onComplete: maskRevealIsEnd
        })
        }

        TweenLite.delayedCall(4, showStartIndicator);


    
  },
  methods: {
     onYouTubeIframeAPIReady: function () {
      var player;

      player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: "QoiQ0Vo5It0",
        playerVars: {
          enablejsapi: 1,
          controls: 1,
          mute: 1,
          showinfo: 0,
          fs: 0,
          cc_load_policy: 0,
          iv_load_policy: 3,
          autoplay: 1,
          modestbranding: 1,
          autohide: 1,
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      });
    },

    onPlayerReady: function (event) {
      event.target.playVideo();
    },

    onPlayerStateChange: function (event) {},

    stopVideo: function (event) {
      event.target.stopVideo();
      event.target.pauseVideo();
    },
  },
};
</script>

<style lang="scss">
.mask {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
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
    background-color: rgb(0, 0, 0);
    position: absolute;
    bottom: 0;
    left: 0;
  }

   &:after {
    content: '';
    display: block;
    width: 100vw;
    height: 40vh;
    background-color: rgb(0, 0, 0);
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
      background: #000000;
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
      background: #000000;
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
  position: relative;
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: -1;

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



.start-indicator {
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all .3s ease-in-out;

  &--inner {
    position: relative;
    height: 25px;
  }

  p {
    width: 100%;
    position: relative;
     display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
    // &::before {
    //   content: '';
    //   display: block;
    //   width: 2px;
    //   height: 50px;
    //   background-color: #fff;
    //   position: absolute;
    //   left: 50%;
    //   bottom: -56px;
    // }

    //  &::after {
    //   content: '';
    //   display: block;
    //  width: 10px;
    // height: 10px;
    // background-color: white;
    // position: absolute;
    // left: calc(50% - 4px);
    // bottom: -12px;
    // border-radius: 50%;
    // }
  }

  .roll {
      width: 2px;
      height: 22px;
      background-color: rgb(255, 255, 255);
      position: absolute;
      left: 50%;
  }
  .roll-circle {
     display: block;
     width: 10px;
     height: 10px;
     border-radius: 50%;
     background-color: rgb(255, 255, 255);
     position: absolute;
     top: 76%;
     left: 41%;
     animation: roll .8s infinite;
     animation-direction: alternate-reverse;
  }

  @keyframes roll {
    from { top: 76%;}
    to { top: 160%;}
  }
}
</style>