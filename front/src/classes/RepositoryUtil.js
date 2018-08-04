export default class RepositoryUtil {
  constructor(files) {
    this.files = files;
  }

  /*
    странный баг, всегда возвращает undefined
   */
  getItemsByPath(items, path, i = 0) {
    console.log('getItemsByPath', items, path, i);
    if (path.length === i) { return items; }
    this.getItemsByPath(items.find(
      item => item.name === path[i],
    ).files, path, i + 1);
    return [];
  }

  getFiles(repository, branch, path) {
    const filesInBranch = this.files.find(
      item => item.name === repository,
    ).branches.find(
      item => item.name === branch,
    ).files;

    if (typeof path === 'undefined') { return filesInBranch; }

    let files = filesInBranch;
    // debugger;

    const paths = path.split(':');
    for (let i = 0; i < paths.length; i += 1) {
      files = files.find(
        item => item.name === paths[i],
      ).files;
    }

    if (!files.find(item => item.name === '...')) {
      files.unshift({ icon: 'none', name: '...', files: [0] });
    }

    return files;
  }

  static isFolder(item) {
    return item.files;
  }
}
