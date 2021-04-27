<template>
  <div class="job-apply-container">
    <BackToOffers />
    <div class="single-job-content-wrapper">
      <ApplyForm
        :title="this.$route.params.slug"
        :offerID="this.$route.query.jobID"
      />
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
  },
  mounted() {
    // console.log(this.$route.params.slug);
    // console.log(this.$route.query.jobID);
  }
};
</script>
