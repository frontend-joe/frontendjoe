<template>
  <div class="wrapper">
    <div class="about-subtitle">Languages</div>
    <div class="language-row">
      <div class="language-block">
        <div class="language-block__title">
          English
        </div>
        <div class="language-block__subtitle">
          Fluent
        </div>
      </div>
      <div class="progress-wrapper">
        <div class="progress-bar" />
      </div>
    </div>
    <div class="language-row">
      <div class="language-block">
        <div class="language-block__title">
          Spanish
        </div>
        <div class="language-block__subtitle">
          Intermediate
        </div>
      </div>
      <div class="progress-wrapper">
        <div class="progress-bar" :style="{ width: '33.33%' }" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: $screenWidthMd) {
    align-items: flex-start;
  }
}

.language-row {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.language-block {
  display: flex;
  flex-direction: column;
  flex: 1 1 120px;
  width: 120px;
}

.language-block__title {
  font-size: 0.9rem;
  font-weight: 600;
  color: $colorSubtitle;
  margin-bottom: 0.325rem;
}

.language-block__subtitle {
  font-size: 0.75rem;
  font-weight: 600;
  color: lighten($colorSubtitle, 50%);
}

.progress-wrapper {
  flex: 1 1 auto;
  width: 130px;
  background: #e0e0e0;
  border-radius: 10px;
}

.progress-bar {
  height: 0.5rem;
  border-radius: 0.5rem;
  background: $colorPrimary;
}
</style>
