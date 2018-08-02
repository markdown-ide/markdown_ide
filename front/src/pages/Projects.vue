<template>
<div id="container">
  <repo-items/>
</div>
</template>

<script>
  import RepoItems from '../components/admin/RepoItems';

  export default {
    name: 'Projects',
    components: {
      RepoItems
    }
  }
</script>

<style scoped>
  div#container {
    padding: 15px;
  }
</style>