<template>
  <div class="single-job-container">
    <BackToOffers />
    <div class="single-job-content-wrapper">
      <JobContent
        :title="this.job[0].Title"
        :exp="this.job[0].experience"
        :city="this.job[0].cities.name"
        :time="this.job[0].Time"
        :content="this.job[0].job_content"
      />
      <JobSidebar :title="this.job[0].Title" :jobID="this.job[0].id" />
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
      job: [
        {
          Title: "",
          Time: "",
          cities: {
            name: ""
          },
          content: ""
        }
      ]
    };
  },
  async fetch() {
    this.job = await fetch(
      `https://7e6805.stage.titans24.com/jobs?id=${this.$route.query.jobID}`
    ).then(res => res.json());
  },
  mounted() {
    console.log(this.$route.params);
    console.log(this.$route.query.jobID);
    console.log(this.$route);
  }
};
</script>
