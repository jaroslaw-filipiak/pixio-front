<template>
  <div
    class="section section-4"
    id="section4"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="slide">
      <div>
        <div class="info-box">
          <h4>
            We are extending the approach to our groundbreaking work in virtual
            production, by firmly embedding our creative process into the heart
            of yours.
          </h4>
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
            <div class="we-are-global--branch">
              <img src="@/assets/img/brand/beijing.svg" alt="" />
              <p>Beijing</p>
            </div>
            <div class="we-are-global--branch">
              <img src="@/assets/img/brand/losangeles.svg" alt="" />
              <p>Los Angeles</p>
            </div>
            <div class="we-are-global--branch">
              <img src="@/assets/img/brand/frankfurt.svg" alt="" />
              <p>Frankfurt</p>
            </div>
            <div class="we-are-global--branch">
              <img src="@/assets/img/brand/toronto.svg" alt="" />
              <p>Toronto</p>
            </div>
            <div class="we-are-global--branch">
              <img src="@/assets/img/brand/stuttgart.svg" alt="" />
              <p>Stuttgart</p>
            </div>
            <div class="we-are-global--branch">
              <img src="@/assets/img/brand/shanghai.svg" alt="" />
              <p>Shanghai</p>
            </div>
            <div class="we-are-global--branch">
              <img src="@/assets/img/brand/vancouver.svg" alt="" />
              <p>Vancouver</p>
            </div>
            <div class="we-are-global--branch">
              <img src="@/assets/img/brand/montreal.svg" alt="" />
              <p>Montreal</p>
            </div>
          </div>
        </div>
      </div>
      <div class="carrer-box" :class="{ carrerBoxActive: IsHiringVisible }">
        <a @click="handleClick" href="#">{{
          IsHiringVisible ? "We are Hiring" : "Focusing on a career?"
        }}</a>
      </div>
      <div v-show="IsHiringVisible" class="we-are-hiring">
        <h3>With PXO you can make great things, to name a few:</h3>
        <div class="we-are-hiring--steps">
          <div class="we-are-hiring--step">
            <div class="step-number">1.</div>
            <div class="step-content">
              <p>Bring to life ideas of most creative people in the industry</p>
            </div>
          </div>
          <div class="we-are-hiring--step">
            <div class="step-number">2.</div>
            <div class="step-content">
              <p>Make previously unreal happen</p>
            </div>
          </div>
          <div class="we-are-hiring--step">
            <div class="step-number">3.</div>
            <div class="step-content">
              <p>Work alongside best experts (and people)</p>
            </div>
          </div>
        </div>
        <div class="we-are-hiring--cta">
          <button class="btn btn-outline-white">Amazing career page</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundUrl from "~/assets/img/slide-4-bg.jpg";
export default {
  data() {
    return {
      backgroundUrl,
      IsHiringVisible: false,
    };
  },
  methods: {
    handleClick: function () {
      this.IsHiringVisible = !this.IsHiringVisible;
    },
  },
};
</script>

<style lang="scss">
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
  margin: 0 auto;
  max-width: 512px;
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.2);

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
}

.we-are-global--branches {
  padding: 30px;
  display: flex;

  .we-are-global--branch {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    opacity: 1;

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
