<template>
<v-tooltip right :disabled="!mini">
  <v-toolbar flat class="transparent" dense slot="activator">
    <v-list class="pa-0" :class="{'list-border-bottom' : mini}">
      <v-list-tile
        to="/"
        exact
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-toolbar>
  <span v-text="item.description"></span>
</v-tooltip>

</template>

<script>
export default {
  name: 'ExtraMenuItem',
  props: ['item', 'mini'],
};
</script>
