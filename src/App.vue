<template>
  <div>
    <Header />
    <stakePage />
  </div>
</template>

<script>
import Header from './components/header.vue' 
import stakePage from './components/StakePage.vue' 

export default {
  name: 'app',
  components:{
    Header, 
    stakePage
  }
}
</script>

<style lang="scss">

</style>
