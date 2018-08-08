<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-flex xs2>
          <branch-select
            :branches="branches"
            :selected-branch="branch"
          />
        </v-flex>
        <v-flex xs10>
          <path-breadcrumbs
            :repository="repository"
            :branch="branch"
            :path="path"
          />
        </v-flex>
      </v-layout>
    </v-container>
    <files-tree
      :repository="repository"
      :branch="branch"
      :path="path"
    />
  </div>
</template>

<script>
import FilesTree from '../components/FilesTree';
import PathBreadcrumbs from '../components/PathBreadcrumbs';
import BranchSelect from '../components/BranchSelect';

export default {
  name: 'Project',
  components: {
    FilesTree,
    PathBreadcrumbs,
    BranchSelect,
  },
  data() {
    return {
      repository: this.$route.params.repository,
      branch: this.$route.params.branch,
      path: this.$route.params.path,
    };
  },
  computed: {
    branches() {
      return ['master', 'backend', 'frontend'];
    },
  },
};
</script>

<style scoped>
.container {
  padding: 15px 25px 0 25px;
}
</style>
