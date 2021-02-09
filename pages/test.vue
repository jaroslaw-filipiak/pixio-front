<template>
  <div class="container" style="overflow: hidden; border: 1px solid yellow">
    <section>
      <ul>
        <li class="super-link"><a href="#">link to section-4</a></li>
      </ul>
    </section>
    <section class="sec section-1">
      <h1 class="heading">section 1 content</h1>
    </section>
    <section class="sec section-2">
      <h1>section 2 content</h1>
    </section>
    <section class="sec section-3">
      <h1>section 3 content</h1>
    </section>
    <section class="sec section-4">
      <h1>section 4 content</h1>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(gsap);
    // gsap.to(".heading", { rotation: 27, x: 100, duration: 1 });
    TweenLite.to(window, 1, { scrollTo: { y: 400 } });
  },
};
</script>

<style lang="scss" scoped>
.sec {
  border: 1px solid red;
  background-color: peru;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
</style>