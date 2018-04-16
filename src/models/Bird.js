
import Api from '@/api';

import _ from 'lodash';

let birdMap = {};

export default class Bird {
  static get() {
    if (_.isEmpty(birdMap)) {
      return this.setup();
    }
    return Promise.resolve(birdMap);
  }

  static setup() {
    console.log('setup');
    return Api.getBirdsAsDict()
      .then((dict) => {
        birdMap = dict;
        return birdMap;
      });
  }
}
