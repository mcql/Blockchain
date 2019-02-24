<template>
  <div class="part1">
    <div class="choose">
      <p @click="buy" :class="select_buy == true ? 'select_green':''">买入</p>
      <p @click="sell" :class="select_buy == true ? '':'select_red'">卖出</p>
    </div>
    <v-buy v-if='select_buy'></v-buy>
    <v-sell v-else></v-sell>
  </div>
</template>

<script>
import vBuy from '@/components/trade/Buy'
import vSell from '@/components/trade/Sell'
export default {
  components: {
    vBuy, vSell
  },
  data () {
    return {
      select_buy: true
    }
  },
  methods: {
    buy () {
      this.select_buy = true
    },
    sell () {
      this.select_buy = false
    }
  }
}
</script>

<style scoped>
.choose {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.choose p {
  width: 50%;
  text-align: center;
  float: left;
  height: 50px;
  line-height: 50px;
  color: #333;
  border: 1px solid #cbcbcb;
  font-size: 14px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  cursor: pointer;
}
.choose p:nth-child(2) {
  border-left: 0;
}
.choose p:first-child {
  border-right: 0;
}
.part1 {
  font-size: 12px;
  padding: 25px;
  box-shadow: inset 2px 2px 50px #eee;
  border-bottom: 1px solid #cbcbcb;
  height: 515px;
  box-sizing: border-box;
}
.choose p.select_red {
  color: #fff;
  background-color: #ff5534;
  border-color: #ff5534;
}
.choose p.select_green {
  color: #fff;
  background: #26c399;
  border-color: #26c399;
}
</style>
