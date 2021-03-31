<template>
  <div
    class="section section-4"
    id="section4"
    :style="{
      backgroundImage: `url(${this.pageAbout.section_background.url})`
    }"
  >
    <div
      class="slide slide-for-sec-4"
      :class="{ 'is-hiring-visible': IsHiringVisible }"
    >
      <div>
        <div class="info-box">
          <h1>{{ this.$device.isMobile }}</h1>
          <h1>{{ this.$device.isDesktop }}</h1>
          <span v-html="this.pageAbout.about_content"></span>
          <div class="info-box--icons">
            <img src="~/assets/img/brand/epic-games-logo.svg" />
            <img src="~/assets/img/brand/WFW-logo.svg" />
            <img src="~/assets/img/brand/roe-logo.svg" />
            <img src="~/assets/img/brand/nvidia-logo.svg" />
          </div>
        </div>
        <div class="we-are-global">
          <h5>We are global</h5>
          <div class="we-are-global--branches">
            <div
              v-for="city in cities"
              :key="city.id"
              class="we-are-global--branch"
            >
              <img :src="city.icon.url" alt="" />
              <p>{{ city.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="carrer-box">
        <nuxt-link to="/Careers">Focusing on a career?</nuxt-link>
      </div>
    </div>
    <slot> </slot>
  </div>
</template>

<script>
// import backgroundUrl from "~/assets/img/slide-4-bg.jpg";
import { pageAboutContent, getCities } from "~/graphql/queries";

export default {
  data() {
    return {
      IsHiringVisible: false,
      pageAbout: {
        about_content: "",
        section_background: {
          url: ""
        }
      },
      cities: [
        {
          icon: {
            url: ""
          },
          id: "",
          name: ""
        }
      ]
    };
  },
  apollo: {
    pageAbout: {
      prefetch: true,
      query: pageAboutContent
    },
    cities: {
      prefetch: true,
      query: getCities
    }
  },
  methods: {
    handleClick: function() {
      this.IsHiringVisible = !this.IsHiringVisible;
    }
  }
};
</script>

<style lang="scss">
.info-box--icons {
  @include xs {
    display: none !important;
  }
  @include sm {
    display: none !important;
  }

  @include md-min {
    display: flex;
  }
}

.slide-for-sec-4 {
  @include xl {
    position: relative;
    top: 0px;
    transition: all 0.1s ease-in-out;
  }
}

.is-hiring-visible {
  transition: all 0.1s ease-in-out;
  @include xl {
    position: relative;
    top: -200px;
    transition: all 0.1s ease-in-out;
  }

  .info-box,
  .we-are-global {
    @include xl {
      transition: all 0.3s ease-in-out;
      filter: blur(4px);
    }
  }
}
#section4 {
  .fp-tableCell {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: space-between !important;
    height: 100vh !important;
    padding: 100px 0px 0px 0px;
  }
}
.section-4 {
  background-size: cover;
  background-repeat: no-repeat;

  h5 {
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
}

.info-box {
  transition: all 0.3s ease-in-out;
  margin: 0 auto;
  max-width: 512px;
  padding: 20px 30px;

  @include md-min {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &--icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h4 {
    color: #fff;
    font-size: 16px;
    line-height: 23px;
    font-weight: 600;
    text-align: center;
  }

  &--icons {
    margin-top: 20px;
    display: flex;

    img {
      margin: 0px 10px;
      max-width: 92px;
    }
  }
}

.we-are-global {
  margin-top: 40px;
  &__hide {
    opacity: 0;
  }
}

.we-are-global--branches {
  padding: 30px;
  display: flex;

  @include xs {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @include sm {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @include md {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .we-are-global--branch {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    opacity: 1;

    @include xs {
      margin: 10px;
    }
    @include sm {
      margin: 10px;
    }
    @include md {
      margin: 10px;
    }

    img {
      width: 54px;
    }

    p {
      margin-top: 10px;
      font-size: 11px;
      text-transform: uppercase;
    }

    &:hover {
      opacity: 0.7;
      transition: all 0.1s ease-in;
    }
  }
}

.carrer-box {
  @include xs {
    position: relative;
    top: -20px;
  }
  @include sm {
    position: relative;
    top: -20px;
  }
  @include md {
    position: relative;
    top: -20px;
  }
  a {
    color: #fff !important;
    font-size: 22px;
    text-decoration: none;
    font-weight: 600;
    position: relative;
    opacity: 1;
    display: inline-block;
    margin-bottom: 85px;

    &::after {
      content: "";
      display: inline-block;
      width: 90%;
      height: 2px;
      background-color: #fff;
      position: absolute;
      left: 5%;
      bottom: -10px;
      transition: all 0.1s ease-in;
    }

    &:hover {
      opacity: 0.7;
      transition: all 0.2s ease-in;

      &::after {
        width: 100%;
        left: 0%;
        transition: all 0.1s ease-in;
      }
    }
  }
}

.carrerBoxActive {
  a {
    margin-bottom: 0px;
  }
}

.we-are-hiring {
  background-color: #222222;
  // height: 30vh;
  width: 100%;
  padding: 40px 0px 80px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: #fff;
    font-size: 18px;
    line-height: 24px;
    margin: 0 auto;
    text-align: center;
  }

  &--steps {
    margin-top: 30px;
    padding: 30px 0px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  &--step {
    padding: 0px 20px;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    max-width: 230px;
    display: flex;

    p {
      margin-left: 15px;
    }
  }

  .step-number {
    color: #fff;
    opacity: 0.15;
    font-size: 40px;
    font-weight: 900;
    position: relative;
    top: -15px;
  }
}
</style>
