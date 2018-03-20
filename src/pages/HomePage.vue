<template>
  <div class="homepage">
    <news-nav></news-nav>
    <news-content></news-content>
  </div>
</template>
<script>
import NewsNav from '../components/NewsNav'
import NewsContent from '../components/NewsContent'

export default {
  components: {
    NewsNav,
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
