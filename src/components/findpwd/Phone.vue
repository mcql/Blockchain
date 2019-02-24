<template>
  <div class='phone_register'>
    <div v-if='show == 0 || show == 1'>
      <p>账号</p>
      <input type='text' v-model='phone_num' placeholder='请输入手机号'>
    </div>
    <div v-if='show == 1' class='yzm'>
      <p>短信验证码</p>
      <input type='text' v-model='phone_code' placeholder='请输入短信验证码'>
      <span>获取验证码</span>
    </div>
    <div v-if='show == 2'>
      <p>请输入您的密码</p>
      <input type='password' v-model='user_password'>
    </div>
    <div v-if='show == 2'>
      <p>请再次输入您的密码</p>
      <input type='password' v-model='rep_password'>
    </div>
    <div class='register_btn' @click='show_part'>{{msg}}</div>
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
      sure: true,
      msg: '下一步',
      show: 0
    }
  },
  methods: {
    show_part () {
      if (this.show == 0) { //eslint-disable-line
        this.show = 1
      } else if (this.show == 1) { //eslint-disable-line
        this.show = 2
        this.msg = '提交'
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
