<template>
  <div v-animate="'slide-up'" class="about-wrapper">
    <div class="about-left">test</div>
    <div class="about-right">test</div>

    <!-- <div class="container">
      <div class="row top-row">
        <div class="col-md-5 styled-left">
          <div class="about-img-wrapper">
            <img class="about-img" src="/images/joe.png" />
          </div>
        </div>
        <div class="col-md-7 styled-col">
          <div class="about-right">
            <SectionTitle
              title="I'm Joe Harrison"
              description="Frontend Developer"
            />
            <div class="about-text">
              Through innovation, passion and expertise, I produce aesthetic
              software to the highest quality. My favourite libraries are React,
              Vue and Styled Components. However, I'm largely technology
              agnostic and love learning new tricks.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 offset-md-1">
          <AboutSkills />
        </div>
        <div class="col-md-6">
          <AboutCircles />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import SectionTitle from "../shared/SectionTitle";
import AboutCircles from "./AboutCircles";
import AboutSkills from "./AboutSkills";

export default {
  components: {
    SectionTitle,
    AboutCircles,
    AboutSkills
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.styled-left {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: $screenWidthMd) {
    text-align: left;
    margin-bottom: 0;
    align-items: center;
  }
}

.top-row {
  margin-bottom: 5rem;
}

.about-wrapper {
  min-height: 100vh;
  position: relative;
  display: flex;
}

.about-left {
  flex: 1;
}

.about-right {
  flex: 1;
  background: rgba($colorPrimary, 0.25);
}

.about-text {
  font-size: 0.975rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.625;
  text-align: center;

  @media (min-width: $screenWidthMd) {
    text-align: left;
    margin-bottom: 0;
  }
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

.about-img-wrapper {
  border-radius: 50%;
  width: 50%;

  @media (min-width: $screenWidthMd) {
    background: #e7e7e7;
    width: 200px;
    height: 200px;

    &:hover img {
      transform: translate(0.5rem, -2rem);
    }
  }
}

.about-img {
  margin: 0;
  padding: 0;
  width: 100%;
  transition: transform 0.5s ease-in-out;
}

.about-title-highlight {
  color: $colorPrimary;
}
</style>
