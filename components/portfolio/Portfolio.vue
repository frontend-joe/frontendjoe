<template>
  <div class="portfolio-wrapper">
    <div class="container">
      <div class="row">
        <div class="offset-md-2 col-md-8">
          <SectionTitle
            title="Portfolio"
            :style="{ marginBottom: '5rem' }"
            description="Most recent work"
          />

          <div class="portfolio-row" :style="{ marginBottom: '8rem' }">
            <TiltCard class="portfolio-img" imagePath="images/mi-screen.png" />
            <div class="portfolio-text portfolio-text--right">
              <h3 class="portfolio-h3">Micro Interactions</h3>
              <p class="portfolio-p">
                Written in Vue and Styled Components, this is a collaboration
                project between myself and many talented Instagram designers.
              </p>
              <a
                class="portfolio-link"
                target="_blank"
                href="http://mi.frontendjoe.com"
                >Interactive Demo</a
              >
            </div>
          </div>
          <div class="portfolio-row needs-reverse">
            <div class="portfolio-text portfolio-text--left">
              <h3 class="portfolio-h3">Vooze</h3>
              <p class="portfolio-p">
                Written in Vue and Styled Components, this is an admin dashboard
                that features many modern design and UX trends this year.
              </p>
              <a
                class="portfolio-link"
                target="_blank"
                href="http://vooze.vuezythemes.com"
                >Interactive Demo</a
              >
            </div>
            <TiltCard
              class="portfolio-img"
              imagePath="images/vooze-screen.png"
            />
          </div>
        </div>
      </div>

      <!-- <div class="row">
        <div class="offset-md-2"></div>
        <div class="col-md-8">
          <div v-animate="'slide-up'">
            <div>
              <SectionTitle
                title="Portfolio"
                description="My most recent work"
              />
              <a
                class="portfolio-card"
                href="http://vooze.vuezythemes.com"
                target="_blank"
              >
              <div class="portfolio-card-title">
                  Vooze
                </div>
                <div class="portfolio-card-subtitle">
                  An Admin Template built with Vue and Styled Components.
                </div>
                <img
                  class="portfolio-card-img "
                  src="images/vooze-screen.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import SectionTitle from "../shared/SectionTitle";
import CoolButton from "../shared/CoolButton";
import TiltCard from "../shared/TiltCard";

export default {
  components: {
    SectionTitle,
    CoolButton,
    TiltCard
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.portfolio-wrapper {
  background: #f7f4ff;
  padding: 7rem 0;
}

.portfolio-row {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: $screenWidthLg) {
    &.needs-reverse {
      flex-direction: column-reverse;
    }
  }

  @media (min-width: $screenWidthLg) {
    flex-direction: row;
  }
}

.portfolio-img {
  width: 60%;
  margin-bottom: 3rem;

  @media (min-width: $screenWidthLg) {
    margin-bottom: 0;
    flex: 1 1 auto;
    width: 55%;
  }
}

.portfolio-text {
  flex: 1 1 auto;
  text-align: center;
  width: 60%;

  @media (min-width: $screenWidthLg) {
    width: 45%;
    text-align: left;

    &--left {
      padding-right: 60px;
    }

    &--right {
      padding-left: 60px;
    }
  }
}

.portfolio-h3 {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: $colorText;
}

.portfolio-link {
  color: #9273ce;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
}

.portfolio-p {
  color: rgba(#000, 0.65);
  line-height: 1.625;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.portfolio-card {
  // padding-top: 2rem;
  // display: inline-block;
  // margin: 0 auto;
  //
  //   &:hover &-img {
  //     transform: translateY(-0.5rem);
  //     box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.08),
  //       0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 36px 30px -7px rgba(0, 0, 0, 0.1);
  //   }
  // }
}

.portfolio-card-img {
  width: 68%;
  border-radius: 1rem;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.08),
    0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 8px 10px -7px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.25s, transform 0.25s;

  @media (min-width: $screenWidthMd) {
    width: 540px;
  }
}

.portfolio-card-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: $colorText;
  text-align: center;
  margin-bottom: 1rem;
}

.portfolio-card-subtitle {
  color: $colorSubtitle;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2.5rem;
}

.animate {
  transition-delay: 0.5s;
  transition-duration: 0.25s;
  transition-timing-function: ease-in;
}

.slide-up {
  opacity: 0;
}

.slide-up.animate-active {
  opacity: 1;
}
</style>
