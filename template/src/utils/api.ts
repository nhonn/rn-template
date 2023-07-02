import {create} from 'apisauce';

const baseUrl = 'https://SOME_URL';

const api = create({
  baseUrl,
  headers: {},
  timeout: 10000,
});

export default api;
