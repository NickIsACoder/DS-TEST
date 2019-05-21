<template>
  <div class="login">
    <div class="content">
      <div class="top">德生科技产品演示清单</div>
      <div class="center">
        <form>
          <div class="block-input username">
            <input type="text" placeholder="输入用户名" v-model="login_name">
          </div>
          <div class="block-input pwd">
            <input type="password" placeholder="输入密码" v-model="pwd" >
          </div>
          <p class="warning " v-if="warning">{{message}}</p>
          <input type="submit" class="login-btn" value="登录" @click.prevent="checkBtn">
        </form>
      </div>
      <div class="bottom">
        广东德生股份有限公司
      </div>
    </div>
  </div>
</template>

<script>
  import md5 from '../services/MD5'
  import dataIP from '../services/config'
  export default {
    data(){
      return {
        login_name: '',
        pwd: '',
        warning: false,
        message: ''
      }
    },
    methods: {
      checkBtn(){
        this.warning = false
        if (this.login_name == '' || this.pwd == '') {
          this.warning = true;
          this.message = '账号名或密码不能为空！';
        } else {
          let p = md5(this.pwd);
          // let request = `login_name=${this.login_name}&pwd=${p}`;
          let _this = this
          // this.$http.post(dataIP +'/aam/sso/account/login', request).then((response) => {
            // if (response.data.statusCode == 200) {
              sessionStorage.setItem('userName', _this.login_name)
              sessionStorage.setItem('userid', _this.pwd)
              _this.$router.push({name: 'index', params: {user: 1}});
            // } else {
              // this.warning = true
              // this.message = response.data.message
            // }
          // })
        }
      }
    },
    watch:{
      login_name(val){
        this.message = ''
      },
      pwd(val){
        this.message = ''
      }
    }
  }
</script>
<style scoped lang="less">
  input[type="password"]{
    border: none;
  }
  .login{
  }
  .content{
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    flex-direction: column;
    color: #666666;
    .bottom{
        // background: #F7FBFD;
        background: #384451;
        color: white;
        height: 100px;
        text-align: center;
        padding-top: 20px;
        font-size: 14px;
    }
    .top{
      // border-bottom: 1px solid #C8D6E8;
      border-bottom: 1px solid #1F2D3D;
      width: 95%;
      margin: 0 auto;
      height: 60px;
      line-height: 60px;
      font-size: 22px;
      // color: #409EFF
      color: #1F2D3D;
      font-weight: 600
    }
  }
  ul li {
    float: left;
    padding: 15px;
    width: 80px;;
  }
  .top > img {
    padding: 2% 50px;
    height: 30px;
  }
  .warning {
    margin-left: 50px;
    margin-top: 10px;
    color: #ff0000;
  }
  .center{
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .center form {
    min-height: 260px;
    // height: 50%;
    width: 400px;
    padding: 10px;
    // -webkit-border-radius: 10px;
    // -moz-border-radius: 10px;
    // border-radius: 10px;
    // background-color: #D9E9FF;
    // box-sizing: border-box;
    background: #fff;
    border: 1px solid #eaeefb;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: all .3s ease-in-out;
    bottom: 0
  }
  .center form:hover {
      bottom: 6px;
      box-shadow: 0 6px 18px 0 rgba(232,237,250,.5);
  }
  .tab-box {
    padding-bottom: 3%;
  }

  .tab-box ul {
    margin: 0 auto;
    margin-left: 30%;
    margin-top: 20px;
  }

  .tab-box ul > li {
    width: 140px;
    padding: 10px 15px;
    margin-left: 30px;
    border: 1px solid #ebebeb;
  }

  .tab-box ul > li > img {
    width: 30px;
    min-height: 30px;
    vertical-align: middle;
  }

  .tab-box ul > li > span {
    font-size: 20px;
    vertical-align: middle;
    margin-left: 20px;
    color: #6e6e6e;
    line-height: 35px;
  }

  .block-input {
    display: block;
    margin: 0 auto;
    height: 40px;
    width: 290px;
    background-color: transparent;
    border: 1px solid #BFBFBF;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;;
    margin-top: 30px;
  }

  .block-input input {
    border-left: 1px solid #BFBFBF;
    background: none;
    height: 30px;
    margin-top: 5px;
    padding-left: 15px;
    color: #666666;
  }

  .username {
  }

  .pwd {
  }
  .login-btn {
    background-size: 150% 100%;
    height: 40px;
    width: 290px;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    cursor: pointer;
    color: #fff;
    // background: #679eff;
    background: #1F2D3D;
    border-radius: 3px;
  }

  .foot {
    background-color: #454449;
    width: 100%;
    min-width: 1080px;
    height: 7%;
    min-height: 60px;
    position: absolute;
    bottom: 0;
    padding-top: 2%;
  }

  .foot > p {
    color: #a0a0a0;
    line-height: 22px;
    font-size: 14px;
    vertical-align: middle;
    text-align: center;
  }
</style>