<template>
  <div v-if="isSection()" class="section-wrapper">
    <div class="image" :style="backgroundImageStyle">
      <div class="container">
        <div class="content">
          <a href="#">Home</a>
          <p>></p>
          <a href="#">Account detail</a>
        </div>
        <h1 class="about-header flex justify-content-center text-white pt-7 text-6xl text-left">
          USERNAME'S ACCOUNT
        </h1>
        <p>Account ID: 001</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    types: Number
  },
  data() {
    return {
      imgURL: 'src/assets/img/Autoleaders-scaled.jpg'
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
  },
  methods: {
    isSection() {
      if (this.types === 1) return true
      return false // Ensure to handle the case when types !== 1
    }
  }
}
</script>

<style scoped>
* {
  align-items: flex-end;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffff;
}

.container{
  background: rgba(0, 0, 0, 0.613);
  padding-top: 60px;
  height: 294px;
}

.image {
  filter: blur(0.4px);
  width: 1440px;
  height: 294px;
  font-size: 200%;
}

.content {
  display: flex;
  height: 32px;
  width: 320px;
}

.p {
  height: 32px;
  width: 320px;
}
</style>
