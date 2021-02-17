<template>
  <div class="arrow-bottom-indicator">
      <div class="arrow-bottom-indicator--inner">
        <img src="@/assets/img/arrow-bottom.svg" alt="">
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.arrow-bottom-indicator {
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 4;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all .3s ease-in-out;
  cursor: pointer;
  

  &--inner {
    border: 2px solid #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>