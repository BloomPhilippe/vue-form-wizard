<template>
  <div>
    <step v-bind:active="isActive('details')" v-bind:id="'details'" v-bind:title="'Détails'" v-on:nextStep="nextStep($event)" v-on:prevStep="prevStep($event)">
    </step>
    <step v-bind:active="isActive('address')" v-bind:id="'address'" v-bind:title="'Adresse'" v-on:nextStep="nextStep($event)" v-on:prevStep="prevStep($event)">
    </step>
  </div>
</template>

<script>
import Step from './Step'
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
    Step
  }
}
</script>
