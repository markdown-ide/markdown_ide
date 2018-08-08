<template>
  <v-breadcrumbs
    v-if="path"
    divider="/"
    :large="true"
    style="padding: 0 10px"
  >
    <v-breadcrumbs-item
      v-for="(item, i) in path.split('/')"
      :key="i"
      :to="breadcrumbsTo(item)"
      v-if="item"
    >
      {{ item }}
    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'PathBreadcrumbs',
  props: {
    repository: String,
    branch: String,
    path: String,
  },
  methods: {
    breadcrumbsTo(name) {
      const path = this.path
        // убирает слеши в начале и конце, а так же имя файла
        .replace(/^\/+|\/+[\w,\s-]+\.[aA-zZ]+$/g, '')
        // поиск пути до каталога
        .substring(0, this.path.lastIndexOf(name) + name.length);
      return {
        name: 'Project',
        params: {
          repository: this.repository,
          branch: this.branch,
          path,
        },
      };
    },
  },
};
</script>
