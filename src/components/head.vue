<template>
  <div class="head">
      <div class="title">{{ title }}</div>
      <div class="login-wrap">
        <span class="user-name">{{ username }}</span>
        <button class="edit-password">
          修改密码
        </button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'headTop',
  data () {
    return {
      title: '德生科技产品演示清单',
      username: sessionStorage.getItem('userName')
    }
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
  }
</style>
