export default {
  FILE_LOADED(state, payload) {
    state.mdText = payload;
  },
  FILE_UPLOAD(state, status) {
    state.status.uploading = status;
  },
};
