<template>
  <div id="about" class="about-wrapper">
    <!-- <div v-animate="'slide-up'"> -->
    <client-only>
      <carousel :per-page="1" :paginationEnabled="false">
        <slide>
          <div>
            <div class="container">
              <div class="row">
                <div class="col-xs-12 offset-md-2 col-md-8">
                  <div class="row">
                    <div class="order-2 order-md-1 col-md-8 styled-left">
                      <div class="about-right">
                        <SectionTitle
                          title="Hi, I'm Joe"
                          description="Frontend Developer"
                        />
                        <div class="about-text">
                          Through constant learning and creation, I produce
                          aesthetic software to the highest standard. I’m
                          largely framework agnostic but technologies I love
                          right now are React, Vue and Styled Components.
                        </div>
                        <AboutSwipeButton />
                      </div>
                    </div>
                    <div class="order-1 order-md-2 col-md-4 styled-col">
                      <div class="about-img-wrapper">
                        <img class="about-img" src="/images/joe.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div>
            <div class="container">
              <AboutSkills />
            </div>
          </div>
        </slide>
        <slide>
          <div>
            <div class="container">
              <div class="row">
                <div class="offset-md-2 col-md-8">
                  <div class="row">
                    <div class="col-md-5">
                      <AboutPassions />
                    </div>
                    <div class="col-md-6">
                      <AboutLanguages />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </client-only>
    <!-- <AboutCircles /> -->
    <!-- </div> -->
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
  position: relative;

  @media (min-width: $screenWidthXs) {
    // padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.about-subtitle {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 2.5rem;

  @media (min-width: $screenWidthMd) {
    font-size: 1.5rem;
  }
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
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.625;
  text-align: center;
  margin: 0 auto 2rem;
  width: 60%;

  @media (min-width: $screenWidthMd) {
    text-align: left;
    width: auto;
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
  margin: 2rem auto 2rem;

  @media (min-width: $screenWidthMd) {
    margin-bottom: 0;
    background: #e7e7e7;
    width: 200px;
    height: 200px;

    &:hover img {
      transform: translate(1rem, -1rem);
    }
  }
}

.about-img {
  margin: 0;
  padding: 0;
  width: 100%;
  transform: translate(0.5rem, -0.5rem);
  transition: transform 0.5s ease-in-out;
}

.VueCarousel-wrapper {
  padding: 3rem 0;

  @media (min-width: $screenWidthMd) {
    padding: 8rem 0;
    cursor: move;
  }
}
</style>
