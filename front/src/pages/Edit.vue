<template>
<div>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-flex xs2>
          <branch-select
            :branches="branches"
            :selected-branch="branch"
          />
        </v-flex>
        <v-flex xs4>
          <path-breadcrumbs
            :repository="repository"
            :branch="branch"
            :path="path"
          />
        </v-flex>
        <v-flex xs6 text-xs-right>
          <div>
            <v-btn
              color="success"
              @click="saveData"
              :loading="$store.state.status.uploading"
            >Сохранить</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div id="editor">
    <mavon-editor
      language="ru"
      :value="mdText"
      :scrollStyle="true"
    />
  </div>
</div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import PathBreadcrumbs from '../components/PathBreadcrumbs';
import BranchSelect from '../components/BranchSelect';

export default {
  name: 'Edit',
  components: {
    mavonEditor,
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
  watch: {
    $route: {
      handler: 'fetchData',
      immediate: true,
    },
  },
  methods: {
    fetchData() {
      this.$store.dispatch('loadFile', `${this.repository}/${this.branch}/${this.path}`);
    },
    saveData() {
      this.$store.dispatch('saveFile');
    },
  },
  computed: {
    mdText() {
      return this.$store.getters.mdText;
    },
    branches() {
      return ['master', 'backend', 'frontend'];
    },
  },
};
</script>

<style>
/* #editor {
  margin: auto;
  width: 80%;
  height: 580px;
  position: relative;
} */

#editor .markdown-body {
  height: 750px;
}

.container {
  padding: 0 25px;
}

</style>
