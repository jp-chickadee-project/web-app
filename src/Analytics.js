
import axios from 'axios';

import io from 'socket.io-client';

const socket = io('http://euclid.nmu.edu:3000');

socket.on('connect', () => {

});

const api = axios.create({
  baseURL: 'http://euclid.nmu.edu:3000',
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
  static totalVisits() {
    return api.get('/api/total')
      .then(result => result.total)
      .catch(() => {}); // TODO
  }
}
