<template>
  <div class="single-job-container">
    <BackToOffers />
    <div class="single-job-content-wrapper">
      <JobContent :title="this.slug" />
      <JobSidebar :title="this.slug" :jobID="this.$route.query.jobID" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "single-job",
  async asyncData({ params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },
  head() {
    return {
      bodyAttrs: {
        class: "single single-job"
      }
    };
  },
  data() {
    return {
      job: []
    };
  },
  async fetch() {
    this.job = await fetch(
      `${process.env.MAIN_API_ENDPOINT}jobs?id=${this.$route.query.jobID}`
    ).then(res => res.json());
  },
  mounted() {
    console.log(this.$route.params);
    console.log(this.$route.query.jobID);
    console.log(this.$route);
  }
};
</script>
