<template>
  <main class="grid-main-wrapper">
    <Header />
    <section class="slides">
      <div class="slides-wrapper">
        <div id="fullpage">
          <div class="section">Some section</div>
          <div class="section">Some section</div>
          <div class="section">Some section</div>
          <div class="section">Some section</div>
        </div>
      </div>
    </section>
    <section class="right-nav">
      <Rightnav />
    </section>
  </main>
</template>

<script>
import Header from "./../components/Header";
import Slide1 from "./../components/HomePage/Slides/Slide1";
import Slide2 from "./../components/HomePage/Slides/Slide2";
import Slide3 from "./../components/HomePage/Slides/Slide3";
import Rightnav from "./../components/HomePage/Slides/Rightnav";

export default {
  components: {
    Rightnav,
    Slide1,
    Slide2,
    Slide3,
    Header,
  },
  head: {
    title: "Pixomondo",
  },

  mounted() {},
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

/* optional css fade in animation */
iframe {
  transition: opacity 500ms ease-in-out;
  transition-delay: 250ms;
}
</style>
