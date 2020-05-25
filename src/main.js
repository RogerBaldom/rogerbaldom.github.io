import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

Vue.prototype.$http = axios;

import Component1 from './components/Component1';

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

AOS.init();

Vue.component('component-principal', Component1);

new Vue({
  el: '#app',
  render: h => h(App)
})
