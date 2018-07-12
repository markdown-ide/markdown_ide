/* eslint-disable no-param-reassign, no-console */

export default {
  leftMenu(state) {
    return state.leftMenu.map((group) => {
      if (group.items && group.items.map) {
        group.items.map((item) => {
          if (!item.description) {
            item.description = item.title;
          }
          return item;
        });
      }
      return group;
    });
  },

  items(state) {
    if (!state.data.items) {
      return [];
    }
    return state.data.items;
  },

  headers(state) {
    if (!state.data.headers[state.currentEntity]) {
      return [];
    }

    const headers = state.data.headers[state.currentEntity].slice();
    if (state.ui.defaultControls && state.ui.defaultControls.length) {
      headers.push({ text: 'Actions', value: 'actions', sortable: false, invisible: true });
    }
    return headers;
  },

  currentEntityList(state) {
    if (!state.currentEntity) {
      return [];
    }

    return state.data[state.currentEntity];
  },

  /**
   * get title for entity
   */
  entityTitle(state) {
    if (state.currentEntity && state.data.entities && state.data.entities[state.currentEntity]) {
      return state.data.entities[state.currentEntity].title;
    }
    return '';
  },

  /**
   * get Plural title for entity
   */
  entitiesTitle(state) {
    if (state.currentEntity && state.data.entities && state.data.entities[state.currentEntity]) {
      return state.data.entities[state.currentEntity].titlePlural;
    }
    return '';
  },
};
