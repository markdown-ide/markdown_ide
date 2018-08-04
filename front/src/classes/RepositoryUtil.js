export default class RepositoryUtil {
  constructor(files) {
    this.files = files;
  }

  /*
    странный баг, всегда возвращает undefined
   */
  getItemsByPath(items, path, i = 0) {
    console.log('getItemsByPath', items, path, i);
    if (path.length === i)
      return items;
    this.getItemsByPath(items.find(
      item => item.name === path[i],
    ).files, path, ++i);
  }

  getFiles(repository, branch, path) {
    const _filesInBranch = this.files.find(
      item => item.name === repository,
    ).branches.find(
      item => item.name === branch,
    ).files;

    if (typeof path === 'undefined') { return _filesInBranch; }

    let _files = _filesInBranch;

    path = path.split(':');
    for (let i = 0; i < path.length; i++) {
      _files = _files.find(
        item => item.name === path[i]
      ).files;
    }

    if (!_files.find(item => item.name === '...'))
      _files.unshift({ icon: 'none', name: '...', files: [0] });

    return _files;
  }

  static isFolder(item) {
    return item.hasOwnProperty('files');
  }
}
