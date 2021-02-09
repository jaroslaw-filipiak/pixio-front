<template>
  <h1>Subpage of careers {{ this.slug }}</h1>
</template>

<script>
export default {
  async asyncData({ params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },
};
</script>

