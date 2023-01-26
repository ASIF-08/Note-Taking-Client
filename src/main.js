import './init';
import "@/services/axiosConfig";
import Vue from 'vue'
import App from './App.vue'
import router from '@/routes.js' 
import store from '@/store/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
new Vue({
  store, 
  router,
  render: h => h(App),
}).$mount('#app')
