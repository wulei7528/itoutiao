import axios from 'axios'

// initial state
const state = {
  content: '',
  loading: false
}

// getters
const getters = {
  content: state => state.content,
  loading: sate => state.loading
}

// actions
const actions = {
  getContent({
    commit
  }, options) {
    var url = encodeURI('/api/content')

    commit('setLoading', true)

    axios.get(url, {
      params: {
        appkey: 'eef6bb7394a31bc8',
        start: 0,
        num: 30,
        channel: options.channel
      }
    }).then(res => {
      var list = res.data.result.list

      commit('setContent', list)
      commit('setLoading', false)
    });
  }
}

// mutations
const mutations = {
  setContent(state, content) {
    state.content = content
  },

  setLoading(state, loading) {
    state.loading = loading
  }
}

export default {
  actions,
  mutations,
  getters,
  state
}
