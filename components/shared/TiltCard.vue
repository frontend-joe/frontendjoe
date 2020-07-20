<template>
  <div class="wrapper" :class="{ 'responsive-height': responsiveHeight }">
    <img
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
      class="card"
      :src="imagePath"
      :id="id"
      :class="{ 'responsive-height': responsiveHeight }"
      :style="{ transform: `rotateX(${rotateX}) rotateY(${rotateY})` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "tilt-card"
    },
    imagePath: {
      type: String,
      default: "images/vooze-screen.png"
    },
    responsiveHeight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cardWidth: 0,
      degIncrement: 0.05,
      rotateX: "0deg",
      rotateY: "0deg"
    };
  },
  methods: {
    onMouseMove(e) {
      // console.log("onMouseMove");
      const event = e || window.event;
      const target = event.target || event.srcElement;
      const rect = target.getBoundingClientRect();
      const cardWidth = 260;

      // console.log("cardWidth");

      const degIncrement = this.degIncrement;

      const getRotateDeg = input => {
        if (input < cardWidth * 0.33) {
          return `${degIncrement * 2}deg`;
        } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
          return `${degIncrement}deg`;
        } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
          return "0deg";
        } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
          return `-${degIncrement}deg`;
        } else {
          return `-${degIncrement * 2}deg`;
        }
      };

      const rotateX = getRotateDeg(window.event.clientY - rect.top);
      const rotateY = getRotateDeg(window.event.clientX - rect.left);

      this.rotateX = rotateX;
      this.rotateY = rotateY;
    },
    onMouseLeave() {
      this.rotateX = "0deg";
      this.rotateY = "0deg";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.wrapper {
  perspective: 30px;
}

.card {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s;
}

.card.responsive-height {
  width: 200%;
  height: 400px;
  position: absolute;
}
</style>
