<template>
  <div class="section section-instagram" id="section-instagram">
    <div class="slide">
      <div class="instagram-heading">Follow us on Instagram</div>
      <div id="instafeed"></div>
    </div>
  </div>
</template>

<script>
import Instafeed from "instafeed.js";

export default {
  mounted() {
    var feed = new Instafeed({
      userId: "2041821631",
      accessToken:
        "IGQVJVMDJad2VjeFhJdnVFQVBSaDRBWk14djk5aVQ2MGNTZAVJwWkJWa01qbGRqRFZAZAblRPM0EzTmxFTWc2QmhyVDZAnWUN2b05NX2lFQzdRR2tLb3FwYlBzdzdXTmZAvWGM2dXh2ZATQ4RXg5aFNsU1pZAOAZDZD"
    });
    feed.run();
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
