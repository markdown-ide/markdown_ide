<template>
<div>
  User {{ $route.params }}
</div>
</template>

<script>
export default {
  name: 'User',
  watch: {
    '$route' (to, from) {
      console.log('User watch $route', to, from, this.$route.matched);
      
      
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('User beforeRouteEnter', to, from);
    // console.log('User beforeRouteEnter', to, from, to.route.params);
    next()
  },  
}
</script>

