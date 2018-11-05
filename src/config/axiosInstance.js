import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backend-social.herokuapp.com',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',

  },
});

export default axiosInstance;
