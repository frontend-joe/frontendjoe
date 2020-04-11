<template>
  <div class="home-wrapper">
    <div class="left-wrapper"></div>
    <img class="banner-img" src="/images/hello.png" />
    <div class="banner-link">
      <HomeScrollButton />
    </div>
  </div>
</template>

<script>
import HomeScrollButton from "./HomeScrollButton";

export default {
  components: {
    HomeScrollButton
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

@keyframes banner-link-animation {
  0% {
    opacity: 0;
  }

  90% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.banner-link {
  position: absolute;
  bottom: 0;
  left: 50%;

  animation: banner-link-animation 1.375s linear;
}
</style>
