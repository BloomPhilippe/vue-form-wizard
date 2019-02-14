<template>
  <div class="form-group">
    <label :for="internalId">{{label}}</label>
    <input :type="type" class="form-control" :id="internalId" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
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
      type: String,
      default: 'Enter ...'
    }
  },
  data () {
    return {
      value: null,
      internalId: null
    }
  },
  methods: {
  },
  components: {},
  created: function () {
    this.internalId = this.$slugify(this.id)
  }
}
</script>
