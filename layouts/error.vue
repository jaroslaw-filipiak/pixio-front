<template>
  <div class="main">
    <Logo />
    <h1 v-if="error.statusCode === 404">404 Page not found</h1>
    <h1 v-else>Oops, Something Went Wrong</h1>
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  height: 100vh;
  padding: 10px;
  background-color: rgb(46, 46, 46);
  color: #fff;
  text-align: center;

  svg {
    max-width: 300px;
  }

  a {
    display: block;
    color: #fff;
  }
}
</style>
