<template>
  <div class="news-content" v-loading="loading">
    <el-row :gutter="20">
      <el-col :lg="8" :md="12" :sm="24" :xs="24" v-for="(item, index) in content" :key="String(index)">
        <dl @click="contentClick(item)">
          <dt><img :src="item.pic || require('@/assets/common.jpg')"></dt>
          <dd>
            <h4>{{item.title}}</h4>
            <h5 class="help-inline">
              <span>来源:{{item.src}}</span>
              <span>发布日期:{{item.time}}</span>
            </h5>
          </dd>
        </dl>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    contentClick(item) {
      window.location.href = item.url;
    }
  },
  computed: mapGetters({
    content: 'content',
    loading: 'loading'
  })
}

</script>
<style>
.el-col {
  border-bottom: 1px solid #ccc;
  text-align: left;
  cursor: pointer;
}

.el-col img {
  width: 150px;
  height: 100px
}

.el-col dt {
  float: left;
  padding: 4px;
  text-align: center;
}

.el-col dd {
  margin: 0px;
  padding-left: 160px;
  height: 120px;
}

.el-col .help-inline {
  color: #888;
}

</style>
