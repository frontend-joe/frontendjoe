<template>
  <div
    id="navmenu"
    class="nav-menu"
    v-scroll-spy-active
    v-scroll-spy-link="{ offset: 72 }"
  >
    <a :style="{ color: getFontColor }" class="nav-button">Home</a>
    <a :style="{ color: getFontColor }" class="nav-button">About</a>
    <a :style="{ color: getFontColor }" class="nav-button">Portfolio</a>
    <a :style="{ color: getFontColor }" class="nav-button">Wallpapers</a>
  </div>
</template>

<script>
import { rgba } from "polished";

export default {
  props: {
    fontColor: String
  },
  computed: {
    getFontColor() {
      return rgba(this.fontColor, 0.75);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.nav-menu {
  height: 100%;
  display: none;

  @media (min-width: $screenWidthMd) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.nav-button {
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background: transparent;
  border: 0;
  padding: 0 0.5rem;
  margin: 0;
  font-size: 0.875rem;
  font-family: Poppins;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  transition: color 0.25s;

  &.active {
    color: $colorPrimary !important;
  }

  &:last-child {
    margin: 0;
  }

  &:hover {
    color: $colorPrimary;
  }

  // &::before {
  //   content: "";
  //   position: absolute;
  //   bottom: -14px;
  //   left: 50%;
  //   width: 5px;
  //   height: 5px;
  //   border-radius: 50%;
  //   background: $colorPrimary;
  //   transform: scale(0) translate(0, -50%);
  //   transition: transform 0.25s;
  // }
  //
  // &.active::before {
  //   transform: scale(1) translate(0, -50%);
  // }
}
</style>
