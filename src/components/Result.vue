<template>
  <div class="container">
    <div class="alert alert-success" role="alert">
      <h2 class="alert-heading">{{$store.state.firstName}}</h2>
      <h4 class="alert-heading">{{$t('successTitle')}}</h4>
      <p>{{$t('successText')}}</p>
    </div>
    <button type="button" class="btn btn-outline-success btn-lg" @click="location.reload()">{{$t('restart')}}</button>
  </div>
</template>

<script>
import FormStore from '../store/FormStore'
export default {
  store: FormStore,
  name: 'Result',
  data () {
    return {
    }
  },
  components: {
  }
}
</script>
