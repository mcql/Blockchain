<template>
  <div class='content'>
    <p>2018-12-01 16:56:39</p>
    <h5>{{id}}</h5>
    <div>
      <p>厌浥行露，岂不夙夜，谓行多露。</p>
      <p>谁谓雀无角？何以穿我屋？谁谓女无家？何以速我狱？虽速我狱，室家不足！</p>
      <p>谁谓鼠无牙？何以穿我墉？谁谓女无家？何以速我讼？虽速我讼，亦不女从！</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.query.id
    }
  },
  watch: {
    $route (to, from) {
      this.id = to.query.id
    }
  }
}
</script>

<style scoped>
.content {
  width: 1400px;
  margin: 0 auto;
  padding: 30px 45px;
  box-sizing: border-box;
  border-radius: 4px;
  background: #fff;
  min-height: 650px;
  box-shadow: 0 0 30px #e7e7e7;
  margin-bottom: 100px;
}
.content > p {
  color: #8c9eb3;
  line-height: 20px;
}
.content > h5 {
  margin: 20px 0;
  font-size: 24px;
  color: #333;
  padding-bottom: 10px;
}
.content > div > p {
  font-size: 12px;
  line-height: 20px;
}
</style>
