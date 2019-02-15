import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import slugify from './mixins/slugify'
import VeeValidate from 'vee-validate'
import VueI18n from 'vue-i18n'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(VeeValidate, {inject: false})
Vue.use(VueI18n)

Vue.config.productionTip = false

const messages = {}
const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages // set locale messages
})

Vue.slugify = slugify

new Vue({ // eslint-disable-line no-new
  i18n,
  el: '#app',
  router,
  components: { App },
  mixins: [
    slugify
  ],
  template: '<App/>'
})
