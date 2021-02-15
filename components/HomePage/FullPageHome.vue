<template>
  <full-page
      ref="fullpage"
      :options="options"
      style="postion: relative; top: 100vh"
    >
      <Section2 />
      <Section3 />
      <Section4 />
      <Instagram />
      <Contact />

      <div class="section">
        <div class="slide">sd</div>
      </div>

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
          "page8",
        ],
        scrollingSpeed: 150,
        navigation: true,
        navigationPosition: 'right',
        afterLoad: this.afterLoad,
        afterLoad: this.afterLoad,
        onSlideLeave: this.onSlideLeave,
        onLeave: this.onLeave,
      },
    }
},
methods: {
     afterSlideLoad() {
      console.log("after slide load..");
      console.log(e);
      const activeItem = document.querySelector('.slide.active')
      console.log(activeItem)
    },
    afterLoad() {
      // console.log("Emitted 'after load' event.");
    },
    onLeave(e) {
      console.log("on leave..");
      console.log(e);
       console.log(e.anchor)
      
    },
    onSlideLeave(section, origin, destination, direction) {
      // console.log("on slide leave..");
      // console.log(section);
      // console.log(origin);
      // console.log(destination);
      // console.log(direction);
    },
}
}
</script>

<style>

</style>