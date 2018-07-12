<template>
  <v-tooltip bottom>
    <v-btn icon @click.stop="click" slot="activator">
      <v-badge color="red" overlap>
        <span slot="badge">{{ badge }}</span>
        <v-icon>notifications</v-icon>
      </v-badge>
    </v-btn>
    <span>{{ title }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'NotificationsIcon',
  props: ['badge', 'title'],
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
