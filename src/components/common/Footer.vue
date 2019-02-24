<template>
  <div class="footer">
    <div class="footerContent">
      <div class="footer_left">
        <img src="@/assets/images/logo.png" alt>
        <p>不要用蝴蝶的斑斓来形容我</p>
        <p>不要许我以归宿</p>
        <p>天空中无数房子，紧闭门和窗户</p>
        <p>果实与花朵香甜的味道，不断逸散</p>
        <p>灯光，也一直亮着</p>
      </div>
      <div class="footer_right">
        <ul>
          <li>Terms</li>
          <li><router-link :to="{ name : 'Article', query: { id: 111 } }">Registration</router-link></li>
          <li>Privacy</li>
          <li>Law</li>
          <li>Rate</li>
        </ul>
        <ul>
          <li>Support</li>
          <li>Help Center</li>
          <li>Coin Center</li>
          <li>API Doc</li>
          <li>Windows</li>
        </ul>
        <ul>
          <li>About</li>
          <li>Aboutus</li>
          <li>Application</li>
          <li>Notice</li>
        </ul>
      </div>
    </div>
    <p>Copyright © 2018 Ming. All rights reserved</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #0c1317;
  color: #999999;
}
.footer > p {
  text-align: center;
  line-height: 80px;
  font-size: 14px;
  color: #fff;
}
.footerContent {
  width: 86.97%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.footer_right {
  display: flex;
  justify-content: space-between;
  margin-top: 110px;
}
.footer_left img {
  height: 90px;
  margin: 20px 0 20px;
}
.footer_left p,
.footer_right li {
  font-size: 14px;
  color: #999999;
  line-height: 24px;
  margin-bottom: 8px;
}
.footer_right li a{
  color: #999999;
}
.footer_right li:first-child {
  font-size: 16px;
  color: #fff;
}
.footer_right li {
  margin-left: 40px;
}
</style>
