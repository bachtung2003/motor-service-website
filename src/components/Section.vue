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
        class="about2-button flex relative align-items-center text-orange-400 border-orange-400 text-sm line-height-3"
        label="Get Started"
      />
    </div>
    <div class="flex flex-row flex-wrap info-wrapper">
      <div class="image3 flex" :style="backgroundImageStyle3">
        <div class="contact-container surface-200 flex flex-column">
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
  width: 100vw;
  height: 100%;
}

.image2 {
  margin-top: 2.5rem;
  filter: blur(0.4px);
  width: 100%;
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
  height: 36rem;
  margin: 2rem 0rem 0 3rem;
  background-repeat: no-repeat;
  /* margin-right: 5rem; */
}

.image3 .contact-container {
  letter-spacing: 1px;
  padding: 4rem 0 0 6rem;
  color: black;
  background-color: #ffff;
  position: relative;
  left: 38rem;
  margin: 3rem 0 3rem 0;
  width: 53.19%;
}

.section2-wrapper .info-wrapper {
  height: 27rem;
}

.section2-wrapper {
  width: 100vw;
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

@media (min-width: 1500px) {
  .image2 p {
    top: 85px;
    font-size: 1rem !important;
    letter-spacing: 2px;
    color: #ffff;
  }

  .section-wrapper div .about-header {
    font-size: 4rem !important;
  }

  .section-wrapper div .about-content {
    height: 60%;
    padding-left: 16rem !important;
    padding-right: 30rem !important;
    font-size: 1.5rem !important;
  }

  .section-wrapper div .about-button {
    top: 13rem;
    left: 16rem;
    background-color: #fe7a36;
    border: solid 1px #fe7a36;
  }

  .section2-wrapper div .about2-button {
    letter-spacing: 3px;
    top: 3rem;
    left: 54rem;
    background-color: #ffff;
    border: solid 1px #ffff;
  }

  .section2-wrapper div .about2-header {
    font-weight: 600;
    padding-left: 20rem !important;
    padding-right: 19rem !important;
    padding-top: 5rem;
  }

  .image3 {
    filter: blur(0.4px);
    width: 1480px;
    height: 36rem;
    margin: 4rem 0rem 0 9rem;
    background-repeat: no-repeat;
    /* margin-right: 5rem; */
  }

  .image3 .contact-container {
    letter-spacing: 1px;
    padding: 4rem 0 0 6rem;
    color: black;
    background-color: #ffff;
    position: relative;
    left: 51rem;
    margin: 3rem 0 3rem 0;
    width: 53.19%;
  }
}
@media (min-width: 2000px) {
  .section2-wrapper div .about2-button {
    letter-spacing: 3px;
    top: 3rem;
    left: 68rem;
    background-color: #ffff;
    border: solid 1px #ffff;
  }
  .image3 .contact-container {
    letter-spacing: 1px;
    padding: 4rem 0 0 6rem;
    color: black;
    background-color: #ffff;
    position: relative;
    left: 65rem;
    margin: 3rem 0 3rem 0;
    width: 53.19%;
  }
  .image3 {
    filter: blur(0.4px);
    width: 1480px;
    height: 36rem;
    margin: 4rem 0rem 0 15rem;
    background-repeat: no-repeat;
    /* margin-right: 5rem; */
  }
}
</style>
