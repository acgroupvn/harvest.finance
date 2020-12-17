import Vue from 'vue'
import VueRouter from 'vue-router'
import farmPage from './components/Farm.vue'
import stakePage from './components/Stake.vue'
import fAQPage from './components/FAQ.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/', component: farmPage },
    { path: '/Stake', component: stakePage },
    { path: '/FAQ', component: fAQPage }
  ]
})
