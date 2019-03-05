import axios from "axios";

//abstracted API methods
export default {
  getArticles: function() {
    return axios.get("/api/articles");
  },
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  queryNYT: function (queryUrl) {
    return axios.get(queryUrl);
  },
  createUser : function(id){
    return axios.post("/api/recommendations/" + id);
  },
  getUser : function(id){
    return axios.get("/api/recommendations/" + id);
  },
  createRecommendation : function(recommendationData){
    return axios.post("/api/recommendations/", recommendationData)
  },
  getRecommendation : function(recommendationData){
    return axios.get("/api/recommendations/", recommendationData)
  }
};
