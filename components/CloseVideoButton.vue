<template>
  <div class="close-video-button" @click="closeVideo">
    <div class="close-video-button--inner">
      <img src="@/assets/img/cross-icon.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeVideo() {
      setTimeout(function() {
        fullpage_api.reBuild();
      }, 800);
      console.log("fullpage_api.rebuild");
      console.log(fullpage_api);
      this.$store.commit("closeVideo", "");
      this.$store.commit("changeVideoURL", "");
    }
  }
};
</script>

<style lang="scss">
.close-video-button {
  @include xs {
    position: absolute;
    right: 3%;
    top: 2%;
  }
  @include sm {
    position: absolute;
    right: 3%;
    top: 2%;
  }
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  width: 50px;
  height: 44px;
  position: absolute;
  right: -50px;
  top: -44px;
  z-index: 122;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &--inner {
    border: 2px solid #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    transition: all 0.1s ease-in;
    animation: arrowBottom 2s ease-in-out infinite;
    animation-direction: alternate;
  }

  @keyframes arrowBottom {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.9);
      opacity: 0.8;
    }
  }
}
</style>
