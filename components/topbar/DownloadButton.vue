<template>
  <div class="button-wrapper">
    <CoolHref target="_blank" href="https://github.com/vuezy"
      >Free Code</CoolHref
    >
  </div>
  <!-- <div class="button-wrapper">
    <div class="button-group">
      <a class="button">
        Free Code
      </a>
    </div>
  </div> -->
</template>

<script>
import CoolButton from "../shared/CoolButton";
import CoolHref from "../shared/CoolHref";

export default {
  components: {
    CoolButton,
    CoolHref
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
.button-wrapper {
  width: auto;
  flex: 0;
  text-align: right;

  @media (min-width: $screenWidthMd) {
    width: 180px;
    flex: 0 0 180px;
  }
}

.button-group {
  display: inline-block;
  position: relative;
  z-index: 1;
}

// .button {
//   display: inline-block;
//   position: relative;
//   z-index: 2;
//   width: 100%;
//   font-weight: bold;
//   border: 1px solid black;
//   height: 30px;
//   padding: 0 1rem;
//   transition: transform 0.25s;
//
//   // &:hover {
//   //   transform: translate(-2px, -2px);
//   // }
// }

.button-group::before {
  content: "";
  position: absolute;
  z-index: 0;
  top: 2px;
  left: 2px;
  height: 100%;
  width: 100%;
  background: black;
}
</style>
