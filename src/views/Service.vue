<template>
  <div class="section2-wrapper">
    <div class="image2" :style="backgroundImageStyle2">
      <p class="flex relative justify-content-center text-xs">GREAT CAR SERVICE</p>
      <h1 class="about2-header flex justify-content-center text-white text-5xl text-center">
        Premium car service matched with great workmanship. Best services you can count on
      </h1>
    </div>
    <div class="services-content">
      <Breadcrumb :home="home" :model="items" class="pl-7"></Breadcrumb>
    </div>
  </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'

export default {
  components: {
    Breadcrumb
  },
  data() {
    return {
      imgURL2: '/src/assets/img/banner2.png',
      home: { icon: 'pi pi-home', url: '/' },
      items: [{ label: 'Services', url: '/#' }]
    }
  },
  computed: {
    backgroundImageStyle2() {
      return {
        backgroundImage: `url(${this.imgURL2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }
    }
  }
}
</script>

<style>
.image2 {
  height: 19rem;
}

.image2 .p-breadcrumb {
  background-color: transparent;
  border: 0px transparent;
}

.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:hover {
  background-color: #fe7a36;
}

.image2 p {
  top: 50px;
  letter-spacing: 2px;
  color: #ffff;
}

.section2-wrapper .info-wrapper {
  height: 27rem;
}

.section2-wrapper {
  width: 100vw;
}
.section2-wrapper div .about2-header {
  font-weight: 600;
  padding-left: 16rem !important;
  padding-right: 14rem !important;
  padding-top: 4rem;
}
.section2-wrapper div .about2-button {
  letter-spacing: 3px;
  top: 3rem;
  left: 42rem;
  background-color: #ffff;
  border: solid 1px #ffff;
}

.section2-wrapper .image2 .about2-button .p-button-label {
  color: #fe7a36;
}

.section2-wrapper div .about2-button span {
  color: #fe7a36;
}
</style>
