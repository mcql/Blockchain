<template>
  <div class="aniu">
    <div class="trade_buy_top">
      <div class="buy_change">
        <p>市价交易</p>
        <div class="switch_wrap" :class="change ? '':'on'" @click="changex">
          <span></span>
        </div>
      </div>
      <p>可用--</p>
    </div>
    <div v-if="change">
      <div class="trade_tran">
        <p>买入价：</p>
        <input type="text" placeholder="买入价LCNY" v-model="buyprice">
      </div>
      <div class="trade_tran">
        <p>买入数：</p>
        <input type="text" placeholder="买入数BTC" v-model="buynum">
      </div>
      <p class="trade_buy_all">交易额： 0.00 LCNY</p>
      <div class="buybtn">买入BTC</div>
    </div>
    <div v-else>
      <div class="trade_tran">
        <p>金额：</p>
        <input type="text" placeholder="买入金额LCNY" v-model="buyprice">
      </div>
      <div class="buybtn">买入BTC</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buyprice: '',
      buynum: '',
      change: true
    }
  },
  methods: {
    changex () {
      if (this.change) {
        this.change = false
      } else {
        this.change = true
      }
    }
  }
}
</script>

<style scoped>
.switch_wrap.on {
  background: #5065bd;
  border-color: #5065bd;
}
.switch_wrap.on span {
  background: #5065bd;
  transform: translateX(13px);
}
.buybtn {
  margin-top: 40px;
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 16px;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;
  background: #26c399;
}
.trade_buy_all {
  font-size: 16px;
  margin: 18px auto;
}
.trade_tran p {
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 6px;
  color: #26c399;
}
.trade_tran input {
  background-color: #fff;
  border: 1px solid #cbcbcb;
  height: 44px;
  line-height: 44px;
  margin-right: 5px;
  width: 100%;
  text-indent: 15px;
  border-color: #cbcbcb;
  color: #333;
  font-size: 18px;
}
.trade_tran input::-webkit-input-placeholder {
  font-size: 12px;
}
.trade_buy_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 20px;
}
.buy_change {
  width: 142px;
  height: 42px;
  text-indent: 10px;
  border: 1px solid #cbcbcb;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
.switch_wrap {
  position: relative;
  display: inline-block;
  margin-left: 30px;
  width: 30px;
  height: 13px;
  border: 1px solid #a3a3a3;
  outline: none;
  border-radius: 16px;
  box-sizing: border-box;
  background: #a3a3a3;
  transition: border-color 0.3s, background-color 0.3s;
  vertical-align: middle;
}
.switch_wrap span {
  position: absolute;
  top: -4px;
  left: -1px;
  transition: all 0.3s ease;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  background-color: #fff;
}
</style>
