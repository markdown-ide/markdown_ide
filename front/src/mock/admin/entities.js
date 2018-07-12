export default [
  {
    name: 'user',
    title: 'Пользователь',
    titlePlural: 'Команда',
    apiPath: '/users/',
    editable: false,
    fields: [
      { name: 'id', title: 'ID' },
      { name: 'username', title: 'Login' },
      { name: 'fullname', title: 'Fullname' },
    ],
  }, {
    name: 'project',
    title: 'Проект',
    titlePlural: 'Проекты',
    apiPath: '/projects/',
    editable: true,
    fields: [
      { name: 'id', title: 'ID' },
      { name: 'lead', title: 'Lead' },
      { name: 'pkey', title: 'Code' },
      { name: 'pname', title: 'Name' },
      { name: 'url', title: 'URL' },
    ],
  },
];
