<template>
  <div
    class="wrapper"
    :class="{
      scrolledDown: scrolledDown,
      scrolledOverBanner: scrolledOverBanner
    }"
  >
    <div class="wrapper-inner">
      <NavMenu
        :fontColor="!scrolledDown || scrolledOverBanner ? 'white' : '#0f0f0f'"
      />
    </div>
  </div>
</template>

<script>
import NavMenu from "./NavMenu";

export default {
  components: {
    NavMenu
  },
  data() {
    return {
      scrolledDown: false,
      scrolledOverBanner: false
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
      const topbarHeight = 72;
      const bannerHeight = document.getElementById("home-banner").clientHeight;

      if (window.scrollY > topbarHeight && !this.scrolledDown) {
        this.scrolledDown = true;
      }

      if (window.scrollY < bannerHeight && this.scrolledDown) {
        this.scrolledOverBanner = true;
      } else {
        this.scrolledOverBanner = false;
      }

      if (window.scrollY <= topbarHeight && this.scrolledDown) {
        this.scrolledDown = false;
        this.scrolledOverBanner = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";

.wrapper {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  transition: background 0.35s;

  @media (max-width: $screenWidthMd) {
    display: none;
  }
}

.wrapper.scrolledDown {
  background: white;
}

.wrapper.scrolledOverBanner {
  background: black;
}

.wrapper-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  padding: 0 1.5rem;

  @media (min-width: $screenWidthXxxl) {
    width: 1080px;
    margin: 0 auto;
  }
}
</style>
