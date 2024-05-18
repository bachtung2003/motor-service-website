<template>
  <div :class="['app-wrapper', { dark: isDarkMode }]">
    <div class="flex flex-row-reverse">
      <label class="switch">
        <input type="checkbox" v-model="isDarkMode" @change="toggleTheme" />
        <span class="slider"></span>
      </label>
      <Toolbar class="flex w-full" :isDarkMode="isDarkMode" ref="toolbar"></Toolbar>
    </div>
    <router-view :isDarkMode="isDarkMode" />
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
  data() {
    return { isDarkMode: false }
  },
  components: {
    Toolbar,
    Footer
  },
  methods: {
    toggleTheme() {
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode')
      } else {
        document.body.classList.remove('dark-mode')
      }
    }
  },
  mounted() {
    const userPrefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    this.isDarkMode = userPrefersDark
    this.toggleTheme()
  }
}
</script>

<style>
.app-wrapper {
  width: 100%;
  height: 100%;
  transition: background-color 0.001ms;
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

.app-wrapper.dark {
  background-color: #212121;
}

label.switch {
  display: block;
  --width-of-switch: 3.5em;
  --height-of-switch: 2em;
  --size-of-icon: 1.4em;
  --slider-offset: 0.3em;
  position: relative;
  width: var(--width-of-switch);
  height: var(--height-of-switch);
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f4f4f5;
  transition: 0.4s;
  border-radius: 30px;
  border: 1px solid black;
}

.slider:before {
  position: absolute;
  content: '';
  height: var(--size-of-icon);
  width: var(--size-of-icon);
  border-radius: 20px;
  left: var(--slider-offset);
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #303136;
  border: 1px solid white;
}

input:checked + .slider:before {
  left: calc(100% - (var(--size-of-icon) + var(--slider-offset)));
  background: #303136;
  box-shadow:
    inset -3px -2px 5px -2px #8983f7,
    inset -10px -4px 0 0 #a3dafb;
}

body.dark-mode {
  background-color: #212121;
  color: #ffffff;
}

.dark {
  background-color: #212121;
  color: #ffffff;
}

.logo {
  margin: 0 auto 2rem;
}

.footer {
  width: 100%;
  height: 10rem;
}
</style>
