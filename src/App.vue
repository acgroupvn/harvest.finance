<template>
  <div>
    <Header />
    <farmPage />
    
    
  </div>
</template>

<script>
import Header from './components/header.vue' 
import farmPage from './components/Farm.vue' 


export default {
  name: 'app',
  components:{
    Header, 
    farmPage
  }
}
</script>

<style lang="scss">

</style>
