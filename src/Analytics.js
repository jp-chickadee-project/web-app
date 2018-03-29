
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://euclid.nmu.edu:18156/api',
});

api.interceptors.request.use(
  (config) => {
    console.log(`url: ${config.url}`);
    console.log(`params: ${JSON.stringify(config.params, null, 2)}`);
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

export default class Analytics {
  static get(resource) {
    return api.get(resource);
  }
}
