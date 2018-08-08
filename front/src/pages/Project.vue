<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs2>
          <v-select
            :items="branches"
            hide-details
            prepend-icon="fas fa-code-branch"
            single-line
            :value="branch"
          >
          </v-select>
        </v-flex>
        <v-flex xs2>

        </v-flex>
        <v-flex xs2>

        </v-flex>
        <v-flex xs2>

        </v-flex>
        <v-flex xs2>

        </v-flex>
      </v-layout>
    </v-container>
    <files-tree :repository="repository" :branch="branch" :path="path"></files-tree>
  </div>
</template>

<script>
import FilesTree from '../components/FilesTree';

export default {
  name: 'Project',
  components: { FilesTree },
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

<style scoped></style>
