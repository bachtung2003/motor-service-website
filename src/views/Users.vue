<template>
  <div class="Ubanner_wrapper" :class="[{ dark: isDarkMode }]">
    <Ubanner class="" :types="2"></Ubanner>
    <List_Account :class="[{ dark: isDarkMode }]" :isDarkMode="isDarkMode"></List_Account>
  </div>
</template>

<script>
import Ubanner from '../components/Ubanner.vue'
import List_Account from '../components/List_Account.vue'

export default {
  components: {
    Ubanner,
    List_Account
  },
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.Ubanner_wrapper {
  width: 100vw;
}
</style>
