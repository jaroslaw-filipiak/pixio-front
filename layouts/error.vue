<template>
  <div class="page-not-found">
    <h1 v-if="error.statusCode === 404">404 Page not found1</h1>
    <h1 v-else>Error</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
};
</script>

<style lang="scss" scoped>
.page-not-found {
  border: 2px solid red;
}
</style>
