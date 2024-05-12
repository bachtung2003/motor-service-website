<template>
  <div class="app-wrapper">
    <Toolbar class="flex w-full" ref="toolbar" />
    <router-view></router-view>
    <Footer class="flex" ref="footer" />
  </div>
</template>

<script>
import Toolbar from '../src/components/Toolbar.vue'
import Footer from '../src/components/Footer.vue'

import './assets/main.css'
import '../node_modules/primeflex/primeflex.scss'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

export default {
  name: 'Motor Service',
  components: {
    Toolbar,
    Footer
  }
}
</script>

<style>
.app-wrapper {
  width: 100%;
  height: 120%;
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
  margin: 0 auto 2rem;
}

.footer {
  width: 100%;
  height: 10rem;
}
</style>
