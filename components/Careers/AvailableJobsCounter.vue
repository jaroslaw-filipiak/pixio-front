<template>
  <div class="job-post-availiable">
    56 jobs availiable
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.job-post-availiable {
  color: #222;
  font-size: 24px;
  text-align: center;
  padding: 32px 0px;
  display: none;

  @include md-min {
    display: block;
  }
}
</style>
