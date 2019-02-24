<template>
  <div class='phone_register'>
    <div>
      <p>账号</p>
      <input type='text' v-model='phone_num' placeholder='请输入邮箱地址'>
    </div>
    <div class='yzm'>
      <p>邮箱验证码</p>
      <input type='text' v-model='phone_code' placeholder='请输入邮箱验证码'>
      <span @click='getCode'>获取验证码</span>
    </div>
    <div>
      <p>请输入您的密码</p>
      <input type='password' v-model='user_password'>
    </div>
    <div>
      <p>请再次输入您的密码</p>
      <input type='password' v-model='rep_password'>
    </div>
    <div>
      <p>受邀请码</p>
      <input type='password' v-model='yaoqing_code'>
    </div>
    <div class='sure_register'>
      <p @click='sure_to_register'>
        <i v-if='sure' class='fa fa-check-square-o'></i>
        <i v-else class='fa fa-square-o'></i>我已阅读并同意
        <router-link to='/'>《注册协议》</router-link>
      </p>
      <p>
        <router-link to='/login'>立即登录</router-link>
      </p>
    </div>
    <div class='register_btn' @click='register'>注册</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone_num: '',
      phone_code: '',
      user_password: '',
      rep_password: '',
      yaoqing_code: '',
      sure: true
    }
  },
  methods: {
    getCode () {
      this.phone_code = 1234
    },
    register () {
      alert(
        this.phone_num +
          ' ' +
          this.phone_code +
          ' ' +
          this.user_password +
          ' ' +
          this.rep_password +
          ' ' +
          this.yaoqing_code
      )
    },
    sure_to_register () {
      if (this.sure == false) { //eslint-disable-line
        this.sure = true
      } else {
        this.sure = false
      }
    }
  }
}
</script>

<style scoped>
.fa {
  margin-right: 6px;
}
.sure_register {
  display: flex;
  justify-content: space-between;
}
.sure_register a {
  color: #5065bd;
}
.register_btn {
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
.phone_register p {
  font-size: 12px;
  margin: 20px 0 10px;
  color: #666;
}
.phone_register input {
  width: 100%;
  background: #fff;
  border-color: #c5c5c5;
  color: #3e3f58;
  height: 40px;
  line-height: 40px;
  border-radius: 22px;
  text-indent: 22px;
  border: 1px solid #cbcbcb;
}
.phone_register span {
  position: absolute;
  line-height: 18px;
  height: 18px;
  top: 38px;
  right: 12px;
  padding-left: 12px;
  border-left: 1px solid #0d1e3e;
  color: #0d1e3e;
  font-size: 14px;
  cursor: pointer;
  width: 100px;
  text-align: center;
  z-index: 11;
}
.yzm {
  position: relative;
}
</style>
