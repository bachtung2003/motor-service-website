<template>
  <div class="app-wrapper">
    <Toolbar class="" ref="toolbar" />
    <div class="s-wrapper absolute"><Section class=""></Section></div>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import Section from './components/Section.vue'
import './assets/main.css'
import '../node_modules/primeflex/primeflex.scss'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

export default {
  name: 'Motor Service',
  components: {
    Toolbar,
    Section
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.s-wrapper {
  width: 100vw;
  height: 30rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
