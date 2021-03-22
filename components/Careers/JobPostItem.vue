<template>
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
      <div class="job-post-apply-btn">
        Apply
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19"
            stroke="#222222"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 5L19 12L12 19"
            stroke="#222222"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.job-post {
  &-item {
    background-color: #fff;
    padding: 24px;
    width: 85%;
    margin-bottom: 16px;
    color: #222;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include md-min {
      max-width: 760px;
      flex-direction: row;
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

  &-apply-btn {
    font-size: 14px;
    background-color: transparent;
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

    img {
      margin-left: 16px;
    }

    path {
      stroke: #222;
      transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
  }
}
</style>
