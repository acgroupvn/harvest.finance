<template>
  <div id="app">
    <Header />
    <!-- <farmPage v-if="isChoice === 'FARM'" />
    <fAQPage v-else-if="isChoice === 'FAQ'" /> -->
    <router-view />
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  components: {
    Header
  }
}

</script>

<style lang="scss">

</style>
