<template>
  <div class='content'>
    <v-title></v-title>
    <v-article></v-article>
  </div>
</template>

<script>
import vTitle from '@/components/article/Title'
import vArticle from '@/components/article/Article'
export default {
  components: {
    vTitle,
    vArticle
  }
}
</script>

<style scoped>
.content {
  width: 1400px;
  margin: 0 auto;
}
</style>
