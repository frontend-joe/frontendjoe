<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";

.wrapper {
  color: $colorText;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
}
</style>
