import axios from 'axios';

import { ENV } from '../../../../../env';

const baseURL = ENV.DEV.BASE_URL;

const mapQueryString = queryString => {
  if (!queryString || Object.entries(queryString).length <= 0) return '';

  return `?${Object.entries(queryString)
    .map(key => `${key[0]}=${key[1]}&`)
    .join('')
    .slice(0, -1)}`;
};

const onRequest = (options, type) => {
  const { data, headers, queryString, url } = options;

  switch (type) {
    case 'DELETE':
      return axios.delete(`${baseURL}${url}`, { data }, { headers });

    case 'DOWNLOAD':
      return axios.get(`${baseURL}${url}${mapQueryString(queryString)}`, { responseType: 'blob', headers });

    case 'GET':
      return axios.get(`${baseURL}${url}${mapQueryString(queryString)}`, { headers });

    case 'POST':
      return axios.post(`${baseURL}${url}`, data, { headers });

    case 'UPDATE':
      return axios.put(`${baseURL}${url}`, data, { headers });

    default:
      break;
  }
};

export const HTTPRequester = {
  delete: options => onRequest(options, 'DELETE'),
  download: options => onRequest(options, 'DOWNLOAD'),
  get: options => onRequest(options, 'GET'),
  post: options => onRequest(options, 'POST'),
  update: options => onRequest(options, 'UPDATE')
};
