<template>
  <div class="home-wrapper">
    <div class="left-wrapper"></div>

    <img class="banner-img" src="/images/hello.png" />

    <div v-scroll-spy class="banner-link">
      <a @click="$scrollTo(1)">
        Scroll
      </a>
    </div>

    <!-- <div class="row">
        <div class="col-md-7 col-lg-6 styled-col">
          <div class="left-wrapper" v-scroll-spy="{ offset: 71 }">
            <div class="banner-title">
              Joe Harrison
            </div>
            <div class="banner-message">
              Frontend Developer
            </div>
            <a class="banner-link" @click="gotoPage">
              See Recent Work
            </a>
          </div>
        </div>
        <div class="col-md-5 col-lg-6 styled-col">
          <img class="banner-img" src="/images/joe.png" />
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    gotoPage() {
      this.$scrollTo(1);
      console.log("yay!", this.$scrollTo);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.home-wrapper {
  overflow: hidden;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-start;

  @media (min-width: $screenWidthXxxl) {
    background-size: 1920px 100%;
  }
}

.left-wrapper {
  background: $colorPrimary;
  height: 100vh;
  width: 50%;
}

.banner-title {
  font-size: 1.975rem;
  font-weight: bold;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 0 2rem;

  @media (min-width: $screenWidthMd) {
    text-align: left;
    padding: 0;
    font-size: 2.475rem;
  }
}

.banner-message {
  font-size: 1rem;
  line-height: 1.15;
  color: #6e45bd;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 0 2rem;

  @media (min-width: $screenWidthMd) {
    text-align: left;
    padding: 0;
  }
}

@keyframes slidein {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(3.5);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

.banner-img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 68%;
  transform: translate(-50%, -50%) scale(1);
  animation: slidein 0.5s linear;

  @media (min-width: $screenWidthMd) {
    width: 540px;
  }
}

.banner-link {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
