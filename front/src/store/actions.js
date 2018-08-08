// import mdText from '../mock/md/some.md';
import api from '../api';

const loadFile = ({ commit }, path) => {
  if (process.env.NODE_ENV === 'development') {
    api.request('get', `https://raw.githubusercontent.com/aak74/${path}`)
      .then((response) => {
        // console.log(response.data);
        commit('FILE_LOADED', response.data);
      });
  }
};

export default {
  loadFile,
};
