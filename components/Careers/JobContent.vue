<template lang="md">
  <div class="single-job--content">
    <div class="single-job--title">{{ title }}</div>
    <div class="single-job--exp">Experience: {{ this.job[0].experience }}</div>
    <div class="single-job--localization">
      <img src="@/assets/img/map-pin.svg" alt="map-pin" />
      {{ this.job[0].cities.name }}
    </div>
    <div class="single-job--time">
      <img src="@/assets/img/clock.svg" alt="map-pin" />
      {{ this.job[0].Time ? this.job[0].Time : "ASAP" }}
    </div>

    <span v-html="$md.render(this.job[0].job_content)"></span>
  </div>
</template>

<script>
// import gql from "graphql-tag";

export default {
  props: ["title"],
  data() {
    return {
      job: [
        {
          experience: "",
          job_content: "",
          cities: {
            name: ""
          }
        }
      ],
      jobs: {},
      currentTitle: this.title
    };
  },
  async fetch() {
    this.job = await fetch(
      `${process.env.MAIN_API_ENDPOINT}jobs?id=${this.$route.query.jobID}`
    ).then(res => res.json());
  },
  methods: {
    fetchProps() {
      console.log(this.title);
    },
    saveProps() {
      this.data.currentTitle = this.title;
    }
  },
  mounted() {
    console.log(this.$route.params.slug);
    console.log(this.$route.query.jobID);
  }
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
