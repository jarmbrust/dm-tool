// import race from '../../data/raceData'

const state = {
  selectedRace: '',
  raceBonusArray: {'Str': 0, 'Dex': 0, 'Con': 0, 'Int': 0, 'Wis': 0, 'Chr': 0}
}

const mutations = {
  'SET_RACE' (state, payload) {
    state.selectedRace = payload.race
  },
  'SET_BONUS_ARRAY' (state, payload) {
    state.raceBonusArray = payload.bonusArray
  }
}

const actions = {
  selectRace: ({commit}, payload) => {
    commit('SET_RACE', payload)
  },
  initRace: ({commit}) => {
    commit('SET_RACE', state.selectedRace)
  }
}

const getters = {
  selectedRace: state => {
    return state.selectedRace
  },
  raceBonusArray: state => {
    return state.raceBonusArray
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
