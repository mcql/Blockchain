<template>
  <div>
    <v-header></v-header>
    <v-notice></v-notice>
    <v-recommend></v-recommend>
    <v-market></v-market>
    <v-part3></v-part3>
    <v-part4></v-part4>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from '@/components/index/Header'
import vNotice from '@/components/index/Notice'
import vRecommend from '@/components/index/Recommend'
import vMarket from '@/components/index/Market'
import vPart3 from '@/components/index/Part3'
import vPart4 from '@/components/index/Part4'
import vFooter from '@/components/common/Footer'
export default {
  components: {
    vHeader, vNotice, vRecommend, vMarket, vPart3, vPart4, vFooter
  }
}
</script>

<style scoped>

</style>
