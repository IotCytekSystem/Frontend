// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://44.208.22.32:8080/audit/api/',
  // baseURL: 'http://localhost:8080/api/', 
});

export default instance;

