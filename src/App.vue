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
  height: 100%;
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
