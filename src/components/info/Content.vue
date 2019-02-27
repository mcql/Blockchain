<template>
  <div class='content' @click="hidem">
    <h1>实名认证</h1>
    <div class='base'>
      <h5>基本信息</h5>
      <div>
        <p>国籍</p>
        <input type='text' v-model='countrya' readonly @click.stop='showx'>
        <ul v-show='show1' class='country'>
          <li v-for="(item,index) in country" @click="countrym(item)" :key='index'>{{item}}</li>
        </ul>
      </div>
      <div>
        <p>姓名</p>
        <input type='text' placeholder='请输入姓名'>
      </div>
      <div>
        <p>证件类型</p>
        <input type='text' v-model='type' readonly @click.stop='showy'>
        <ul v-show='show2' class="type">
          <li v-for="(item,index) in typem" :key='index' @click="typea(item)" >{{item}}</li>
        </ul>
      </div>
      <div>
        <p>证件号码</p>
        <input type='text' placeholder='请输入证件号码'>
      </div>
    </div>
    <h5>请上传资料</h5>
    <div class='uploads'>
      <div>
        <p>身份证正面照片</p>
        <label for="file1">
          <input type="file" id='file1' @change="upload1"/>
          <div class="kuang">
            <p v-show="showtext">点击上传</p>
            <img src="" alt="" id='portrait'>
          </div>
        </label>
      </div>
      <div>
        <p>身份证背面照片</p>
        <label for="file2">
          <input type="file" id='file2' />
          <div class="kuang">
            <p>点击上传</p>
          </div>
        </label>
      </div>
      <div>
        <p>人脸照片</p>
        <label for="file3">
          <input type="file" id='file3' />
          <div class="kuang">
            <p>点击上传</p>
          </div>
        </label>
      </div>
    </div>
    <div class="submit_btn">确认提交</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countrya: '请选择国籍',
      type: '请选择证件类型',
      show1: false,
      show2: false,
      country: ['中国1', '中国2', '中国3', '中国4'],
      typem: ['身份证', '护照'],
      showtext: true
    }
  },
  methods: {
    upload1 (e) {
      let filex = e.target.files[0]
      if (filex) {
        console.log(filex)
        var fr = new FileReader()
        fr.onload = function () {
          document.getElementById('portrait').src = fr.result // fr.result 图片转为bs64
        }
        fr.readAsDataURL(filex)
        this.showtext = false
      }
    },
    typea (item) {
      this.type = item
    },
    countrym (item) {
      this.show1 = false
      this.countrya = item
    },
    showx () {
      this.show1 = true
    },
    showy () {
      this.show2 = true
    },
    hidem () {
      this.show1 = false
      this.show2 = false
    }
  }
}
</script>

<style scoped>
.submit_btn{
  width: 465px;
  margin: 60px auto;
  border-radius: 38px;
  transition: all .3s ease;
  height: 52px;
  font-size: 16px;
  background: #5065bd;
  color: #fff;
  text-align: center;
  line-height: 52px;
  cursor: pointer;
}
.kuang img{
  max-height: 100%;
  margin: 0 auto;
}
.kuang p{
  margin: 0!important;
}
.uploads {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 100px;
  box-sizing: border-box;
}
.uploads input{
  display: none;
}
.uploads p{
  font-size: 14px;
  margin: 20px auto 8px;
  color: #0d1e3e;
}
.uploads > div {
  width: 25%;
}
.kuang{
  width: 100%;
  height: 160px;
  border: 1px dashed #c5c5c5;
  line-height: 160px;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
}
.content {
  width: 86.97%;
  max-width: 1920px;
  position: relative;
  z-index: 1;
  margin: 32px auto 60px;
  padding: 0 20px;
  -webkit-box-shadow: 0 5px 30px 5px #e7e7e7;
  box-shadow: 0 5px 30px 5px #e7e7e7;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: calc(100vh - 400px);
  overflow: hidden;
}
.content h1 {
  font-size: 24px;
  color: #333;
  text-align: center;
  padding: 16px 0 40px;
  font-weight: 400;
}
.content h5 {
  width: 100%;
  padding: 20px 0 0 100px;
  font-size: 18px;
  color: #5065bd;
  font-weight: 700;
}
.base {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.base > div {
  width: 50%;
  padding: 0 60px 0 100px;
  box-sizing: border-box;
  position: relative;
}
.base > div > ul {
  width: calc(100% - 160px);
  position: absolute;
  left: 100px;
  top: 94px;
  z-index: 999;
  background: #fff;
  border: 1px solid #e3eaee;
}
.base > div > ul > li {
  padding: 5px 10px;
  text-align: left;
  line-height: 24px;
  height: 24px;
  color: #0d1e3e;
}
.base > div > ul > li:hover {
  color: #5065bd;
  cursor: pointer;
  background-color: #eaeaea;
}
.base > div p {
  font-size: 14px;
  color: #666;
  margin: 20px 0 10px;
  text-align: left;
}
.base > div input {
  text-align: left;
  height: 44px;
  line-height: 44px;
  text-indent: 10px;
  position: relative;
  z-index: 10;
  border-radius: 22px;
  background-color: #fff;
  border: 1px solid #cbcbcb;
  width: 100%;
  color: #0d1e3e;
  box-shadow: none;
  letter-spacing: 1px;
}
input[readonly='readonly'] {
  cursor: pointer;
}
</style>
