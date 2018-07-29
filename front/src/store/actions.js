// import mdText from '../mock/md/some.md';
import api from '../api';

const loadFile = ({ commit }) => {
  if (process.env.NODE_ENV === 'development') {
    api.request('get', 'https://raw.githubusercontent.com/may-cat/markdown_ide/master/README.md')
      .then((response) => {
        // console.log(response.data);
        commit('FILE_LOADED', response.data);
      });
  }
};

export default {
  loadFile,
};
