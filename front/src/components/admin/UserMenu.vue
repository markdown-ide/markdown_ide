<template>
  <v-menu
    bottom
    left
  >
  <v-btn icon slot="activator">
    <v-avatar class="white" size="32">
      <v-icon color="primary">person</v-icon>
    </v-avatar>
  </v-btn>
    <v-list class="pa-0">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-avatar class="primary" size="48px">
            <v-icon dark>person</v-icon>
          </v-avatar>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ user.fullname }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ user.role }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>

      <v-list-tile key="profile" @click="showProfile">
        <v-list-tile-action>
          <v-icon>person</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>My Profile</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>

      <v-list-tile key="lock_open" @click="logout">
        <v-list-tile-action>
          <v-icon>lock_open</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>

export default {
  name: 'UserMenu',
  computed: {
    user() {
      return this.$store.state.admin.user;
    },
  },
  methods: {
    showProfile() {
      this.$store.commit('SHOW_PROFILE');
    },
    logout() {
      this.$store.commit('LOGOUT');
    },
  },
};
</script>
