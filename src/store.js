import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// Store functions
const store = new Vuex.Store({
  state: {
    users : [
        { id : 1, account : 'admin' , password : '123' , name : '小明' , avatar : 'avatar0.jpg' , friends : [ 2, 3 ]},
        { id : 2, account : 'test' , password : '123' , name : '小华' , avatar : 'avatar1.jpg' , friends : [ 1, 3 ]},
        { id : 3, account : 'other' , password : '123' , name : '小张' , avatar : 'avatar2.jpg' , friends : [ 1, 2 ]}
    ],
    currentUser : null
  },
  mutations: {
    _setUser(state, user){
      state.currentUser = user
    }
  },
  actions: {
    setUser({ commit }, data){
      commit('_setUser', data)
    }
  }
});
export default store
