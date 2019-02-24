<template>
  <div class='left'>
    <div class='top'>
      <span class='bi_type'>BTC / LCNY</span>
      <span @mouseenter='enterchs' @mouseleave='leavechs' class='bi_change'>选择市场
        <i class='fa fa-angle-down'></i>
        <v-chsema v-if='showchs == 1'></v-chsema>
      </span>
    </div>
    <v-part1></v-part1>
    <div class='trade_jiaoyi'>最新成交</div>
    <v-part2></v-part2>
  </div>
</template>

<script>
import vPart1 from '@/components/trade/Part1'
import vPart2 from '@/components/trade/Part2'
import vChsema from '@/components/trade/Chsema'
export default {
  data () {
    return {
      showchs: 0
    }
  },
  components: {
    vPart1,
    vPart2,
    vChsema
  },
  methods: {
    enterchs () {
      this.showchs = 1
    },
    leavechs () {
      this.showchs = 0
    }
  }
}
</script>

<style scoped>
.top {
  display: flex;
  padding-left: 24px;
  justify-content: space-between;
  border-bottom: 1px solid #cbcaca;
}
.top span {
    display: block;
}
.left {
  width: 338px;
  border-bottom: 1px solid #cbcaca;
  color: #0d1e3e;
  box-sizing: border-box;
  border-right: 1px solid #cbcbcb;
  flex-shrink: 0;
  position: relative;
}
.bi_type {
  font-size: 24px;
  color: #333;
  line-height: 57px;
  display: inline-block;
}
.bi_change {
  height: 57px;
  line-height: 57px;
  margin-right: 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
}
.fa-angle-down {
  font-size: 26px;
  margin-left: 5px;
}
.trade_jiaoyi {
  height: 56px;
  line-height: 56px;
  background: #fff;
  color: #5065bd;
  font-size: 18px;
  text-indent: 20px;
}
</style>
