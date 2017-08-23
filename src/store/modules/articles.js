import newsApi from '../../api/articles'
import * as types from '../mutation-types'
// initial state

const state = {
  news:[],
  categories:[],
  tmp_xx:'',
  total:0,
  detail:{}
}
// getters
const getters = {
  news: state => state.news,
  categories: state => state.categories,
  tmp_xx: state => state.tmp_xx,
  total: state => state.total,
  detail: state => state.detail
}
// actions
const actions = {
  getLists ({commit,state}, p) {    
    newsApi.getList(
      p,
      (rsp) => commit(types.GET_NEWS_LISTS, rsp)
    )
  },
  showArticle ({commit,state}, p) {
    newsApi.showArticle(
      p,
      (rsp) => commit(types.GET_ARTICLE_DETAIL, rsp)

    )
  },

  // 添加
  addArticle ({commit,state}, p) {
    // state.loging = true;
    console.info(p);
    
    newsApi.addArticle(
      p,
      (rsp) => commit(types.ADD_ARTICLE, rsp)
    )
  },

  // 更新
  updateArticle ({commit,state}, p) {
    // state.loging = true;
    // console.info(p);
    
    newsApi.updateArticle(
      p,
      (rsp) => commit(types.UPDATE_ARTICLE, rsp)
    )
  },
  deleteArticle ({commit, state}, p) {
    console.info(p);
    newsApi.deleteArticle(p, (rsp) => commit(types.DELETE_ARTICLE, rsp))
  },
  // ---------  分类 --------
  createCategories ({commit, state}, p) {
    newsApi.createCategories(p, (rsp) => commit(types.CREATE_CATEGORIES, rsp) );
  },

  updateCategories ({commit, state}, p) {
    // console.info('updateCategories');
    // console.info(p);
    let index = p.index;
    // console.log(index);
    delete p.index;
    // console.info(p);
    // return;
    newsApi.updateCategories(p, (rsp) => commit(types.UPDATE_CATEGORIES, {rsp,index}) );
  },
  deleteCategories ({commit, state}, p) {
    let index = p.index;
    delete p.index;
    newsApi.deleteCategories(p, (rsp) => commit(types.DELETE_CATEGORIES, {rsp,index}) );
  },

  getCategories ({commit}) {
    newsApi.getCategories(
        (rsp) => commit(types.GET_CATEGORIES, rsp)
    )
  }

}
// mutations
const mutations = {

  [types.GET_NEWS_LISTS] (state, payload) {
      state.news = payload.data.data;
      state.total = payload.data.total;
      state.detail = [];
  },
  [types.GET_CATEGORIES] (state, payload) {
    // console.info(payload);
    state.categories = payload.data;
  },
  [types.ADD_ARTICLE] (state, payload) {
    // console.info(payload);
    // state.newsCategories = payload.data;
    state.tmp_xx = payload.message + '-' +Math.random();
  },
  [types.DEL_NEWS] (state, payload) {
    state.news = payload.data.data;
    state.total = payload.data.total;
  },

  [types.GET_ARTICLE_DETAIL] (state, payload) {
    state.detail = payload.data;
  },

  [types.UPDATE_ARTICLE] (state, payload) {
    state.tmp_xx = payload.message + '-' +Math.random();
  },
  [types.DELETE_ARTICLE] (state, payload) { 
    state.news = payload.data.data;
    state.total = payload.data.total;
    // state.tmp_xx = payload.message + '-' +Math.random();
  },

  [types.CREATE_CATEGORIES] (state, payload) {
    console.info(payload);
    // console.info(state.)
    state.categories.push(payload.data);
  },

  [types.UPDATE_CATEGORIES] (state, payload) {
    state.categories.splice(payload.index, 1, payload.rsp.data);
  },
  [types.DELETE_CATEGORIES] (state, payload) {
    state.categories.splice(payload.index, 1);
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}