<template>
  <div class="contact-wrapper">
    <div class="container">
      <div v-animate="'slide-up'">
        <SectionTitle
          centered
          title="Contact"
          description="If you need anything further."
        />
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <div class="form-group__label">
                    Name
                  </div>
                  <input
                    type="text"
                    class="form-textbox"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <div class="form-group__label">
                    Email
                  </div>
                  <input
                    type="text"
                    class="form-textbox"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <div class="form-group__label">
                    Message
                  </div>
                  <textarea
                    class="form-textarea"
                    placeholder="Write your message here."
                    rows="8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="button-row">
          <CoolButton>Send</CoolButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SectionTitle from "../shared/SectionTitle";
import CoolButton from "../shared/CoolButton";

export default {
  components: {
    SectionTitle,
    CoolButton
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
.contact-wrapper {
  padding: 4rem 0;
  height: calc(100vh + 72px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: $screenWidthXxxl) {
    height: 100vh;
  }
}

.animate {
  transition-delay: 0.5s;
  transition-duration: 0.25s;
  transition-timing-function: ease-in;
}

.slide-up {
  opacity: 0;
}

.slide-up.animate-active {
  opacity: 1;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group__label {
  font-size: 14px;
  margin-bottom: 0.75rem;
}

.form-textbox {
  box-shadow: none;
  height: 3rem;
  width: 100%;
  background-color: #f8f9fa;
  border: 1px solid #c3c5c7;
  padding-left: 1rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;

  &::placeholder {
    color: #a7a7a7;
  }

  &:focus {
    border-color: $colorPrimary;
  }
}

.form-textarea {
  box-shadow: none;
  width: 100%;
  background-color: #f8f9fa;
  border: 1px solid #c3c5c7;
  padding: 1rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  resize: none;

  &::placeholder {
    color: #a7a7a7;
  }

  &:focus {
    border-color: $colorPrimary;
  }
}

.button-row {
  padding-top: 2rem;
  text-align: center;
}
</style>
