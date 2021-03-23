<template>
  <div class="careers">
    <CareersFilters />
    <AvailableJobsCounter />
    <div class="job-post-items">
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
      <JobPostItem />
    </div>
  </div>
</template>

<script>
export default {
  layout: "careers",
  head() {
    return {
      bodyAttrs: {
        class: "page-careers"
      }
    };
  }
};
</script>
