<template>
  <div class='recommend'>
    <ul>
      <li v-for='(item,index) in result' :key='index'>
        <h4>
          {{item.name}}
          <span :class="item.statex == 1 ? 'add':'reduce'">{{item.add_or_reduce}}</span>
        </h4>
        <h5 :class="item.statex == 1 ? 'add':'reduce'">{{item.price}}</h5>
        <p>成交额：{{item.allprice}}</p>
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
          name: 'BTC/LCNY',
          add_or_reduce: '-0.45%',
          price: 24493.93,
          allprice: 43202138.8,
          statex: 0
        },
        {
          name: 'BTC/LCNY',
          add_or_reduce: '-0.45%',
          price: 24493.93,
          allprice: 43202138.8,
          statex: 1
        },
        {
          name: 'BTC/LCNY',
          add_or_reduce: '+0.45%',
          price: 24493.93,
          allprice: 43202138.8,
          statex: 1
        },
        {
          name: 'BTC/LCNY',
          add_or_reduce: '-0.45%',
          price: 24493.93,
          allprice: 43202138.8,
          statex: 0
        },
        {
          name: 'BTC/LCNY',
          add_or_reduce: '+0.45%',
          price: 24493.93,
          allprice: 43202138.8,
          statex: 1
        }
      ]
    }
  }
}
</script>

<style scoped>
.recommend {
  width: 86.97%;
  margin: 30px auto 0;
}
.recommend ul {
  display: flex;
  justify-content: space-between;
}
.recommend li {
  width: 19.2%;
  height: 174px;
  background-color: rgb(21, 29, 44);
  padding: 20px 12px 0;
  box-sizing: border-box;
}
.recommend li h4 {
  font-size: 24px;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.recommend li h4 span {
  font-size: 12px;
}
.recommend li h5 {
  font-size: 24px;
  margin-top: 20px;
}
.recommend li p {
  font-size: 16px;
  color: #999;
  margin-top: 18px;
}
.add{
    color: rgb(38, 195, 153);
}
.reduce{
    color: rgb(255, 85, 52);
}
</style>
