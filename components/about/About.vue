<template>
  <div id="about" class="about-wrapper">
    <div v-animate="'slide-up'">
      <carousel :per-page="1" :loop="true" :paginationEnabled="false">
        <slide>
          <div class="container">
            <div class="row">
              <div class="col-md-5 styled-left">
                <div class="about-img-wrapper">
                  <img class="about-img" src="/images/joe.png" />
                </div>
              </div>
              <div class="col-md-7 styled-col">
                <div class="about-right">
                  <SectionTitle
                    title="I'm Joe"
                    description="Frontend Developer"
                  />
                  <div class="about-text">
                    Through innovation, passion and expertise, I produce
                    aesthetic software to the highest standard. My favourite
                    libraries are React, Vue and Styled Components. However, I'm
                    largely technology agnostic and love to learn new tricks.
                  </div>
                  <AboutSwipeButton />
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <AboutSkills />
              </div>
              <div class="col-md-4">
                <AboutPassions />
              </div>
              <div class="col-md-4">
                <AboutLanguages />
              </div>
            </div>
          </div>
        </slide>
      </carousel>
      <!-- <AboutCircles /> -->
    </div>
  </div>
</template>

<script type="module">
import SectionTitle from "../shared/SectionTitle";
import AboutCircles from "./AboutCircles";
import AboutSkills from "./AboutSkills";
import AboutSwipeButton from "./AboutSwipeButton";
import AboutLanguages from "./AboutLanguages";
import AboutPassions from "./AboutPassions";

export default {
  components: {
    SectionTitle,
    AboutCircles,
    AboutSkills,
    AboutSwipeButton,
    AboutLanguages,
    AboutPassions
  }
};
</script>

<style lang="scss">
@import "assets/scss/variables";

.VueCarousel-slide {
  max-width: 100%;
}

.about-wrapper {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;

  @media (min-width: $screenWidthMd) {
    padding: 0;
  }
}

.about-subtitle {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
}

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

.about-text {
  font-size: 0.975rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.625;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: $screenWidthMd) {
    text-align: left;
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
  width: 40%;

  @media (min-width: $screenWidthMd) {
    background: #e7e7e7;
    width: 200px;
    height: 200px;

    &:hover img {
      transform: translate(2rem, -2rem);
    }
  }
}

.about-img {
  margin: 0;
  padding: 0;
  width: 100%;
  transition: transform 0.5s ease-in-out;
}
</style>
