<template>
  <div class="section-wrapper">
    <div class="image" :style="backgroundImageStyle">
      <h1 class="about-header flex justify-content-center text-white pt-7 text-6xl text-left">
        Professional Car Repair and Mantainance
      </h1>
      <div
        class="about-content absolute font-light flex justify-content-center text-white pt-5 text-base text-left"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
      </div>
      <Button class="about-button flex relative align-items-center" label="Read More" />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
export default {
  components: {
    Button
  },
  data() {
    return {
      imgURL: '/src/assets/img/bannerbg.png'
    }
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.imgURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }
  }
}
</script>

<style scoped>
.section-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}

.section-wrapper div {
  height: 100%;
}

.image {
  filter: blur(0.4px);
}

.section-wrapper div .about-content {
  padding-left: 16rem !important;
  padding-right: 30rem !important;
}

.section-wrapper div .about-header {
  font-weight: 600;
  padding-left: 16rem !important;
  padding-right: 30rem !important;
}
.section-wrapper div .about-button {
  top: 9rem;
  left: 16rem;
  background-color: #fe7a36;
  border: solid 1px #fe7a36;
}
</style>
