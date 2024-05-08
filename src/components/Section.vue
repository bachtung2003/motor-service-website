<template>
  <div v-if="isSection1()" class="section-wrapper">
    <div class="image" :style="backgroundImageStyle">
      <h1 class="about-header flex text-white pt-7 text-6xl text-left">
        Professional Car Repair and Mantainance
      </h1>
      <div
        class="about-content absolute font-light flex justify-content-center text-white text-base text-left"
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

  <div v-if="isSection2()" class="section2-wrapper">
    <div class="image2" :style="backgroundImageStyle2">
      <p class="flex relative justify-content-center text-s">GREAT CAR SERVICE</p>
      <h1 class="about2-header flex justify-content-center text-white text-5xl text-center">
        Premium car service matched with great workmanship. Best services you can count on
      </h1>
      <Button
        class="about2-button flex relative align-items-center text-orange-400 border-orange-400 text-sm line-height-3"
        label="Get Started"
      />
    </div>
  </div>
  <div v-if="isSection3()" class="section3-wrapper">
      <div class="image3 flex" :style="backgroundImageStyle3">
      </div>
      <div class="contact-container flex flex-column">
          <h2 class="pb-5 text-4xl font-medium">Book a trusted mechanic</h2>
          <p class="font-light text-lg">Call us now</p>
          <div class="flex pb-8 align-items-center">
            <i class="pi pi-phone flex align-items-center pr-3 text-6xl"></i>
            <h1 class="font-medium text-6xl">+1(12) 366 411 4999</h1>
          </div>
          <p class="font-light text-lg">Or Email us</p>
          <div class="flex align-items-center">
            <i class="pi pi-envelope flex align-items-center pr-3 text-6xl"></i>
            <h1 class="font-medium text-6xl">support@ahamay.vn</h1>
          </div>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button'
export default {
  props: {
    types: Number
  },
  components: {
    Button
  },
  data() {
    return {
      imgURL: '/src/assets/img/bannerbg.png',
      imgURL2: '/src/assets/img/banner2.png',
      imgURL3: '/src/assets/img/logo.png'
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
        backgroundPosition: 'top'
      }
    },
    backgroundImageStyle3() {
      return {
        backgroundImage: `url(${this.imgURL3})`,
        backgroundSize: 'contain'
      }
    }
  },
  methods: {
    isSection1() {
      if (this.types === 1) return true
    },
    isSection2() {
      if (this.types === 2) return true
    },
    isSection3() {
      if (this.types === 3) return true
    }
  }
}
</script>

<style scoped>
.section-wrapper {
  position: absolute;
  width: 100%;
  height: 31.6rem;
}

.section-wrapper div {
  height: 100%;
}

.image {
  filter: blur(0.4px);
  width: 100vw;
  height: 100%;
}

.image2 {
  filter: blur(0.4px);
  width: 100%;
  height: 31.6rem;
  align-content: center;
}

.image2 p {
  letter-spacing: 2px;
  color: #ffff;
}

.image3 {
  width: 40vw;
  height: 31.6vw;
  margin: 0rem 0rem 0 11%;
  background-repeat: no-repeat;
}

.contact-container {
  margin-top: 55px;
  margin-left: 10%;
}

.section2-wrapper .info-wrapper {
  height: 50rem;
}

.section2-wrapper {
  width: 100vw;
}

.section-wrapper div .about-content {
  height: 38.5%;
  padding-left: 16vw !important;
  padding-right: 25vw !important;
}

.section-wrapper div .about-header {
  font-weight: 600;
  padding-left: 16vw !important;
  padding-right: 25vw !important;
}

.section2-wrapper div .about2-header {
  font-weight: 600;
  padding-left: 14vw !important;
  padding-right: 14vw !important;
}

.section-wrapper div .about-button {
  top: 9rem;
  left: 16vw;
  background-color: #fe7a36;
  border: solid 1px #fe7a36;
}

.section2-wrapper div .about2-button {
  letter-spacing: 3px;
  background-color: #ffff;
  border: solid 1px #ffff;
}

.section2-wrapper .iamge2 .about2-button .p-button-label {
  color: #fe7a36;
}

.section2-wrapper div .about2-button span {
  color: #fe7a36;
}

.section3-wrapper {
  width: 100vw;
  display: flex;
  align-items: center;
}

.text-6xl {
    font-size: 3vw !important;
}

.text-5xl {
    font-size: 2.5vw !important;
    padding-top: 90px;
    padding-bottom: 4rem;
}

.pb-8 {
    padding-bottom: 5vw !important;
}

*{
    color: black;
}
</style>
