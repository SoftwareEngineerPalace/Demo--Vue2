/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 声明变量
const state = {
  count: 1,
};

// 获取数据
const getters = {
  count: _state => _state.count, // ES6中箭头函数
};

const actions = {
  increment: ({ commit }) => {
    commit('increment');
  },
  decrement: ({ commit }) => {
    commit('decrement');
  },
};

// 处理数据状态的变化
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};

// 导出store
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
