<template>
  <div>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>{{ icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>
        {{ title }}
      </v-list-tile-title>
    </v-list-tile>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['icon', 'title'],
};
</script>
