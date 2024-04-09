import Vue from 'vue'
// import Vuetify from 'vuetify'

import App from './App'
import router from '@/router'

// import api from '@/api'
import './eventBus'
// import '@/assets/style/globals.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)


import http from './http'
Vue.prototype.$http = http
// Vue.use(Vuetify, {
//   theme: {
//     primary: '#023037',
//     secondary: colors.red.lighten4,
//     accent: '#f0c835'
//   }
// })

// Vue.mixin({
//   methods: {
//     reset(obj, value = null) {
//       Object.keys(obj).forEach((key) => {
//         if (obj[key] !== null && typeof obj[key] === 'object')
//           this.reset(obj[key], value)
//         else obj[key] = value
//       })
//     }
//   }
// })

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
