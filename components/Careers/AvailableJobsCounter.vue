<template>
  <div class="job-post-availiable">
    <span>{{ count == 0 ? "" : count }} {{ filteredText }}</span>
  </div>
</template>

<script>
export default {
  props: ["count"],
  computed: {
    filteredText() {
      if (this.count == 0) {
        return "No offers for this city";
      } else if (this.count == 1) {
        return "job availiable";
      } else {
        return "jobs availiable";
      }
    }
  }
};
</script>

<style lang="scss">
.job-post-availiable {
  color: #222;
  font-size: 14px;
  text-align: center;
  padding: 14px 0px 0px 0px;
  margin-bottom: 37px;
  position: relative;

  @include md-min {
    display: block;
  }

  span {
    display: inline-block;
    margin: 0 auto;
    position: relative;
    &:before {
      content: "";
      background-color: #5680e9;
      width: 8px;
      height: 8px;
      display: block;
      position: absolute;
      border-radius: 20px;
      left: -15px;
      top: 5px;
    }
  }
}
</style>
