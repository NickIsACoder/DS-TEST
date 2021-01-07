<template>
  <div class="page1">
    <input class="input" type="text" v-model="ipt" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      ipt: ''
    }
  },
  watch: {
    ipt: {
      handler (aa) {
        console.log(aa)
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.input {
  margin: 20px;
  border: 1px solid salmon;
}
</style>
