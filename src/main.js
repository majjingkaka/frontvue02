import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import Vuex from 'vuex'
import axios from 'axios'
//import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/dist/vuetify.min.css'

loadFonts()


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// createApp(App)
//   .use(vuetify)
//   .mount('#app')

//Vue.prototype.$http = axios
//Vue.prototype.$eventBus = new Vue();
//Vue.prototype.$axios = axios
// 다른 컴포넌트에서는 import 없이 this.$axios로 사용가능


//global.jQuery = require('jquery');
//var $ = global.jQuery;
//window.$ = $;

//jquery
//import 'expose-loader?$!expose-loader?jQuery!jquery'

import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueCookies from "vue-cookies"

//createApp.config.productionTip = false


const app = createApp(App)
//app.use(vueAwesomeSidebar)
app.use(router)
app.use(vuetify)
//app.use(Vuex) //https://vue3js.cn/vuex/kr/guide/
app.config.globalProperties.axios = axios; //axios 전역설정
app.use(VueCookies)
app.$cookies.config("1d") // expire 1일 (global 설정) https://kyounghwan01.github.io/blog/Vue/vue/vue-cookies/
app.mount('#app')

