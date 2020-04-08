<template>
  <div class="wrapper">
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
