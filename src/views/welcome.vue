<template>
  <div class="welcome">
    welcome
    <el-button >Let's do it</el-button>
    <slot name="header" v-bind:header="header"></slot>
    <slot v-bind:user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: {
          fname: 'Leo',
          lname: 'Messi'
        },
        header:'头'
      }
    },
    props: {
      screenHeight: Number
    }
  }
</script>
<style scoped>
  .welcome {
    background: darkkhaki;
    width: 100%;
    height: 100%;
    font-size: 20px;
    padding: 10px;
  }
</style>