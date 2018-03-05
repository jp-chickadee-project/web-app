
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://euclid.nmu.edu:8155/api',
});

api.interceptors.response.use(
  response => response.data,
  error => error,
);

export default api;
