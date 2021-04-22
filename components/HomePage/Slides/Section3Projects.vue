<template>
  <div class="section section-3 section-projects">
    <div
      class="project--overlay"
      :class="{ 'project--overlay__visible': isVideoTooltipVisible }"
    ></div>
    <swiper ref="projectsSwiper" :options="projectsSwiperOptions">
      <swiper-slide v-for="project in projects" :key="project.id">
        <Project
          :title="project.Title"
          :backgroundUrl="project.Thumbnail.url"
          :movieEmbeed="project.link"
        />
      </swiper-slide>
    </swiper>

    <div
      class="project-video"
      :class="{ 'project-video__visible': isVideoTooltipVisible }"
    >
      <div class="close-video-button" @click="closeVideo">
        <div class="close-video-button--inner">
          <img src="@/assets/img/cross-icon.svg" alt="" />
        </div>
      </div>
      <video-embed
        ref="youtube"
        :params="{ autoplay: 1 }"
        :src="videoSRC"
      ></video-embed>
    </div>

    <div class="swiper-arrows__projects--prev">
      <div class="swiper-pixo-button-prev prev-project">
        <img src="@/assets/img/arrow-bottom.svg" alt="" />
      </div>
    </div>

    <div class="swiper-arrows__projects--next">
      <div class="swiper-pixo-button-next next-project">
        <img src="@/assets/img/arrow-bottom.svg" alt="" />
      </div>
    </div>

    <div class="projects-swiper-pagination"></div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    projects: gql`
      query getProjects {
        projects {
          id
          Title
          Thumbnail {
            url
          }
          link
        }
      }
    `
  },
  props: {
    src: String
  },
  data() {
    return {
      projectsSwiperOptions: {
        slidesPerView: 1,
        centeredSlides: false,
        loop: false,
        spaceBetween: 0,
        grabCursor: false,
        allowTouchMove: true,
        speed: 200,
        breakpoints: {
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
            loop: false
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        },
        navigation: {
          nextEl: ".next-project",
          prevEl: ".prev-project"
        }
      }
    };
  },

  computed: {
    isVideoTooltipVisible() {
      return this.$store.state.isVideoTooltipVisible;
    },
    videoSRC() {
      return this.$store.state.videoSRC;
    }
  },
  methods: {
    closeVideo() {
      this.$store.commit("closeVideo", "");
      this.$store.commit("changeVideoURL", "");

      const section = document.querySelector(".section-projects");
      section.classList.add("active");
    }
  }
};
</script>

<style lang="scss">
.close-video-button {
  @include xs {
    position: absolute;
    right: 3%;
    top: 2%;
  }
  @include sm {
    position: absolute;
    right: 3%;
    top: 2%;
  }
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  width: 50px;
  height: 44px;
  position: absolute;
  right: -50px;
  top: -44px;
  z-index: 122;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &--inner {
    border: 2px solid #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    transition: all 0.1s ease-in;
    animation: arrowBottom 2s ease-in-out infinite;
    animation-direction: alternate;
  }

  @keyframes arrowBottom {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.9);
      opacity: 0.8;
    }
  }
}

.section-3 {
  .swiper-wrapper {
    @include xl-min {
      position: relative;
      left: -24%;
    }
  }
}
.swiper-arrows__projects {
  width: 60px;
}

.swiper-arrows__projects--next {
  position: absolute;
  top: 50%;
  right: 0px;
  width: 50px;
  z-index: 80;

  @include xs {
    display: none !important;
  }

  @include sm {
    display: none !important;
  }

  @include md {
    display: none !important;
  }
}

.swiper-arrows__projects--prev {
  position: absolute;
  top: 50%;
  left: 0px;
  width: 50px;
  z-index: 80;

  @include xs {
    display: none !important;
  }

  @include sm {
    display: none !important;
  }

  @include md {
    display: none !important;
  }
}

.section-projects {
  position: relative;
  background-color: #000;

  .swiper-container {
    transform: rotate(-1.5deg);
  }
}

.projects-swiper-pagination {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 33px;
  position: absolute;
  left: 0;
  bottom: 60px;
  z-index: 35;

  span {
    margin: 0px 10px;
  }
}

// ===============================

.isBlured {
  transition: all 0.3s ease-in-out;
  filter: blur(5px) !important;
}

.tet {
  width: 60vw;
  height: 60vh;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
}

.tet__visible {
  z-index: 33;
}

.video-tooltip-visible {
  iframe#portfolioVideo {
    display: block;
  }
}

iframe#portfolioVideo {
  display: none;
}

#portfolioVideo {
  opacity: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
}

.demo-2 {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}

* {
  --color-gallery-title: #d9d0be;
  --color-gallery-number: #181817;
  --color-gallery-link: #fff;
  --color-gallery-link-bg: #cc0000;
  --color-gallery-link-hover: #0e0e0d;
  --color-gallery-link-bg-hover: #d9d0be;
  --cursor-stroke: none;
  --cursor-fill: #cc0000;
  --cursor-stroke-width: 1px;
}

.rotate {
  transform: rotate(-2deg);
}

.gallery {
  display: flex;
  margin-left: 5vw;
  width: 100%;
}

