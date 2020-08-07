<template>
  <div id="preloader" class="wrapper">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
.wrapper {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #040404;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: opacity, visibility;
  transition-duration: 1s;

  &.loaded {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-width: 8px;
  border-style: solid;
  border-top-color: #2b2929;
  border-right-color: #2b2929;
  border-bottom-color: #2b2929;
  border-left-color: #7633f9;
  animation: spin 1s linear infinite;
}
</style>
