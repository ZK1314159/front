import Vue from 'vue';
import App from './App.vue';
import './plugins/element.js';
import axios from '../node_modules/axios/dist/axios.js';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
axios.defaults.baseURL='/background';

new Vue({
  render: h => h(App),
}).$mount('#app')
