<template>
  <div class="row">
    <div class="col-sm-12 offset-md-2 col-md-8">
      <div class="wrapper">
        <div class="about-subtitle">
          Skills
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="skills-subtitle">
              Development
            </div>
            <div class="skills-list">
              <div
                class="skills-list-item"
                v-for="skill in devSkills"
                :key="skill"
              >
                {{ skill }}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skills-subtitle">
              Design
            </div>
            <div class="skills-list last">
              <div
                class="skills-list-item"
                v-for="skill in designSkills"
                :key="skill"
              >
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      devSkills: [
        "React",
        "Vue",
        "Angular",
        "React Native",
        "Node",
        "HTML",
        "CSS",
        "SCSS",
        "Git",
        "Styled Components"
      ],
      designSkills: [
        "Sketch",
        "Figma",
        "Adobe XD",
        "Illustrator",
        "Photoshop",
        "InVision",
        "After Effects"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  @media (min-width: $screenWidthMd) {
    padding: 0;
    align-items: flex-start;
  }
}

.skills-subtitle {
  font-size: 1rem;
  font-weight: 800;
  color: $colorPrimary;
  margin-bottom: 0.75rem;
  text-align: center;

  @media (min-width: $screenWidthMd) {
    text-align: left;
    font-size: 0.875rem;
  }
}

.skills-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto 2rem;

  &.last {
    margin-bottom: 0;
  }

  @media (min-width: $screenWidthMd) {
    justify-content: flex-start;
    width: 100%;
  }
}

.skills-list-item {
  height: 40px;
  font-size: 0.975rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  padding: 0.5rem 0.25rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin-right: 0.5rem;
}
</style>
