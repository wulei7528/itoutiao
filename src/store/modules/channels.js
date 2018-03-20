import axios from 'axios'
// initial state
const state = {
  channels: []
}

// getters
const getters = {
  channels: state => state.channels
}

// actions
const actions = {
  getChannels({ commit }) {
    var url = encodeURI('/api/channels')
    axios.get(url).then(res => {
      var channels = res.data.result
      commit('setChannels', channels)
    })
  }
}

const mutations = {
  setChannels(state, channels) {
    state.channels = channels
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
