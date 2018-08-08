export default {
  list: [
    {
      name: 'bx-data',
      remote: 'git@mywebsite.ru:myproject',
      branch: {
        list: [
          'master',
        ],
        default: 'master',
      },
    },
    {
      name: 'MyProject2',
      remote: 'git@mywebsite.ru:myproject',
    },
  ],
  _meta: {
    'per-page': 12,
    page: 12,
    'total-pages': 12,
  },
};
