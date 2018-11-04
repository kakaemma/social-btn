import axios from 'axios';

const apiBaseUrl = 'http://127.0.0.1:8000/api/auth/';

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

export default axiosInstance;
