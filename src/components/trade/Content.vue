<template>
  <div class='trade'>
    <v-left></v-left>
    <div class='trade_right'>
      <div class='trade_top'>
        <p>
          <span>0.03695100</span>
          <span>+8.55%</span>
        </p>
        <ul>
          <li>
            <p>最高价</p>
            <p>0.03722800</p>
          </li>
          <li>
            <p>最低价</p>
            <p>0.03484400</p>
          </li>
          <li>
            <p>24H成交量</p>
            <p>20764.47900 ETH</p>
          </li>
          <li>
            <p>24H成交额</p>
            <p>751.38525316 BTC</p>
          </li>
        </ul>
      </div>
      <div class='trade_part'>
        <v-part3></v-part3>
        <div class='partx'>
          <v-kline></v-kline>
          <v-part4></v-part4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vLeft from '@/components/trade/Left'
import vPart3 from '@/components/trade/Part3'
import vKline from '@/components/trade/Kline'
import vPart4 from '@/components/trade/Part4'
export default {
  components: {
    vLeft,
    vPart3,
    vKline,
    vPart4
  }
}
</script>

<style scoped>
.partx {
  width: 100%;
}
.trade_part {
  height: calc(100% - 58px);
  display: flex;
  justify-content: flex-start;
}
.trade_right {
  width: 100%;
}
.trade_top {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 58px;
  padding: 0 30px;
  border-bottom: 1px solid #ececec;
  box-sizing: border-box;
}
.trade_top > p > span:first-child {
  font-size: 24px;
}
.trade_top > p > span:nth-child(2) {
  background: #26c399;
  border-color: #26c399;
  color: #fff;
  height: 22px;
  line-height: 22px;
  border: 1px solid #cbcbcb;
  margin: 3px 15px;
}
.trade_top ul {
  display: flex;
  justify-content: flex-start;
  text-align: center;
  margin-left: 60px;
}
.trade_top ul li {
  margin: 0 20px;
}
.trade {
  display: flex;
  justify-content: flex-start;
}
.trade_top ul li > p:first-child {
  font-size: 12px;
  color: #999;
}
.trade_top ul li > p:last-child {
  font-size: 14px;
  color: #333;
}
</style>
