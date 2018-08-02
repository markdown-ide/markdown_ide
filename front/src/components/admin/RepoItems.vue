<template>
  <v-layout row wrap>
    <repo-item
        v-for="repo in repoList"
        :name="repo.name"
        :description="repo.description"
        :key="repo.name"
        :branches-count="repo.branches.length"></repo-item>
  </v-layout>
</template>

<script>
  import RepoItem from './RepoItem';

  export default {
    name: "RepoItems",
    components: {
      RepoItem
    },
    computed: {
      repoList: function () {
        return this.$store.state.admin.repositories;
      }
    }
  }
</script>

<style scoped>

</style>