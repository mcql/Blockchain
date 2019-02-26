<template>
  <div class='content'>
    <img src='@/assets/images/invite.png' alt>
    <div class='copies'>
      <div class='copy'>
        <h5>邀请码</h5>
        <div>
          <p id='num'>SOPEEZLZ</p>
          <p class='btn' data-clipboard-target='#num' data-clipboard-text @click='copy'>点击复制</p>
        </div>
      </div>
      <div class='copy'>
        <h5>邀请链接</h5>
        <div>
          <p id='link'>https://otc.loex.io/register?inviteCode=SOPEEZLZ</p>
          <p class='btn' data-clipboard-target='#link' data-clipboard-text @click='copy'>点击复制</p>
        </div>
      </div>
    </div>
    <div class='guanli'>
      <h5>邀请管理</h5>
      <div>
        <p>邀请总人数
          <span>0</span>
        </p>
        <p>已认证人数
          <span>0</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  methods: {
    copy () {
      let clipboard = new Clipboard('.btn')
      clipboard.on('success', e => {
        alert('copy success')
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        alert('failed')
        clipboard.destroy()
      })
    }
  }
}
</script>

<style scoped>
.copy h5,
.guanli h5 {
  font-size: 18px;
  margin-bottom: 17px;
  display: block;
  color: #000;
  font-weight: 700;
}
.copy p {
  line-height: 44px;
  color: #0d1e3e;
  font-size: 14px;
}
.copy > div {
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  border: 1px solid #e8e8e8;
  padding: 0 20px;
  border-radius: 8px;
}
.copy > div > p {
  width: 100%;
  text-align: left;
}
.copy > div > p:nth-child(2) {
  width: 80px;
  margin-left: 40px;
  padding-left: 10px;
  border-left: 1px solid #e8e8e8;
  cursor: pointer;
  flex-shrink: 0;
  text-align: center;
}
.copies,
.guanli,
.guanli > div {
  display: flex;
  justify-content: flex-start;
  width: 86.97%;
  margin: 40px auto;
}
.guanli > div {
  width: 100%;
  height: 66px;
  background-color: #7771fd;
  color: #fff;
  line-height: 66px;
  text-indent: 20px;
  border-radius: 10px;
  font-size: 14px;
}
.guanli > div span{
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
}
.guanli {
  flex-direction: column;
}
.guanli>div>p:first-child{
  width: 180px;
  border-right: 1px solid #fff;
}
.copy {
  width: 30%;
}
.copy:nth-child(2) {
  width: 100%;
  margin-left: 80px;
}
</style>
