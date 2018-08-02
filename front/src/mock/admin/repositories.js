const files = [
  {
    name: 'src', files: [
      { name: 'test.php', created: Date.now() },
      { name: 'index.php', created: Date.now() }
    ]
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
      { name: 'master', files: files },
      { name: 'dev', files: files },
      { name: 'prod', files: files },
    ]
  },
  {
    name: 'test-repo2',
    description: `
      short description to repository
    `,
    branches: [
      { name: 'master', files: files },
      { name: 'dev', files: files },
      { name: 'prod', files: files },
    ]
  },
  {
    name: 'test-repo3',
    description: `
      short description to repository
    `,
    branches: [
      { name: 'master', files: files },
      { name: 'dev', files: files },
      { name: 'prod', files: files },
    ]
  },
  {
    name: 'test-repo4',
    description: `
      short description to repository
    `,
    branches: [
      { name: 'master', files: files },
      { name: 'dev', files: files },
      { name: 'prod', files: files },
    ]
  },
  {
    name: 'test-repo5',
    description: `
      short description to repository
    `,
    branches: [
      { name: 'master', files: files },
      { name: 'dev', files: files },
      { name: 'prod', files: files },
    ]
  },
]
