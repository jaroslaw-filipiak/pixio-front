<template>
<button class="hamburger hamburger--arrow is-active" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>
</template>

<script>
export default {};
</script>

<style lang="scss">

.hamburger {
  z-index: 3;
}

// .hamburger {
//   cursor: pointer;
//   z-index: 2;

//   svg {
//     opacity: 0;
//     transition: all .3s ease-in-out;
//   }

//   &:hover {
//     opacity: 0.9;
//   }

//   &--visible {
//     opacity: 1 !important;

//     svg {
//     opacity: 1;
//     transition: all .3s ease-in-out;
//   }
//   }


// }

</style>