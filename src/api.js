
import axios from 'axios';

import _ from 'lodash';

import { getDisplayName } from '@/defaults/names';

import config from './config';

const api = axios.create({
  baseURL: `http://euclid.nmu.edu:${config.api}/api`,
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

api.getFeeders = function getFeeders() {
  return api.get('/feeders')
    .then(feederList => _.keyBy(feederList, 'id'));
};

api.getBirds = function getBirds() {
  return api.get('/birds')
    .then(birds => _.map(birds, (bird) => {
      const name = getDisplayName(bird.bandCombo);
      return { ...bird, name };
    }));
};

api.getBird = function getBird(rfid) {
  return api.get(`/birds/${rfid}`)
    .then((b) => {
      const bird = b;
      bird.name = getDisplayName(bird.bandCombo);
      return bird;
    });
};

export default api;
