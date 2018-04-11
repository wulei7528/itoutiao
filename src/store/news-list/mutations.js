import * as types from './mutation-types'

export const mutations = {
  [types.SHOW_LOADING] (state, loading) {
    state.loading = loading
  },

  [types.SET_LIST] (state, list) {
    state.list = list
  }
}