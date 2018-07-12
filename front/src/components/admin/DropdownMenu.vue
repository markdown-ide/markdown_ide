<template>
  <v-menu :nudge-width="100" :class="status.searching ? 'hidden-xs-only' : ''">
    <v-toolbar-title slot="activator" class="pl-2">
      <span>{{ active }}</span>
      <v-icon>arrow_drop_down</v-icon>
    </v-toolbar-title>
    <v-list>
      <v-list-tile v-for="item in menuItems" :key="item.id" @click="click" :data-id="item.id">
        <v-list-tile-title v-text="item.title" :data-id="item.id"></v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import status from '../mixins/status';

export default {
  name: 'DropdownMenu',
  props: [
    'menuItems'
  ],
  mixins: [ status ],
  methods: {
    click (e) {
      console.log('click DropdownMenu', e, e.target.dataset);
      this.$emit('click', e.target.dataset.id)
    }
  },
  computed: {
    active () {
      return this.menuItems.reduce((carry, item) => {
        if (item.active) {
          carry = item.title
        }
        return carry
      }, '')
    }
  }
}
</script>

