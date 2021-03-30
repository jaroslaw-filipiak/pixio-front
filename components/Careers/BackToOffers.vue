<template>
  <div class="back-to-offers">
    <div class="back-to-offers-inner">
      <div @click="goBack" class="back-to-offers--left">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12L20 12"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 6L20 12L14 18"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Back to offers
      </div>
      <div class="back-to-offers--right"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.job-post-availiable {
  text-align: center;
}
.back-to-offers {
  overflow: hidden;
  background-color: #fff;
  padding: 22px 30px 0px 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @include lg-min {
    margin-bottom: 0;
    background-color: #f7f6f2;
    padding: 22px 30px;
  }

  &-inner {
    margin: 0 auto;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow-x: scroll;

    box-sizing: content-box;
    @include md-min {
      width: 940px;
      padding: 17px 17px 0px 17px;
    }

    &::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  &--left {
    cursor: pointer;
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
      transform: rotate(180deg);
    }
    path {
      stroke: #5680e9;
    }
  }
}

.careers-filter-wrapper {
  display: flex;
  svg {
    width: 50px;

    path {
      fill: #000;
    }
  }
}

.careers-filter-item {
  margin-right: 23px;
  cursor: pointer;
}

.careers-filter__all {
  svg {
    path {
      fill: initial !important;
    }
  }
}

.filter-all-svg {
}
</style>
