<template>
  <div class="hamburger">
    <svg viewBox="0 0 12 10" class="hamburger" height="30px" width="30px">
      <path
        d="M10,2 L2,2"
        class="upper"
        style="fill: none; stroke: #fff; stroke-linecap: round"
      />
      <path
        d="M2,5 L10,5"
        class="middle"
        style="fill: none; stroke: #fff; stroke-linecap: round"
      />
      <path
        d="M10,8 L2,8"
        class="lower"
        style="fill: none; stroke: #fff; stroke-linecap: round"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

.hamburger {
  cursor: pointer;
  z-index: 2;

  svg {
    opacity: 0;
    transition: all .3s ease-in-out;
  }

  &:hover {
    opacity: 0.9;
  }

  &--visible {
    opacity: 1 !important;

    svg {
    opacity: 1;
    transition: all .3s ease-in-out;
  }
  }


}
</style>