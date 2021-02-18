<template>
  <figure class="gallery__item">
    <div class="gallery__item-img">
      <div
        class="gallery__item-imginner"
        :style="{ backgroundImage: `url(${backgroundImagePath})` }"
        data-scroll
        data-scroll-speed="-0.8"
      ></div>
    </div>
    <figcaption class="gallery__item-caption">
      <h2 class="gallery__item-title" data-scroll data-scroll-speed="1">
       Star Trek Discovery
      </h2>
      <span class="gallery__item-number" data-scroll data-scroll-speed="1.5"
        >01</span
      >

      <a class="gallery__item-link"
        ><svg
          width="17"
          height="21"
          viewBox="0 0 17 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.96875 1.1626L15.9688 10.1626L1.96875 19.1626V1.1626V1.1626Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </figcaption>
  </figure>
</template>

<script>
import backgroundImagePath from "@/assets/img/poster-star-treck-discovery.jpg";
export default {
  data() {
    return {
      backgroundImagePath,
    };
  },
};
</script>

<style>
</style>