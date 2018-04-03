<template>
  <div class="news-nav">
    <el-menu mode="horizontal" background-color="#666" text-color="#fff" text-active-color="#fff">
      <el-menu-item :index="homePage.index" @click="channelClick('头条')">
        <span slot="title">{{ homePage.name }}</span>
      </el-menu-item>
      <el-menu-item v-for="(channel, index) in channels" :index="String(index)" :key="String(index)" @click="channelClick(channel)">{{ channel }}</el-menu-item>
    </el-menu>
    <div class="news-nav-location">当前板块：{{curChannel}}</div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      homePage: {
        name: '爱头条',
        index: '9999',
        path: '/'
      },

      curChannel: '头条'
    }
  },
  methods: {
    channelClick(channeName) {
      this.getContent({
        channel: channeName
      });

      this.curChannel = channeName
    },

    ...mapActions(['getContent'])
  },
  computed: {
    ...mapGetters({
      channels: 'channels'
    })
  }
}

</script>
<style>
.news-nav-location {
  text-align: left;
  padding-top: 5px;
  padding-left: 8px;
  font-size: 14px;
  font-weight: bold;
}
</style>
