<template>
  <div class="section section-instagram" id="section-instagram">
    <div class="slide">
      <div class="instagram-heading">Follow us on Instagram</div>

      <div class="instagram-feed" id="instagram-feed">
        <!-- <div class="instagram-post"></div>
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
        <div class="instagram-post"></div> -->
      </div>
    </div>
    <div class="slide"></div>
  </div>
</template>

<script>
const InstagramFeed = require("instafeed");
export default {
  mounted() {
    (function () {
      new InstagramFeed({
        username: "pixomondo",
        container: document.getElementById("instagram-feed"),
        display_profile: true,
        display_biography: true,
        display_gallery: true,
        display_captions: true,
        callback: null,
        styling: true,
        items: 8,
        items_per_row: 4,
        margin: 1,
        lazy_load: true,
        on_error: console.error,
      });
    })();
  },
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