<template>
  <div id="app" v-if="load_trad">
      <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
        <b-navbar-brand href="#">Form Wizard</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item @click="setLocale('fr')">FR</b-dropdown-item>
              <b-dropdown-item @click="setLocale('en')">EN</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <main role="main">
      <div class="jumbotron">
        <div class="container">
          <img src="./assets/logo.png">
          <h1 class="display-3">Form Wizard</h1>
          <p>{{ $t('details') }}</p>
        </div>
      </div>
      <router-view/>
    </main>
  </div>
</template>
<script>
import {translateApi} from './api/translate'

export default {
  inject: ['$validator'],
  name: 'App',
  data () {
    return {
      load_trad: false
    }
  },
  methods: {
    setLocale: function (val) {
      this.$i18n.locale = val
      this.$validator.localize(val)
    }
  },
  components: {
  },
  mounted () {
  },
  created () {
    translateApi.get().then(response => {
      this.$i18n.setLocaleMessage('fr', Object.assign(response.body.fr))
      this.$i18n.setLocaleMessage('en', Object.assign(response.body.en))
      this.$validator.localize('fr')
      this.load_trad = true
      this.$forceUpdate()
    })
  }
}
</script>
<style>
  #app {
    overflow-x: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
