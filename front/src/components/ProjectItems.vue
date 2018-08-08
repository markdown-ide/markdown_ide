<template>
  <v-layout row wrap>
    <project-item
        v-for="project in projects"
        :name="project.name"
        :remote="project.remote"
        :key="project.name"
    />
  </v-layout>
</template>
<script>
import ProjectItem from './ProjectItem';

export default {
  name: 'ProjectItems',
  components: {
    ProjectItem,
  },
  computed: {
    projects() {
      return this.$store.state.projects.list;
    },
  },
};
</script>
<style scoped></style>
