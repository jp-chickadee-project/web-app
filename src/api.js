
import axios from 'axios';

import _ from 'lodash';

import { getDisplayNameFromBandCombo } from '@/defaults/names';
import { getSpeciesFromAbbreviation } from '@/defaults/species';

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
      const name = getDisplayNameFromBandCombo(bird.bandCombo);
      const speciesDisplay = getSpeciesFromAbbreviation(bird.species);
      return { ...bird, name, speciesDisplay };
    }));
};

api.getBirdsAsDict = function getBirds() {
  return api.get('/birds')
    .then((birds) => {
      const x = _.map(birds, bird => formatBird(bird));
      return _.keyBy(x, 'rfid');
    });
};

api.getBird = function getBird(rfid) {
  return api.get(`/birds/${rfid}`)
    .then(bird => formatBird(bird));
};

function formatBird(bird) {
  const name = getDisplayNameFromBandCombo(bird.bandCombo);
  const speciesDisplay = getSpeciesFromAbbreviation(bird.species);
  return { ...bird, name, speciesDisplay };
}

export default api;
