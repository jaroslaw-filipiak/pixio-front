<template>
  <full-page
    ref="fullpage"
    :options="options"
    class="fullpage-main-wrapper__handle-mobile"
  >
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

    <!-- <Projects /> -->

    <!-- projects -->
    <!-- <Section3>
       <div @click="$refs.fullpage.api.moveSectionDown()" class="arrow-bottom-next-slide">
        <div class="arrow-bottom-next-slide--inner">
          <img src="@/assets/img/arrow-bottom.svg" alt="">
        </div>
      </div>
     </Section3 > -->
    <!-- projects -->

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

    <!-- empty section / rightside navigation fast fix -->
    <div class="section empty-section-fix"></div>
    <!-- empty section / rightside navigation fast fix -->
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
          "contact",
          "page7",
          "page8"
        ],
        scrollingSpeed: 150,
        v2compatible: true,
        verticalCentered: true,
        fitToSection: true,
        scrollBar: false,
        // autoScrolling: true,
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
    afterLoad() {
      // console.log("Emitted 'after load' event.");
    },
    onLeave(e) {
      // console.log("on leave..");
      // console.log(e);
      //  console.log(e.anchor)
    },
    onSlideLeave(section, origin, destination, direction) {
      // console.log("on slide leave..");
      // console.log(section);
      // console.log(origin);
      // console.log(destination);
      // console.log(direction);
    },
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
    // const ObserverWrapper = document.querySelector('#__layout')
    // this.observer = new IntersectionObserver(
    //   this.onElementObserved, {
    //     root: ObserverWrapper,
    //     threshold: 1.0,
    //   }
    // );
    setTimeout(function() {
      fullpage_api.reBuild();
    }, 500);
  },
  mounted() {
    // const toObservate = document.querySelector('.section-projects')
    // this.observer.observe(toObservate);
    // console.log(this.observer)
    // console.log(this.$el)
  },
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
