<template>
  <div class='app'>
    <div class='appdown'>
      <h5>Download APP, Trade Anytime</h5>
      <p>Include iOS、Android、Windows</p>
      <div>APP Download</div>
      <img class='hide' src='@/assets/images/ewm.jpg' alt>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    /* eslint-disable */
    $('.appdown div,.appdown img').hover(
      function() {
        $('.appdown img').removeClass('hide');
        $(this).addClass('active_app');
      },
      function() {
        $('.appdown img').addClass('hide');
        $(this).removeClass('active_app');
      }
    );
    /* eslint-enable */
  }
}
</script>

<style scoped>
.app {
  height: 570px;
  width: 100%;
  background: url(../../assets/images/appdown_bg.png) no-repeat top;
  overflow: hidden;
}
.appdown {
  width: 86.97%;
  margin: 86px auto 0;
}
.appdown h5 {
  font-size: 45px;
  margin-bottom: 15px;
  line-height: 64px;
  font-weight: normal;
}
.appdown p {
  font-size: 20px;
}
.appdown div {
  width: 208px;
  height: 68px;
  line-height: 68px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  background: #5065bd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 30px;
}
.appdown img {
  width: 202px;
}
.active_app {
  background-color: #1c263b !important;
}
</style>
