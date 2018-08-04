/* eslint-disable no-new, no-consistent-return, no-console */

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App';
import store from './store';
import router from './router';
import '@fortawesome/fontawesome-free/js/all';

Vue.use(Vuetify, {
  iconfont: 'fa',
});

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  debug: true,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});

store.dispatch('admin/loadAll');
