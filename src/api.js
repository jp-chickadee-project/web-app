
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://euclid.nmu.edu:8155/api',
});

api.interceptors.request.use(
  (config) => {
    console.log(`url: ${config.url}`);
    return config;
  },
  config => config,
);

api.interceptors.response.use(
  (response) => {
    const data = response.data;
    console.log(data);
    return data;
  },
  error => error,
);

export default api;
