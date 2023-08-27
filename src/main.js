import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';

import './assets/bootstrap.scss'

Vue.use(BootstrapVue, {
  BToast: {
    solid: true,
  }
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
