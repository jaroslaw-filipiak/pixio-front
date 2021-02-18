<template>
  <div class="section section-projects">
    <div class="slide" style="transform: rotate(-1deg)">
      <div class="content">
        <div class="gallery">
           <Project />
              <Project />
              <Project />
        </div>
      </div>
    </div>

     <div class="slide" style="transform: rotate(-2deg)">
      <div class="content">
        <div class="gallery">
           <Project />
              <Project />
              <Project />
        </div>
      </div>
    </div>

     <div class="slide" style="transform: rotate(-3deg)">
      <div class="content">
        <div class="gallery">
           <Project />
              <Project />
              <Project />
        </div>
      </div>
    </div>
    
    <div style="display: none;">
      <div class="rotate">
        <main style="position: relative; display: flex;">
          <div class="content" style="width: 100vw;">
            <div class="gallery">
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
          </div>
        </main>
      </div>
      <svg
        style="opacity: 0"
        class="cursor"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <circle class="cursor__inner" cx="10" cy="10" r="5" />
      </svg>
    </div>
     <slot> </slot>  
  </div>
</template>

<script>

export default {
  data() {
    return {
    
    };
  },
  methods: {
    
  },
  mounted() {
  
  },
};
</script>

<style>
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
  margin: 0 3vw;
  display: grid;
  grid-template-areas:
    "... ..."
    "... gallery-image"
    "... ...";
    
 grid-template-columns: 1rem 21vmax;
 grid-template-rows: 40px 28vmax 3rem;
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
}

.gallery__item-caption {
  grid-area: 1 / 1 / 4 / 3;
  display: grid;
  grid-template-areas:
    "gallery-number gallery-title"
    "gallery-link ..."
    "gallery-link gallery-tags";
  grid-template-columns: 1rem auto;
    grid-template-rows: 29px 36rem 3rem;
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
}

.gallery__item-number,
.gallery__item-title,
.gallery__text {
  font-family: moret, serif;
  font-weight: 800;
  font-style: italic;
  align-self: center;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  left: 59px;
  top: -43px;
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

/* @media screen and (min-width: 53em) {
  .frame {
    grid-template-areas: "title demos demos links";
  }
  .frame__info {
    justify-self: end;
  }
} */
</style>
