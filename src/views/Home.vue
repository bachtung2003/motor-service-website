<template>
  <div style="display: block">
    <div class="s-wrapper flex" :class="{ reveal: isSectionVisible(1) }">
      <Section class="" :types="1"></Section>
    </div>
    <div class="service-wrap flex mb-8" :class="{ reveal: isServiceVisible }">
      <Service class="flex" />
    </div>
    <div class="s-wrapper flex" :class="{ reveal: isSectionVisible(2) }">
      <Section class="" :types="2"></Section>
    </div>
    <div class="s-wrapper flex" :class="{ reveal: isSectionVisible(3) }">
      <Section class="" :types="3"></Section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue' 
import Section from '../components/Section.vue'
import Service from '../components/Service.vue'

import '../assets/main.css'
import '../../node_modules/primeflex/primeflex.scss'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
export default {
  components: {
    Section,
    Service
  },
  setup() {
    const isServiceVisible = ref(false)

    const isSectionVisible = (sectionNumber) => {
      return sectionNumber === 1 ? isServiceVisible.value : true
    }

    const checkServiceVisibility = () => {
      const serviceElement = document.querySelector('.service-wrap')
      if (serviceElement) {
        const rect = serviceElement.getBoundingClientRect()
        isServiceVisible.value = rect.top >= 0 && rect.bottom <= window.innerHeight
      }
    }

    const checkSectionVisibility = () => {
      const section1Element = document.querySelector('.s-wrapper:nth-child(1)')
      const section2Element = document.querySelector('.s-wrapper:nth-child(3)')
      const section3Element = document.querySelector('.s-wrapper:nth-child(4)')

      if (section2Element) {
        const rect = section2Element.getBoundingClientRect()
        const isSection2Visible = rect.top >= 0 && rect.bottom <= window.innerHeight
        section2Element.classList.toggle('reveal', isSection2Visible)
      }

      if (section3Element) {
        const rect = section3Element.getBoundingClientRect()
        const isSection3Visible = rect.top >= 0 && rect.bottom <= window.innerHeight
        section3Element.classList.toggle('reveal', isSection3Visible)
      }

      if (section1Element) {
        section1Element.classList.add('reveal')
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', checkServiceVisibility)
      window.addEventListener('scroll', checkSectionVisibility)
      checkServiceVisibility() 
      checkSectionVisibility()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', checkServiceVisibility)
      window.removeEventListener('scroll', checkSectionVisibility)
    })

    return { isSectionVisible, isServiceVisible }
  }
}
</script>

<style scoped>
.s-wrapper,
.service-wrap {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
}

.reveal {
  opacity: 1;
  transform: translateY(0);
}

.logo {
  display: block;
  margin-left: -20px;
}
</style>
