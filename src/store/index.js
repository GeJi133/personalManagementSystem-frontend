import Vue from 'vue';
import Vuex from 'vuex';
import report from "./models/report";
import department from "./models/department";
import job from "./models/job";
import career from "./models/career";
import family from "./models/family";
import language from "./models/language";
import checkingIn from "./models/checkingIn";
import salary from "./models/salary";
import layout from './layout';
import user from './models/user';
import departmentmove from "./models/departmentmove";
import postmove from "./models/postmove";
import staffmaster from "./models/staffmaster";
import staffover from "./models/staffover";
import trycontrol from "./models/trycontrol";
import jopgetcontrol from "./models/jopgetcontrol";

Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    token:localStorage.getItem('token')?localStorage.getItem('token'):"",
    identity:"",
    sysCode:""
  },

  mutations: {
    ChangeLogin(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      console.log("item",localStorage.getItem(token));
    },
    ChangeSysCode(state, sysCode) {
      localStorage.setItem('sysCode', sysCode);
      console.log("更改验证码",localStorage.getItem(sysCode));
    },
    ChangeUsername(state, username) {
      state.username = username;
      localStorage.setItem('username', username);
    },
    CHANGE(state) {
    },
  },

  modules: {
    user,
    layout,
    job,
    department,
    career,
    family,
    language,
    report,
    checkingIn,
    salary,
    departmentmove,
   jopgetcontrol,
    postmove,
    staffmaster,
    staffover,
    trycontrol,
  }
})

