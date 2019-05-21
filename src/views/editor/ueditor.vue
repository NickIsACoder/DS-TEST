<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <div style="width: 90%; margin: 0 auto;">
      <UE :default-msg="msg" id="editor" @contentChanged="contentChange"></UE>
    </div>
  </div>
</template>

<script>
    import UE from '../../components/UE.vue';
export default {
  name: 'ueditor',
  components: { UE }, // 注入组件
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    contentChange (val) { // 改变父组件数据
      this.msg = val
    }
  }
}
</script>