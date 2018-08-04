<template>
  <div id="container">
    <v-data-table
      :items="files"
      hide-actions
      hide-headers>
      <template
        slot="items"
        class="elevation-1"
        slot-scope="props"
      >
        <td><v-icon>{{ getIcon(props.item) }}</v-icon></td>
        <td>
          <router-link
            v-if="isFolder(props.item) && props.item.files.length > 0"
            :to="to(props.item)"
          >
            {{ props.item.name }}
          </router-link>
          <div
              v-else-if="isFolder(props.item)">
            {{ props.item.name }}
          </div>
          <router-link
              v-else
              :to="{ name: 'Projects' }">{{ props.item.name }}</router-link>
        </td>
        <td>{{ getDate(props.item.created) }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import RepositoryUtil from '../classes/RepositoryUtil';

export default {
  name: 'FilesTree',
  data() {
    return {
      repository: this.$route.params.repository,
      branch: this.$route.params.branch,
      path: this.$route.params.path,
    };
  },
  computed: {
    files() {
      return new RepositoryUtil(this.$store.getters.repositories).getFiles(
        this.repository, this.branch, this.path,
      );
    },
  },
  methods: {
    getDate(timestamp) {
      if (typeof timestamp === 'undefined') {
        return null;
      }
      const date = new Date(timestamp).toLocaleString();
      return date.replace(',', '');
    },
    getIcon(item) {
      if (item.icon) {
        return item.icon;
      }
      if (item.files) {
        return item.files.length > 0 ? 'fas fa-folder-open' : 'fas fa-folder';
      }
      return 'fas fa-file';
    },
    isFolder(item) {
      return RepositoryUtil.isFolder(item);
    },
    getPath(name) {
      if (typeof this.path === 'undefined') return name;
      if (name === '..') {
        if (this.path.indexOf('/') === -1) return null;
        // return `${this.path}/..`;
        const path = this.path.split('/');
        path.pop();
        // return path;
        return path.join('/');
      }
      // return this.path;
      return `${this.path}/${name}`;
    },
    to(item) {
      console.log('FilesTree to', item, this.$route);
      // debugger;

      return {
        name: 'ProjectFiles',
        params: { repository: this.repository, branch: this.branch, path: this.getPath(item.name) },
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
  }

  td:nth-child(1) {
    text-align: left;
  }

  td:last-child {
    text-align: right;
  }
</style>
