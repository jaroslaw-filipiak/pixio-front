<template>
  <div class="job-apply-container">
    <BackToOffers />
    <div class="single-job-content-wrapper">
      <ApplyForm />
      <ApplyFormSidebar />
    </div>
  </div>
</template>

<script>
export default {
  layout: "job-apply",
  async asyncData({ params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },
  head() {
    return {
      bodyAttrs: {
        class: "job-apply"
      }
    };
  }
};
</script>
