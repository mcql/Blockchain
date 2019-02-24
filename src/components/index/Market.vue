<template>
  <div class='market'>
    <div class='choosemarket'>
      <p class='blue_btn'>全部行情</p>
      <p>主区</p>
      <p>创新区</p>
    </div>
    <div class='market_table'>
      <ul class='choose_bi'>
        <li>
          <div>
            <span>
              <i class='fa fa-star'></i>自选
            </span>
            <span class='blue_line'>
              <i class='fa fa-eur'></i>LCNY
            </span>
            <span>
              <i class='fa fa-usd'></i>USDT
            </span>
            <span>
              <i class='fa fa-bitcoin'></i>BTC
            </span>
          </div>
          <div class='search'>
            <i class='fa fa-search'></i>
            <input type='text' name id placeholder='搜索'>
          </div>
        </li>
      </ul>
      <ul class='market_detail'>
        <li>
          <span>市场</span>
          <span>最新价</span>
          <span>最高价</span>
          <span>最低价</span>
          <span>涨跌</span>
          <span>24H成交量</span>
          <span>操作</span>
        </li>
        <div v-if='result != null'>
            <li v-for='(item,index) in result' :key='index'>
            <span>{{item.name}}</span>
            <span>{{item.price1}}</span>
            <span>{{item.price2}}</span>
            <span>{{item.price3}}</span>
            <span>{{item.add_or_reduce}}</span>
            <span>{{item.price4}}</span>
            <span class='tosell'><b>去交易</b></span>
            </li>
        </div>
        <p v-else class='no-data'>暂无数据</p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      result: [
        {
          name: 'EOS/LCNY',
          price1: 826.02,
          price2: '24538.94 LCNY',
          price3: '24203.25 LCNY',
          add_or_reduce: '+0.3%',
          price4: '1791.19990 BTC',
          state: 1
        }, {
          name: 'EOS/LCNY',
          price1: 826.02,
          price2: '24538.94 LCNY',
          price3: '24203.25 LCNY',
          add_or_reduce: '-0.3%',
          price4: '1791.19990 BTC',
          state: 0
        }, {
          name: 'EOS/LCNY',
          price1: 826.02,
          price2: '24538.94 LCNY',
          price3: '24203.25 LCNY',
          add_or_reduce: '+0.3%',
          price4: '1791.19990 BTC',
          state: 1
        }, {
          name: 'EOS/LCNY',
          price1: 826.02,
          price2: '24538.94 LCNY',
          price3: '24203.25 LCNY',
          add_or_reduce: '+0.3%',
          price4: '1791.19990 BTC',
          state: 1
        }, {
          name: 'EOS/LCNY',
          price1: 826.02,
          price2: '24538.94 LCNY',
          price3: '24203.25 LCNY',
          add_or_reduce: '-0.3%',
          price4: '1791.19990 BTC',
          state: 0
        }, {
          name: 'EOS/LCNY',
          price1: 826.02,
          price2: '24538.94 LCNY',
          price3: '24203.25 LCNY',
          add_or_reduce: '+0.3%',
          price4: '1791.19990 BTC',
          state: 1
        }, {
          name: 'EOS/LCNY',
          price1: 826.02,
          price2: '24538.94 LCNY',
          price3: '24203.25 LCNY',
          add_or_reduce: '-0.3%',
          price4: '1791.19990 BTC',
          state: 0
        }, {
          name: 'EOS/LCNY',
          price1: 826.02,
          price2: '24538.94 LCNY',
          price3: '24203.25 LCNY',
          add_or_reduce: '+0.3%',
          price4: '1791.19990 BTC',
          state: 1
        }
      ]
    }
  },
  mounted () {
    /* eslint-disable */
      $('.choosemarket p').on('click',function(){
          $('.choosemarket p').removeClass('blue_btn')
          $(this).addClass('blue_btn')
      })
      $('.choose_bi span').on('click',function(){
          $('.choose_bi span').removeClass('blue_line')
          $(this).addClass('blue_line')
      })
    /* eslint-enable */
  }
}
</script>

<style scoped>
.no-data{
    width: 100%;
    line-height: 200px;
    text-align: center;
}
.market_detail li span {
  width: 14%;
  text-align: center;
  line-height: 45px;
  color: #666666;
  font-size: 14px;
}
.market_table {
  margin-top: 32px;
  box-shadow: 0 5px 30px 5px #e7e7e7;
  border-radius: 2px;
}
.market_table li:first-child,.market_detail li {
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.market_table li:first-child div span {
  color: #5f7bba;
  font-size: 18px;
  cursor: pointer;
  padding: 0 26px;
  height: 48px;
  line-height: 48px;
  display: inline-block;
  box-sizing: border-box;
}
.market_table li:first-child div span .fa {
  margin-right: 5px;
}
.market {
  width: 86.97%;
  margin: 30px auto 0;
}
.choosemarket {
  display: flex;
}
.choosemarket p {
  width: 140px;
  text-align: center;
  font-size: 16px;
  color: #666;
  border: 1px solid #999;
  border-radius: 38px;
  height: 44px;
  line-height: 44px;
  margin-right: 28px;
  transition: all 0.3s ease;
}
.search {
  position: relative;
}
.search .fa {
  position: absolute;
  top: 0;
  left: 18px;
  line-height: 30px;
  color: #999999;
}
.search input {
  width: 185px;
  height: 28px;
  margin-right: 10px;
  border: 1px solid #d7d7d7;
  border-radius: 37px;
  background: #f4f4f4;
  outline: none;
  color: #999999;
  text-indent: 45px;
}
.market_detail li {
    border-bottom: 0;
    padding: 10px 0;
}
.tosell b{
    width: 82px;
    border: 1px solid #5065bd;
    border-radius: 38px;
    padding: 0 19px;
    line-height: 32px;
    height: 32px;
    display: inline-block;
    transition: all .3s ease;
}
.market_detail li:hover{
    background-color: #dfdbdb;
}
.market_detail li:hover .tosell b,.blue_btn{
    background-color: #5065bd;
    color: #fff!important;
}
.blue_line{
    border-bottom: 2px solid #5065bd;
}
</style>
