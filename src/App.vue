<template>
  <div>
    <Header />
    <stakePage />
    <footerPage />
  </div>
</template>

<script>
import Header from './components/header.vue'
import stakePage from './components/StakePage.vue'
import footerPage from './components/Footer.vue'

export default {
  components: {
    Header,
    stakePage,
    footerPage
  }
}
</script>

<style lang="scss">

</style>
