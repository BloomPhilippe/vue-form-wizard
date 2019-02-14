<template>
  <div>
    <step v-bind:active="isActive('details')" v-bind:id="'details'" v-bind:title="'Détails'" v-on:nextStep="nextStep($event)" v-on:prevStep="prevStep($event)">
      <div class="row d-flex justify-content-center">
        <div class="col-6 text-left">
          <input-simple v-bind:label="'Nom'" v-bind:id="'nom'"></input-simple>
          <input-simple v-bind:label="'Prénom'" v-bind:id="'prenom'"></input-simple>
        </div>
      </div>
    </step>
    <step v-bind:active="isActive('address')" v-bind:id="'address'" v-bind:title="'Adresse'" v-on:nextStep="nextStep($event)" v-on:prevStep="prevStep($event)">
      <div class="row d-flex justify-content-center">
        <div class="col-6 text-left">
          <input-simple v-bind:label="'Adresse'" v-bind:id="'adresse'"></input-simple>
          <input-simple v-bind:label="'CP'" v-bind:id="'cp'"></input-simple>
        </div>
      </div>
    </step>
    <step v-bind:active="isActive('job')" v-bind:id="'job'" v-bind:title="'Job'" v-bind:labelForNext="'Terminer'" v-on:nextStep="nextStep($event)" v-on:prevStep="prevStep($event)">
      <div class="row d-flex justify-content-center">
        <div class="col-6 text-left">
          <input-simple v-bind:label="'Nom de la société'" v-bind:id="'societe'"></input-simple>
        </div>
      </div>
    </step>
  </div>
</template>

<script>
import Step from './Step'
import InputSimple from '../FormElements/InputSimple'
export default {
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
    },
    setUrlStep: function (step) {
      let query = Object.assign({}, this.$route.query)
      query['step'] = step
      this.$router.push({name: this.$route.name, query: query })
    }
  },
  components: {
    Step,
    InputSimple
  }
}
</script>
