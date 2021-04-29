<template>
  <div class="main">
    <Logo />
    <h1>404 Page not found</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
};
</script>

<style lang="scss">
.main {
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  background-color: rgb(46, 46, 46);
  color: #fff;

  @include xs {
    height: 90vh !important;
  }

  svg {
    max-width: 300px;
  }

  a {
    display: block;
    color: white;
  }
}
</style>
