<template>
  <div class="careers">
    <!-- <CareersFilters /> -->
    <AvailableJobsCounter />
    <div class="job-post-items">
      <div class="job-post-item-wrapper" v-for="job in jobs" :key="job.id">
        <JobPostItem
          :title="job.Title"
          :exp="job.experience"
          :time="job.Time"
          :city="job.cities.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { jobItemsQuery } from "~/graphql/queries";

export default {
  layout: "careers",
  head() {
    return {
      bodyAttrs: {
        class: "page-careers"
      }
    };
  },
  data() {
    return {
      jobs: []
    };
  },
  apollo: {
    jobs: {
      prefetch: true,
      query: jobItemsQuery
    }
  }
};
</script>

<style lang="scss">
.job-post-item-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
</style>
