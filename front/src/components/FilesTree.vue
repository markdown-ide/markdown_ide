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
  props: ['repository', 'branch', 'path'],
  computed: {
    files() {
      return this.$store.getters.files(this.path);
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
      if (item.isFolder) {
        return 'fas fa-folder';
      }
      return 'fas fa-file';
    },
    isRootPath() {
      return !this.path;
    },
    getPrevPath() {
      return this.path.replace(/(.*)\//g, '');
    },
    to(item, component) {
      console.log('FilesTree to', item, this.$route);

      return {
        name: component,
        params: {
          repository: this.repository,
          branch: this.branch,
          path: this.path ? `${this.path}/${item.name}` : item.name,
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
