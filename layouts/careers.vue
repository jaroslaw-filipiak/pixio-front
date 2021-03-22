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
  background-color: #e2e3e8;
  background-image: url("~assets/img/career-bg.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;
  background-position-x: 20vw;
  background-position-y: 18vh;
  .careers {
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
