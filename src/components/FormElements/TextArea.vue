<template>
  <div class="form-group">
    <label :for="internalId">{{label}}</label>
    <textarea v-validate="'required'" v-on:blur="focusOut()" class="form-control" :id="internalId" :placeholder="placeholder" v-model="value" rows="3"></textarea>
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
