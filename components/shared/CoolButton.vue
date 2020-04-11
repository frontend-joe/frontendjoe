<template>
  <a
    @click="$emit('click')"
    :href="href"
    target="_blank"
    :class="{ buttonSm: sm }"
    class="button"
  >
    <span>
      <slot />
    </span>
  </a>
</template>

<script>
export default {
  props: {
    href: String,
    sm: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.button {
  display: inline-block;
  background: $colorPrimary;
  border: 0;
  border-radius: 5px;
  height: 40px;
  line-height: 40px;
  padding: 0 1rem;
  color: white;
  min-width: 85px;
  font-weight: 600;
  font-family: "Poppins";
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  border-bottom: 2px solid darken($colorPrimary, 10%);

  &:hover {
    background: darken($colorPrimary, 5%);
  }
}

.buttonSm {
  font-size: 12px;
  height: 30px;
}
</style>
