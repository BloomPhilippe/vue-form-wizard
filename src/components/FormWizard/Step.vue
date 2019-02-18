<template>
  <div v-if="active">
    <h3>{{title}}</h3>
    <slot>Content not found</slot>
    <div class="row d-flex justify-content-center">
      <div class="col-2" v-if="showPrevious">
        <b-button variant="success" @click="previous">{{labelForPrevious}}</b-button>
      </div>
      <div class="col-2" v-if="showNext">
        <b-button variant="success" @click="next">{{labelForNext}}</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    labelForNext: {
      type: String,
      default: null
    },
    labelForPrevious: {
      type: String,
      default: null
    },
    showNext: {
      type: Boolean,
      default: true
    },
    showPrevious: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  methods: {
    next: function () {
      this.$emit('nextStep', this.id)
    },
    previous: function () {
      this.$emit('prevStep', this.id)
    }
  },
  components: {},
  created: function () {
  }
}
</script>
