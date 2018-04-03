<template>
  <div>
    <news-content></news-content>
  </div>
</template>
<script>
import NewsContent from './components/NewsContent'

export default {
  components: {
    NewsContent
  },
  created() {
    this.$store.dispatch('getChannels')
    this.$store.dispatch('getContent', {
      channel: '头条'
    })
  }
}

</script>
