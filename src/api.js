import axios from 'axios';

export default axios.create({
  baseURL: 'http://euclid.nmu.edu:8155/api',
});
