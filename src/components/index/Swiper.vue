<template>
  <div class='swiper_banner'>
    <div class='swiper-container' id='swiper1'>
      <div class='swiper-wrapper'>
        <div class='swiper-slide'>
          <img src='@/assets/images/tx1.png' alt>
        </div>
        <div class='swiper-slide'>
          <img src='@/assets/images/tx2.png' alt>
        </div>
        <div class='swiper-slide'>
          <img src='@/assets/images/tx3.png' alt>
        </div>
        <div class='swiper-slide'>
          <img src='@/assets/images/tx5.png' alt>
        </div>
        <div class='swiper-slide'>
          <img src='@/assets/images/tx6.png' alt>
        </div>
        <div class='swiper-slide'>
          <img src='@/assets/images/tx7.png' alt>
        </div>
      </div>
      <div class='swiper-button-prev'></div>
      <!--左箭头-->
      <div class='swiper-button-next'></div>
      <!--右箭头-->
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    /* eslint-disable */
    var mySwiper = new Swiper('#swiper1', {
      loop: true,
      autoplay: true,
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    /* eslint-enable */
  }
}
</script>

<style scoped>
.swiper_banner {
  width: 86.97%;
  margin: 30px auto 0;
}
.swiper_banner .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    background-image: url(../../assets/images/left_banner.png);
    left: 0;
}
.swiper_banner .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    background-image: url(../../assets/images/right_banner.png);
    right: 0;
}
.swiper_banner img{max-width: 100%;}
</style>
