<template>
  <div class='jiaoyi'>
    <div>
      <span>时间</span>
      <span>价格(BTC)</span>
      <span>成交量(ETH)</span>
    </div>
    <ul>
      <li v-for='(item, index) in result' :key='index'>
        <span>{{item.time}}</span>
        <span>{{item.price1}}</span>
        <span>{{item.price2}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      result: [
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        },
        {
          time: '14:07:18',
          price1: 0.03694,
          price2: 2.555
        }
      ]
    }
  }
}
</script>

<style scoped>
.jiaoyi ul {
  height: 410px;
  overflow-y: auto;
}
.jiaoyi li {
  height: 34px;
  line-height: 34px;
  background-color: #fafafa;
}
.jiaoyi > div {
  border-bottom: 1px solid transparent;
  background-color: #f6f6f6;
  height: 34px;
  line-height: 34px;
}
.jiaoyi li > span,
.jiaoyi > div span {
  display: inline-block;
  color: #7885bc;
}
.jiaoyi li > span:first-child,
.jiaoyi > div span:first-child {
  width: 25%;
  padding-left: 20px;
}
.jiaoyi li > span:nth-child(2),
.jiaoyi li > span:last-child,
.jiaoyi > div span:nth-child(2),
.jiaoyi > div span:last-child {
  width: 32%;
  text-align: center;
}
.jiaoyi ul::-webkit-scrollbar {
    display: none;
}
.jiaoyi ul li:hover{
    background-color: #eeeeee;
}
</style>
