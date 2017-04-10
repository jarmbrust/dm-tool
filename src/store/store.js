import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from 'vuex'
import raceAbilities from './modules/raceAbilities'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    raceAbilities
  }
})
