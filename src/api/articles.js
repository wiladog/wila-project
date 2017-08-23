/**
 * Mocking client-server processing
 */

import Util from '../libs/util'

export default {
  

  // captcha:this.loginData.captcha
  getList (params, cb) {
    // console.info(params);
    Util.ajax.get('/api/articles',{
      params:params
    })
    .then(function(response) {
      // if(response.data.status)
      // console.info('aa-bb');
      // console.info(response);
      cb(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  updateArticle (params, cb) {
    Util.ajax({
      method: 'put',
      url: '/api/articles/'+params.id,
      data: params
    }).then(function (response) {
      // console.info('updateArticle');
      cb(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    return false;
  },

  addArticle (params, cb) {
    // console.log(params);
    // console.log('---vvv-------');
    
    Util.ajax({
      method: 'post',
      url: '/api/articles',
      data: params
    }).then(function (response) {
      cb(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },

  deleteArticle (params, cb) {
    Util.ajax({
      method: 'delete',
      url: '/api/articles/'+params.id,
      data: params
    }).then(function (response) {
      cb(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },



 

  
  showArticle (params, cb) {
    // console.info(params);

    Util.ajax.get('/api/articles/'+params.id)
    .then(function(response) {
      // console.info(response.data);
      cb(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  // 分类
  getCategories (cb) {
      Util.ajax.get('/api/categories')
        .then(function(response) {
          cb(response.data);
        }).catch(function(error) {
          console.log(error);
        });
  },

  createCategories (params, cb) {
    // console.info('createCategories');
    // console.info(params);
    Util.ajax({
      method: 'post',
      url: '/api/categories/',
      data: params
    }).then(function (response) {
      cb(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },

  updateCategories (params, cb) {
    // console.info('updateCategories');
    // console.info(params);
    Util.ajax({
      method: 'put',
      url: '/api/categories/'+params.id,
      data: params
    }).then(function (response) {
      cb(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },

  deleteCategories (params, cb) {
    // console.info('deleteCategories');
    Util.ajax({
      method: 'delete',
      url: '/api/categories/'+params.id
      // data: params
    }).then(function (response) {
      cb(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

}