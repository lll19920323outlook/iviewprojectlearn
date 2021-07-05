import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getUserInfo(state) {
  if (state.userInfo) return state.userInfo
  let userInfo = localStorage.getItem(keys.USER)
  if (userInfo) {
    state.userInfo = JSON.parse(userInfo)
  }
  return state.userInfo
}

//目前还不清楚定义这个是干嘛的？TODO
const keys = { USER: 'user' }

export default new Vuex.Store({
  state: {
    //工程量尚未变大，且暂时不分模块

    //存储用户信息
    userInfo: null,
    isLoading: false
  },
  mutations: {
    //登陆成功后修改用户信息
    setUserInfo(state, data) {
      state.userInfo = data
      console.log('登陆了---', data)
      localStorage.setItem(keys.USER, JSON.stringify(data))
    }
  },
  actions: {},
  modules: {},
  getters: {
    isLogin: state => {
      if (getUserInfo(state)) {
        return true
      }
      return false
    },
    isLoading(state) {
      return state.isLoading
    }
  }
})
