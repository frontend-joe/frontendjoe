<template>
  <div class="wrapper">
    <div class="skills-title">
      Skills
    </div>
    <div class="skills-subtitle">
      Development
    </div>
    <div class="skills-list">
      <div class="skills-list-item" v-for="skill in devSkills" :key="skill">
        {{ skill }}
      </div>
    </div>
    <div class="skills-subtitle">
      Design
    </div>
    <div class="skills-list">
      <div class="skills-list-item" v-for="skill in designSkills" :key="skill">
        {{ skill }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      devSkills: [
        "react",
        "vue",
        "angular",
        "node",
        "html",
        "css",
        "scss",
        "git",
        "styled-components",
        "react-native"
      ],
      designSkills: ["sketch", "figma", "adobe xd", "illustrator", "photoshop"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.skills-title {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.skills-subtitle {
  font-size: 0.825rem;
  font-weight: 800;
  color: $colorPrimary;
  margin-bottom: 0.75rem;
}

.skills-list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: $screenWidthMd) {
    width: 258px;
    max-width: 258px;
  }
}

.skills-list-item {
  height: 50px;
  font-size: 0.825rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  padding: 0 0.25rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin-right: 0.5rem;
}
</style>
