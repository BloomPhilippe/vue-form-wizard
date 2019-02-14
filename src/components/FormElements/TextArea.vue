<template>
  <div class="form-group">
    <label :for="internalId">{{label}}</label>
    <textarea class="form-control" :id="internalId" :placeholder="placeholder" rows="3"></textarea>
  </div>
</template>

<script>
import FormStore from '../../store/FormStore'
export default {
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
    placeholder: {
      type: String,
      default: 'Veuillez remplir ce champ...'
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
