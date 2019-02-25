<template>
  <div class="content">
    <div>
      <i class="fa fa-plane"></i>
      <p>账户</p>
      <p>3426089154@qq.com</p>
    </div>
    <div>
      <i class="fa fa-lightbulb-o"></i>
      <p>昵称</p>
      <p>3426089154@qq.com</p>
      <div class="change" @click='changeNickname'>修改</div>
    </div>
    <div>
      <i class="fa fa-puzzle-piece"></i>
      <p>邀请码</p>
      <p>SOPEEZLZ</p>
      <div class="change">邀请管理</div>
    </div>
    <div>
      <i class="fa fa-recycle"></i>
      <p>登录密码</p>
      <p>*********</p>
      <div class="change">修改</div>
    </div>
    <div>
      <i class="fa fa-rss"></i>
      <p>实名认证</p>
      <p>未认证</p>
      <div class="change">提交认证</div>
    </div>
    <div>
      <i class="fa fa-phone-square"></i>
      <p>手机</p>
      <p>未绑定</p>
      <div class="change">绑定</div>
    </div>
    <div>
      <i class="fa fa-gift"></i>
      <p>邮箱</p>
      <p>3426089154@qq.com</p>
      <div class="change" @click="changeMail">修改</div>
    </div>
    <div>
      <i class="fa fa-pie-chart"></i>
      <p>谷歌验证</p>
      <p>未开启验证</p>
      <div class="change">开启验证</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeNickname () {
      this.$store.commit('dialogtitle', '修改昵称')
      this.$store.commit('dialogcontent', '572669875@qq.com')
      this.$store.commit('showdialog', true)
    },
    changeMail () {
      this.$store.commit('dialogtitle', '修改邮箱')
      this.$store.commit('dialogcontent', '572669875@qq.com')
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
