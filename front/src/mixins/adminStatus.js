import store from '../store';

export default {
  computed: {
    status() {
      return store.state.admin.status;
    },
  },
};
