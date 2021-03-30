<template>
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
    {{ this.job[0].job_content }}
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  props: ["title"],
  data() {
    return {
      job: [
        {
          experience: "",
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
      `https://7e6805.stage.titans24.com/jobs?Title=${this.title}`
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
  }
  // apollo: {
  //   jobs: gql`
  //     query Jobs {
  //       jobs(where: { Title: "Unity Developer" }) {
  //         Title
  //         id
  //         job_content
  //         experience
  //         cities {
  //           name
  //         }
  //       }
  //     }
  //   `
  // }
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
