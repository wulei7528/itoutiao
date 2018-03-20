import Vue from 'vue'
import Vuex from 'vuex'
import channels from './modules/channels'
import content from './modules/content'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    channels,
    content
  }
})
