<template>
  <div class="container">
    <div class="s-wrapper flex mt-0">
      <Section :class="[{ dark: isDarkMode }]" :isDarkMode="isDarkMode" :types="1"></Section>
    </div>
    <div class="s-wrapper flex">
      <Section :class="[{ dark: isDarkMode }]" :isDarkMode="isDarkMode" :types="2"></Section>
    </div>
    <div class="s-wrapper flex">
      <Section :class="[{ dark: isDarkMode }]" :isDarkMode="isDarkMode" :types="3"></Section>
    </div>
    <div class="surface-0"></div>
  </div>
</template>

<script>
import Section from '../components/Section.vue'

export default {
  components: {
    Section
  },
  props: {
    isDarkMode: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
header {
  line-height: 1.5;
}

.s-wrapper {
  width: 100%;
  height: 31.6rem;
  margin: 35% 0 35%;
}

.service-wrap {
  width: 100%;
  height: 31.2rem;
}

.logo {
  display: block;
  margin-left: -20px;
}
</style>
