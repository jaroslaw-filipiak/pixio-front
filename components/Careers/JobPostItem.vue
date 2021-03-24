<template>
  <NuxtLink to="/careers/lighting-artist">
    <div class="job-post-item">
      <div class="job-post-column job-post-column-1">
        <div class="job-post-exp">Experience: Mid to Senior</div>
        <div class="job-post-title">Lighting Artist</div>
      </div>
      <div class="job-post-column job-post-column-2">
        <div class="job-post-localization">
          <img src="@/assets/img/map-pin.svg" alt="map-pin" />
          Toronto
        </div>
      </div>
      <div class="job-post-column job-post-column-3">
        <div class="job-post-time">
          <img src="@/assets/img/clock.svg" alt="map-pin" />
          ASAP
        </div>
        <ApplyButton />
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  methods: {
    goToJobPage: () => {
      alert("12");
    }
  }
};
</script>

<style lang="scss">
.job-post {
  &-item {
    cursor: pointer;
    background-color: #fff;
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
    font-weight: 600;
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
</style>
