import {apiKey, apiURL} from './config'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

class TranslateApi {
  get () {
    return Vue.http.get(apiURL + '/b/5c6a62ec1198012fc89d4276', {
      headers: {
        'secret-key': apiKey
      }
    })
  }
}

export let translateApi = new TranslateApi()
