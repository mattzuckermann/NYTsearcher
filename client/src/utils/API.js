import axios from 'axios';

// TO USE WHEN AUTHENTICATING EVERY ROUTE
// const passport = require('passport');
// require('../config/passport')(passport);
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

//abstracted API methods
export default {
  getArticles: function() {
    return axios.get('/api/articles');
  },
  getArticle: function(id) {
    return axios.get('/api/articles/' + id);
  },
  deleteArticle: function(id) {
    return axios.delete('/api/articles/' + id);
  },
  saveArticle: function(articleData) {
    return axios.post('/api/articles', articleData);
  },
  queryNYT: function(queryUrl) {
    return axios.post('/api/query/', { url: queryUrl });
  },

  createUser: function(id) {
    return axios.post('/api/recommendations/' + id);
  },
  getUser: function(id) {
    return axios.get('/api/recommendations/user/' + id);
  },
  createRecommendation: function(recommendationData) {
    return axios.post('/api/recommendations/', recommendationData);
  },
  getRecommendation: function(id) {
    return axios.get('/api/recommendations/' + id);
  },

  getArticlesU: function(user) {
    return axios.post('/api/articles/findAll', { user: user });
  },
  getArticleU: function(user, id) {
    return axios.post('/api/articles/find/:id', { user: user, id: id });
  },
  deleteArticleU: function(user, id) {
    return axios.post('/api/articles/delete', { user: user, id: id });
  },
  saveArticleU: function(user, articleData) {
    console.log(user);
    console.log(articleData);
    return axios.post('/api/articles/create', { user: user, articleData: articleData });
  },
};
