<template>
  <div class="section-title" :class="{ centered: centered }">
    <div class="section-title__title">
      {{ title }}
    </div>
    <div class="section-title__description">
      {{ description }}
    </div>
    <div class="section-title__border" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    centered: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.section-title {
  position: relative;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: $colorText;

  @media (min-width: $screenWidthMd) {
    align-items: flex-start;
  }
}

.section-title.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-title__title {
  font-size: 2.25rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: $screenWidthMd) {
    text-align: left;
  }
}

.section-title__description {
  font-size: 0.875rem;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.57);
  margin-bottom: 1.25rem;
  text-align: center;
}

.section-title__border {
  width: 65px;
  height: 3px;
  background: $colorPrimary;
}
</style>
