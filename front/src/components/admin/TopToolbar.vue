<template>
<v-toolbar
  app
  flat
  dense
  color="primary"
  dark
>
  <v-spacer></v-spacer>
  <search-bar />
  <notifications-icon
    :badge="notifications.items.length"
    :title="notifications.title"
    @click="togglePanel"
  />
  <user-menu />
</v-toolbar>
</template>

<script>
import SearchBar from './SearchBar';
import NotificationsIcon from './NotificationsIcon';
import UserMenu from './UserMenu';

export default {
  name: 'TopToolbar',
  components: {
    SearchBar,
    NotificationsIcon,
    UserMenu,
  },
  computed: {
    notifications() {
      return this.$store.state.admin.notifications;
    },
  },
  methods: {
    togglePanel() {
      this.$store.commit('admin/SHOW_PANEL_NOTIFICATIONS', true);
    },
  },
};
</script>
