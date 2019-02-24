<template>
  <div class="title">
    <span v-for="(item,index) in result" :key="index">
      <router-link
        :to="{ name : 'Article', query: { id: item.id } }"
        :class="item.id ==  xid ? 'on' : ''"
      >{{item.title}}</router-link>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      result: [
        {
          title: '注册协议',
          id: 123456
        },
        {
          title: '隐私条款',
          id: 1231
        },
        {
          title: '法律声明',
          id: 1221
        },
        {
          title: '费率',
          id: 111
        },
        {
          title: 'API文档',
          id: 2231
        },
        {
          title: '关于我们',
          id: 123122
        },
        {
          title: '上币申请',
          id: 3214
        }
      ],
      xid: this.$route.query.id
    }
  },
  watch: {
    $route (to, from) {
      this.xid = to.query.id
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 35px;
  padding: 0 20px;
}
.title span a {
  height: 38px;
  font-size: 16px;
  line-height: 38px;
  padding: 0 28px;
  cursor: pointer;
  color: #5065bd;
  border: 1px solid #cfcfcf;
  border-radius: 19px;
  margin-right: 48px;
  margin-bottom: 19px;
  display: inline-block;
}
.title span:hover a {
  background-color: #5065bd;
  color: #fff;
}
a.on {
  background-color: #5065bd;
  color: #fff !important;
}
</style>
