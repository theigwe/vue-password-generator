/* jshint esversion: 6 */

import Vue from 'vue';
import ElementUI from 'element-ui';
import Clipboard from 'v-clipboard';

import 'element-ui/lib/theme-chalk/index.css';

import 'bootstrap/scss/bootstrap.scss';

import App from './App.vue';

Vue.config.productionTip = false;

window.Generator = require('generate-password');

Vue.use(ElementUI);
Vue.use(Clipboard);

new Vue({
  render: h => h(App),
}).$mount('#app');
