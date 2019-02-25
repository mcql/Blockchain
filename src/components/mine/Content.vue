<template>
  <div class="content">
    <div>
      <i class="fa fa-plane"></i>
      <p>账户</p>
      <p>{{username}}</p>
    </div>
    <div>
      <i class="fa fa-lightbulb-o"></i>
      <p>昵称</p>
      <p>{{nickname}}</p>
      <div class="change" @click='changeNickname'>修改</div>
    </div>
    <div>
      <i class="fa fa-puzzle-piece"></i>
      <p>邀请码</p>
      <p>{{yaoqing}}</p>
      <div class="change">邀请管理</div>
    </div>
    <div>
      <i class="fa fa-recycle"></i>
      <p>登录密码</p>
      <p>{{login_password}}</p>
      <div class="change">修改</div>
    </div>
    <div>
      <i class="fa fa-rss"></i>
      <p>实名认证</p>
      <p v-if='!shiming'>未认证</p>
      <p v-else>认证成功</p>
      <div class="change" v-if='!shiming'>提交认证</div>
    </div>
    <div>
      <i class="fa fa-phone-square"></i>
      <p>手机</p>
      <p v-if='!mobile_status'>未绑定</p>
      <p v-else>{{mobile}}</p>
      <div v-if='!mobile_status' class="change">绑定</div>
    </div>
    <div>
      <i class="fa fa-gift"></i>
      <p>邮箱</p>
      <p v-if='!mail_status'>未绑定</p>
      <p v-else>{{mail}}</p>
      <div class="change" @click="changeMail" v-if='mail_status'>修改</div>
      <div class="change" v-else @click="addmail">绑定</div>
    </div>
    <div>
      <i class="fa fa-pie-chart"></i>
      <p>谷歌验证</p>
      <p v-if='!google'>未开启验证</p>
      <p v-else>验证通过</p>
      <div class="change" v-if='!google'>开启验证</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '3426089154@qq.com',
      yaoqing: 'SOPEEZLZ'
    }
  },
  computed: {
    nickname () {
      return this.$store.state.changestatus['1'].nickname
    },
    login_password () {
      return this.$store.state.changestatus['2'].login_pwd
    },
    shiming () {
      return this.$store.state.changestatus['3'].shiming
    },
    mobile () {
      return this.$store.state.changestatus['4'].mobile.mobile_num
    },
    mobile_status () {
      return this.$store.state.changestatus['4'].mobile.mobile_status
    },
    mail_status () {
      return this.$store.state.changestatus['5'].mail.mail_status
    },
    mail () {
      return this.$store.state.changestatus['5'].mail.mail
    },
    google () {
      return this.$store.state.changestatus['6'].google
    }
  },
  methods: {
    changeNickname () {
      this.$store.commit('dialogtitle', '修改昵称')
      this.$store.commit('dialogcontent', this.nickname)
      this.$store.commit('showdialog', true)
    },
    changeMail () {
      this.$store.commit('dialogtitle', '修改邮箱')
      this.$store.commit('dialogcontent', this.mail)
      this.$store.commit('showdialog', true)
    },
    addmail () {
      this.$store.commit('dialogtitle', '绑定邮箱')
      this.$store.commit('dialogcontent', '')
      this.$store.commit('showdialog', true)
    }
  }
}
</script>

<style>
.content {
  width: 86.97%;
  max-width: 1920px;
  position: relative;
  z-index: 1;
  margin: 32px auto 0;
  padding: 0 20px;
  -webkit-box-shadow: 0 5px 30px 5px #e7e7e7;
  box-shadow: 0 5px 30px 5px #e7e7e7;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: calc(100vh - 400px);
  margin-bottom: 60px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
.content > div {
  width: 23%;
  height: 220px;
  border-radius: 12px;
  box-shadow: 0 10px 25px 0 #ececec;
  margin: 0 12px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.content > div .fa{
  font-size: 60px;
  margin: 30px auto 0;
}
.content > div > p:nth-child(2){
  color: #5065bd;
  font-size: 16px;
  margin-bottom: 6px;
  line-height: 22px;
}
.content > div > p:nth-child(3){
  font-size: 19px;
  color: #333;
  line-height: 28px;
  font-weight: 700;
}
.change,.change a{
  padding: 0 14px;
  height: 27px;
  line-height: 27px;
  font-size: 12px;
  border: 1px solid #cfcfcf;
  border-radius: 14px;
  color: #5065bd;
  transition: all .3s ease;
  margin-top: 10px;
  cursor: pointer;
}
.change:hover,.change a:hover{
  background-color: #5065bd;
  color: #fff;
}
</style>
