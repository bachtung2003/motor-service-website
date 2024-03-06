<template>
  <div v-if="isSection1()" class="section-wrapper">
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

  <div v-if="isSection2()" class="section2-wrapper">
    <div class="image2" :style="backgroundImageStyle2">
      <p class="flex relative justify-content-center text-xs">GREAT CAR SERVICE</p>
      <h1 class="about2-header flex justify-content-center text-white text-5xl text-center">
        Premium car service matched with great workmanship. Best services you can count on
      </h1>
      <Button
        class="about2-button flex relative align-items-center text-orange-400 text-sm line-height-3"
        label="Get Started"
      />
    </div>
    <div class="flex flex-row flex-wrap info-wrapper">
      <div class="image3 flex" :style="backgroundImageStyle3"><div class="">hafi vl</div></div>
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
        backgroundSize: 'auto'
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
.section-wrapper {
  position: absolute;
  width: 100%;
  height: 70%;
}

.section-wrapper div {
  height: 100%;
}

.image {
  filter: blur(0.4px);
  width: 1480px;
  height: 100%;
}

.image2 {
  margin-top: 2.5rem;
  filter: blur(0.4px);
  width: 1480px;
  height: 77%;
}

.image2 p {
  top: 90px;
  letter-spacing: 2px;
  color: #ffff;
}

.image3 {
  filter: blur(0.4px);
  width: 1480px;
  height: 27rem;
  margin-left: 4rem;
  background-repeat: no-repeat;
  text-align: center;
}

.image3 div {
  background-color: #ffff;
  position: relative;
  left: 30rem;
  width: 68%;
}

.section2-wrapper .info-wrapper {
  height: 27rem;
}

.section-wrapper div .about-content {
  height: 38.5%;
  padding-left: 16rem !important;
  padding-right: 30rem !important;
}

.section-wrapper div .about-header {
  font-weight: 600;
  padding-left: 16rem !important;
  padding-right: 30rem !important;
}

.section2-wrapper div .about2-header {
  font-weight: 600;
  padding-left: 16rem !important;
  padding-right: 14rem !important;
  padding-top: 5rem;
}

.section-wrapper div .about-button {
  top: 9rem;
  left: 16rem;
  background-color: #fe7a36;
  border: solid 1px #fe7a36;
}

.section2-wrapper div .about2-button {
  letter-spacing: 3px;
  top: 3rem;
  left: 42rem;
  background-color: #ffff;
  border: solid 1px #ffff;
}

.section2-wrapper .iamge2 .about2-button .p-button-label {
  color: #fe7a36;
}

.section2-wrapper div .about2-button span {
  color: #fe7a36;
}
</style>
