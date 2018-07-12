<template>
<v-navigation-drawer
  temporary
  :right="right"
  :value="panelNotificationsVisible"
  @input="inputPanelVisibility"
  fixed
  app
>
  <v-toolbar flat prominent dark class="primary">
    <v-toolbar-title>Notifications</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="closePanel">
      <v-icon>close</v-icon>
    </v-btn>
  </v-toolbar>
  <v-list subheader dense>
    <v-subheader>All notifications</v-subheader>
    <notification
      v-for="(notification, index) in notifications"
      :title="notification.title"
      :icon="notification.icon"
      :key= "index"
    />
  </v-list>
</v-navigation-drawer>
</template>

<script>
import Notification from './Notification';

export default {
  name: 'Notifications',
  components: {
    Notification,
  },
  props: ['right'],
  computed: {
    notifications() {
      return this.$store.state.admin.notifications.items;
    },
    panelNotificationsVisible() {
      return this.$store.state.admin.status.panelNotificationsVisible;
    },
  },
  methods: {
    inputPanelVisibility(visible) {
      this.$store.commit('SHOW_PANEL_NOTIFICATIONS', visible);
    },
    closePanel() {
      this.$store.commit('SHOW_PANEL_NOTIFICATIONS', false);
    },
  },
};
</script>
