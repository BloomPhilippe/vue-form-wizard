<template>
  <div>
    <step v-bind:active="isActive('details')" v-bind:id="'details'" v-bind:title="$t('details')" v-bind:labelForNext="$t('next')" v-bind:show-previous="false" v-on:nextStep="nextStep($event)" v-on:prevStep="prevStep($event)">
      <div class="row d-flex justify-content-center">
        <div class="col-6 text-left">
          <input-simple v-bind:label="$t('lastName')" v-bind:id="'lastname'" v-bind:storeKey="'lastName'"></input-simple>
          <input-simple v-bind:label="$t('firstName')" v-bind:id="'firstname'" v-bind:storeKey="'firstName'"></input-simple>
        </div>
      </div>
    </step>
    <step v-bind:active="isActive('address')" v-bind:id="'address'" v-bind:title="$t('address')" v-bind:labelForNext="$t('next')" v-bind:label-for-previous="$t('previous')" v-on:nextStep="nextStep($event)" v-on:prevStep="prevStep($event)">
      <div class="row d-flex justify-content-center">
        <div class="col-6 text-left">
          <input-simple v-bind:label="$t('address')" v-bind:id="'address'" v-bind:storeKey="'address'"></input-simple>
          <input-simple v-bind:label="$t('zipCode')" v-bind:id="'cp'" v-bind:storeKey="'cp'"></input-simple>
        </div>
      </div>
    </step>
    <step v-bind:active="isActive('job')" v-bind:id="'job'" v-bind:title="$t('job')" v-bind:labelForNext="$t('completed')" v-bind:label-for-previous="$t('previous')" v-on:nextStep="nextStep($event)" v-on:prevStep="prevStep($event)">
      <div class="row d-flex justify-content-center">
        <div class="col-6 text-left">
          <input-simple v-bind:label="$t('companyName')" v-bind:id="'company'" v-bind:storeKey="'company'"></input-simple>
          <text-area v-bind:label="$t('jobDescription')" v-bind:id="'function'" v-bind:storeKey="'function'"></text-area>
        </div>
      </div>
    </step>
  </div>
</template>

<script>
import Step from './Step'
import InputSimple from '../FormElements/InputSimple'
import TextArea from '../FormElements/TextArea'
import FormStore from '../../store/FormStore'
import {userApi} from '../../api/user'

export default {
  store: FormStore,
  props: {
  },
  data () {
    return {
      steps: [
        {
          id: 'details',
          active: true
        },
        {
          id: 'address',
          active: false
        },
        {
          id: 'job',
          active: false
        }
      ]
    }
  },
  methods: {
    isActive: function (idStep) {
      return this.steps.find(function (element) {
        return element.id === idStep
      }).active
    },
    setActive: function (idStep, value) {
      this.steps.find(function (element) {
        return element.id === idStep
      }).active = value
    },
    nextStep: function (currentIdStep) {
      let nextIndexStep = this.steps.findIndex(function (element) {
        return element.id === currentIdStep
      }) + 1
      if (nextIndexStep < this.steps.length) {
        this.setActive(currentIdStep, false)
        this.steps[nextIndexStep].active = true
      } else {
        userApi.get().then(response => {
          response.body.users.push(this.$store.state)
          userApi.insert(response.body.users).then(response => {
            console.log(response)
            let path = this.$i18n.locale === 'fr' ? '/succes' : '/success'
            this.$router.push(path)
          })
        })
      }
    },
    prevStep: function (currentIdStep) {
      let nextIndexStep = this.steps.findIndex(function (element) {
        return element.id === currentIdStep
      }) - 1
      if (nextIndexStep >= 0) {
        this.setActive(currentIdStep, false)
        this.steps[nextIndexStep].active = true
      }
    }
  },
  components: {
    Step,
    InputSimple,
    TextArea
  }
}
</script>
