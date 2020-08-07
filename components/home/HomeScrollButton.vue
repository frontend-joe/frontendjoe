<template>
  <a class="home-scroll-button" v-scroll-to="'#about'">
    <span class="home-scroll-button__inner">
      <MatIcon>arrow_downward</MatIcon>
      <span class="home-scroll-button__text">
        Scroll down
      </span>
    </span>
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
  position: absolute;
  width: 100%;
  height: 80px;
  text-align: center;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  color: rgba(white, 0.99);
  padding: 1rem;

  @media (max-width: $screenWidthMd) {
    display: none;
  }
}

.home-scroll-button__inner {
  display: flex;
  align-items: center;
  justify-content: center;
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
