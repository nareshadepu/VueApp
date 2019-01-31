import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import BootstrapVue from 'bootstrap-vue';

import vSuggest from 'v-suggest';
Vue.use(vSuggest);

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)


import HelloWorld from "./components/HelloWorld.vue";
import Autocomplete from "./views/Autocomplete.vue";
import Form from "./views/Form.vue";
import Select from "./views/select.vue";

const routes = [

  { path: '/', component: HelloWorld },
  { path: '/Autocomplete', component: Autocomplete },
  { path: '/Form', component: Form },
  { path: '/Select', component: Select },
  

];

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
