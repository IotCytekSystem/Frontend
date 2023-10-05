// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.56.1:8080/api', // Replace with your server's base URL
});

export default instance;

