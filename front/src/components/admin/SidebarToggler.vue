<template>
  <v-toolbar flat class="transparent" dense>
    <v-list class="pa-0" :class="{'list-border-bottom' : mini}">
      <v-list-tile>
        <v-list-tile-action v-if="!mini">
          <v-icon large color="green">developer_board</v-icon>
        </v-list-tile-action>
        <v-list-tile-content v-if="!mini">
          <v-list-tile-title><span class="app-title">Markdown IDE</span></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon @click.stop="toggleMini">
            <v-icon v-html="mini ? 'chevron_right' : 'chevron_left'"></v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-toolbar>
</template>

<script>

export default {
  name: 'SidebarToggler',
  props: ['mini'],
  methods: {
    toggleMini() {
      this.$store.commit('admin/TOGGLE_MENU_MINI');
    },
  },
};
</script>

<style>
.app-title {
  font-size: 120%;
}
</style>
