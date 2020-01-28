import axios from "axios";
const burl = "http://localhost:8000";
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
};

export default {

  getImage: function () {
    return axios.get(`${burl}/api/home`, {headers: headers })
  },

  getCategorie: function () {
    return axios.get(`${burl}/api/cat`, {headers: headers })
  },

  signup: function(fields) {
    return axios.post(`${burl}/api/user/signup`, fields, { headers: headers });
  },

  login: function(fields){
    return axios.post(`${burl}/api/user/login`, fields, { headers: headers });
  },

  getPageCategorie: function (id) {
    return axios.get(`${burl}/api/categorie/${id}`, { headers: headers });
  },

  getProduct: function (id) {
    return axios.get(`${burl}/api/product/${id}`, { headers: headers });
  },

  getCart: function (ids) {
    var id = "";
    ids.forEach(element => {
      id += "ids[]="+element+"&"
    });
    return axios.get(`${burl}/api/cart?`+id , { headers: headers });
  },

  getProfile: function (email) {
    return axios.post(`${burl}/api/profile`, email, { headers: headers });
  },

  editProfile: function(fields) {
    return axios.post(`${burl}/api/user/edit`, fields, { headers: headers });
  },

  getComments: function (id) {
    return axios.get(`${burl}/api/commment/${id}`, { headers: headers });
  },
  
  postComments: function (info) {
    return axios.post(`${burl}/api/comment/add`,info, { headers: headers });
  },
};