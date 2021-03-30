<template>
  <div class="job-post-availiable">{{ count }} jobs availiable</div>
</template>

<script>
export default {
  props: ["count"]
};
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
