import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

class TranslateApi {
  get () {
    return Vue.http.get('https://api.jsonbin.io/b/5c673ad8a83a2931773595b7', {
      headers: {
        'secret-key': '$2a$10$LKlQdxR6aKhg6RVGtFN70OHpSpQwsQ.zlaX5X8kOTVnGZfnvW7/e6'
      }
    })
  }
}

export let translateApi = new TranslateApi()
