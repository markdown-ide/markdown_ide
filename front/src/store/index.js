import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import admin from './admin';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    admin,
  },
  debug: true,
  state,
  getters,
  actions,
  mutations,
});
