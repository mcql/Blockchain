<template>
  <div class='dialog' v-if='showdialog'>
    <div class='dialog_content'>
      <h1>{{dialogtitle}}</h1>
      <input type='text' placeholder='提示内容' v-model='dialogcontent'>
      <div>
        <span @click='submit'>提交</span>
        <span @click='cancle'>取消</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submit () {
      if (this.change_num == 1) { //eslint-disable-line
        this.$store.state.changestatus[1].nickname = this.dialogcontent
      } else if (this.change_num == 5) { //eslint-disable-line
        this.$store.state.changestatus[5].mail.mail_status = true
        this.$store.state.changestatus[5].mail.mail = this.dialogcontent
      }
      this.$store.commit('showdialog', false)
    },
    cancle () {
      this.$store.commit('showdialog', false)
    }
  },
  computed: {
    change_num: {
      get: function () {
        return this.$store.state.change_num
      },
      set: function (newValue) {
        this.$store.state.change_num = newValue
      }
    },
    dialogtitle: {
      get: function () {
        return this.$store.state.dialogtitle
      },
      set: function (newValue) {
        this.$store.state.dialogtitle = newValue
      }
    },
    dialogcontent: {
      get: function () {
        return this.$store.state.dialogcontent
      },
      set: function (newValue) {
        this.$store.state.dialogcontent = newValue
      }
    },
    showdialog: {
      get: function () {
        return this.$store.state.showdialog
      },
      set: function (newValue) {
        this.$store.state.showdialog = newValue
      }
    }
  }
}
</script>

<style>
.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog_content {
  width: 450px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
.dialog_content h1 {
  width: 100%;
  height: 40px;
  color: #5f7bba;
  padding-left: 20px;
  padding-right: 30px;
  box-sizing: border-box;
  line-height: 40px;
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
}
.dialog_content input {
  width: 100%;
  text-indent: 28px;
  border-radius: 22px;
  border: 1px solid #cbcbcb;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  margin: 20px auto;
}
.dialog_content span {
  background-color: #5065bd;
  border-radius: 22px;
  display: inline-block;
  font-size: 16px;
  color: #fff;
  width: 168px;
  text-align: center;
  height: 43px;
  line-height: 43px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.dialog_content span:last-child {
  background: #efefef;
  color: #5065bd;
  border: 1px solid #cfcfcf;
}
.dialog_content > div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
</style>
