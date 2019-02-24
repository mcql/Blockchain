<template>
  <div class='top_nav'>
    <div>
      <img src='@/assets/images/logo.png' alt>
      <ul>
        <li>首页</li>
        <li>币币交易</li>
        <li>法币交易</li>
        <li @mouseover='shownav1_detail' @mouseout='hidenav1_detail'>更多</li>
      </ul>
      <div class='nav1 hide' @mouseover='shownav1_detail' @mouseout='hidenav1_detail'>
        <ul>
          <li>LUSD白皮书</li>
          <li>超级糖果盒</li>
          <li>上币申请</li>
          <li>API文档</li>
        </ul>
      </div>
    </div>
    <div>
      <ul>
        <li>登录</li>
        <li>注册</li>
        <li @mouseover='shownav2_detail' @mouseout='hidenav2_detail'>App下载</li>
        <li @mouseover='shownav3_detail' @mouseout='hidenav3_detail'>简体中文
          <i class='fa fa-angle-down'></i>
        </li>
      </ul>
      <div class='nav2 hide' @mouseover='shownav2_detail' @mouseout='hidenav2_detail'>
        <img src='@/assets/images/ewm.jpg' alt>
        <p>手机扫码下载App</p>
      </div>
      <div class='nav3 hide' @mouseover='shownav3_detail' @mouseout='hidenav3_detail'>
        <ul>
          <li>简体中文</li>
          <li>English</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    /* eslint-disable */
    shownav1_detail () {
      $('.nav1').removeClass('hide')
    },
    hidenav1_detail () {
      $('.nav1').addClass('hide')
    },
    shownav2_detail () {
      $('.nav2').removeClass('hide')
    },
    hidenav2_detail () {
      $('.nav2').addClass('hide')
    },
    shownav3_detail () {
      $('.nav3').removeClass('hide')
    },
    hidenav3_detail () {
      $('.nav3').addClass('hide')
    }
    /* eslint-enable */
  }
}
</script>

<style scoped>
  .top_nav {
    width: 100%;
    padding: 0 20px;
    height: 72px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #151d2c;
  }
  .top_nav > div {
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
  }
  .top_nav > div > img {
    max-height: 60%;
  }
  .top_nav > div > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }
  .top_nav > div > ul > li {
    padding: 0 20px;
    font-size: 14px;
    height: 72px;
    line-height: 72px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .top_nav > div > ul > li:hover {
    color: #5065bd;
  }
  .top_nav > div > ul > li > span {
    padding: 0 5px;
  }
  .fa {
    margin-left: 5px;
  }
  .nav1,
  .nav2,
  .nav3 {
    position: absolute;
    top: 60px;
    background-color: #151d2c;
  }
  .nav1 li,
  .nav3 li {
    min-width: 150px;
    line-height: 32px;
    text-indent: 17px;
    color: #fff;
  }
  .nav1 ul,
  .nav2,
  .nav3 ul {
    border: 1px solid #81839e;
  }
  .nav1,
  .nav3 {
    right: 0;
  }
  .nav2 {
    text-align: center;
    left: 30%;
    min-width: 150px;
    padding: 20px 10px;
  }
  .nav2 img {
    max-width: 131px;
  }
  .nav2 p {
    color: #fff;
    line-height: 2;
    font-size: 14px;
  }
  .nav1 li:hover,
  .nav3 li:hover {
    color: #5065bd;
    transition: 0.5s ease;
  }
</style>
