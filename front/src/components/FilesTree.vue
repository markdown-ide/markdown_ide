<template>
  <div id="container">
    <v-data-table
      :items="files"
      hide-headers
      :rows-per-page-items="rowsPerPage"
    >
      <template
        slot="items"
        class="elevation-1"
        slot-scope="props"
      >
        <td><v-icon>{{ getIcon(props.item) }}</v-icon></td>
        <td>
          <router-link
            :to="to(props.item, props.item.isFolder ? 'Project' : 'Edit')"
          >
            {{ props.item.name }}
          </router-link>
        </td>
        <td>{{ getDate(props.item.created) }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Moment from 'moment/moment';

export default {
  name: 'FilesTree',
  props: {
    repository: String,
    branch: String,
    path: String,
  },
  created() {
    // console.log('FilesTree created', this.files);
  },
  computed: {
    files() {
      return this.$store.getters.files(this.path || '');
    },
    rowsPerPage() {
      return [10, 15, 25, { text: '$vuetify.dataIterator.rowsPerPageAll', value: -1 }];
    },
  },
  methods: {
    getDate(timestamp) {
      return Moment(timestamp).locale('ru').fromNow();
    },
    getIcon(item) {
      return item.icon || (item.isFolder ? 'fas fa-folder' : 'fas fa-file');
    },
    to(item, component) {
      console.log('FilesTree to', item, this.$route);

      return {
        name: component,
        params: {
          repository: this.repository,
          branch: this.branch,
          path: item.fullPath,
        },
      };
    },
  },
};
</script>

<style scoped>
  div#container {
    padding: 15px;
  }

  td:first-child {
    width: 50px;
    padding-right: 0!important;
  }

  td:nth-child(1) {
    text-align: left;
  }

  td:last-child {
    text-align: right;
  }
</style>
