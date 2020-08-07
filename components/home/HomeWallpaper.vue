<template>
  <div class="wrapper" id="home-banner">
    <span :style="{ opacity: logoOpacity, transition: 'all 0.2s' }">
      frontendjoe
    </span>
    <ScrollButton />
  </div>
</template>

<script>
import ScrollButton from "./HomeScrollButton";

export default {
  components: {
    ScrollButton
  },
  data() {
    return {
      logoOpacity: 1
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll(event) {
      const bannerHeight = document.getElementById("home-banner").clientHeight;

      const threshold = bannerHeight / 2;
      const scrollY = event.target.scrollingElement.scrollTop;

      const opacity = 1 - scrollY / bannerHeight;

      if (opacity > 0 && opacity <= 1) {
        this.logoOpacity = opacity - 100;
        console.log("opacity", this.logoOpacity);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
.wrapper {
  position: relative;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 21px;
  height: 240px;
  background-size: cover;
  background-position: center;
  color: rgba(white, 0.95);
  background: url(/images/wallpapers/memphis.png);

  @media (min-width: $screenWidthSm) {
    font-size: 24px;
    height: 290px;
    background-size: 100%;
  }

  @media (min-width: $screenWidthMd) {
    font-size: 26px;
    height: 290px;
    background-size: 100%;
  }

  @media (min-width: $screenWidthLg) {
    font-size: 26px;
    height: 340px;
    background-size: 100%;
  }

  @media (min-width: $screenWidthXl) {
    font-size: 32px;
    height: 440px;
    background-size: 100%;
  }

  @media (min-width: $screenWidthXxl) {
    font-size: 38px;
    height: 540px;
    background-size: 100%;
  }

  @media (min-width: $screenWidthXxxl) {
    font-size: 44px;
    height: 640px;
    background-size: cover;
  }
}
</style>
