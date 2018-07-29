<template>
<div id="editor">
  <mavon-editor
    language="ru"
    :value="mdText"
    :scrollStyle="true"
  />
</div>
</template>

<script>
import MavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
  name: 'Edit',
  components: MavonEditor,
  watch: {
    $route: {
      handler: 'fetchData',
      immediate: true,
    },
  },
  methods: {
    fetchData() {
      this.$store.dispatch('loadFile');
    },
  },
  computed: {
    mdText() {
      return this.$store.getters.mdText;
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
  height: 800px;
}

</style>
