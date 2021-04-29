<template lang="md">
  <div class="single-job--content">
    <div class="single-job--title">{{ title }}</div>
    <div class="single-job--exp">Experience: {{ exp }}</div>
    <div class="single-job--localization">
      <img src="@/assets/img/map-pin.svg" alt="map-pin" />
      {{ city }}
    </div>
    <div class="single-job--time">
      <img src="@/assets/img/clock.svg" alt="map-pin" />
      {{ time ? time : "ASAP" }}
    </div>
    <span v-html="$md.render(`${content}`)"></span>
  </div>
</template>

<script>
export default {
  props: ["title", "exp", "city", "time", "content"],
  data() {
    return {
      job: [
        {
          experience: "",
          job_content: "",
          cities: {
            name: "",
          },
        },
      ],
      jobs: {},
      currentTitle: this.title,
    };
  },
};
</script>

<style lang="scss">
.single-job {
  &--content {
    width: 100%;
    background-color: #fff;
    padding: 30px;
    @include lg-min {
      width: 590px;
    }
  }
  &--title {
    font-weight: 600;
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 16px;
  }
  &--exp {
    font-weight: 400;
    margin-bottom: 20px;
  }
  &--localization,
  &--time {
    font-size: 14px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    @include md-min {
      margin-bottom: 16px;
    }

    img {
      margin-right: 8px;
    }
  }

  h3 {
    font-size: 20px;
    color: #222;
    line-height: 29px;
    margin-bottom: 18px;
    font-weight: 600;
  }

  ul {
    margin-left: 20px;
    margin-bottom: 18px;
    li {
      list-style-type: disc;
      font-size: 14px;
      margin-bottom: 6px;
      font-weight: 400;
    }
  }
}
</style>
