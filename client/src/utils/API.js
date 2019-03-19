import axios from 'axios';

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
  registerUser: function(username, password) {
    return axios.post('/api/authentication/register', { username, password });
  },
  loginUser: function(username, password) {
    return axios.post('/api/authentication/login', { username, password });
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
  saveComment: function(id, subject, author, comment) {
    return axios.post(`/api/comments/save/${id}`, {
      subject,
      author,
      comment,
    });
  },
  getArticlesU: function(user) {
    return axios.post('/api/articles/findAll', { user });
  },
  getArticleU: function(user, id) {
    return axios.post('/api/articles/find/:id', { user, id });
  },
  deleteArticleU: function(user, id) {
    return axios.post('/api/articles/delete', { user, id });
  },
  saveArticleU: function(user, articleData) {
    return axios.post('/api/articles/create', { user, articleData });
  },
};
