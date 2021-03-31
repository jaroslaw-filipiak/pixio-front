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
  background-color: #dcdedb;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;
  background-position-x: 18vw;
  background-position-y: 51vh;

  @include lg-min {
    background-color: #dcdedb;
    background-image: url("~assets/img/PXOAstro_2.jpg");
  }

  @include xxl-min {
    @include xxl-min {
      background-position-x: 9vw;
      background-position-y: 29vh;
    }
  }
}
</style>
