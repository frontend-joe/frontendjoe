<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="footer__header">
            frontendjoe
          </div>
          <div class="footer__text">
            I'm Joe and this is my personal website.
          </div>
        </div>
        <div v-scroll-spy-link="{ offset: -1 }" class="offset-md-1 col-md-3">
          <div class="footer__header">
            Explore
          </div>
          <div class="footer__text">
            <a class="footer__link">
              Home
            </a>
            <a class="footer__link">
              About
            </a>
            <a class="footer__link">
              Portfolio
            </a>
            <a class="footer__link">
              Wallpapers
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="footer__header">
            Follow
          </div>
          <div class="footer__iconList">
            <a
              href="https://instagram.com/frontendjoe"
              target="_blank"
              class="footer__icon"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a
              href="https://github.com/vuezy"
              target="_blank"
              class="footer__icon"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <!-- <div class="footer__icon">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </div> -->
            <!-- <div class="footer__icon">
              <font-awesome-icon :icon="['fab', 'dribbble']" />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
.footer-wrapper {
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
  background: #22272b;
}

.footer__header {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.footer__text {
  font-size: 14px;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 2rem;

  @media (min-width: $screenWidthMd) {
    margin-bottom: 0;
  }
}

.footer__link {
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
    color: rgba(255, 255, 255, 0.75);
  }
}

.footer__copyright {
  padding: 0;
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  font-size: 13px;
}

.footer__iconList {
  display: flex;
  align-items: center;
}

.footer__icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.5rem;
}
</style>
