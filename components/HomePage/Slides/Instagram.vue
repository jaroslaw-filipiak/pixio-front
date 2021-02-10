<template>
  <div class="section section-instagram" id="section-instagram">
    <div class="slide">
      <div class="instagram-heading">Follow us on Instagram</div>

      <div class="instagram-feed">
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
      </div>
    </div>
    <div class="slide"></div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="scss">
#section-instagram {
  .fp-controlArrow {
    display: none !important;
  }

  .fp-prev .fp-next {
    display: none !important;
  }

  .fp-tableCell {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: space-between !important;
    height: 100vh !important;
    padding: 60px 100px;
  }
}
.instagram-heading {
  font-size: 24px;
  text-align: center;
  color: #fff;
}

.instagram-feed {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.instagram-post {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
</style>