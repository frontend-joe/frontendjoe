<template>
  <a class="cool-href" :href="href">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: String
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.cool-href {
  font-size: inherit;
  color: black;
  white-space: nowrap;
  text-decoration: none;
  box-shadow: inset 0 -2px 0 0 lighten($colorPrimary, 10%);
  transition: box-shadow 0.2s ease-out;

  &:hover {
    box-shadow: inset 0 -0.7em 0 0 lighten($colorPrimary, 10%);
  }
}
</style>
