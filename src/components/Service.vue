<template>
  <div :class="['service-wrapper flex flex-column align-items-center', { dark: isDarkMode }]">
    <p :class="['p1 relative text-sm pt-4', { dark: isDarkMode }]">OUR SERVICE</p>
    <h1 class="text-5xl font-semibold" :class="{ dark: isDarkMode }">Great Car Service</h1>
    <div class="service-content flex justify-content-center">
      <div class="bg-white service-box" :class="[{ dark: isDarkMode }]">
        <div class="flex justify-content-center pt-4">
          <i
            class="pi pi-car"
            :style="{ color: isDarkMode ? 'white' : '#FE7A36', fontSize: '2rem' }"
          ></i>
        </div>
        <h2
          class="font-normal text-4xl text-black-alpha-90 flex justify-content-center font-semibold pt-2"
          :class="[{ dark: isDarkMode }]"
        >
          Tire and wheel
        </h2>
        <p class="text-center px-3 pt-2" :style="{ color: isDarkMode ? 'black' : 'initial' }">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.Loremut labore et dolore magna aliqua.Lorem
        </p>
        <div class="flex justify-content-center align-items-center mt-4">
          <p
            class="pr-2 font-semibold text-1xl"
            :style="{ color: isDarkMode ? 'black' : 'initial' }"
          >
            Read More
          </p>
          <i class="pi pi-arrow-right" :style="{ color: isDarkMode ? 'white' : '#fe7a36' }"></i>
        </div>
      </div>
      <div class="bg-white service-box" :class="[{ dark: isDarkMode }]">
        <div class="flex justify-content-center pt-4">
          <i
            class="pi pi-bolt"
            style="font-size: 2rem"
            :style="{ color: isDarkMode ? 'white' : '#FE7A36', fontSize: '2rem' }"
          ></i>
        </div>
        <h2
          class="font-normal text-4xl text-black-alpha-90 flex justify-content-center font-semibold pt-2"
          :class="[{ dark: isDarkMode }]"
        >
          Tire and wheel
        </h2>
        <p class="text-center px-3 pt-2" :style="{ color: isDarkMode ? 'black' : 'initial' }">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.Loremut labore et dolore magna aliqua.Lorem
        </p>
        <div class="flex justify-content-center align-items-center mt-4">
          <p
            class="pr-2 font-semibold text-1xl"
            :style="{ color: isDarkMode ? 'black' : 'initial' }"
          >
            Read More
          </p>
          <i class="pi pi-arrow-right" :style="{ color: isDarkMode ? 'white' : '#fe7a36' }"></i>
        </div>
      </div>
      <div class="bg-white service-box" :class="[{ dark: isDarkMode }]">
        <div class="flex justify-content-center pt-4">
          <i
            class="pi pi-wrench"
            :style="{ color: isDarkMode ? 'white' : '#FE7A36', fontSize: '2rem' }"
          ></i>
        </div>
        <h2
          class="font-normal text-4xl text-black-alpha-90 flex justify-content-center font-semibold pt-2"
          :class="[{ dark: isDarkMode }]"
        >
          Tire and wheel
        </h2>
        <p class="text-center px-3 pt-2" :style="{ color: isDarkMode ? 'black' : 'initial' }">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.Loremut labore et dolore magna aliqua.Lorem
        </p>
        <div class="flex justify-content-center align-items-center mt-4">
          <p
            class="pr-2 font-semibold text-1xl"
            :style="{ color: isDarkMode ? 'black' : 'initial' }"
          >
            Read More
          </p>
          <i class="pi pi-arrow-right" :style="{ color: isDarkMode ? 'white' : '#fe7a36' }"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'primeicons/primeicons.css'

export default {
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>
.service-wrapper {
  background-color: #f7f7f7;
  width: 100%;
  height: 100%;
  margin-top: 2.5rem;
}

.service-wrapper.dark {
  background-color: #535151;
  color: #ffffff;
}

.service-wrapper .p1 {
  color: #7e7d7d;
  top: 15px;
  letter-spacing: 4px;
}
.service-wrapper h1.dark {
  color: white;
  background-color: #535151;
}

.service-wrapper p.dark {
  color: #d1d1d1;
  background-color: #535151;
}

.service-wrapper .service-box.dark {
  background-color: #b3b2b2 !important;
  color: #f1f1f1;
}

.service-wrapper p {
  color: black;
}

.service-wrapper h1 {
  color: black;
}

.service-wrapper div .service-box {
  height: 100%;
  width: 27%;
  margin: 1.2rem;
}
.service-wrapper div .service-box i {
  color: #fe7a36;
}

.service-wrapper .service-content {
  width: 100%;
  padding: 0 5rem 0 5rem;
}

.text-4xl {
  font-size: 2vw !important;
}

.service-box h2.dark {
  color: black !important;
  background: #b3b2b2;
}
@media (min-width: 1500px) {
  .service-wrapper div .service-box {
    height: 110%;
    width: 27%;
    margin: 1.2rem;
  }
}
</style>
