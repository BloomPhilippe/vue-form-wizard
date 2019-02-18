<template>
  <div class="form-group">
    <label :for="internalId">{{label}}</label>
    <input v-validate="'required'" v-on:blur="focusOut()" :type="type" class="form-control" :id="internalId" :placeholder="placeholder" v-model="value">
  </div>
</template>

<script>
import FormStore from '../../store/FormStore'
export default {
  inject: ['$validator'],
  store: FormStore,
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    storeKey: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text',
      validator: function (value) {
        return ['text', 'email', 'date'].indexOf(value) !== -1
      }
    },
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      value: null,
      internalId: null
    }
  },
  methods: {
    focusOut: function () {
      this.$store.commit(this.storeKey, this.value)
    }
  },
  components: {},
  created: function () {
    this.internalId = this.$slugify(this.id)
  }
}
</script>
