import AuthService from '@/services/api/auth.service'

export const namespaced = true

export const state = {
  user: null,
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  login: ({ commit }, { login, password }) => {
    const user = AuthService.login({ login, password })
    commit('SET_USER', user)
  },
}

export const getters = {
  user: (state) => state.user,
}
