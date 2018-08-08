<template>
<div id="container">
  <project-items/>
</div>
</template>

<script>
import ProjectItems from '../components/ProjectItems';

export default {
  name: 'Projects',
  components: {
    ProjectItems,
  },
};
</script>

<style scoped>
  div#container {
    padding: 15px;
  }
</style>
