<template>
  <main>
    <Nav />
    <full-page ref="fullpage" :options="options">

      <div class="section">

        <iframe id="existing-iframe-example"
          
          src="https://www.youtube.com/embed/9kJxyig3RaE?enablejsapi=1"
          frameborder="0"
          style="border: solid 4px #37474F">   
        </iframe>

      </div>

      <div class="section">
        <div class="slide">2</div>
        <div class="slide">2.1</div>
        <div class="slide">2.2</div>
      </div>

      <div class="section">
        <div class="slide">3</div>
        <div class="slide">3.1</div>
      </div>

      <div class="section">
        <div class="slide">4</div>
        <div class="slide">4.1</div>
      </div>

      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">
          Prev
        </button>
        Section 5
      </div>

      <div class="section">
        <div class="slide">6</div>
        <div class="slide">6.1</div>
      </div>

      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">
          Prev
        </button>
        Section 7
      </div>
    </full-page>
    <Rightnav />
  </main>
</template>

<script>

export default {
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
        anchors: ["page1", "page2", "page3"],
      },
    };
  },
  mounted() {
    // fullpage_api.setAllowScrolling(false);
     var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('existing-iframe-example', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
  }
  function onPlayerReady(event) {
    document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
  }
  
  function onPlayerStateChange(event) {
    changeBorderColor(event.data);
  }
    
  },
};
</script>

<style lang="scss">
.section {
  background-color: rgb(46, 46, 46);
  color: #fff;
  .fp-tableCell {
    display: flex;
    align-items: center;
    justify-content: center;

    iframe {
      width: 100vw;
      height: 100vh;
      border: none;
      position: relative;
    }
  }
}
</style>
