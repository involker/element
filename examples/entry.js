import Vue from 'vue';
import entry from './app';
import Element from 'main/index.js';

Vue.use(Element);
new Vue({ // eslint-disable-line
  ...entry
}).$mount('#app');
