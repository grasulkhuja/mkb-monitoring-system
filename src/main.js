import '@/plugins/vue-composition-api'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify/index'
import router from './router'
import store from './store'
import VueMask from 'v-mask'

import '@/libs/axios'
import '@/auth/jwt/useJwt'

Vue.use(VueMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
