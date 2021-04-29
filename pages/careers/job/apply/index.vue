<template>
  <div class="job-apply-container">
    <BackToOffer />
    <div class="single-job-content-wrapper">
      <ApplyForm
        :offerID="this.$route.query.id"
      />
      <ApplyFormSidebar />
    </div>
  </div>
</template>

<script>
export default {
  layout: "job-apply",
  async asyncData({ params }) {
    const slug = params.slug;
    return { slug };
  },
  head() {
    return {
      bodyAttrs: {
        class: "job-apply"
      }
    };
  },
};
</script>
