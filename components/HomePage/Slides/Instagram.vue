<template>
  <div class="section section-instagram" id="section-instagram">
    <div class="slide">
      <div class="instagram-heading">Follow us on Instagram</div>
      <div class="instagram-feed" id="instafeed"></div>
    </div>
  </div>
</template>

<script>
import Instafeed from "@/plugins/instafeed.js";

export default {
  mounted() {
    var feed = new Instafeed({
      accessToken: `${process.env.INSTAGRAM_TOKEN}`,
      limit: 10
    });
    feed.run();
  }
};
</script>

<style lang="scss">
#instafeed {
  @include lg-min {
    width: calc(190px * 5);
  }

  a {
    width: 120px;
    height: 120px;
    @include lg-min {
      width: 182px;
      height: 182px;
    }
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
    justify-content: flex-start;
    height: 100vh !important;
    padding: 30px 10px;

    @include xs {
      height: 90vh !important;
    }
    @include md-min {
      padding: 60px 100px;
    }
    @include lg-min {
      justify-content: center;
    }
  }
}

.instagram-heading {
  font-size: 24px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
}

.instagram-feed {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    width: 200px;
    height: 200px;
    overflow: hidden;

    @include lg-min {
      width: 300px;
      height: 300px;
    }

    img {
      min-height: 100%;
      width: 100%;
      max-width: unset;
      object-fit: cover;
    }
  }
}
</style>
