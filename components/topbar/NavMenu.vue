<template>
  <div
    id="navmenu"
    class="nav-menu"
    v-scroll-spy-active
    v-scroll-spy-link="{ offset: 72 }"
  >
    <a class="nav-button">Home</a>
    <a class="nav-button">About</a>
    <a class="nav-button">Portfolio</a>
    <a class="nav-button">Contact</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.nav-menu {
  display: none;

  @media (min-width: $screenWidthMd) {
    display: block;
  }
}

.nav-button {
  display: inline-block;
  position: relative;
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
  font-family: Poppins;
  font-weight: 800;
  text-transform: uppercase;
  margin-right: 1rem;
  transition: color 0.25s;

  &.active {
    color: $colorPrimary;
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
