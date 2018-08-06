<template>
  <v-flex xs4 style="padding: 5px;">
    <v-card>
      <v-card-title primary-title>
        <div>
          <router-link
            :to="to"
          >
            {{ name }}
          </router-link>
          <div>{{ description }}</div>
          <div><v-icon size="15">fas fa-code-branch</v-icon> {{ branchesCount }}</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'RepoItem',
  props: ['name', 'description', 'branchesCount'],
  data() {
    return {
      defaultBranch: 'master',
    };
  },
  computed: {
    to() {
      console.log('to', this.$route);

      return { name: 'Project', params: { repository: this.name, branch: this.defaultBranch } };
    },
  },
};
</script>

<style scoped>
  a {
    text-decoration: none
  }
  a:hover {
    text-decoration: underline;
  }
</style>
