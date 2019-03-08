import axios from "axios";

//abstracted API methods
export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
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
