/**
 * Убирает первые и последние слэши из пути
 */
function removeSlashes(str) {
  return str.replace(/^\/+|\/+$/g, '');
}

const sortItems = (first, second) => {
  if ((first.isFolder && second.isFolder) || (!first.isFolder && !second.isFolder)) {
    return first.name > second.name ? 1 : -1;
  }
  return first.isFolder ? -1 : 1;
};

export default {
  mdText(state) {
    return state.mdText;
  },
  files(state) {
    return (path) => {
      const files = state.files.list
        .filter(item => removeSlashes(item.parent) === removeSlashes(path))
        // сортировка: сначала каталоги, после файлы и всё по имени
        .sort(sortItems)
        .map(item => Object.assign(item, {
          fullPath: path ? `${removeSlashes(path)}/${item.name}` : item.name,
        }));
      // добавляем переход на каталог назад, если не корневой каталог
      if (path) {
        files.unshift({
          name: '..',
          icon: ' ',
          isFolder: true,
          fullPath: path.replace(/([\w\d\s\-_]+)(\/|)$/g, ''),
        });
      }
      return files;
    };
  },
};
