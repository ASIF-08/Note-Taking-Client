import Vue from 'vue'
import Vuex from 'vuex'
import Router from "vue-router";

import CKEditor from 'ckeditor4-vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(Vuex);  
Vue.use(Router);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use( CKEditor );