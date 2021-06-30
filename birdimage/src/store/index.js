import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    token: '',
    status: '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      console.log(state.token);
    },

    setBusiness(state, status) {
      state.status = status;
      console.log(state.status);
    },
  },
  actions: {
    login({ commit }, data) {
      axios.post('/api/login', { email: data.email, password: data.password })
        .then((result) => commit('setToken', result.data.token))
        .catch(console.error);
    },

    business({ commit }) {
      axios.post('/api/business')
        .then((result) => commit('setBusiness', result.data.data))
        .catch(console.error);
    },
  },
});

export default store;
