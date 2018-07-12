<template>
  <dropdown-menu 
    :menuItems="menuItems"
    @click="click"
  />
</template>

<script>
import DropdownMenu from './DropdownMenu'

export default {
  name: 'TopMenu',
  components: {
    DropdownMenu
  },
  data () {
    return {
      menuItems: this.$store.state.topMenu
    }
  },
  methods: {
    click (id) {
      console.log('click TopMenu', id);
      this.$store.commit('TOP_MENU_CHANGED', id);
      // this.$emit('click')
    }
  },
  
}
</script>
