<template>
  <div class='part3'>
    <h5>最新价</h5>
    <div class='part3_tit'>
      <span>价格(BTC)</span>
      <span>数量(ETH)</span>
      <span>累计(ETH )</span>
    </div>
    <ul class='sell'>
      <li v-for='(item,index) in result1' :key='index'>
        <span>卖1 {{item.price}}</span>
        <span>{{item.num}}</span>
        <span>{{item.all}}</span>
      </li>
    </ul>
    <p class='about_trade' :class="true? 'add_color': 'reduce_color' ">
      <span>BTC</span>
      <i class='fa fa-arrow-up'></i>
      <span>0.03691900</span>
    </p>
    <ul class='buy'>
      <li v-for='(item,index) in result1' :key='index'>
        <span>卖1 {{item.price}}</span>
        <span>{{item.num}}</span>
        <span>{{item.all}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      result1: [
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        },
        {
          price: 0.037131,
          num: 0.569,
          all: 7.501
        }
      ]
    }
  }
}
</script>

<style scoped>
.about_trade {
  text-align: center;
}
.about_trade span {
  line-height: 73px;
  font-size: 18px;
  display: inline-block;
  padding: 0 10px;
  font-weight: 600;
}
.fa-arrow-up {
  line-height: 73px;
  font-size: 18px;
}
.part3 li > span {
  display: inline-block;
  line-height: 25px;
}
.part3 li > span:first-child {
  width: calc(28% + 40px);
}
.part3 {
  width: 317px;
  height: 100%;
  border-right: 1px solid #ececec;
}
.part3 h5 {
  height: 57px;
  line-height: 57px;
  padding: 0 7px;
  font-size: 18px;
  color: #5065bd;
  box-shadow: inset 0 2px 30px 0 #eaeaea;
  font-weight: 400;
}
.part3_tit {
  border-bottom: 1px solid #cbcbcb;
}
.part3_tit span {
  display: inline-block;
  line-height: 31px;
}
.part3_tit span:first-child {
  width: 28%;
  padding-left: 40px;
}
.part3_tit span:nth-child(2),
.part3 li > span:nth-child(2) {
  text-align: center;
  width: 25%;
}
.part3_tit span:nth-child(3),
.part3 li > span:nth-child(3) {
  width: 25%;
  text-align: right;
}
.sell li > span:first-child {
  text-indent: 20px;
  color: #ff5534;
}
.buy li > span:first-child {
  color: #26c399;
  text-indent: 20px;
}
.add_color {
  color: #26c399;
}
.reduce_color {
  color: #ff5534;
}
</style>
