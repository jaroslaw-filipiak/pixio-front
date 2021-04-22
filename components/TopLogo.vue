<template>
  <div class="top-logo">
    <img @click="goToHome" src="@/assets/img/logo-txt.svg" alt="" />
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      fullpage_api.moveTo(1);
    }
  }
};
</script>

<style lang="scss">
.top-logo {
  position: fixed;
  left: 90px;
  top: 0;
  z-index: 999;
  width: 100%;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 202px;
    cursor: pointer;
    position: relative;
    left: -90px;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
