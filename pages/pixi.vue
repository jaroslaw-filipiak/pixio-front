<template>
  <main class="pixomondo-container">
    <Nav />

    <div class="slides-area">
      <div class="slides-area--slide slide-1" style="background-color: red">
        <h1>slide1</h1>
      </div>

      <section>
        <div class="horizontal-wrapper">
          <div
            class="slides-area--slide slide-2"
            style="background-color: blue"
          >
            <h1>slide2</h1>
          </div>

          <div
            class="slides-area--slide slide-2a"
            style="background-color: red"
          >
            <h1>slide2a</h1>
          </div>

          <div
            class="slides-area--slide slide-2b"
            style="background-color: orange"
          >
            <h1>slide2b</h1>
          </div>
        </div>
      </section>

      <div class="slides-area--slide slide-3" style="background-color: green">
        <h1>slide3</h1>
      </div>
    </div>
    <Rightnav />
  </main>
</template>

<script>
export default {
  head: {
    title: "Pixomondo",
    script: [],
  },

  mounted() {
    TweenLite.to(".pixomondo-container", 1, { scrollTo: { y: 1400 } });
  },
};
</script>

<style lang="scss">
.pixomondo-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .slides-area {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    // display: flex;
    align-items: center;
    justify-content: center;
    // position: relative;

    .slides-area--slide {
      // position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    section {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      // parent
      .horizontal-wrapper {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        display: flex;
        padding-bottom: 11px; /* Increase/decrease this value for cross-browser compatibility */
        box-sizing: content-box; /* So the width will be 100% + 17px */

        // child
        .slides-area--slide {
          min-width: 100%;
          height: 100%;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
