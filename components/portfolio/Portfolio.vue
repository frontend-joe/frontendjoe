<template>
  <div class="portfolio-wrapper">
    <div v-animate="'slide-up'">
      <div class="container" :style="{ textAlign: 'center' }">
        <SectionTitle
          centered
          title="Portfolio"
          description="How I spend my free time"
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
          <img class="portfolio-card-img " src="images/vooze-screen.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../shared/SectionTitle";
import CoolButton from "../shared/CoolButton";

export default {
  components: {
    SectionTitle,
    CoolButton
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.portfolio-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    height: 110%;
    width: 200%;
    background: #f9f9f9;
    transform: rotate(-1.5deg);
    transform-origin: top right;
  }
}

.portfolio-card {
  padding-top: 2rem;
  display: inline-block;
  margin: 0 auto;

  text-decoration: none;

  &:hover &-img {
    transform: translateY(-0.5rem);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.08),
      0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 36px 30px -7px rgba(0, 0, 0, 0.1);
  }
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
