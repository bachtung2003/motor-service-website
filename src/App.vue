<template>
  <div class="app-wrapper flex-column">
    <Toolbar class="flex" ref="toolbar" />
    <div class="s-wrapper flex"><Section class="" :types="1"></Section></div>
    <div class="service-wrap flex mb-8"><Service class="flex" /></div>
    <div class="s-wrapper flex"><Section class="" :types="2"></Section></div>
    <Footer class="flex" ref="footer" />
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import Section from './components/Section.vue'
import Service from './components/Service.vue'
import Footer from './components/Footer.vue'

import './assets/main.css'
import '../node_modules/primeflex/primeflex.scss'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

export default {
  name: 'Motor Service',
  components: {
    Toolbar,
    Section,
    Service,
    Footer
  }
}
</script>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 125%;
  padding: 0;
}

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
  margin: 0 auto 2rem;
}

.footer {
  width: 100%;
  height: 10rem;
}

@media (min-width: 1024px) {
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
}
</style>
