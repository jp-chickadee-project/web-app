import request from 'request-promise';

const URL = 'http://euclid.nmu.edu:8155/api/';

export default class Api {
  static getBirds() {
    return request({
      method: 'GET',
      uri: `${URL}birds/`,
      json: true,
    });
  }
}
