import axios from 'axios'
import * as types from './mutation-types'

export const actions = {
  async getList({ commit, dispatch, state, getters }, options) {
    commit(types.SHOW_LOADING, true)

    try {
      const result = await axios.get('/api/content', {
        params: {
          appkey: 'eef6bb7394a31bc8',
          start: 0,
          num: 30,
          channel: options.channel
        }
      })

      commit(types.SHOW_LOADING, false)
      commit(types.SET_LIST, result.data.result.list)
    }
    catch (e) {
      commit(types.SHOW_LOADING, false)
    }
  }
}