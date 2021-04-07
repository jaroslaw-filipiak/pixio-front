<template>
  <div class="section section-instagram" id="section-instagram">
    <div class="slide">
      <div class="instagram-heading">Follow us on Instagram</div>
      <div id="instagram-feed"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // (function() {
    //   new InstagramFeed({
    //     username: "pixomondo",
    //     container: document.getElementById("instagram-feed"),
    //     display_profile: false,
    //     display_biography: false,
    //     display_gallery: true,
    //     display_captions: false,
    //     callback: null,
    //     styling: true,
    //     items: 8,
    //     items_per_row: 5,
    //     margin: 0,
    //     lazy_load: true,
    //     on_error: console.error
    //   });
    // })();
  },
  methods: {}
};
</script>

<style lang="scss">
#instagram-feed1 {
  width: 60vw;
  @include xxl-min {
    width: 80vw;
  }
}

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
    @include xs {
      height: 90vh !important;
    }
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
}
</style>
