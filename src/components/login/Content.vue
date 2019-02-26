<template>
  <div class="login_content">
    <div class="login_inform">
      <h2>欢迎登录</h2>
      <div>
        <p>账户</p>
        <input type="text" v-model="uphone" placeholder="请输入手机号或邮箱地址">
      </div>
      <div>
        <p>请输入您的密码</p>
        <input type="password" v-model="upassword" placeholder="请输入登录密码">
      </div>
      <p>
        <span>
          <router-link to="/findpwd">忘记密码</router-link>
        </span>
        <span>
          <router-link to="/register">立即注册</router-link>
        </span>
      </p>
      <div class="login_btn" @click="login">立即登录</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      uphone: '',
      upassword: ''
    }
  },
  methods: {
    login () {
      this.$store.commit('login', true)
      sessionStorage.setItem('isLogin', true)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.login_inform {
  width: 360px;
  margin: 73px auto 50px;
  padding: 1px 50px 35px;
  background: #fff;
}
.login_inform > p {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 14px;
}
.login_inform > p a {
  color: #5065bd;
}
.login_content {
  width: 100%;
  min-height: calc(100vh - 300px);
  background: #c9d6dc url(../../assets/images/big_login.png) no-repeat center
    top;
  overflow: hidden;
  background-size: cover;
}
.login_btn {
  width: 360px;
  height: 45px;
  line-height: 45px;
  background: #5065bd;
  text-align: center;
  border-radius: 22px;
  display: block;
  font-size: 16px;
  box-shadow: 0 7px 26px -5px #999;
  margin-top: 50px;
  color: #fff;
  cursor: pointer;
}
.login_inform h2 {
  font-size: 36px;
  text-align: center;
  color: #3e3f58;
  font-weight: 400;
  margin-top: 24px;
}
.login_inform > div > p {
  color: #666;
  font-size: 12px;
  margin: 20px 0 10px;
  text-align: left;
}
.login_inform > div > input {
  background: #fff;
  border-color: #c5c5c5;
  color: #3e3f58;
  height: 40px;
  line-height: 40px;
  border-radius: 22px;
  border: 1px solid #cbcbcb;
  box-shadow: none;
  text-indent: 22px;
  width: 100%;
}
</style>
