const files = [
  {
    name: 'src',
    files: [
      {
        name: 'admin',
        files: [
          { name: 'file.md', created: Date.now() },
        ],
      },
      { name: 'test.md', created: Date.now() },
      { name: 'readme.md', created: Date.now() },
    ],
  },
  { name: 'README.md', created: Date.now() },
];

export default [
  {
    name: 'test-repo',
    description: `
      short description to repository
    `,
    branches: [
      { name: 'master', files },
      { name: 'dev', files },
      { name: 'prod', files },
    ],
  },
  {
    name: 'test-repo2',
    description: `
      short description to repository
    `,
    branches: [
      { name: 'master', files },
      { name: 'dev', files },
      { name: 'prod', files },
    ],
  },
  {
    name: 'test-repo3',
    description: `
      short description to repository
    `,
    branches: [
      { name: 'master', files },
      { name: 'dev', files },
      { name: 'prod', files },
    ],
  },
  {
    name: 'test-repo4',
    description: `
      short description to repository
    `,
    branches: [
      { name: 'master', files },
      { name: 'dev', files },
      { name: 'prod', files },
    ],
  },
  {
    name: 'test-repo5',
    description: `
      short description to repository
    `,
    branches: [
      { name: 'master', files },
      { name: 'dev', files },
      { name: 'prod', files },
    ],
  },
];
