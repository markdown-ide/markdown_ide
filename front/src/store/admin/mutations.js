/* eslint-disable no-param-reassign, no-console */

import Entity from '../../pages/Entity';
import router from '../../router';
import entityMethods from './entity';

const SET_CURRENT_ENTITY = (state, entity) => {
  // console.log('SET_CURRENT_ENTITY', entity);
  state.currentEntity = entity;
  state.data.currentHeaders = state.data.headers[state.currentEntity];
};

const LOADING_SUCCESS = (state) => {
  state.status.loading = false;
};

const LOADED_ENTITIES = (state, entities) => {
  // console.log('LOADED_ENTITIES', entities);
  state.data.headers = {};
  state.data.entities = {};
  // console.log('loadAll 2', entities);
  entities.forEach((entity) => {
    state.data.headers[entity.name] = [];
    entity.fields.forEach((field) => {
      state.data.entities[entity.name] = entity;
      state.data.headers[entity.name].push({
        text: field.title,
        value: field.name,
      });
    });
  });
};

const LOADED_LEFT_MENU = (state, menuItems) => {
  // console.log('LOADED_LEFT_MENU', menuItems, state);
  state.leftMenu = menuItems;
  const routes = menuItems.reduce((carry, groupMenu) => {
    // console.log('reduce', carry, groupMenu);

    if (!groupMenu.items || !groupMenu.items.reduce) {
      return carry;
    }
    return groupMenu.items.reduce((gmCarry, menuItem) => {
      if (!menuItem.entityName || !entityMethods.getEntityByName(state, menuItem.entityName)) {
        return gmCarry;
      }
      gmCarry.push({
        path: `/${menuItem.link}`,
        name: menuItem.routeName,
        meta: { entityName: menuItem.entityName },
        component: Entity,
      });
      return gmCarry;
    }, carry);
    // return carry;
  }, []);
  // debugger;
  router.addRoutes(routes);
  // console.log('LOADED_LEFT_MENU 2', routes, router);
  // console.log('LOADED_LEFT_MENU 2', routes, router.options.routes);
};

export default {
  TOGGLE_MENU_MINI(state) {
    state.status.miniMenu = !state.status.miniMenu;
  },
  SHOW_PANEL_NOTIFICATIONS(state, payload) {
    state.status.panelNotificationsVisible = payload;
  },
  STOP_SEARCHING(state) {
    state.status.searching = false;
    state.status.search = '';
  },
  START_SEARCHING(state) {
    state.status.searching = true;
  },

  TOP_MENU_CHANGED(state, id) {
    // console.log('TOP_MENU_CHANGED', id);
    state.topMenu.forEach((item) => {
      item.active = (parseInt(item.id, 10) === parseInt(id, 10));
    });
  },

  SHOW_PROFILE(state) {
    console.log('SHOW_PROFILE', state);
  },

  LOGOUT(state) {
    console.log('LOGOUT', state);
  },

  LOADING_ERROR(state, error) {
    console.error('LOADING_ERROR', error);
    state.status.loading = false;
  },

  LOADING(state) {
    state.status.loading = true;
  },

  LOADED(state) {
    // console.log('LOADED');
    LOADING_SUCCESS(state);
  },

  LOADED_ALL(state, data) {
    // console.log('LOADED_ALL', data);
    LOADED_ENTITIES(state, data.entities);
    LOADED_LEFT_MENU(state, data.leftMenu);
    LOADING_SUCCESS(state);
  },

  LOADED_ENTITY(state, payload) {
    // console.log('LOADED_USERS', payload);
    state.data.items = payload.data;
    SET_CURRENT_ENTITY(state, payload.entityName);
    LOADING_SUCCESS(state);
  },

  LOADED_WORKLOG(state, payload) {
    console.log('LOADED_WORKLOG', payload);

    state.data.worklog = payload.worklog;
    state.data.incomesByMonth = payload.incomesByMonth;
    state.data.totalIncome = payload.totalIncome;
    LOADING_SUCCESS(state);
  },

  // LOADED_ENTITIES,
  LOADING_SUCCESS,
  SET_CURRENT_ENTITY,
};
