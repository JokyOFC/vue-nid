import { createStore } from 'vuex'

export default createStore({
  state: {
    idEvento: {
      idEventoState: ""
    }
  },
  getters: {
  },
  mutations: {
    atualizaEvento(state, idNewEvento){
      state.idEventoState = idNewEvento
    }
  },
  actions: {
  },
  modules: {
  }
})
