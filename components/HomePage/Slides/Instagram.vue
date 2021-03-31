<template>
  <div class="section section-instagram" id="section-instagram">
    <div class="slide">
      <div class="instagram-heading">Follow us on Instagram</div>

      <div id="instagram-feed1"></div>

      <!-- <div class="elfsight-app-328667f6-f287-4e1c-a0a2-a223685b7a44"></div> -->
    </div>
    <div class="slide"></div>
    <slot> </slot>
  </div>
</template>

<script>
// // const InstagramFeed = require("instafeed");
// const Instagram = require("node-instagram").default;

// // Create a new instance.
// const instagram = new Instagram({
//   clientId: "1618384628549329",
//   clientSecret: "87d5286771ff7a1142360bd97311f515",
//   accessToken:"IGQVJVR1I1aUN6bGJRNnFmaUFfaml2T2RYODFKaDJmZAnZABZAFFjWkcxenBqZAE9kcC05S3NTd085ZAEdhYzFLWUZArcjR5d0wxbl94ck1GUnVIWXk1SzVtb1J1aXM5UTBPS0l5SDRNUE84ZA2tuUmZADN2NBNgZDZD"
// });

export default {
  data() {
    return {
      posts: []
    };
  },

  mounted() {
    (function() {
      new InstagramFeed({
        username: "pixomondo",
        container: document.getElementById("instagram-feed1"),
        display_profile: false,
        display_biography: false,
        display_gallery: true,
        display_captions: false,
        callback: null,
        styling: true,
        items: 8,
        items_per_row: 5,
        margin: 0,
        lazy_load: true,
        on_error: console.error
      });
    })();
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
