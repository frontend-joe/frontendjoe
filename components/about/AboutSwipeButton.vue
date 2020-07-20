<template>
  <div class="wrapper">
    <div class="button">
      <MatIcon>keyboard_backspace</MatIcon>
      <div class="button-text">
        Swipe
      </div>
    </div>
  </div>
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
@import "assets/scss/variables.scss";

.wrapper {
  display: flex;
  justify-content: center;

  @media (min-width: $screenWidthMd) {
    justify-content: flex-start;
  }
}

@keyframes bob {
  from {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}

.button {
  background: transparent;
  display: flex;
  align-items: center;
  animation: bob 1.5s infinite ease-in-out;

  & > i {
    font-size: 1.75rem;
    color: $colorPrimary !important;
  }
}

.button-text {
  margin-left: 0.625rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: $colorPrimary;
}
</style>
