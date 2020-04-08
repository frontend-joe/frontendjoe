<template>
  <div class="logo-wrapper">
    <img class="logo-img" src="/images/joe.png" />
    <div class="logo-text">
      frontendjoe
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

@keyframes appear {
  0% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.logo-wrapper {
  width: auto;
  flex: 1;
  display: flex;
  align-items: center;
  animation: appear 1s linear;
}

.logo-img {
  width: 40px;
  height: 40px;
}

.logo-text {
  margin-left: 1rem;
  font-weight: 800;

  color: #0f0f0f;
  letter-spacing: 1px;
}
</style>
