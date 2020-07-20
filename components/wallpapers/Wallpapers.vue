<template>
  <div class="container">
    <div class="row">
      <div class="offset-md-2 col-md-8">
        <div class="wallpapers-wrapper">
          <SectionTitle
            :style="{ marginBottom: '5rem' }"
            title="Wallpapers"
            description="As seen on Instagram"
          />
          <div class="row">
            <div
              class="col-sm-6"
              v-for="image in wallpapers"
              :key="image.imagePath"
            >
              <a
                download
                class="wallpaper-a"
                :style="{ display: 'block', paddingBottom: '4rem' }"
                :href="
                  `http://frontendjoe.com/images/wallpapers/${image.imagePath}`
                "
                target="_blank"
              >
                <WallpaperCard
                  class="d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block"
                  :imagePath="image.imagePath"
                  :cardTitle="
                    image.imagePath
                      .split('.')
                      .slice(0, -1)
                      .join('.')
                  "
                  :cardSubtitle="image.created"
                />
                <WallpaperCardMobile
                  class="d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"
                  :imagePath="image.imagePath"
                  :cardTitle="
                    image.imagePath
                      .split('.')
                      .slice(0, -1)
                      .join('.')
                  "
                  :cardSubtitle="image.created"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../shared/SectionTitle";
import WallpaperCard from "../shared/WallpaperCard";
import WallpaperCardMobile from "../shared/WallpaperCardMobile";

export default {
  components: {
    SectionTitle,
    WallpaperCard,
    WallpaperCardMobile
  },
  data() {
    return {
      wallpapers: [
        { imagePath: "memphis.png", created: "14 July 2020" },
        { imagePath: "squares.png", created: "3 July 2020" },
        { imagePath: "angles.png", created: "24 June 2020" },
        { imagePath: "camo.png", created: "18 June 2020" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.wallpapers-wrapper {
  padding: 7rem 0;

  @media (max-width: $screenWidthSm) {
    width: 60%;
    margin: 0 auto;
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

.wallpaper-a {
  text-decoration: none;
  color: $colorText;
}
</style>
