<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="true"
    class="elevation-1"
  >
    <v-progress-linear 
      slot="progress" 
      color="blue" 
      indeterminate
      :active="loading"
    />
    <template slot="items" slot-scope="props">
      <td 
        v-for="(field, index) in headers" 
        v-if="!field.invisible"
        :key="props.index + '_' + index"
        :data-key="props.index + '_' + index"
        v-html="props.item[field.value]"
      >
      </td>
    </template>
  </v-data-table>
</template>

<script>
// This component should be deleted if DataTable will be universal enough
export default {
  name: 'DataTable',
  props: ['headers', 'items', 'loading'],
}
</script>
