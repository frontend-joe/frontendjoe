<template>
  <div class="wrapper">
    <SectionTitle
      centered
      title="Wallpapers"
      description="As seen on Instagram"
    />
    <div class="wallpapers-wrapper">
      <div class="row">
        <div class="col-md-6">
          <a
            :style="{ backgroundImage: 'url(/images/wallpapers/camo.png)' }"
            href="/images/wallpapers/camo.png"
            target="_blank"
            class="image"
          />
        </div>
        <div class="col-md-6">
          <a
            :style="{
              'background-image': 'url(/images/wallpapers/spacey.png)',
              backgroundPosition: '60% 80%'
            }"
            href="/images/wallpapers/spacey.png"
            target="_blank"
            class="image"
          />
        </div>
        <div class="col-md-6">
          <a
            :style="{ backgroundImage: 'url(/images/wallpapers/grey.png)' }"
            href="/images/wallpapers/grey.png"
            target="_blank"
            class="image"
          />
        </div>
        <div class="col-md-6">
          <a
            :style="{ backgroundImage: 'url(/images/wallpapers/splodge.jpg)' }"
            href="/images/wallpapers/splodge.jpg"
            target="_blank"
            class="image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../shared/SectionTitle";

export default {
  components: {
    SectionTitle
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.wallpapers-wrapper {
  width: 600px;
  padding: 0 1rem;

  @media (max-width: $screenWidthSm) {
    width: 60%;
  }
}

.image {
  display: block;
  height: 100px;
  width: 100%;
  border-radius: 0.5rem;
  background-size: 300%;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 2rem;

  @media (min-width: $screenWidthSm) {
    height: 200px;
  }
}
</style>
