import axios from "axios";

const API = axios.create({
  baseURL: "https://melodyvault-backend.onrender.com", 
});

export default API;
