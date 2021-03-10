<template>
<span>
  <figure @click="showFuckingVideo" class="gallery__item" style="position: relative;">
    <div class="gallery__item-img">
      <div
        class="gallery__item-imginner"
        :style="{ backgroundImage: `url(${backgroundUrl})` }"
        data-scroll
        data-scroll-speed="-0.8"     
        :data-video-id="movieEmbeed"                
      ></div>
    </div>
    <figcaption class="gallery__item-caption">
      <h2 class="gallery__item-title" data-scroll data-scroll-speed="1">
        {{title}}
       <slot> </slot>
      </h2>
     
      <a class="gallery__item-link"
        ><svg
          width="17"
          height="21"
          viewBox="0 0 17 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.96875 1.1626L15.9688 10.1626L1.96875 19.1626V1.1626V1.1626Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </figcaption>
  </figure>

   <div class="project-video" :class="{'project-video__visible': isVideoVisible}">
      <iframe style="position: relative; z-index: 3" width="650" height="389"
        :src="computedVideo" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>
    </div>
 
    </span>
</template>

<script>
import backgroundImagePath from "@/assets/img/poster-star-treck-discovery.jpg";
export default {
  props: {
    title: String,
    backgroundUrl: String,
    movieEmbeed: String
  },
  data() {
    return {
      backgroundImagePath,
      isVideoVisible: false,
      computedVideo: 'https://www.youtube.com/embed/n3j6XSrIWLs'  
    };
  },
  mounted() {
    // this.onYouTubeIframeAPIReady();
    // this.createAndShowPlayer();
    // this.getImgUrl('KLG17C8JAN0')

  },
  methods: {
    showFuckingVideo: function(e) {
    console.log('show video method')
    this.computedVideo = 'https://www.youtube.com/embed/Jj1NIrdCejg'
    console.log(this.computedVideo)
    },
    createAndShowPlayer: function(val) {
      var player;

      player = new YT.Player("player-project", {
        height: "390",
        width: "640",
        videoId: val,
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
    handleVideo: function() {
       var player;
       player = new YT.Player("player-project", {
        height: "390",
        width: "640",
        videoId: '',
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
      player.loadVideoByUrl('QoiQ0Vo5It0 ')
    },
    showVideo: function(e) { 
    const videoID = e.target.dataset.videoId;
    const target = e.target.attributes[2].value;
    const item = document.querySelector(`div[video-id="${videoID}"]`)
    const itemVid = document.querySelector(`iframe[video-id="${videoID}"]`)

    console.log(e.target.dataset.videoId)

   
    console.log('project.vue: target ' + target)
    console.log('project.vue: item ' + item)
    // this.$store.commit('changeVideoTooltipVisibility', !this.isVideoTooltipVisible);
    // this.$store.commit('updateCurrentVideo', `https://www.youtube.com/embed/${e.target.dataset.videoId}`)

    // console.log(this.data)
    // console.log(this.data.computedVideo)

    // this.getImgUrl('QoiQ0Vo5It0')
    },
    showVideo2: (event) => { 
   
     event.target.loadVideoById('dENv2-Eo58Q')
    },
    getImgUrl(val) {
      // console.log('get img url function start..' + val)
      return `https://www.youtube.com/embed/${val}` 
      // take player
      // set src to return value
    },
    udpateComputedProperty() {
        // console.log('update computed property')
        this.isVideoVisible = !this.isVideoTooltipVisible
    },
    onYouTubeIframeAPIReady: function () {

      var player;

      player = new YT.Player("player-project", {
        height: "390",
        width: "640",
        videoId: "9kJxyig3RaE",
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

      console.log('onYoutubeiframeapierady')
    },
     onPlayerReady: (event) =>{
       console.log('onPlayerReady')
      // event.target.playVideo();

      console.log('player.ready')
      console.log(event.target)

      setTimeout(() => {
        console.log('pause...')
        event.target.pauseVideo();
        // event.target.loadVideoById('dENv2-Eo58Q')
        
      }, 6000);


      // event.target.muteVideo();
      // console.log('PLAYER READY')
      //  event.target.muteVideo();
    },
    onPlayerStateChange: (event) => {
      console.log("onState change event fired...");
      console.log(event)
      console.log(event.target)
     event.target.loadVideoById('dENv2-Eo58Q')
    },
  }, 

  computed: {
    isVideoTooltipVisible() {
        return this.$store.state.isVideoTooltipVisible
    }
   
  },
  
};
</script>

<style lang="scss">

.project-video {
    z-index: -1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;

    opacity: 1 !important;
    z-index: 90 !important;
    border: 1px solid red;

    &__visible {
      opacity: 1;
      z-index: 90;
       border: 1px solid green;
    }
  }

</style>