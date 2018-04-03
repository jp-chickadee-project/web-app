
import axios from 'axios';

import config from './config';

const api = axios.create({
  baseURL: `http://euclid.nmu.edu:${config.analytics}/api`,
});

api.interceptors.request.use(
  (data) => {
    console.log(`url: ${data.url}`);
    console.log(`params: ${JSON.stringify(data.params, null, 2)}`);
    return data;
  },
  data => data,
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
