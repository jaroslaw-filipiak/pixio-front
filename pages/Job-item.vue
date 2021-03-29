<template>
  <div class="single-job-container">
    <BackToOffers />
    <div class="single-job-content-wrapper">
      <JobContent :title="this.slug" />
      <JobSidebar />
    </div>
  </div>
</template>

<script>
export default {
  layout: "single-job",
  async asyncData({ params }) {
    const slug = params.slug;
    return { slug };
  },
  head() {
    return {
      bodyAttrs: {
        class: "single single-job"
      }
    };
  }
};
</script>
