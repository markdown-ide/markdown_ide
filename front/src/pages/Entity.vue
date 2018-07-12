<template>
<div>
  <h2>{{ entitiesTitle }}</h2>
  <data-table
    :headers="headers"
    :items="items"
    :loading="status.loading"
    :controls="controls"
    @editItem="editItem"
    @deleteItem="deleteItem"
    v-if="isShow"
  />
</div>
</template>

<script>
import DataTable from '../components/admin/DataTable';
// import status from '../mixins/status';

export default {
  name: 'Entity',
  components: { DataTable },
  // mixins: [status],
  watch: {
    $route: {
      handler: 'fetchData',
      immediate: true,
    },
  },
  methods: {
    fetchData() {
      this.$store.dispatch('loadEntity', this.$route.meta);
    },
    editItem(item) {
      console.log('Data editItem', item);
    },
    deleteItem(item) {
      console.log('Data deleteItem', item);
    },
  },
  computed: {
    // currentHeaders () {
    //   return this.$store.state.data.currentHeaders;
    // },
    status() {
      return this.$store.state.status;
    },

    controls() {
      return this.$store.state.ui.defaultControls;
    },

    isShow() {
      // return true;
      return this.headers && this.headers.length;
    },

    // headers () {
    //   let headers = this.currentHeaders.slice();
    //   if (this.controls && this.controls.length) {
    //     headers.push({ text: 'Actions', value: 'actions', sortable: false, invisible: true });
    //   }
    //   return headers;
    // },
    items() {
      return this.$store.getters.items;
    },
    headers() {
      return this.$store.getters.headers;
    },
    entitiesTitle() {
      // return 'ewq'
      return this.$store.getters.entitiesTitle;
    },
  },
};
</script>
