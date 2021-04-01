<template>
  <div class="rightnav">
    <div id="side-menu"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToSlide: function(e) {
      fullpage_api.moveTo(e.target.attributes[1].value);
      this.removeAllActiveClasses();
      this.addActiveClass(e.target);
    },
    addActiveClass: function(item) {
      item.classList.add("slide-link__active");
    },

    removeAllActiveClasses: function() {
      const items = document.querySelectorAll(".slide-link");

      items.forEach(item => item.classList.remove("slide-link__active"));
    },
    createNavigationLinks: function() {
      const navLinks = [];
      const navLinksWrapper = document.querySelector(".rightnav-links-wrapper");
      const slides = document.querySelectorAll(".slide");

      for (let i = 1; i <= slides.length; i++) {
        let link = document.createElement("li");
        link.className = `slide-link slide-link-${i}`;
        link.index = i + 1;
        link.setAttribute("link-to", `${i}`);

        let aElem = document.createElement("a");
        aElem.setAttribute("href", "#");
        link.addEventListener("click", this.goToSlide);
        link.appendChild(aElem);
        navLinks.push(link);
        navLinksWrapper.appendChild(link);
      }

      navLinks[0].classList.add("slide-link__active");
    }
  },
  computed: {
    isRightMenu() {
      return this.$store.state.isRightMenuVisible;
    }
  },

  mounted() {
    this.isRightMenu;
  },
  created() {}
};
</script>

<style lang="scss">
#fp-nav {
  z-index: 2;
  opacity: 1;
  display: none !important;
  transition: all 0.1s ease-in;
  @include lg-min {
    display: block !important;
  }
}

.rightnav {
  display: none;
  background-color: #000;
  padding: 0px 34px;
  width: 95px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;

  @include lg-min {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    li {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }

  .slide-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 20px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      transition: all 0.1s ease-in;
      opacity: 0.7;
      width: 20px;
    }

    &__active {
      transition: all 0.1s ease-in;
      width: 44px;
      &:hover {
        width: 40px;
      }
    }
    a {
      display: block;
      width: 100%;
      height: 2px;
      background-color: white;
      z-index: 1;
      pointer-events: none;
    }
  }
}
</style>
