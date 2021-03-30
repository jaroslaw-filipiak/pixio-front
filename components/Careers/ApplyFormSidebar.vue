<template>
  <div class="apply-form-sidebar">
    <div class="apply-form-sidebar--photo">
      <img
        class="img-fluid"
        :src="this.applyJobSidebar.image.url"
        alt="our team photo"
      />
    </div>

    <div class="apply-form-sidebar--content">
      {{ this.applyJobSidebar.content }}
    </div>
  </div>
</template>

<script>
import { applyJobSidebarContent } from "~/graphql/queries";

export default {
  data() {
    return {
      applyJobSidebar: {
        content: "",
        image: {
          url: ""
        }
      }
    };
  },
  apollo: {
    applyJobSidebar: {
      prefetch: true,
      query: applyJobSidebarContent
    }
  }
};
</script>

<style lang="scss">
.apply-form-sidebar {
  width: 100%;
  padding: 30px;
  background-color: #f7f6f2;

  @include lg-min {
    width: 266px;
    margin-left: 20px;
    padding: 0;
  }

  &--button-wrapper {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
}
</style>
