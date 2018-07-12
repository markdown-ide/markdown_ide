<template>
<div id="app">
  <v-app>
    <sidebar />
    <top-toolbar />
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>
    <notifications :right="true"/>
  </v-app>
</div>
</template>

<script>
import Sidebar from './components/admin/Sidebar';
import TopToolbar from './components/admin/TopToolbar';
import Notifications from './components/admin/Notifications';

export default {
  name: 'App',
  components: {
    Sidebar,
    TopToolbar,
    Notifications,
  },
};
</script>

<style scoped>
.bottom-menu {
  position: absolute;
  width: 100%;
  bottom: 0;
}
/* .searching {
  overflow: hidden;
  width: 208px;
  padding-left: 8px;
  transition: $primary-transition;
}
*/
.searching--closed {
  padding-left: 0;
  width: 0;
}
.searching > * {
  right: 8px;
}
.searching--closed > * {
  display: none;
}
/*
.hidden-searching {
  @media $display-breakpoints.sm-and-down {
    display: none !important;
  }
}
*/
.list-border-bottom {
  border-bottom: 1px solid rgba(255, 255, 255, .12);
}
</style>
