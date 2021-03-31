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
  background-image: url("~assets/img/PXOAstro_2.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;
  background-position-x: 25vw;
  background-position-y: 18vh;
  .careers {
  }
}
</style>
