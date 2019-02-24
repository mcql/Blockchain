<template>
  <div class="notice">
    <div class="swiper-container" id="swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">别后时时念子衿，魂牵梦绕数晴阴。</div>
        <div class="swiper-slide">满怀寂寞愁难诉，一片痴情恨不禁。</div>
        <div class="swiper-slide">风袭扰，雨欺侵，问君可负十年心。</div>
        <div class="swiper-slide">此番若是重相见，该笑眉头褶皱深。</div>
      </div>
    </div>
    <i class="fa fa-bullhorn"></i>
  </div>
</template>

<script>
export default {
  mounted () {
    /* eslint-disable */
    var swiper = new Swiper("#swiper2", {
      loop:true,
      autoplay: true,
      direction: "vertical",
    })
    /* eslint-enable */
  }
}
</script>

<style scoped>
.notice{
    background: #151d2c;
    border: none;
    margin: -30px auto 0;
    width: 86.97%;
    height: 44px;
    overflow: hidden;
    border-radius: 2px;
    position: relative;
}
.notice .swiper-slide{
    line-height: 44px;
    color: #fff;
    padding-left: 60px;
    box-sizing: border-box;
}
.fa{
    position: absolute;
    top: 0;
    left: 20px;
    color: #999999;
    font-size: 20px;
    line-height: 44px;
}
</style>
