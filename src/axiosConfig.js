// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://192.168.1.14:8080/api',
  baseURL: 'http://54.91.184.74:8080/audit/api', 
});

export default instance;

