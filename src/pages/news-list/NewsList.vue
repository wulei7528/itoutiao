<template>
  <div>
    <news-content></news-content>
  </div>
</template>
<script>
import NewsContent from './components/NewsContent'
import { mapActions } from 'vuex'

export default {
  components: {
    NewsContent
  },
  created() {
    this.getChannels()
    this.getContent({
      channel: '头条'
    })
  },
  methods: {
    ...mapActions(['getChannels', 'getContent'])  // map this.getChannels() to this.$store.dispatch('getChannels')
  }
}

</script>
