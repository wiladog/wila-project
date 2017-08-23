import login from '../../api/login'
import * as types from '../mutation-types'
// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  loging:false,
  checkoutStatus: null,
  is_vailed: false,
  captcha_src:'http://n.api.admin.hdpfans.dev/captcha/default?'+Math.random(),
  message:'',

  
}
// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
  is_vailed: state => state.is_vailed,
  loging: state => state.loging,
  captcha_src: state => state.captcha_src,
  message: state => state.message
}
// actions
const actions = {
  
  login ({commit,state}, p) {
    // state.loging = true;
    // console.info(p);
    commit(types.CHANGE_LOGING_STATUS,true);
    login.checkC(
      p,
      (rsp) => commit(types.CHECK_CAPTCHA, rsp)
    )
  }
  // ,
  // changeLogingStatus ({commit}) {

  // }
}
// mutations
const mutations = {
  [types.CHECK_CAPTCHA] (state, payload) {
    console.info('aa');

    console.info(payload);
    state.is_vailed = true;
    if(payload.status) {
      // state.route.path = '/admin';
      // console.info(state.route);
    } else {
      // state.captcha_src = 'http://n.api.admin.hdpfans.dev/captcha/default?'+Math.random();
      // state.loginData.captcha = '';
      
    }
    state.message = payload.message + '-' +Math.random();
    state.loging = false;
  },
  [types.CHANGE_LOGING_STATUS] (state) {
      state.loging = !state.loging;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}