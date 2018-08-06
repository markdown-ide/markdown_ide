<template>
  <files-tree :repository="repository" :branch="branch" :path="path"></files-tree>
</template>

<script>
  import FilesTree from '../components/FilesTree';

  export default {
    name: "Project",
    components: {FilesTree},
    data() {
      return {
        repository: this.$route.params.repository,
        branch: this.$route.params.branch,
        path: this.$route.params.path,
      };
    }
  }
</script>

<style scoped>

</style>