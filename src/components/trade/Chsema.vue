<template>
  <div class='choosemarket'>
    <ul>
      <li v-for='(item,index) in data' :key='index'>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: ['LUSD / ETH', 'MKR / ETH', 'BTC / LCNY']
    }
  }
}
</script>

<style scoped>
.choosemarket {
  position: absolute;
  top: 55px;
  right: 0;
  background-color: #eeeeee;
  box-shadow: 0 5px 20px 5px rgb(214, 213, 213);
  font-size: 12px;
}
.choosemarket li {
  line-height: 32px;
  padding: 0 40px;
  cursor: pointer;
}
.choosemarket li:hover {
  color: #5065bd;
  transition: all 0.5s ease;
}
</style>
