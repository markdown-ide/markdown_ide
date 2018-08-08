export default {
  mdText(state) {
    return state.mdText;
  },
  files(state) {
    // регулярка убирает первый и последний слэши из пути
    const regExp = new RegExp(/^\/|\/$/g);
    return path => state.files.list
      .filter(item => item.parent.replace(regExp, '') === path.replace(regExp, ''))
      .sort((first, second) => {
        if ((first.isFolder && second.isFolder) || (!first.isFolder && !second.isFolder)) {
          return first.name > second.name ? 1 : -1;
        }
        return first.isFolder ? -1 : 1;
      });
  },
};
