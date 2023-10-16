// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.91.184.74:8080/audit/api/',
  // baseURL: 'http://localhost:8080/api/', 
});

export default instance;

