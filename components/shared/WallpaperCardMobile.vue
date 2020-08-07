<template>
  <span
    @click="open = !open"
    class="card"
    :class="{ open: open }"
    :style="{ backgroundImage: `url(${getCardImage})` }"
  >
    <!-- <img :src="getCardImage" class="card__image" /> -->
    <span class="card__content">
      <div>
        <h3 class="card__content-title">
          {{ cardTitle }}
        </h3>
        <h4 class="card__content-subtitle">
          {{ cardSubtitle }}
        </h4>
      </div>
      <a
        download
        :href="`http://frontendjoe.com/images/wallpapers/${imagePath}`"
        class="card__content-button"
      >
        <font-awesome-icon :icon="['fas', 'download']" />
      </a>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    cardTitle: String,
    cardSubtitle: String,
    imagePath: String
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    getCardImage() {
      return `images/wallpapers/${this.imagePath}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
.card {
  position: relative;
  overflow: hidden;
  display: block;
  padding: 0 1.5rem 2rem;
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  background: white;
  height: 116px;
  background-size: 150%;
  background-position: center;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.15);

  &.open &__content {
    transform: translateY(0);
  }
}

.card__content {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  transform: translateY(100%);
  transition: transform 0.35s;
}

.card__content-title {
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none;
  margin-bottom: 0.425rem;
}

.card__content-subtitle {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba($colorText, 0.29);
}

.card__content-button {
  font-size: 24px;
  border: 0;
  background: transparent;
  color: rgba(#905ef0, 0.69);
  padding: 0 1rem;
}
</style>
