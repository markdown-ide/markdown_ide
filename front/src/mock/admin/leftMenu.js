export default [
  {
    title: 'Главное',
    items: [
      {
        icon: 'dashboard',
        title: 'Рабочий стол',
        link: '/dashboard/',
        description: 'Some useful  about Dashboard',
      },
      {
        icon: 'list',
        title: 'Проекты',
        link: '/projects/',
        description: null,
      },
    ],
  },
  {
    title: 'Документация',
    items: [
      {
        icon: 'view_compact',
        title: 'Просмотр',
        link: '/view/',
        description: null,
      },
      {
        icon: 'edit',
        title: 'Правки',
        link: '/edit/',
        description: null,
      },
    ],
  },
  {
    title: 'Git',
    items: [
      {
        icon: 'call_split',
        title: 'Ветки',
        link: '/branches/',
        description: null,
        routeName: 'branches',
      },
    ],
  },
];
