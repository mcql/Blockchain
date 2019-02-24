<template>
  <div class='part4'>
    <p>
      <span @click='show_dangqian' :class="show == 1 ? 'active_select':''">当前委托</span>
      <span @click='show_quanbu' :class="show == 2 ? 'active_select':''">全部委托</span>
      <span @click='show_lishi' :class="show == 3 ? 'active_select':''">历史成交</span>
    </p>
    <table v-if='data.length != 0' cellspacing='0' cellpadding='0'>
      <thead>
        <td>时间</td>
        <td>类别</td>
        <td>价格</td>
        <td>数量</td>
        <td>总额</td>
        <td>成交量</td>
        <td>平均成交价</td>
        <td>尚未成交</td>
        <td>订单来源</td>
        <td>状态/操作</td>
      </thead>
      <tr v-for='(item,index) in data' :key='index'>
        <td>{{item.a}}</td>
        <td>{{item.a}}</td>
        <td>{{item.a}}</td>
        <td>{{item.a}}</td>
        <td>{{item.a}}</td>
        <td>{{item.a}}</td>
        <td>{{item.a}}</td>
        <td>{{item.a}}</td>
        <td>{{item.a}}</td>
        <td>{{item.a}}</td>
      </tr>
    </table>
    <div class='no_data' v-else>
      <p>暂无数据</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: 1,
      data: [
        {
          a: '123123132'
        }
      ]
    }
  },
  methods: {
    show_dangqian () {
      this.show = 1
      // 发送请求 修改data值
    },
    show_quanbu () {
      this.show = 2
      // 发送请求 修改data值
    },
    show_lishi () {
      this.show = 3
      // 发送请求 修改data值
    }
  }
}
</script>

<style scoped>
.no_data {
  width: 100%;
  text-align: center;
  margin-top: 60px;
}
.part4 {
  height: calc(100% - 539px);
  overflow-y: scroll;
}
.part4::-webkit-scrollbar {
  display: none;
}
.part4 p span {
  display: inline-block;
  height: 52px;
  line-height: 52px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  padding: 0 10px;
  margin: 0 10px;
  color: #333;
}
.part4 span.active_select {
  color: #5065bd;
  border-bottom: 4px solid #5065bd;
}
table {
  line-height: 40px;
  width: 100%;
  text-align: center;
  border: 0;
}
table thead td {
  background-color: #f6f6f6;
  border-bottom: 1px solid #e3eaee;
}
</style>
