<template>
  <div
    class="job-post-item"
    @click="
      $router.push({
        path: `/careers/${title}`,
        query: { jobID }
      })
    "
  >
    <div class="job-post-column job-post-column-1">
      <div class="job-post-exp">Experience: {{ exp }}</div>
      <div class="job-post-title">{{ title }}</div>
    </div>
    <div class="job-post-column job-post-column-2">
      <div class="job-post-localization">
        <img src="@/assets/img/map-pin_blue.svg" alt="map-pin" />
        {{ city }}
      </div>
    </div>
    <div class="job-post-column job-post-column-3">
      <div class="job-post-time">
        <img src="@/assets/img/clock_blue.svg" alt="map-pin" />
        {{ time ? time : "ASAP" }}
      </div>
      <ApplyCarrers :offerID="jobID" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToJobPage: () => {}
  },
  props: ["title", "exp", "time", "city", "jobID"]
};
</script>

<style lang="scss">
.job-post {
  &-item {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 24px;
    padding: 24px;
    width: 100%;
    margin-bottom: 16px;
    color: #222;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include md-min {
      max-width: 760px;
      flex-direction: row;
    }

    &:hover {
      background-color: rgb(248, 248, 248);
    }
  }
  &-column {
    width: 100%;
  }

  &-column-1 {
    display: flex;
    flex-direction: column-reverse;

    @include md-min {
      flex-direction: column;
    }
  }
  &-column-3 {
    width: 100%;
    @include md-min {
      width: 144px;
    }
  }
  &-exp {
    font-weight: 400;
  }
  &-title {
    font-weight: 600 !important;
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 16px;
    @include md-min {
      margin-bottom: 0;
    }
  }
  &-localization {
    font-size: 14px;
  }
  &-time,
  &-localization,
  &-exp {
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
}

.apply-btn {
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #5680e9;
  border-radius: 50px;
  width: 144px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover {
    background-color: #5680e9;
    color: #fff;
    transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

    path {
      stroke: #fff;
      transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
  }

  svg {
    margin-left: 10px;
  }

  img {
    margin-left: 16px;
  }

  path {
    stroke: #222;
    transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
}

.apply-btn__careers {
  background-color: transparent !important;
  border-color: #222 !important;
  &:hover {
    background-color: #5680e9 !important;
    border-color: #5680e9 !important;
  }
}
</style>