.gallery__item {
  display: flex;
  transition: all 0.2s ease-in-out;
  z-index: 55;

  @include xs {
    grid-template-areas:
      "gallery-image gallery-image"
      "gallery-image gallery-image"
      "gallery-image gallery-image";
    margin: 0px;
  }

  @include sm {
    grid-template-areas:
      "gallery-image gallery-image"
      "gallery-image gallery-image"
      "gallery-image gallery-image";
    margin: 0px;
  }

  @include md {
    grid-template-areas:
      "gallery-image gallery-image"
      "gallery-image gallery-image"
      "gallery-image gallery-image";
    margin: 0px;
  }

  margin: 0 3vw;
  display: grid;
  grid-template-areas:
    "... ..."
    "... gallery-image"
    "... ...";

  grid-template-columns: 1rem 21vmax;
  grid-template-rows: 40px 28vmax 3rem;

  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.05);
  }
}

.gallery__item-img {
  grid-area: gallery-image;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  will-change: transform;
}

.gallery__item-imginner {
  background-size: contain;
  background-position: 50% 0;
  width: calc(100% + 10vw);
  margin-left: -5vw;
  height: 100%;
  will-change: transform;
  background-repeat: no-repeat;
  cursor: pointer;
}

.gallery__item-caption {
  grid-area: 1 / 1 / 4 / 3;
  display: grid;
  grid-template-areas:
    "gallery-number gallery-title"
    "gallery-link ..."
    "gallery-link gallery-tags";
  grid-template-columns: 1rem auto;
  grid-template-rows: 1fr 1fr 1fr;

  // @include xs {
  //   position: absolute;
  //   left: 0;
  //   top: -49px;
  //   width: 100%;
  //   grid-template-areas:
  //     "gallery-title gallery-title"
  //     "gallery-link ..."
  //     "gallery-link gallery-tags";
  //   grid-template-rows: 19px 88rem 15rem;
  // }

  // @include xs {
  //   position: absolute;
  //   left: 0;
  //   top: -49px;
  //   width: 100%;
  //   grid-template-areas:
  //     "gallery-title gallery-title"
  //     "gallery-link ..."
  //     "gallery-link gallery-tags";
  //   grid-template-rows: 19px 88rem 15rem;
  // }

  // @include md {
  //   position: absolute;
  //   left: 0;
  //   top: -49px;
  //   width: 100%;
  // }
}

.gallery__item-number {
  grid-area: gallery-number;
  font-size: 6rem;
  font-size: clamp(2.5rem, 9vw, 6.5rem);
  justify-self: end;
  padding-right: 2rem;
  color: var(--color-gallery-number);
  display: none;
}

.gallery__item-title {
  grid-area: gallery-title;
  margin: 0;
  font-size: 24px;
  color: var(--color-gallery-title);
  font-family: "Jost", sans-serif !important;

  line-height: 23px;
  margin-bottom: 15px;

  position: absolute;

  top: -40px;

  @include xl-min {
    top: 0px;
  }
}

.gallery__item-number,
.gallery__item-title,
.gallery__text {
  font-family: moret, serif;
  font-weight: 800;
  font-style: italic;
  align-self: center;
}

.gallery__item-link:focus,
.gallery__item-link:hover {
  background: var(--color-gallery-link-bg-hover);
  color: var(--color-gallery-link-hover);
  text-decoration: none;
}

.gallery__item-tags {
  grid-area: gallery-tags;
  justify-self: end;
  font-size: 1.5rem;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  cursor: pointer;
}

.gallery__text {
  font-size: 20vw;
  line-height: 0.8;
  margin: 0 12vw;
  text-transform: lowercase;
  color: transparent;
  -webkit-text-stroke: 1px #645c5b;
  text-stroke: 1px #645c5b;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

.gallery__text-inner {
  display: block;
}

.section-projects {
  transition: all 0.5s ease-in;

  .content {
    filter: blur(0px);
    transition: all 0.3s ease-in;
  }
}

.section-projects--overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.5s ease-in;

  &__is-visible {
    z-index: 2;
    transition: all 0.5s ease-in;
  }
}

.next-project {
  opacity: 1;
}

.swiper-button-disabled {
  opacity: 0.1;
}

.project-video {
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  background-color: transparent;
  border: none;

  @include lg-min {
    width: 650px;
    height: 389px;
    background-color: #000;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }

  &__visible {
    opacity: 1;
    z-index: 90;
  }

  iframe {
    width: 100%;
    height: 100%;

    @include md-min {
      width: 650px;
      height: 389px;
    }

    @include lg-min {
      width: 650px;
      height: 389px;
      border: none;
    }
  }
}

.project--overlay {
  background-color: rgba(20, 20, 20, 0.63);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;

  &__visible {
    z-index: 11;
  }
}

.section-3.is-projects-blured {
  .swiper-container {
    filter: blur(6px);
  }
}

.section-3 {
  .swiper-container {
    filter: blur(0px);

    @include xl-min {
      width: 80vw !important;
    }

    .swiper-slide {
      // @include xs {
      //   width: 70% !important;
      //   margin: 0px;
      //   margin-right: 0px !important;
      //   position: relative;
      //   top: -60px;
      // }

      // @include sm {
      //   width: 70% !important;
      //   margin: 0px;
      //   margin-right: 0px !important;
      //   position: relative;
      //   top: -60px;
      // }

      width: 100%;
    }
  }
}

.gallery__item-caption {
  position: relative;
}

.gallery__item-link {
  grid-area: gallery-link;
  align-self: end;
  font-size: 1.5rem;
  background: #d7d0c0;
  color: var(--color-gallery-link);
  text-decoration: underline;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  left: 15px;

  @include xs {
    position: absolute;
    left: -35px;
    bottom: -35px;
  }
  @include sm {
    position: absolute;
    left: -35px;
    bottom: -35px;
  }
  @include md {
    position: absolute;
    left: -35px;
    bottom: -35px;
  }
}
</style>
