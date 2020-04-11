<template>
  <div class="section-subtitle">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";

.section-subtitle {
  color: $colorText;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
}
</style>
