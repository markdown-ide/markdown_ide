<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="true"
    :rows-per-page-items="defaultPagination"
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
        :class="getClassName(field)"
      >
      </td>
      <td class="justify-center layout px-0s table-controls" :class="{invisible: !showControls}">
        <v-btn
          class="mx-0"
          icon
          @click="emit(control.emit, props.item)"
          v-for="(control, controlIndex) in controls"
          :key="props.index + '_' + controlIndex"
        >
          <v-icon :color="control.color">{{ control.icon }}</v-icon>
        </v-btn>
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'DataTableWithControls',
  props: ['headers', 'items', 'loading', 'controls', 'pagination'],
  computed: {
    showControls() {
      return this.$props.controls && this.$props.controls.length;
    },
    defaultPagination() {
      return this.$store.state.admin.ui.defaultPagination;
    },
  },
  methods: {
    getClassName(header) {
      if (!header.align) {
        return '';
      }
      return `text-xs-${header.align}`;
    },
    emit(emit, item) {
      // console.log('emit', emit, item);
      this.$emit(emit, item);
    },
  },
};
</script>

<style>
.table-controls.invisible {
  display: none;
}
</style>
