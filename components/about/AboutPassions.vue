<template>
  <div class="wrapper">
    <div class="about-subtitle">Passions</div>
    <div class="passions-row">
      <MatIcon class="passions-icon">menu_book</MatIcon>
      <div class="passions-text">
        Learning
      </div>
    </div>
    <div class="passions-row">
      <MatIcon class="passions-icon">laptop_mac</MatIcon>
      <div class="passions-text">
        Technology
      </div>
    </div>
    <div class="passions-row">
      <MatIcon class="passions-icon">sports_soccer</MatIcon>
      <div class="passions-text">
        Playing sports
      </div>
    </div>
  </div>
</template>

<script>
import SectionSubtitle from "../shared/SectionSubtitle";
import MatIcon from "../shared/MatIcon";

export default {
  components: {
    SectionSubtitle,
    MatIcon
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";

.wrapper {
}

.passions-row {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.passions-icon {
  color: $colorPrimary;
}

.passions-text {
  color: $colorSubtitle;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 0.75rem;
}
</style>
