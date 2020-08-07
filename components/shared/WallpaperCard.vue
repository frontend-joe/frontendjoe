<template>
  <span class="card">
    <div
      :style="{ backgroundImage: `url(${getCardImage})` }"
      class="card__image"
    />
    <span class="card__content">
      <div>
        <h3 class="card__content-title">
          {{ cardTitle }}
        </h3>
        <h4 class="card__content-subtitle">
          {{ cardSubtitle }}
        </h4>
      </div>
      <button class="card__content-button">
        <font-awesome-icon :icon="['fas', 'download']" />
      </button>
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
  display: block;
  padding: 0 1.5rem 2rem;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.15);

  @media (min-width: $screenWidthMd) {
    &:hover &__image {
      transform: translateY(-1.625rem);
    }
  }
}

.card__image {
  height: 150px;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.15);
  transform: translateY(-1rem);
  margin-bottom: 0.5rem;
  background-size: 150%;
  background-position: center;
  transition: transform 0.35s;
}

.card__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
