<template>
  <v-select
    :items="branches"
    hide-details
    prepend-icon="fas fa-code-branch"
    single-line
    :value="selectedBranch"
    style="margin: 0"
  />
</template>

<script>
export default {
  name: 'BranchSelect',
  props: {
    branches: Array,
    selectedBranch: String,
  },
};
</script>
