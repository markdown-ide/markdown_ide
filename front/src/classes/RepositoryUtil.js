export default class RepositoryUtil {
  constructor(files) {
    this.files = files;
  }

  getItemsByPath(items, path, i = 0) {
    if (path.length === i) { return items; }
    return this.getItemsByPath(items.find(
      item => item.name === path[i],
    ).files, path, i + 1);
  }

  getFiles(repository, branch, path) {
    console.log('getFiles', repository, branch, path);

    const filesInBranch = this.files.find(
      item => item.name === repository,
    ).branches.find(
      item => item.name === branch,
    ).files;

    // console.log('getFiles', typeof path, path);
    if (typeof path === 'undefined') { return filesInBranch; }

    // eslint-disable-next-line
    let files = this.getItemsByPath(filesInBranch, path.split('/'));

    if (!files.find(item => item.name === '..')) {
      files.unshift({ icon: ' ', name: '..', files: [0] });
    }

    return files;
  }

  static isFolder(item) {
    return item.files;
  }
}
