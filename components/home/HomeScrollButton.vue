<template>
  <a class="home-scroll-button" v-scroll-to="'#about'">
    <div class="home-scroll-button__inner">
      <MatIcon>arrow_downward</MatIcon>
      <div class="home-scroll-button__text">
        Scroll down
      </div>
    </div>
  </a>
</template>

<script>
import MatIcon from "../shared/MatIcon";

export default {
  components: {
    MatIcon
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

@keyframes bob {
  from {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

.home-scroll-button {
  display: inline-block;
  color: $colorPrimary;
  padding: 1rem;
}

.home-scroll-button__inner {
  display: flex;
  align-items: center;
  animation: bob 2s infinite ease-in-out;
}

.home-scroll-button__text {
  font-size: 1rem;
  font-weight: 600;
  margin-left: 0.325rem;

  @media (min-width: $screenWidthMd) {
    font-size: 1.25rem;
  }
}
</style>
