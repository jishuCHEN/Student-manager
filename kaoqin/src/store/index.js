import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    count:1,
    sum_count:{
      date:'2019-12-12',  //考勤日期
      sum:'37',           //总人数
      ok:'0',            //已签到
      late:'0',           //迟到
      not_ok:'37'          //未签到
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    //增加签到人数，减少未签到人数
    add (state, num){
      state.sum_count.not_ok -= num
      state.sum_count.ok += num
    }
  },
  actions: {
  },
  modules: {
  }
})
