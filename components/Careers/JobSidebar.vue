<template>
  <div class="single-job-sidebar">
    <div class="single-job-sidebar--photo">
      <!-- :src="this.singleJobSidebar.image[0].url" -->
      <img
        class="img-fluid"
        :src="this.singleJobSidebar.image.url"
        alt="our team photo"
      />
    </div>
    <div class="single-job-sidebar--button-wrapper">
      <div
        @click="
          $router.push({
            path: `/careers/apply/job-offer/${title}`,
            query: { jobID }
          })
        "
      >
        <ApplyButton />
      </div>
    </div>
    <div class="single-job-sidebar--content">
      <span v-html="$md.render(this.singleJobSidebar.content)"></span>
    </div>
  </div>
</template>

<script>
import { singleJobSidebarContent } from "~/graphql/queries";

export default {
  data() {
    return {
      singleJobSidebar: {
        content: "",
        id: "",
        image: {
          url: ""
        }
      }
    };
  },
  props: ["title", "jobID"],
  apollo: {
    singleJobSidebar: {
      prefetch: true,
      query: singleJobSidebarContent
    }
  }
};
</script>

<style lang="scss">
.single-job-sidebar {
  width: 85%;
  margin-left: 20px;

  @include lg-min {
    width: 266px;
  }

  &--button-wrapper {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      color: #222;
      text-decoration: none;
    }
  }

  &--content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h4 {
      font-size: 18px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
    }

    h4,
    p {
      margin-bottom: 20px;
    }
  }

  &--photo,
  &--content,
  &--button-wrapper {
    background-color: rgba(247, 246, 242, 0.4);
  }
}
</style>
