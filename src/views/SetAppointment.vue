<template>
  <div class="Ubanner_wrapper">
    <Ubanner class="" :types="2"></Ubanner>
    <Progress></Progress>
  </div>
</template>

<script>
import Ubanner from '../components/Ubanner.vue'
import Progress from '../components/Progress.vue'

export default {
  components: {
    Ubanner,
    Progress
  }
}
</script>

<style scoped>
.Ubanner_wrapper {
  width: 100vw;
}
</style>
