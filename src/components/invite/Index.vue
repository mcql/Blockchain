<template>
  <div>
    <v-header></v-header>
    <v-content></v-content>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from '@/components/index/Top'
import vContent from '@/components/invite/Content'
import vFooter from '@/components/common/Footer'
export default {
  components: {
    vHeader,
    vFooter,
    vContent
  }
}
</script>

<style scoped>
</style>
