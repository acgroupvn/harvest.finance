<template>
  <div id="app">
    <Header />
    <!-- <farmPage v-if="isChoice === 'FARM'" />
    <fAQPage v-else-if="isChoice === 'FAQ'" /> -->
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header.vue' 
import farmPage from './components/Farm.vue' 
import fAQPage from './components/FAQ.vue'

export default {
  name: 'app',
  data: function () {
    return {
      isChoice: 'FARM',
  
    }
  },
  components:{
    Header, 
    farmPage,
    fAQPage
  },
  methods: {
      updateParent(value) {
        this.isChoice = value;
      },
         
    }
}
</script>

<style lang="scss">

</style>
