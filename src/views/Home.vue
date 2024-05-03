<template>
  <div style="display: block">
<<<<<<< HEAD
  <div class="s-wrapper flex"><Section class="" :types="1"></Section></div>
  <div class="service-wrap flex mb-8"><Service class="flex" /></div>
  <div class="s-wrapper flex"><Section class="" :types="2"></Section></div>
  <div class="s-wrapper flex"><Section class="" :types="3"></Section></div>
=======
    <div class="s-wrapper flex"><Section class="" :types="1"></Section></div>
    <div class="service-wrap flex mb-8"><Service class="flex" /></div>
    <div class="s-wrapper flex"><Section class="" :types="2"></Section></div>
>>>>>>> 248c5e23870da15b38a209219ce1742fe3da6119
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue'
import Section from '../components/Section.vue'
import Service from '../components/Service.vue'

import '../assets/main.css'
import '../../node_modules/primeflex/primeflex.scss'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

export default {
  components: {
    Toolbar,
    Section,
    Service
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.s-wrapper {
  width: 100%;
  height: 31.6rem;
}

.service-wrap {
  width: 100%;
  height: 31.2rem;
}

.logo {
  display: block;
  margin-left: -20px;
}

@media (min-width: 1500px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .s-wrapper {
    width: 100%;
    height: 31.6rem;
    margin-bottom: 8rem;
  }
}
@media (min-width: 2000px) {
  .s-wrapper {
    width: 100%;
    height: 31.6rem;
    margin-bottom: 20rem;
  }
}
</style>
