import {apiKey, apiURL} from './config'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

class UserApi {
  get () {
    return Vue.http.get(apiURL + '/b/5c6a56f56874aa33ba1500ed', {
      headers: {
        'secret-key': apiKey
      }
    })
  }

  insert (data) {
    return Vue.http.put(apiURL + '/b/5c6a56f56874aa33ba1500ed', data, {
      headers: {
        'secret-key': apiKey
      }
    })
  }
}

export let userApi = new UserApi()
