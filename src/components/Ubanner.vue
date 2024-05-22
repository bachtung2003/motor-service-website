<template>
  <div v-if="isSection1()" class="section-wrapper">
    <div class="image" :style="backgroundImageStyle">
      <div class="container pl-5 pt-8">
        <Breadcrumb :home="home" :model="items" class="pb-0 pl-0"></Breadcrumb>
        <h1 class="about-header flex text-white text-6xl pt-1 text-left">USERNAME'S ACCOUNT</h1>
        <p class="text-lg pt-2">Account ID: 001</p>
      </div>
    </div>
  </div>

  <div v-if="isSection2()" class="section-wrapper">
    <div class="image" :style="backgroundImageStyle2">
      <div class="container pl-5 pt-8">
        <div class="content">
          <a href="/" class="text-lg">Home</a>
          <p class="text-lg line-height-4">></p>
          <a href="/services" class="text-lg">Service</a>
          <p class="text-lg line-height-4">></p>
          <a href="#" class="text-lg">Set Appointment</a>
        </div>
        <h1 class="about-header flex text-white text-6xl pt-1 text-left">SET APPOINTMENT</h1>
        <p class="text-lg pt-2">Account ID: 001</p>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'

export default {
  components: {
    Breadcrumb
  },
  props: {
    types: Number
  },
  data() {
    return {
      imgURL: 'src/assets/img/Autoleaders-scaled.jpg',
      home: { icon: 'pi pi-home', url: '/' },
      items: [{ label: 'User', url: '/user' }],
      imgURL2: 'src/assets/img/banner2.png'
    }
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.imgURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    },
    backgroundImageStyle2() {
      return {
        backgroundImage: `url(${this.imgURL2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }
  },
  methods: {
    isSection1() {
      if (this.types === 1) return true
    },
    isSection2() {
      if (this.types === 2) return true
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

.container {
  background: rgba(0, 0, 0, 0.613);
  padding-top: 60px;
  height: 294px;
}

.container .p-breadcrumb {
  background-color: transparent;
  border: 0px transparent;
}

::v-deep(.p-breadcrumb) .p-menuitem-text {
  color: white !important;
}
::v-deep(.p-breadcrumb) .p-menuitem-separator {
  color: white !important;
}
::v-deep(.p-breadcrumb) .p-menuitem-icon {
  color: white !important;
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
