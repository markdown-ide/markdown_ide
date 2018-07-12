<template>
  <div class="search-bar">
    <v-btn class="icon-search" icon @click.native.stop="searchBegin">
      <v-icon>search</v-icon>
    </v-btn>
    <div :class="{'searching--closed': !status.searching}" class="searching">
      <v-text-field
        id="search"
        :value="status.search"
        @update="update"
        append-icon="close"
        @click:append="searchEnd"
        label="Search"
        hide-details
        single-line
        color="white"
        @blur="onBlur"
      />
    </div>
  </div>
</template>

<script>
import status from '../../mixins/adminStatus';

export default {
  name: 'SearchBar',
  mixins: [status],
  methods: {
    onBlur() {
      this.$store.commit('admin/STOP_SEARCHING');
    },
    searchBegin() {
      this.$store.commit('admin/START_SEARCHING');
      setTimeout(() => document.querySelector('#search').focus(), 50);
    },
    searchEnd() {
      this.$store.commit('admin/STOP_SEARCHING');
      document.querySelector('#search').blur();
    },
    update(e) {
      console.log('update', e);
    },
  },
};
</script>

<style>
.search-bar {
  position: relative;
}

.search-bar > button,
.search-bar > div {
  float: left;
}
</style>
