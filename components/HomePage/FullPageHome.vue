<template>
  <full-page
    ref="fullpage"
    :options="options"
    class="fullpage-main-wrapper__handle-mobile"
  >
    <Hero />

    <Section2>
      <div
        v-if="!isTooltipVisible"
        @click="$refs.fullpage.api.moveSectionDown()"
        class="arrow-bottom-next-slide"
      >
        <div class="arrow-bottom-next-slide--inner">
          <img src="@/assets/img/arrow-bottom.svg" alt="" />
        </div>
      </div>
    </Section2>

    <Section3Projects>
      <div
        @click="$refs.fullpage.api.moveSectionDown()"
        class="arrow-bottom-next-slide"
      >
        <div class="arrow-bottom-next-slide--inner">
          <img src="@/assets/img/arrow-bottom.svg" alt="" />
        </div>
      </div>
    </Section3Projects>

    <Section4>
      <div
        @click="$refs.fullpage.api.moveSectionDown()"
        class="arrow-bottom-next-slide"
      >
        <div class="arrow-bottom-next-slide--inner">
          <img src="@/assets/img/arrow-bottom.svg" alt="" />
        </div>
      </div>
    </Section4>

    <Instagram>
      <div
        @click="$refs.fullpage.api.moveSectionDown()"
        class="arrow-bottom-next-slide"
      >
        <div class="arrow-bottom-next-slide--inner">
          <img src="@/assets/img/arrow-bottom.svg" alt="" />
        </div>
      </div>
    </Instagram>

    <Contact />
  </full-page>
</template>

<script>
export default {
  data() {
    return {
      options: {
        licenseKey: process.env.FULLPAGE_KEY,
        menu: "#side-menu",
        anchors: [
          "home",
          "solutions",
          "projects",
          "about",
          "instagram",
          "contact"
        ],
        scrollingSpeed: 150,
        v2compatible: true,
        verticalCentered: true,
        fitToSection: true,
        scrollBar: false,
        autoScrolling: true,
        navigation: true,
        navigationPosition: "right",
        afterLoad: this.afterLoad,
      }
    };
  },
  methods: {
    afterLoad(section, index) {
      if ( section == 'contact' ) {
        // reset contact form after scrolling from another section
        this.$refs.fullpage.$children[index - 1].resetForm();
      }
    }
  },
  created() {
    setTimeout(function() {
      fullpage_api.reBuild();
    }, 800);
  },
  mounted() {},
  computed: {
    isTooltipVisible: function() {
      return this.$store.state.isTooltipVisible;
    }
  }
};
</script>

<style lang="scss">
.empty-section-fix {
  opacity: 0.6;
  display: none;
}
</style>
