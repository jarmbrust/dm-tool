import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PlayerStatTool from '@/components/PlayerStatTool.vue'
import PetPictures from '@/components/PetPictures.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/PlayerStatTool',
      name: 'Stat Generator',
      component: PlayerStatTool
    },
    {
      path: '/PetPictures',
      name: 'Pet Pictures',
      component: PetPictures
    },
    {
      path: '*',
      redirect: '/',
      component: Home
    }
  ]
})
