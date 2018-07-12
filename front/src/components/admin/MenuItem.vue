<template>
  <v-tooltip right :disabled="!mini">
    <v-list-tile
    :key="item.icon"
    :to="item.link"
    exact
    slot="activator"
    >
      <v-list-tile-action>
        <v-icon v-html="item.icon"></v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title v-text="item.title"></v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <span v-text="item.description"></span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['item', 'mini'],
};
</script>
