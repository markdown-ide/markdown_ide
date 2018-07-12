<template>
  <div>
    <v-list
      subheader
      :class="{'list-border-bottom' : mini}"
      v-for="(menu, index) in items"
      :key="index"
    >
      <v-subheader>{{ menu.title }}</v-subheader>
      <template v-for="(item, index) in menu.items">
        <menu-item :mini="mini" :item="item" :key="index"/>
      </template>
    </v-list>
    <v-divider></v-divider>
  </div>
</template>

<script>
import MenuItem from './MenuItem';

export default {
  name: 'MenuItems',
  components: {
    MenuItem,
  },
  props: ['items', 'mini'],
};
</script>
