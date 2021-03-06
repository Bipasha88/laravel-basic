import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    token: '',
    status: '',
    data: '',
    user: {},
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      console.log(state.token);
    },

    registerData(state, user) {
      state.user = user;
      console.log(state.user);
    },

    setBusiness(state, status) {
      state.status = status;
      console.log(state.status);
    },

    setAuthorization(state, data) {
      state.data = data;
      console.log(state.data);
    },
  },
  actions: {
    login({ commit }, data) {
      axios.post('/api/login', { email: data.email, password: data.password })
        .then((result) => commit('setToken', result.data.token))
        .catch(console.error);
    },

    register({ commit }, data) {
      axios.post('/api/register', {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      })
        .then((result) => commit('setToken', result.data.token))
        .catch(console.error);
    },

    business({ commit }) {
      axios.get('/api/business', { headers: { Authorization: `Bearer ${this.state.token}` } })
        .then((result) => commit('setBusiness', result.data.data))
        .catch(console.error);
    },

    closed({ commit }) {
      axios.get('/api/closed', { headers: { Authorization: `Bearer ${this.state.token}` } })
        .then((result) => commit('setAuthorization', result.data.data))
        .catch(console.error);
    },
  },
});

export default store;
