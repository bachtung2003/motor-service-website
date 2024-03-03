<template>
  <div class="section-wrapper">
    <div class="" :style="backgroundImageStyle">
      <h1 class="flex justify-content-center text-white pt-7 text-6xl text-center">
        Professional Car Repair and Mantainance
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgURL: '/src/assets/img/bannerbg.jpg'
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

<style>
.section-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}

.section-wrapper div {
  height: 100%;
}
</style>
