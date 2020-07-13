import Vue from 'vue';
import Vuex from 'vuex';
import report from "./models/report";
import department from "./models/department";
import job from "./models/job";
import career from "./models/career";
import family from "./models/family";
import language from "./models/language";
import layout from './layout';

Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    token:localStorage.getItem('token')?localStorage.getItem('token'):"",
    identity:""
  },
  mutations: {
    ChangeLogin(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    ChangeUsername(state, username) {

      state.username = username;
      localStorage.setItem('username', username);
    },
    CHANGE(state) {
    },
  },

  modules: {
    layout,
    job,
    department,
    career,
    family,
    language,
    report,
  }
})

