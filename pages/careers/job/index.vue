<template>
  <div class="single-job-container">
    <BackToOffers />
    <div class="single-job-content-wrapper">
      <JobContent
        :title="jobProperty('Title')"
        :exp="jobProperty('experience')"
        :city="jobProperty('cities', 'name')"
        :time="jobProperty('Time')"
        :content="jobProperty('job_content')"
      />
      <JobSidebar :title="jobProperty('Title')" :jobID="jobProperty('id')" />
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
      process.env.MAIN_API_ENDPOINT + `jobs?id=${this.$route.query.id}`
    ).then(res => res.json());

    if (!this.job || !this.job.length) {
      this.$router.push({ path: '/careers' })
    }
  },
  methods: {
    jobProperty(prop1, prop2 = false) {
      if (prop2) {
        return typeof this.job[0] === 'undefined' ? '---' : this.job[0][prop1][prop2];
      } else {
        return typeof this.job[0] === 'undefined' ? '---' : this.job[0][prop1];
      }
    }
  },
};
</script>
