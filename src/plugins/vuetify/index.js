import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import preset from './default-preset/preset'
import uz from '@/plugins/vuetify/uz'
import ru from 'vuetify/lib/locale/ru'

Vue.use(Vuetify)

export default new Vuetify({
  preset,
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    options: {
      customProperties: true,
      variations: false,
    },
  },
  lang: {
    locales: { uz, ru },
    current: 'uz',
  },
})
