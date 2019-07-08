/* eslint-disable no-param-reassign */
import axios from 'axios';
import 'babel-polyfill';
import { BASE_URL } from '../helpers/constants';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(async config => config);

export default api;
