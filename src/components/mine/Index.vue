<template>
  <div>
    <v-header></v-header>
    <v-content></v-content>
    <v-footer></v-footer>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import vHeader from '@/components/index/Top'
import vContent from '@/components/mine/Content'
import vFooter from '@/components/common/Footer'
import vDialog from '@/components/dialog/Index'
export default {
  components: {
    vHeader,
    vFooter,
    vContent,
    vDialog
  }
}
</script>

<style scoped>
</style>
