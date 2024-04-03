<template>
  <div class="Ubanner_wrapper">
    <Ubanner class="" :types="2"></Ubanner>
    <List_Account></List_Account>
  </div>
</template>

<script>
import Ubanner from '../components/Ubanner.vue'
import List_Account from '../components/List_Account.vue'

export default {
  components: {
    Ubanner,
    List_Account
  }
}
</script>

<style scoped>
.Ubanner_wrapper {
  width: 100vw;
}
</style>
