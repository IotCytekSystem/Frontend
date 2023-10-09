// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.36:8080/api', // Replace with your server's base URL
});

export default instance;

