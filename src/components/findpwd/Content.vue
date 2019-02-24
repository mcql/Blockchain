<template>
  <div class="register">
    <div class="register_content">
      <h2>找回密码</h2>
      <p class="change_register">
        <span @click="showPhone">
          <router-link
            to="/findpwd"
            :class="showRegister ? 'register_active' : '' "
          >手机找回</router-link>
        </span>
        <span @click="showMail">
          <router-link
            to="/fmail"
            :class="showRegister ? '' : 'register_active' "
          >邮箱找回</router-link>
        </span>
      </p>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showRegister: true
    }
  },
  methods: {
    showPhone () {
      this.showRegister = true
    },
    showMail () {
      this.showRegister = false
    }
  }
}
</script>

<style scoped>
.register {
  width: 100%;
  min-height: calc(100vh - 300px);
  background: #c9d6dc url(../../assets/images/big_login.png) no-repeat center
    top;
  background-size: cover;
  overflow: hidden;
}
.register_content {
  width: 360px;
  margin: 73px auto 50px;
  padding: 1px 50px 35px;
  background: #fff;
}
.register_content h2 {
  font-size: 36px;
  text-align: center;
  color: #3e3f58;
  margin-top: 24px;
  font-weight: 400;
}
.change_register {
  display: flex;
  justify-content: space-around;
  margin: 30px auto 20px;
}
.change_register span a {
  display: inline-block;
  color: #666;
  line-height: 24px;
  font-size: 15px;
  height: 28px;
  cursor: pointer;
}
.register_active {
  border-bottom: 2px solid #5065bd;
  color: #5065bd !important;
}
</style>
