<template>
  <div class="section-wrapper">
    <div class="image" :style="backgroundImageStyle">
      <div class="container pl-5 pt-8">
        <div class="content">
          <a href="/" class="text-lg">Home</a>
          <p class="text-lg line-height-4">></p>
          <a href="#" class="text-lg">Account detail</a>
        </div>
        <h1 class="about-header flex text-white text-6xl pt-1 text-left">USERNAME'S ACCOUNT</h1>
        <p class="text-lg pt-2">Account ID: 001</p>
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
  methods: {}
}
</script>

<style scoped>
* {
  align-items: flex-end;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffff;
}

.container {
  background: rgba(0, 0, 0, 0.613);
  padding-top: 60px;
  height: 294px;
}

.image {
  filter: blur(0.4px);
  width: 100%;
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
