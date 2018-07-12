const getEntityByName = (state, entityName) => {
  if (!state.data.entities[entityName]) {
    throw new Error(`Entity ${entityName} not found!`);
  }
  return state.data.entities[entityName];
};

const getApiPathByEntityName = (state, entityName) => getEntityByName(state, entityName).apiPath;

export default {
  getApiPathByEntityName,
  getEntityByName,
};
