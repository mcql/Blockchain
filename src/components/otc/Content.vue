<template>
  <div class="otc_content">
    <div class="otc_change">
      <span @mouseover="showbuy" @mouseout="hidebuy">购买</span>
      <span @mouseenter="showsell" @mouseout="hidesell">出售</span>
    </div>
    <div @mouseover="showbuy" @mouseout="hidebuy" class="otc_title otc_title_buy" v-show="buy">
      <span>LCNY</span>
      <span>USDT</span>
    </div>
    <div @mouseenter="showsell" @mouseout="hidesell" class="otc_title otc_title_sell" v-show="sell">
      <span>LCNY</span>
      <span>USDT</span>
    </div>
    <div class="content">
      <table cellpadding="0" cellspacing="0" style="width:100%;">
        <thead>
          <td>商家（成单数 / 信用度）</td>
          <td>剩余 (USDT)</td>
          <td>限额 (CNY)</td>
          <td>单价： (CNY)</td>
          <td>支付方式</td>
          <td>操作</td>
        </thead>
        <tbody>
          <tr>
            <td>搬砖局局长( 0 / 100.00% )</td>
            <td>6000.00</td>
            <td>200.00 - 40000.00</td>
            <td>7.22</td>
            <td>银行卡</td>
            <td>
              <div class="buy_btn">购买</div>
            </td>
          </tr>
          <tr>
            <td>搬砖局局长( 0 / 100.00% )</td>
            <td>6000.00</td>
            <td>200.00 - 40000.00</td>
            <td>7.22</td>
            <td>银行卡</td>
            <td>
              <div class="buy_btn">购买</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buy: false,
      sell: false
    }
  },
  methods: {
    showbuy () {
      this.buy = true
    },
    hidebuy () {
      this.buy = false
    },
    showsell () {
      this.sell = true
    },
    hidesell () {
      this.sell = false
    }
  }
}
</script>

<style scoped>
.content tbody tr:hover {
  background-color: #eeeeee;
}
.buy_btn {
  width: 52px;
  margin: 0 auto;
  height: 24px;
  line-height: 24px;
  padding: 0 14px;
  border-radius: 14px;
  background: #26c399;
  color: #fff;
}
.content tbody td {
  height: 56px;
  color: #0d1e3e;
  line-height: 56px;
  font-size: 12px;
}
.content thead td {
  font-size: 12px;
  font-weight: 400;
  color: #5065bd;
  width: 1%;
  height: 40px;
  line-height: 40px;
}
.content td:first-child {
  text-align: left;
  text-indent: 28px;
}
.content {
  padding: 0 20px 20px;
  min-height: calc(100vh - 300px);
  margin-bottom: 40px;
}
.content,
.content table {
  text-align: center;
  background-color: #fff;
}
.otc_title {
  position: absolute;
  top: 55px;
  padding: 15px 30px;
  box-shadow: 0 0 20px #ededed;
  background: #fff;
  border-radius: 10px;
  z-index: 9;
}
.otc_title_buy {
  left: 0;
}
.otc_title_sell {
  left: 200px;
}
.otc_title_buy span:hover {
  background: #26c399;
  color: #fff;
}
.otc_title_sell span:hover {
  background: #ff5534;
  color: #fff;
}
.otc_title span {
  float: left;
  margin-right: 10px;
  padding: 0 25px;
  height: 38px;
  line-height: 38px;
  cursor: pointer;
  border-radius: 38px;
  box-sizing: border-box;
}
.otc_change {
  border-bottom: 1px solid #e3eaee;
  padding: 10px 10px 0 55px;
  height: 80px;
  box-sizing: border-box;
}
.otc_content {
  width: 86.97%;
  max-width: 1920px;
  position: relative;
  z-index: 1;
  margin: 32px auto 0;
  padding: 0 20px;
  box-shadow: 0 5px 30px 5px #e7e7e7;
  box-sizing: border-box;
}
.otc_change span {
  height: 60px;
  color: #0d1e3e;
  line-height: 60px;
  font-size: 16px;
  width: 106px;
  border-radius: 10px 10px 0 0;
  text-align: center;
  cursor: pointer;
  position: relative;
  z-index: 10;
  background: #fff;
  display: inline-block;
}
.otc_change span:nth-child(2) {
  margin-left: 80px;
}
.otc_change span:hover {
  box-shadow: 0 -3px 10px #ededed;
}
.otc_change span:first-child:hover {
  color: #26c399;
}
.otc_change span:nth-child(2):hover {
  color: #ff5534;
}
</style>
