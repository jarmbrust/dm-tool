import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedRace: '',
    raceBonusArray: {'Str': 0, 'Dex': 0, 'Con': 0, 'Int': 0, 'Wis': 0, 'Chr': 0}
  },
  mutations: {
    setRace (state, payload) {
      state.selectedRace = payload.race
    },
    setBonusArray (state, payload) {
      state.raceBonusArray = payload.bonusArray
    }
  },
  getters: {
    getRaceBonuses: state => {
      return state.raceBonusArray
    }
  }
})
