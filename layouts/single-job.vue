<template>
  <div class="layout__single-job">
    <Nuxt />
  </div>
</template>

<style lang="scss">
body.single-job {
  &::before {
    display: none;
  }
}
.layout__single-job {
  background-color: #fff;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;
  background-position-x: 20vw;
  background-position-y: 18vh;

  @include lg-min {
    background-color: #e2e3e8;
  }
  .single-job-container {
    &::before {
      display: none;
      content: "CAREERS";
      font-size: 150px;
      color: #fff;
      font-weight: bold;
      transform: rotate(-90deg);
      position: fixed;
      left: -165px;
      top: 350px;

      @include xl-min {
        display: block;
      }
    }
  }
}
</style>
