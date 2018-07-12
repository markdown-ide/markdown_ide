/* eslint-disable consistent-return, no-console */

import axios from 'axios';
import store from '../store';
import server from '../config/server';

const request = (method, uri, data = null) => {
  if (!method) {
    console.error('API function call requires method argument');
    return;
  }

  if (!uri) {
    console.error('API function call requires uri argument');
    return;
  }

  const url = server.serverURI + uri;
  // console.log('api', url);
  return axios({ method, url, data });
};

const getData = (method, uri) => {
  // console.log('getData', store);
  store.commit('admin/LOADING');
  return request(method, uri)
    .then((response) => {
      // console.log('getData response', response);
      if (response.data.status !== 'ok') {
        store.commit('admin/LOADING_ERROR', { message: 'Response status is not ok', code: 406 });
        return;
      }

      store.commit('admin/LOADED');
      return response.data.data;
    })
    .catch((error) => {
      store.commit('admin/LOADING_ERROR', error);
    });
};

export default {
  request,
  getData,
};
