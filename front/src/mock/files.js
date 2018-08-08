export default {
  list: [
    {
      isFolder: false,
      name: 'myfile1.md',
      parent: '/folder1/',
    },
    {
      isFolder: false,
      name: 'myfile4.md',
      parent: '/',
    },
    {
      isFolder: true,
      name: 'folder1',
      parent: '/',
    },
    {
      isFolder: false,
      name: 'myfile2.md',
      parent: '/folder1/folder2/',
    },
    {
      isFolder: false,
      name: 'myfile3.md',
      parent: '/folder1/folder2/',
    },
    {
      isFolder: true,
      name: 'folder2',
      parent: '/folder1/',
    },
  ],
  _meta: {
    'per-page': 12,
    page: 12,
    'total-pages': 12,
  },
};
