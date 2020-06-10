import Vue from 'vue'
import Vuex from 'vuex'
import Header from './modules/header'
import Category from './modules/category'
import Interior from './modules/interior'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Header,
    Category,
    Interior
  }
})
