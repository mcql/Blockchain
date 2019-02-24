<template>
  <div class="banner">
    <canvas-line></canvas-line>
    <v-top></v-top>
    <v-part1></v-part1>
    <v-part2></v-part2>
    <v-swiper></v-swiper>
  </div>
</template>

<script>
import canvasLine from '@/components/index/CanvasLine.vue'
import vTop from '@/components/index/Top.vue'
import vPart1 from '@/components/index/Part1.vue'
import vPart2 from '@/components/index/Part2.vue'
import vSwiper from '@/components/index/Swiper.vue'
export default {
  components: { canvasLine, vTop, vPart1, vPart2, vSwiper }
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 732px;
  position: relative;
}
.top_nav {
  background-color: rgba(255,255,255,0)!important;
}
</style>
