<template>
  <div class="about-circles">
    <div class="circle circle1" />
    <div class="circle circle2" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.about-circles {
  position: absolute;
  bottom: 0;
  right: 40%;
  transform: translateX(50%);
}

.circle {
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba($colorPrimary, 0.2);
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.circle1 {
  right: 130px;
  bottom: 130px;
}

.circle2 {
  width: 200px;
  height: 200px;
  background: rgba($colorPrimary, 0.15);
}
</style>
