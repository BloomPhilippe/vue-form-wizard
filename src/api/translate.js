import {apiKey, apiURL} from './config'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

class TranslateApi {
  get () {
    return Vue.http.get(apiURL + '/b/5c673ad8a83a2931773595b7/1', {
      headers: {
        'secret-key': apiKey
      }
    })
  }
}

export let translateApi = new TranslateApi()
