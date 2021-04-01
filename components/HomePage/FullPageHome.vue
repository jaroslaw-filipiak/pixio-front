<template>
  <full-page
    ref="fullpage"
    :options="options"
    class="fullpage-main-wrapper__handle-mobile"
  >
    <Hero v-on:scroll.native="handleScroll" />
    <!-- solutions -->
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
    <!-- solutions -->

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
        licenseKey: "YOUR_KEY_HEERE",
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
        afterLoad: this.afterLoad,
        onSlideLeave: this.onSlideLeave,
        onLeave: this.onLeave
      }
    };
  },
  methods: {
    afterSlideLoad() {
      console.log("after slide load..");
      console.log(e);
      const activeItem = document.querySelector(".slide.active");
      console.log(activeItem);
    },
    afterLoad() {},
    onLeave(e) {},
    onSlideLeave(section, origin, destination, direction) {},
    onElementObserved(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        // console.log(target)
        // console.log(isIntersecting)
        console.log("element is visible now: " + isIntersecting);

        if (isIntersecting) {
          // fullpage_api.setAllowScrolling(false, "down");
          // fullpage_api.setAllowScrolling(false, "up");
          console.log("set scrolling to false");
          console.log(fullpage_api);
        }
      });
      // console.log('is in observer')''
    }
  },
  created() {
    setTimeout(function() {
      fullpage_api.reBuild();
    }, 500);
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
