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

// export default new Vuex.Store({
//   state: {
//     selectedRace: '',
//     raceBonusArray: {'Str': 0, 'Dex': 0, 'Con': 0, 'Int': 0, 'Wis': 0, 'Chr': 0}
//   },
//   mutations: {
//     setRace (state, payload) {
//       state.selectedRace = payload.race
//     },
//     setBonusArray (state, payload) {
//       state.raceBonusArray = payload.bonusArray
//     }
//   },
//   getters: {
//     getRaceBonuses: state => {
//       return state.raceBonusArray
//     },
//     getRace: state => {
//       return state.selectedRace
//     }
//   },
//   computed: mapState({
//     selectedRace: state => state.selectedRace
//   })
// })

