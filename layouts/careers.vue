<template>
  <div class="layout__carrer">
    <Nuxt />
  </div>
</template>

<style lang="scss">
body.page-careers {
  &::before {
    display: none;
  }
}
.layout__carrer {
  background-color: #dcdedb;
  background-image: none;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;
  background-position-x: 18vw;
  background-position-y: 51vh;

  @include lg-min {
    background-image: url("~assets/img/PXOAstro_2.jpg");
  }
  @include xxl-min {
    background-position-x: 9vw;
    background-position-y: 29vh;
  }
}
</style>
