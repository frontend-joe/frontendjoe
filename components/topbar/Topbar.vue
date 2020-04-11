<template>
  <div class="wrapper" :class="{ scrolledDown: scrolledDown }">
    <div class="wrapper-inner">
      <Logo />
      <NavMenu />
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import DownloadButton from "./DownloadButton";

export default {
  components: {
    NavMenu,
    Logo,
    DownloadButton
  },
  data() {
    return {
      scrolledDown: false
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
      const screenHeight = process.client ? window.innerHeight : 0;

      if (window.scrollY > screenHeight && !this.scrolledDown) {
        this.scrolledDown = true;
      }

      if (window.scrollY < screenHeight && this.scrolledDown) {
        this.scrolledDown = false;
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
}

.wrapper.scrolledDown {
  background: white;
}

.wrapper-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 1.5rem;

  @media (min-width: $screenWidthXxxl) {
    width: 1080px;
    margin: 0 auto;
  }
}
</style>
